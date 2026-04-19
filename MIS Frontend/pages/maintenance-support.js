import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackServices = [
  {
    id: 'maintenance-1',
    name: 'Yearly IT Maintenance Contract',
    description: 'Annual coverage for preventive checks, monitoring, upgrades, and support response.',
    categoryName: 'Service & Maintenance',
  },
  {
    id: 'maintenance-2',
    name: 'On-call Repairs & Troubleshooting',
    description: 'Fast-response repair support for desktops, servers, network devices, and office systems.',
    categoryName: 'Service & Maintenance',
  },
  {
    id: 'maintenance-3',
    name: 'Project Basis Installation & Delivery',
    description: 'Project-based setup and commissioning for IT hardware, network, and corporate rollouts.',
    categoryName: 'Service & Maintenance',
  },
]

const MaintenanceSupport = ({ services = [] }) => {
  const supportItems = Array.isArray(services) && services.length > 0 ? services : fallbackServices

  return (
    <>
      <div className="maintenance-page">
        <Head>
          <title>Maintenance Support - MIS Solution</title>
          <meta property="og:title" content="Maintenance Support - MIS Solution" />
        </Head>

        <Navigation></Navigation>

        <section className="maintenance-hero">
          <div className="maintenance-hero-overlay"></div>
          <div className="maintenance-hero-inner">
            <h1 className="hero-title">Service & Maintenance</h1>
            <p className="hero-subtitle">
              Reliable after-sales support with yearly maintenance contracts, on-call repairs, and project-based installation.
            </p>
            <a href="#support-catalog" className="btn btn-primary btn-lg">
              <span>View Support Services</span>
            </a>
          </div>
        </section>

        <section id="support-catalog" className="support-listing">
          <div className="support-container">
            <div className="support-grid">
              {supportItems.map((item) => (
                <article className="support-card" key={item.id}>
                  <h3 className="section-subtitle">{item.name}</h3>
                  <p className="section-content">{item.description}</p>
                  <a href="/request-custom-quote" className="btn btn-primary btn-sm">
                    <span>Request Service Quote</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .maintenance-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
        }

        .maintenance-hero {
          width: 100%;
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500');
          background-size: cover;
          background-position: center;
        }

        .maintenance-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.66);
        }

        .maintenance-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 940px;
          width: 100%;
          text-align: center;
          color: #ffffff;
          padding: 110px 20px 70px;
        }

        .support-listing {
          padding: 72px 20px;
          background: #f8fafc;
        }

        .support-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .support-card {
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          border-top: 4px solid var(--color-primary);
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-sm {
          margin-top: auto;
          width: fit-content;
        }

        @media (max-width: 767px) {
          .maintenance-hero-inner {
            padding-top: 94px;
            padding-bottom: 56px;
          }

          .support-listing {
            padding: 56px 16px;
          }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listMaintenanceSupportProducts } = await import('../lib/server/products')
    const services = await listMaintenanceSupportProducts(60)

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

export default MaintenanceSupport
