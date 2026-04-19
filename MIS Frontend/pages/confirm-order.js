import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const CART_KEY = 'misCart'
const ORDERS_KEY = 'misOrders'
const PROFILE_KEY = 'misProfile'

const formatCurrency = (value) =>
  `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const ConfirmOrder = () => {
  const [items, setItems] = useState([])
  const [placed, setPlaced] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_KEY)
      setItems(stored ? JSON.parse(stored) : [])
    } catch (error) {
      setItems([])
    }
  }, [])

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  const vat = subtotal * 0.05
  const total = subtotal + vat

  const handlePlaceOrder = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const customerProfile = {
      fullName: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      address: String(formData.get('address') || '').trim(),
    }

    const orderRecord = {
      id: `MIS-${Date.now()}`,
      createdAt: new Date().toISOString(),
      paymentMethod: String(formData.get('paymentMethod') || 'Not specified'),
      subtotal,
      vat,
      total,
      items,
    }

    try {
      const existingOrders = JSON.parse(
        window.localStorage.getItem(ORDERS_KEY) || '[]'
      )
      window.localStorage.setItem(
        ORDERS_KEY,
        JSON.stringify([orderRecord, ...existingOrders])
      )
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(customerProfile))
    } catch (error) {
      // Keep checkout flow uninterrupted even if storage is unavailable.
    }

    setPlaced(true)
    window.localStorage.removeItem(CART_KEY)
    window.dispatchEvent(new Event('mis-cart-updated'))
    setItems([])
  }

  return (
    <>
      <div className="confirm-order-page">
        <Head>
          <title>Confirm Order | MIS Solution</title>
          <meta
            name="description"
            content="Review your cart and confirm your MIS Solution order."
          />
        </Head>

        <Navigation></Navigation>

        <main className="confirm-order-main">
          <section className="confirm-order-shell">
            <header className="confirm-order-header">
              <p className="eyebrow">Checkout</p>
              <h1>Confirm Your Order</h1>
              <p>
                Review your selected products and submit your contact details.
                Our team will reach out with final delivery and payment details.
              </p>
            </header>

            {placed ? (
              <div className="placed-card">
                <h2>Order Request Submitted</h2>
                <p>
                  Thanks for your order. Our sales team will contact you within
                  24 hours.
                </p>
                <Link href="/product-catalog">
                  <a className="btn btn-brand-white-text btn-lg">Continue Shopping</a>
                </Link>
              </div>
            ) : (
              <div className="checkout-grid">
                <section className="order-items-card">
                  <h2>Order Items</h2>
                  {items.length === 0 ? (
                    <div className="empty-state">
                      <p>Your cart is empty.</p>
                      <Link href="/product-catalog">
                        <a className="btn btn-primary">Browse Catalog</a>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="items-list">
                        {items.map((item) => (
                          <article key={item.id} className="item-row">
                            <img src={item.image} alt={item.name} />
                            <div>
                              <h3>{item.name}</h3>
                              <p>
                                {formatCurrency(item.price)} x {item.quantity}
                              </p>
                            </div>
                            <strong>{formatCurrency(item.price * item.quantity)}</strong>
                          </article>
                        ))}
                      </div>
                      <div className="totals-box">
                        <div>
                          <span>Subtotal</span>
                          <strong>{formatCurrency(subtotal)}</strong>
                        </div>
                        <div>
                          <span>VAT (5%)</span>
                          <strong>{formatCurrency(vat)}</strong>
                        </div>
                        <div className="grand-total">
                          <span>Total</span>
                          <strong>{formatCurrency(total)}</strong>
                        </div>
                      </div>
                    </>
                  )}
                </section>

                <section className="order-form-card">
                  <h2>Billing Details</h2>
                  <form className="order-form" onSubmit={handlePlaceOrder}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <textarea
                      name="address"
                      rows="4"
                      placeholder="Delivery Address"
                      required
                    ></textarea>
                    <select name="paymentMethod" required defaultValue="">
                      <option value="" disabled>
                        Payment Method
                      </option>
                      <option value="bank">Bank Transfer</option>
                      <option value="card">Corporate Card</option>
                      <option value="invoice">Invoice Billing</option>
                    </select>
                    <button
                      type="submit"
                      className="btn btn-brand-white-text btn-lg"
                      disabled={items.length === 0}
                    >
                      Place Order Request
                    </button>
                  </form>
                </section>
              </div>
            )}
          </section>
        </main>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .confirm-order-page {
          min-height: 100vh;
          background: #f5f7fb;
        }

        .confirm-order-main {
          padding: 3.5rem 1.2rem;
        }

        .confirm-order-shell {
          max-width: 76rem;
          margin: 0 auto;
        }

        .confirm-order-header {
          max-width: 52rem;
          margin-bottom: 2rem;
        }

        .eyebrow {
          margin: 0 0 0.4rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8f8200;
          font-weight: 700;
        }

        h1,
        h2,
        h3 {
          margin: 0;
          color: #17181d;
        }

        h1 {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          margin-bottom: 0.8rem;
        }

        h2 {
          font-size: clamp(1.3rem, 2.2vw, 1.8rem);
          margin-bottom: 1rem;
        }

        p {
          margin: 0;
          line-height: 1.6;
          color: #4a5565;
        }

        .checkout-grid {
          display: grid;
          gap: 1.1rem;
          grid-template-columns: 1.25fr 0.9fr;
        }

        .order-items-card,
        .order-form-card,
        .placed-card {
          border: 1px solid #dbe2ee;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 12px 30px rgba(17, 24, 39, 0.08);
          padding: 1.2rem;
        }

        .items-list {
          display: grid;
          gap: 0.85rem;
        }

        .item-row {
          display: grid;
          align-items: center;
          grid-template-columns: 82px 1fr auto;
          gap: 0.9rem;
          border: 1px solid #e5e8ef;
          border-radius: 12px;
          padding: 0.65rem;
        }

        .item-row img {
          width: 82px;
          height: 70px;
          object-fit: cover;
          border-radius: 10px;
        }

        .item-row h3 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .item-row strong {
          color: #17181d;
        }

        .totals-box {
          margin-top: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #fbfcff;
          padding: 0.9rem;
          display: grid;
          gap: 0.55rem;
        }

        .totals-box div {
          display: flex;
          justify-content: space-between;
        }

        .grand-total {
          border-top: 1px solid #dbe2ee;
          padding-top: 0.55rem;
          font-size: 1.05rem;
        }

        .order-form {
          display: grid;
          gap: 0.8rem;
        }

        .order-form input,
        .order-form textarea,
        .order-form select {
          width: 100%;
          border: 1px solid #cfd8e6;
          border-radius: 10px;
          padding: 0.7rem 0.85rem;
          font-size: 1rem;
          color: #17181d;
          background: #ffffff;
        }

        .order-form input:focus,
        .order-form textarea:focus,
        .order-form select:focus {
          outline: none;
          border-color: #f7e500;
          box-shadow: 0 0 0 4px rgba(247, 229, 0, 0.24);
        }

        .empty-state {
          border: 1px dashed #c8d0e0;
          border-radius: 12px;
          background: #fbfdff;
          padding: 1rem;
          display: grid;
          gap: 0.7rem;
          justify-items: start;
        }

        .placed-card {
          max-width: 42rem;
          display: grid;
          gap: 0.8rem;
        }

        @media (max-width: 991px) {
          .checkout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .item-row {
            grid-template-columns: 1fr;
          }

          .item-row img {
            width: 100%;
            height: 180px;
          }
        }
      `}</style>
    </>
  )
}

export default ConfirmOrder
