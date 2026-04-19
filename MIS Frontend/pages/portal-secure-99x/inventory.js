import React from 'react'

const InventoryManagement = () => null

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/portal-secure-99x/tables/products',
    permanent: false,
  },
})

export default InventoryManagement
