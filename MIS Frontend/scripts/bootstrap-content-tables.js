const fs = require('fs')
const path = require('path')

const mysql = require('mysql2/promise')

const envFilePath = path.join(process.cwd(), '.env.local')

const loadEnvFile = () => {
  if (!fs.existsSync(envFilePath)) return

  const raw = fs.readFileSync(envFilePath, 'utf8')
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) return

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    if (!process.env[key]) {
      process.env[key] = value
    }
  })
}

loadEnvFile()

const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']

const missingEnvVars = requiredEnvVars.filter((envKey) => !process.env[envKey] || !String(process.env[envKey]).trim())

if (missingEnvVars.length) {
  throw new Error(`Missing database environment variables: ${missingEnvVars.join(', ')}`)
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,
})

const tables = [
  {
    name: 'digi_services',
    seedRows: [
      ['Service 1', 'service-1', 'Description for Service 1', '/icons/service-1.png', 'active', 10],
      ['Service 2', 'service-2', 'Description for Service 2', '/icons/service-2.png', 'active', 20],
      ['Service 3', 'service-3', 'Description for Service 3', '/icons/service-3.png', 'active', 30],
    ],
  },
  {
    name: 'bus_corp_sol',
    seedRows: [
      ['Power Solutions', 'power-solutions', 'UPS, Batteries, and Monitoring Systems', '/icons/power-solutions.png', 'active', 10],
      ['Networking', 'networking', 'Routers, Switches, and Network Accessories', '/icons/networking.png', 'active', 20],
      ['Printing Solutions', 'printing-solutions', 'Printers, Calendars, and Notebooks', '/icons/printing-solutions.png', 'active', 30],
      ['Security Solutions', 'security-solutions', 'CCTV, Access Control, and Fire Alarms', '/icons/security-solutions.png', 'active', 40],
      ['Enterprise Solutions', 'enterprise-solutions', 'Data Center, Video Conferencing, and Audio Systems', '/icons/enterprise-solutions.png', 'active', 50],
    ],
  },
  {
    name: 'service_maintenance',
    seedRows: [
      ['Maintenance 1', 'maintenance-1', 'Description for Maintenance 1', '/icons/maintenance-1.png', 'active', 10],
      ['Maintenance 2', 'maintenance-2', 'Description for Maintenance 2', '/icons/maintenance-2.png', 'active', 20],
      ['Maintenance 3', 'maintenance-3', 'Description for Maintenance 3', '/icons/maintenance-3.png', 'active', 30],
    ],
  },
]

const createTableSql = (tableName) => `
  CREATE TABLE IF NOT EXISTS \`${tableName}\` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon_url VARCHAR(512) DEFAULT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'active',
    display_order INT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uq_${tableName}_slug (slug),
    KEY idx_${tableName}_status_order (status, display_order)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
`

const seedTable = async (tableName, seedRows) => {
  const [existingRows] = await pool.query(`SELECT COUNT(*) AS total FROM \`${tableName}\``)
  const total = Number(existingRows?.[0]?.total || 0)

  if (total > 0) {
    console.log(`${tableName}: already has ${total} rows, skipping seed.`)
    return
  }

  const query = `INSERT INTO \`${tableName}\` (name, slug, description, icon_url, status, display_order) VALUES ?`
  await pool.query(query, [seedRows])
  console.log(`${tableName}: seeded ${seedRows.length} rows.`)
}

const main = async () => {
  for (const table of tables) {
    await pool.query(createTableSql(table.name))
    await seedTable(table.name, table.seedRows)
  }

  await pool.end()
  console.log('Content table bootstrap completed.')
}

main().catch(async (error) => {
  console.error(error.message)
  try {
    await pool.end()
  } catch (closeError) {
    // ignore close failures
  }
  process.exit(1)
})