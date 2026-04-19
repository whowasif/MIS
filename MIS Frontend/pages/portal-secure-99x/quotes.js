import React from 'react'

const EnterpriseQuotes = () => null

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/portal-secure-99x/tables/quotes',
    permanent: false,
  },
})

export default EnterpriseQuotes
