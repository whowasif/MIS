/**
 * Legacy TeleportHQ catalog route — permanently retired.
 * Keep this file only as a redirect so old bookmarks/links do not 404.
 */
export const getServerSideProps = async ({ query }) => {
  const search = String(query.search || query.q || '').trim()
  if (search) {
    return {
      redirect: {
        destination: `/search?q=${encodeURIComponent(search)}`,
        permanent: true,
      },
    }
  }

  return {
    redirect: {
      destination: '/categories',
      permanent: true,
    },
  }
}

export default function ProductCatalogRedirect() {
  return null
}
