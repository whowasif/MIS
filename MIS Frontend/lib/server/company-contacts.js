import { getDbPool } from './db'

const defaultCompanyContact = {
  branchName: 'Main Branch',
  fullAddress: 'Address not available',
  googleMapEmbedUrl: null,
  latitude: null,
  longitude: null,
  primaryEmail: 'support@missolution.com',
  supportEmail: null,
  hotlinePhone: 'N/A',
  whatsappNumber: null,
  facebookUrl: null,
  linkedinUrl: null,
}

const toNullableNumber = (value) => {
  const numberValue = Number(value)
  if (!Number.isFinite(numberValue)) return null
  return numberValue
}

const pickCoordinate = (row, keys) => {
  for (const key of keys) {
    if (row[key] === undefined || row[key] === null || row[key] === '') continue
    const parsed = toNullableNumber(row[key])
    if (parsed !== null) return parsed
  }
  return null
}

const mapCompanyContactRow = (row) => ({
  branchName: row.branch_name || defaultCompanyContact.branchName,
  fullAddress: row.full_address || defaultCompanyContact.fullAddress,
  googleMapEmbedUrl: row.google_map_embed_url || null,
  latitude: pickCoordinate(row, ['latitude', 'lat', 'map_latitude', 'location_latitude']),
  longitude: pickCoordinate(row, ['longitude', 'lng', 'lon', 'map_longitude', 'location_longitude']),
  primaryEmail: row.primary_email || defaultCompanyContact.primaryEmail,
  supportEmail: row.support_email || null,
  hotlinePhone: row.hotline_phone || defaultCompanyContact.hotlinePhone,
  whatsappNumber: row.whatsapp_number || null,
  facebookUrl: row.facebook_url || null,
  linkedinUrl: row.linkedin_url || null,
})

export const getPrimaryCompanyContact = async () => {
  const db = getDbPool()

  const [rows] = await db.execute(
    `SELECT *
    FROM company_contacts
    ORDER BY updated_at DESC, id DESC
    LIMIT 1`
  )

  if (!rows.length) return defaultCompanyContact

  return mapCompanyContactRow(rows[0])
}
