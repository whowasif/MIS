import mysql from 'mysql2/promise'

let pool

const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']

const getMissingEnvVars = () =>
  requiredEnvVars.filter((envKey) => !process.env[envKey] || !String(process.env[envKey]).trim())

export const getDbPool = () => {
  if (pool) return pool

  const missingEnvVars = getMissingEnvVars()
  if (missingEnvVars.length > 0) {
    throw new Error(`Missing database environment variables: ${missingEnvVars.join(', ')}`)
  }

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    namedPlaceholders: true,
    timezone: 'Z',
  })

  return pool
}
