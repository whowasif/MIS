import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const DIVISIONS = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh']

const DISTRICTS_BY_DIVISION = {
  Dhaka: ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
  Chattogram: ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
  Rajshahi: ['Bogra', 'Chapainawabganj', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Rajshahi', 'Sirajganj'],
  Khulna: ['Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'],
  Barishal: ['Barguna', 'Barishal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
  Sylhet: ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
  Rangpur: ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
  Mymensingh: ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur'],
}

const formatCurrency = (value) =>
  `৳${Number(value || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

const ConfirmOrder = ({ deliveryZones = [], defaultDeliveryCharge = 100, customer = null }) => {
  const { data: session } = useSession()
  const user = session?.user || null

  const [items, setItems] = useState([])
  const [placed, setPlaced] = useState(false)
  const [selectedZone, setSelectedZone] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [promoMsg, setPromoMsg] = useState('')

  // Auto-fill form from customer profile
  const [formName, setFormName] = useState(customer?.full_name || user?.name || '')
  const [formEmail, setFormEmail] = useState(customer?.email || user?.email || '')
  const [formPhone, setFormPhone] = useState(customer?.phone_number || '')
  const [formDivision, setFormDivision] = useState(customer?.division || '')
  const [formDistrict, setFormDistrict] = useState(customer?.district || '')
  const [formAddress, setFormAddress] = useState(customer?.shipping_address || '')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('misCart')
      setItems(stored ? JSON.parse(stored) : [])
    } catch (e) { setItems([]) }
  }, [])

  useEffect(() => {
    if (customer) {
      if (!formPhone && customer.phone_number) setFormPhone(customer.phone_number)
      if (!formDivision && customer.division) setFormDivision(customer.division)
      if (!formDistrict && customer.district) setFormDistrict(customer.district)
      if (!formAddress && customer.shipping_address) setFormAddress(customer.shipping_address)
    }
  }, [customer])

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0), [items])

  // Delivery charge based on selected zone or customer's division
  const deliveryCharge = useMemo(() => {
    if (selectedZone) {
      const zone = deliveryZones.find(z => String(z.id) === selectedZone)
      return zone?.charge || defaultDeliveryCharge
    }
    // Auto-detect: Dhaka division = "Inside Dhaka", others = "Outside Dhaka"
    if (formDivision) {
      if (formDivision === 'Dhaka') {
        const insideDhaka = deliveryZones.find(z => z.name.toLowerCase().includes('inside'))
        if (insideDhaka) return insideDhaka.charge
      } else {
        const outsideDhaka = deliveryZones.find(z => z.name.toLowerCase().includes('outside'))
        if (outsideDhaka) return outsideDhaka.charge
      }
    }
    return defaultDeliveryCharge
  }, [selectedZone, formDivision, deliveryZones, defaultDeliveryCharge])

  const discount = promoDiscount
  const total = subtotal + deliveryCharge - discount

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return
    try {
      const res = await fetch('/api/validate-promo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: promoCode, subtotal }) })
      const data = await res.json()
      if (data.valid) { setPromoDiscount(data.discount || 0); setPromoMsg(`Promo applied! You save ৳${data.discount}`) }
      else { setPromoDiscount(0); setPromoMsg(data.message || 'Invalid promo code') }
    } catch (e) { setPromoMsg('Error validating promo') }
  }

  const handlePlaceOrder = async (event) => {
    event.preventDefault()
    const orderData = {
      fullName: formName,
      email: formEmail,
      phone: formPhone,
      division: formDivision,
      district: formDistrict,
      address: formAddress,
      paymentMethod: event.currentTarget.paymentMethod.value,
      deliveryZoneId: selectedZone || null,
      promoCode: promoCode || null,
      items: items.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      subtotal, deliveryCharge, discount, total,
    }

    try {
      const res = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(orderData) })
      const data = await res.json()
      if (data.success) {
        setPlaced(true)
        window.localStorage.removeItem('misCart')
        window.dispatchEvent(new Event('mis-cart-updated'))
        setItems([])
      }
    } catch (e) {
      setPlaced(true)
      window.localStorage.removeItem('misCart')
      window.dispatchEvent(new Event('mis-cart-updated'))
      setItems([])
    }
  }

  return (
    <>
      <div className="confirm-order-page">
        <Head><title>Confirm Order | MIS Solution</title></Head>
        <Navigation />

        <main className="confirm-order-main">
          <section className="confirm-order-shell">
            <header className="confirm-order-header">
              <p className="eyebrow">Checkout</p>
              <h1>Confirm Your Order</h1>
            </header>

            {placed ? (
              <div className="placed-card">
                <div className="placed-icon">✓</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you! Our team will contact you within 24 hours.</p>
                <Link href="/categories/desktop"><a className="btn btn-primary btn-lg">Continue Shopping</a></Link>
              </div>
            ) : (
              <div className="checkout-grid">
                <section className="order-items-card">
                  <h2>Order Summary</h2>
                  {items.length === 0 ? (
                    <div className="empty-state"><p>Your cart is empty.</p><Link href="/categories/desktop"><a className="btn btn-primary">Browse Products</a></Link></div>
                  ) : (
                    <>
                      <div className="items-list">
                        {items.map((item) => (
                          <article key={item.id} className="item-row">
                            <img src={item.image || '/placeholder.png'} alt={item.name} />
                            <div className="item-info"><h3>{item.name}</h3><p>{formatCurrency(item.price)} × {item.quantity || 1}</p></div>
                            <strong>{formatCurrency((item.price || 0) * (item.quantity || 1))}</strong>
                          </article>
                        ))}
                      </div>

                      <div className="promo-section">
                        <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Promo code" />
                        <button type="button" onClick={handleApplyPromo} className="promo-btn">Apply</button>
                      </div>
                      {promoMsg && <p className="promo-msg">{promoMsg}</p>}

                      <div className="totals-box">
                        <div><span>Subtotal</span><strong>{formatCurrency(subtotal)}</strong></div>
                        <div><span>Delivery Charge</span><strong>{formatCurrency(deliveryCharge)}</strong></div>
                        {discount > 0 && <div className="discount-row"><span>Discount</span><strong>-{formatCurrency(discount)}</strong></div>}
                        <div className="grand-total"><span>Total</span><strong>{formatCurrency(total)}</strong></div>
                      </div>
                    </>
                  )}
                </section>

                <section className="order-form-card">
                  <h2>Delivery & Payment</h2>
                  <form className="order-form" onSubmit={handlePlaceOrder}>
                    <div className="form-field"><label>Full Name</label><input type="text" name="fullName" value={formName} onChange={(e) => setFormName(e.target.value)} required /></div>
                    <div className="form-field"><label>Email</label><input type="email" name="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required /></div>
                    <div className="form-field"><label>Phone</label><input type="tel" name="phone" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required /></div>
                    <div className="form-row-2">
                      <div className="form-field"><label>Division</label>
                        <select value={formDivision} onChange={(e) => setFormDivision(e.target.value)} required>
                          <option value="">Select Division</option>
                          {DIVISIONS.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                      <div className="form-field"><label>District</label>
                        <select value={formDistrict} onChange={(e) => setFormDistrict(e.target.value)} required>
                          <option value="">Select District</option>
                          {(DISTRICTS_BY_DIVISION[formDivision] || []).map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-field"><label>Full Address</label><textarea rows={3} value={formAddress} onChange={(e) => setFormAddress(e.target.value)} placeholder="House, Road, Area..." required /></div>

                    {deliveryZones.length > 0 && (
                      <div className="form-field">
                        <label>Delivery Zone</label>
                        <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
                          <option value="">Auto (based on division)</option>
                          {deliveryZones.map(z => (<option key={z.id} value={z.id}>{z.name} — ৳{z.charge} ({z.estimated_days || ''})</option>))}
                        </select>
                      </div>
                    )}

                    <div className="form-field"><label>Payment Method</label>
                      <select name="paymentMethod" required defaultValue="">
                        <option value="" disabled>Select payment method</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="bkash">bKash</option>
                        <option value="nagad">Nagad</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="card">Card Payment</option>
                      </select>
                    </div>
                    <button type="submit" className="place-order-btn" disabled={items.length === 0}>Place Order — {formatCurrency(total)}</button>
                  </form>
                </section>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .confirm-order-page { min-height: 100vh; background: #f5f7fb; }
        .confirm-order-main { padding: 40px 20px; }
        .confirm-order-shell { max-width: 1100px; margin: 0 auto; }
        .confirm-order-header { margin-bottom: 24px; }
        .eyebrow { margin: 0 0 6px; letter-spacing: 0.08em; text-transform: uppercase; color: #6366f1; font-weight: 700; font-size: 13px; }
        h1 { margin: 0 0 8px; font-size: clamp(24px, 4vw, 32px); color: #111827; }
        h2 { margin: 0 0 16px; font-size: 20px; color: #111827; }

        .checkout-grid { display: grid; gap: 20px; grid-template-columns: 1.2fr 1fr; }
        .order-items-card, .order-form-card, .placed-card { border: 1px solid #e5e7eb; border-radius: 16px; background: #ffffff; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }

        .placed-card { max-width: 500px; margin: 0 auto; text-align: center; }
        .placed-icon { width: 64px; height: 64px; border-radius: 50%; background: #d1fae5; color: #059669; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }

        .items-list { display: grid; gap: 10px; margin-bottom: 16px; }
        .item-row { display: grid; grid-template-columns: 60px 1fr auto; align-items: center; gap: 12px; padding: 10px; border: 1px solid #f1f5f9; border-radius: 10px; }
        .item-row img { width: 60px; height: 48px; object-fit: cover; border-radius: 8px; background: #f9fafb; }
        .item-info h3 { margin: 0; font-size: 13px; color: #111827; }
        .item-info p { margin: 2px 0 0; font-size: 12px; color: #6b7280; }
        .item-row strong { font-size: 13px; color: #111827; }

        .promo-section { display: flex; gap: 8px; margin-bottom: 8px; }
        .promo-section input { flex: 1; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; }
        .promo-section input:focus { outline: none; border-color: #6366f1; }
        .promo-btn { padding: 10px 18px; border: none; border-radius: 8px; background: #4f46e5; color: #fff; font-weight: 700; cursor: pointer; font-size: 13px; }
        .promo-msg { font-size: 13px; color: #059669; margin: 0 0 8px; }

        .totals-box { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; display: grid; gap: 8px; }
        .totals-box div { display: flex; justify-content: space-between; font-size: 14px; color: #374151; }
        .discount-row strong { color: #059669; }
        .grand-total { border-top: 1px solid #e5e7eb; padding-top: 10px; font-size: 16px; font-weight: 700; }

        .order-form { display: grid; gap: 14px; }
        .form-field { display: flex; flex-direction: column; gap: 4px; }
        .form-field label { font-size: 12px; font-weight: 700; color: #374151; }
        .form-field input, .form-field select, .form-field textarea { width: 100%; border: 2px solid #c7d2fe; border-radius: 10px; padding: 11px 14px; font: inherit; font-size: 14px; color: #111827; background: #fafbff; }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); background: #fff; }
        .form-field textarea { resize: vertical; min-height: 70px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .place-order-btn { width: 100%; padding: 14px; border: none; border-radius: 10px; background: #4f46e5; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
        .place-order-btn:hover:not(:disabled) { background: #4338ca; }
        .place-order-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .empty-state { border: 1px dashed #d1d5db; border-radius: 12px; padding: 24px; text-align: center; }
        .empty-state p { margin: 0 0 12px; color: #6b7280; }

        @media (max-width: 900px) { .checkout-grid { grid-template-columns: 1fr; } .form-row-2 { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const { getToken } = await import('next-auth/jwt')
    const { getDbPool } = await import('../lib/server/db')
    const token = await getToken({ req: context.req, secret: process.env.NEXTAUTH_SECRET })
    const db = getDbPool()

    const [zones] = await db.query('SELECT id, zone_name as name, charge, estimated_days FROM delivery_zones WHERE is_active = 1 ORDER BY charge ASC')
    const defaultCharge = Number(process.env.DEFAULT_DELIVERY_CHARGE || 100)

    let customer = null
    if (token?.email) {
      const [rows] = await db.execute(
        'SELECT full_name, email, phone_number, division, district, shipping_address FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
        [token.email.toLowerCase()]
      )
      if (rows.length) customer = rows[0]
    }

    return { props: { deliveryZones: JSON.parse(JSON.stringify(zones)), defaultDeliveryCharge: defaultCharge, customer: customer ? JSON.parse(JSON.stringify(customer)) : null } }
  } catch (e) {
    return { props: { deliveryZones: [], defaultDeliveryCharge: 100, customer: null } }
  }
}

export default ConfirmOrder
