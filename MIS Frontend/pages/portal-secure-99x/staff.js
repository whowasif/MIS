import React from 'react'

const StaffAccessControl = () => null

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/portal-secure-99x/tables/admin_users',
    permanent: false,
  },
})

export default StaffAccessControl
