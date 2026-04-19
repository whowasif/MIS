import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PROFILE_KEY = 'misProfile'
const ORDERS_KEY = 'misOrders'

const formatCurrency = (value) =>
  `$${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const formatDate = (dateValue) => {
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return 'N/A'
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    try {
      const storedProfile = JSON.parse(
        window.localStorage.getItem(PROFILE_KEY) || 'null'
      )
      const storedOrders = JSON.parse(
        window.localStorage.getItem(ORDERS_KEY) || '[]'
      )
      setProfile(storedProfile)
      setOrders(storedOrders)
    } catch (error) {
      setProfile(null)
      setOrders([])
    }
  }, [])

  return (
    <>
      <div className="profile-page">
        <Head>
          <title>Profile | MIS Solution</title>
          <meta
            name="description"
            content="Review your essential account details and order history."
          />
        </Head>

        <Navigation></Navigation>

        <main className="profile-main">
          <section className="profile-shell">
            <header className="profile-header">
              <p className="eyebrow">Account</p>
              <h1>Profile</h1>
              <p>Essential details and recent orders.</p>
            </header>

            <div className="profile-layout">
              <article className="profile-card">
                <h2>Important Details</h2>
                {profile ? (
                  <dl className="profile-details">
                    <div>
                      <dt>Full Name</dt>
                      <dd>{profile.fullName || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd>{profile.email || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt>Phone</dt>
                      <dd>{profile.phone || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt>Address</dt>
                      <dd>{profile.address || 'N/A'}</dd>
                    </div>
                  </dl>
                ) : (
                  <div className="empty-box">
                    <p>No profile details yet.</p>
                    <Link href="/confirm-order">
                      <a className="btn btn-primary">Add Details at Checkout</a>
                    </Link>
                  </div>
                )}
              </article>

              <article className="profile-card">
                <h2>Orders</h2>
                {orders.length === 0 ? (
                  <div className="empty-box">
                    <p>No orders found.</p>
                    <Link href="/product-catalog">
                      <a className="btn btn-brand-white-text">Start Shopping</a>
                    </Link>
                  </div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order) => (
                      <article key={order.id} className="order-item">
                        <div className="order-top">
                          <strong>{order.id}</strong>
                          <span>{formatDate(order.createdAt)}</span>
                        </div>
                        <div className="order-meta">
                          <span>{order.items?.length || 0} items</span>
                          <span>{String(order.paymentMethod || '')}</span>
                          <strong>{formatCurrency(order.total)}</strong>
                        </div>
                        <ul className="order-products">
                          {(order.items || []).map((item) => (
                            <li key={`${order.id}-${item.id}`}>
                              <span>{item.name}</span>
                              <span>x{item.quantity}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                )}
              </article>
            </div>
          </section>
        </main>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background: #f5f7fb;
        }

        .profile-main {
          padding: 3.3rem 1.2rem;
        }

        .profile-shell {
          max-width: 76rem;
          margin: 0 auto;
        }

        .profile-header {
          margin-bottom: 1.4rem;
        }

        .eyebrow {
          margin: 0 0 0.35rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8f8200;
          font-weight: 700;
        }

        h1,
        h2 {
          margin: 0;
          color: #17181d;
        }

        h1 {
          font-size: clamp(2rem, 3.3vw, 2.7rem);
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          margin-bottom: 0.9rem;
        }

        p {
          margin: 0;
          color: #4a5565;
        }

        .profile-layout {
          display: grid;
          gap: 1rem;
          grid-template-columns: 0.9fr 1.1fr;
        }

        .profile-card {
          border: 1px solid #dbe2ee;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 12px 30px rgba(17, 24, 39, 0.08);
          padding: 1.1rem;
        }

        .profile-details {
          display: grid;
          gap: 0.8rem;
          margin: 0;
        }

        .profile-details div {
          border: 1px solid #e3e8f1;
          border-radius: 10px;
          background: #fbfcff;
          padding: 0.7rem;
        }

        dt {
          color: #667085;
          font-size: 0.78rem;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        dd {
          margin: 0;
          color: #101828;
          font-weight: 600;
        }

        .orders-list {
          display: grid;
          gap: 0.8rem;
        }

        .order-item {
          border: 1px solid #dfe5ef;
          border-radius: 12px;
          background: #ffffff;
          padding: 0.8rem;
        }

        .order-top,
        .order-meta,
        .order-products li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .order-top {
          margin-bottom: 0.45rem;
        }

        .order-top span {
          color: #667085;
          font-size: 0.9rem;
        }

        .order-meta {
          margin-bottom: 0.55rem;
          color: #344054;
          font-size: 0.92rem;
        }

        .order-products {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.35rem;
        }

        .order-products li {
          color: #475467;
          font-size: 0.9rem;
        }

        .empty-box {
          border: 1px dashed #c8d0e0;
          border-radius: 12px;
          background: #fbfdff;
          padding: 1rem;
          display: grid;
          gap: 0.7rem;
          justify-items: start;
        }

        @media (max-width: 991px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Profile
