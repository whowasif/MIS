import mysql from 'mysql2/promise'

const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']

const getMissingEnvVars = () =>
  requiredEnvVars.filter((envKey) => !process.env[envKey] || !String(process.env[envKey]).trim())

export const getDbPool = () => {
  if (globalThis.__misDbPool) return globalThis.__misDbPool

  const missingEnvVars = getMissingEnvVars()
  if (missingEnvVars.length > 0) {
    throw new Error(`Missing database environment variables: ${missingEnvVars.join(', ')}`)
  }

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    namedPlaceholders: true,
    timezone: 'Z',
  })

  globalThis.__misDbPool = pool
  return pool
}
