import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackServices = [
  {
    id: 'digital-1',
    name: 'Website Design & Development',
    description: 'Modern business websites with responsive UI, SEO-friendly structure, and conversion-focused design.',
    categoryName: 'MIS Digital Services',
  },
  {
    id: 'digital-2',
    name: 'Web Domain & Hosting',
    description: 'Domain setup, DNS, secure hosting, SSL, and performance optimization for reliable uptime.',
    categoryName: 'MIS Digital Services',
  },
  {
    id: 'digital-3',
    name: 'Domain Registration',
    description: 'Secure your brand with local and international domain registration and renewal support.',
    categoryName: 'MIS Digital Services',
  },
  {
    id: 'digital-4',
    name: 'Digital Marketing',
    description: 'SEO, social campaigns, and paid ads to increase leads, visibility, and online revenue.',
    categoryName: 'MIS Digital Services',
  },
  {
    id: 'digital-5',
    name: 'Mobile App Development',
    description: 'Custom mobile app solutions for Android and iOS integrated with your existing systems.',
    categoryName: 'MIS Digital Services',
  },
]

const DigitalServices = ({ services = [] }) => {
  const digitalServices = Array.isArray(services) && services.length > 0 ? services : fallbackServices

  return (
    <>
      <div className="digital-services-page">
        <Head>
          <title>Digital Services - MIS Solution</title>
          <meta property="og:title" content="Digital Services - MIS Solution" />
        </Head>

        <Navigation></Navigation>

        <section className="digital-hero">
          <div className="digital-hero-overlay"></div>
          <div className="digital-hero-inner">
            <h1 className="hero-title">MIS Digital Services</h1>
            <p className="hero-subtitle">
              Website design, web hosting, domain registration, digital marketing, and app development.
            </p>
            <a href="#digital-services-list" className="btn btn-primary btn-lg">
              <span>Explore Services</span>
            </a>
          </div>
        </section>

        <section id="digital-services-list" className="digital-services-listing">
          <div className="digital-container">
            <div className="digital-grid">
              {digitalServices.map((service) => (
                <article className="digital-card" key={service.id}>
                  <div className="digital-card-accent"></div>
                  <h3 className="section-subtitle">{service.name}</h3>
                  <p className="section-content">{service.description}</p>
                  <a href="/contact" className="btn-link">
                    <span>Request This Service</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .digital-services-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
        }

        .digital-hero {
          width: 100%;
          min-height: 420px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1500');
          background-size: cover;
          background-position: center;
        }

        .digital-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 16, 27, 0.62);
        }

        .digital-hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 920px;
          padding: 110px 20px 70px;
          text-align: center;
          color: #ffffff;
        }

        .digital-services-listing {
          padding: 72px 20px;
          background: #f8fafc;
        }

        .digital-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .digital-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .digital-card {
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .digital-card-accent {
          width: 58px;
          height: 6px;
          border-radius: 999px;
          background: var(--color-primary);
        }

        .btn-link {
          margin-top: auto;
          color: #0f172a;
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: var(--color-primary);
          text-decoration-thickness: 2px;
        }

        @media (max-width: 767px) {
          .digital-hero-inner {
            padding-top: 94px;
            padding-bottom: 56px;
          }

          .digital-services-listing {
            padding: 56px 16px;
          }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listDigitalServiceProducts } = await import('../lib/server/products')
    const services = await listDigitalServiceProducts(50)

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

export default DigitalServices
