import React from 'react'
import ModernTableManager from '../../../components/admin/TableManagerModern'

const TablePage = () => {
  return <ModernTableManager />
}

export const getServerSideProps = async ({ req, params }) => {
  const table = String(params?.table || '').toLowerCase()

  try {
    const { verifyAdminSessionToken, ROLE_RESTRICTIONS } = await import('../../../lib/auth/session')
    const cookieStr = req.headers?.cookie || ''
    const match = cookieStr.match(/mis_admin_session=([^;]+)/)

    if (match) {
      const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]))
      if (payload) {
        const role = payload.role || 'junior_admin'
        const restrictions = ROLE_RESTRICTIONS[role] || []
        if (restrictions.includes(table)) {
          return { redirect: { destination: '/portal-secure-99x', permanent: false } }
        }
      }
    }
  } catch (e) {}

  return { props: {} }
}

export default TablePage
