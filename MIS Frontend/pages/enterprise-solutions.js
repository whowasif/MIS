import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const GROUP_ORDER = [
  'Enterprise Solution',
  'Networking',
  'Security Solution',
  'Printing Solution',
]

const GROUP_DESCRIPTION = {
  'Enterprise Solution': 'Data centers, video conferencing, and enterprise server rack ecosystems.',
  Networking: 'Structured cabling, routers, switches, and core network architecture.',
  'Security Solution': 'CCTV, fire alarms, and secure door access control systems.',
  'Printing Solution': 'Corporate printing for calendars, diaries, ID cards, and branded materials.',
}

const fallbackItems = [
  {
    id: 'b2b-1',
    name: 'Data Center Solution',
    categoryName: 'Enterprise Solution',
    description: 'End-to-end enterprise data center design and deployment.',
  },
  {
    id: 'b2b-2',
    name: 'Structured Cabling',
    categoryName: 'Networking',
    description: 'Reliable structured cabling for modern enterprise infrastructure.',
  },
  {
    id: 'b2b-3',
    name: 'CCTV Camera / IP Camera',
    categoryName: 'Security Solution',
    description: 'Scalable surveillance architecture for corporate security.',
  },
  {
    id: 'b2b-4',
    name: 'Corporate ID Card Printing',
    categoryName: 'Printing Solution',
    description: 'Bulk professional printing support for enterprise operations.',
  },
]

const EnterpriseSolutions = ({ services = [] }) => {
  const sourceItems = Array.isArray(services) && services.length > 0 ? services : fallbackItems

  const grouped = GROUP_ORDER.map((groupName) => ({
    name: groupName,
    description: GROUP_DESCRIPTION[groupName],
    items: sourceItems.filter((item) => item.categoryName === groupName),
  })).filter((group) => group.items.length > 0)

  return (
    <>
      <div className="enterprise-solutions-page">
        <Head>
          <title>Business & Corporate Solutions - MIS Solution</title>
          <meta property="og:title" content="Business & Corporate Solutions - MIS Solution" />
        </Head>

        <Navigation></Navigation>

        <section className="enterprise-hero">
          <div className="enterprise-hero-overlay"></div>
          <div className="enterprise-hero-inner">
            <h1 className="hero-title">Business & Corporate Solutions</h1>
            <p className="hero-subtitle">
              Project-based B2B solutions designed for infrastructure, networking, security, and enterprise delivery.
            </p>
            <a href="#b2b-catalog" className="btn btn-primary btn-lg">
              <span>Explore B2B Solutions</span>
            </a>
          </div>
        </section>

        <section id="b2b-catalog" className="enterprise-groups">
          <div className="enterprise-container">
            {grouped.map((group) => (
              <article className="enterprise-group" key={group.name}>
                <header className="enterprise-group-head">
                  <h2 className="section-title">{group.name}</h2>
                  <p className="section-content">{group.description}</p>
                </header>

                <div className="enterprise-grid">
                  {group.items.map((item) => (
                    <div className="enterprise-card" key={item.id}>
                      <h3 className="section-subtitle">{item.name}</h3>
                      <p className="section-content">{item.description}</p>
                      <a href="/request-custom-quote" className="btn btn-primary btn-sm">
                        <span>Request Quote</span>
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .enterprise-solutions-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
        }

        .enterprise-hero {
          width: 100%;
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1500');
          background-size: cover;
          background-position: center;
        }

        .enterprise-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.66);
        }

        .enterprise-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 980px;
          width: 100%;
          text-align: center;
          color: #ffffff;
          padding: 110px 20px 70px;
        }

        .enterprise-groups {
          padding: 72px 20px;
          background: #f8fafc;
        }

        .enterprise-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .enterprise-group {
          border-radius: 14px;
          border: 1px solid #dbe3ed;
          background: #ffffff;
          padding: 24px;
        }

        .enterprise-group-head {
          margin-bottom: 18px;
        }

        .enterprise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
        }

        .enterprise-card {
          border: 1px solid #e2e8f0;
          border-left: 4px solid var(--color-primary);
          border-radius: 10px;
          background: #ffffff;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-sm {
          margin-top: auto;
          width: fit-content;
        }

        @media (max-width: 767px) {
          .enterprise-hero-inner {
            padding-top: 94px;
            padding-bottom: 56px;
          }

          .enterprise-groups {
            padding: 56px 16px;
          }

          .enterprise-group {
            padding: 18px;
          }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listBusinessSolutionProducts } = await import('../lib/server/products')
    const services = await listBusinessSolutionProducts(120)

    return {
      props: {
        services,
      },
    }
  } catch (error) {
    return {
      props: {
        services: [],
      },
    }
  }
}

export default EnterpriseSolutions
