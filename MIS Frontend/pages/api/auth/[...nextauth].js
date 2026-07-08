import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { getDbPool } from '../../../lib/server/db'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Email & Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const db = getDbPool()
        const [rows] = await db.execute(
          'SELECT id, full_name, email, password_hash, profile_image FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
          [credentials.email.trim().toLowerCase()]
        )

        if (!rows.length) return null
        const user = rows[0]

        if (!user.password_hash) return null // Google-only user, can't login with password

        const isValid = await bcrypt.compare(credentials.password, user.password_hash)
        if (!isValid) return null

        return {
          id: String(user.id),
          name: user.full_name,
          email: user.email,
          image: user.profile_image,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const db = getDbPool()
        const email = user.email?.toLowerCase()

        const [existing] = await db.execute(
          'SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
          [email]
        )

        if (existing.length > 0) {
          // Update google_id and profile image
          await db.execute(
            'UPDATE customers SET google_id = ?, profile_image = ?, full_name = ? WHERE email = ?',
            [account.providerAccountId, user.image || null, user.name || '', email]
          )
        } else {
          // Create new customer
          await db.execute(
            'INSERT INTO customers (full_name, email, google_id, profile_image, is_email_verified) VALUES (?, ?, ?, ?, 1)',
            [user.name || '', email, account.providerAccountId, user.image || null]
          )
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        const db = getDbPool()
        const [rows] = await db.execute(
          'SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
          [user.email?.toLowerCase()]
        )
        if (rows.length > 0) {
          token.customerId = rows[0].id
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token.customerId) {
        session.user.customerId = token.customerId
      }
      return session
    },
  },
})
