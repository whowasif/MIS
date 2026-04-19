import React from 'react'

const SecurityAuditLogs = () => null

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/portal-secure-99x/tables/cart_sessions',
    permanent: false,
  },
})

export default SecurityAuditLogs
