import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

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

const formatCurrency = (value) => `৳${Number(value || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const formatDate = (d) => { const date = new Date(d); return isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }) }

const Profile = ({ customer = null, orders = [] }) => {
  const { data: session, status } = useSession()
  const user = session?.user || null

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    full_name: customer?.full_name || '',
    phone_number: customer?.phone_number || '',
    division: customer?.division || '',
    district: customer?.district || '',
    shipping_address: customer?.shipping_address || '',
  })

  useEffect(() => {
    if (customer) {
      setForm({
        full_name: customer.full_name || '',
        phone_number: customer.phone_number || '',
        division: customer.division || '',
        district: customer.district || '',
        shipping_address: customer.shipping_address || '',
      })
    }
  }, [customer])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/auth/me', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (data.success) {
        setEditing(false)
      } else {
        alert(data.error || 'Failed to save. Please try again.')
      }
    } catch (e) {
      console.error(e)
      alert('Network error. Please try again.')
    }
    finally { setSaving(false) }
  }

  if (status === 'loading') {
    return (<><Navigation /><main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading...</p></main><Footer /></>)
  }

  if (!user) {
    return (<><Navigation /><main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}><h2 style={{ margin: 0 }}>Please sign in to view your profile</h2><Link href="/auth/signin"><a className="btn btn-primary btn-lg">Sign In</a></Link></main><Footer /></>)
  }

  return (
    <>
      <div className="profile-page">
        <Head><title>My Profile | MIS Solution</title></Head>
        <Navigation />

        <main className="profile-main">
          <section className="profile-shell">
            <div className="profile-layout">
              {/* Profile Info Card */}
              <article className="profile-card info-card">
                <div className="avatar-section">
                  <div className="avatar">
                    {user.image ? <img src={user.image} alt={user.name} /> : <span>{(user.name || 'U').charAt(0).toUpperCase()}</span>}
                  </div>
                  <h2>{form.full_name || user.name || 'User'}</h2>
                  <p className="user-email">{user.email}</p>
                </div>

                {!editing ? (
                  <dl className="profile-details">
                    <div className="detail-row"><dt>Full Name</dt><dd>{form.full_name || 'Not set'}</dd></div>
                    <div className="detail-row"><dt>Email</dt><dd>{user.email}</dd></div>
                    <div className="detail-row"><dt>Phone</dt><dd>{form.phone_number || 'Not set'}</dd></div>
                    <div className="detail-row"><dt>Division</dt><dd>{form.division || 'Not set'}</dd></div>
                    <div className="detail-row"><dt>District</dt><dd>{form.district || 'Not set'}</dd></div>
                    <div className="detail-row"><dt>Address</dt><dd>{form.shipping_address || 'Not set'}</dd></div>
                    <div className="detail-row"><dt>Member Since</dt><dd>{customer?.created_at ? formatDate(customer.created_at) : 'N/A'}</dd></div>
                  </dl>
                ) : (
                  <div className="edit-form">
                    <div className="edit-field">
                      <label>Full Name</label>
                      <input value={form.full_name} onChange={(e) => setForm(p => ({ ...p, full_name: e.target.value }))} placeholder="Your full name" />
                    </div>
                    <div className="edit-field">
                      <label>Phone</label>
                      <input value={form.phone_number} onChange={(e) => setForm(p => ({ ...p, phone_number: e.target.value }))} placeholder="01XXXXXXXXX" />
                    </div>
                    <div className="edit-field">
                      <label>Division</label>
                      <select value={form.division} onChange={(e) => setForm(p => ({ ...p, division: e.target.value }))}>
                        <option value="">Select Division</option>
                        {DIVISIONS.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="edit-field">
                      <label>District</label>
                      <select value={form.district} onChange={(e) => setForm(p => ({ ...p, district: e.target.value }))}>
                        <option value="">Select District</option>
                        {(DISTRICTS_BY_DIVISION[form.division] || []).map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="edit-field">
                      <label>Full Address</label>
                      <textarea rows={3} value={form.shipping_address} onChange={(e) => setForm(p => ({ ...p, shipping_address: e.target.value }))} placeholder="House, Road, Area..." />
                    </div>
                  </div>
                )}

                <div className="profile-actions">
                  {!editing ? (
                    <button onClick={() => setEditing(true)} className="btn-edit">Edit Profile</button>
                  ) : (
                    <div className="edit-actions">
                      <button onClick={handleSave} disabled={saving} className="btn-save">{saving ? 'Saving...' : 'Save Changes'}</button>
                      <button onClick={() => setEditing(false)} className="btn-cancel">Cancel</button>
                    </div>
                  )}
                  <button onClick={() => signOut({ callbackUrl: '/' })} className="btn-signout">Sign Out</button>
                </div>
              </article>

              {/* Orders Card */}
              <article className="profile-card orders-card">
                <div className="orders-header">
                  <h2>My Orders</h2>
                  <span className="order-count">{orders.length} order{orders.length !== 1 ? 's' : ''}</span>
                </div>

                {orders.length === 0 ? (
                  <div className="empty-box"><p>No orders yet. Start shopping to see your orders here.</p><Link href="/categories/desktop"><a className="btn btn-primary">Browse Products</a></Link></div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order) => (
                      <article key={order.id} className="order-item">
                        <div className="order-top">
                          <strong>#{order.order_no || order.id}</strong>
                          <span className={`order-status status-${(order.status || 'pending').toLowerCase()}`}>{order.status || 'Pending'}</span>
                        </div>
                        <div className="order-meta">
                          <span>{formatDate(order.created_at)}</span>
                          <strong>{formatCurrency(order.total_amount)}</strong>
                        </div>
                        {order.payment_method && <p className="order-payment">Payment: {order.payment_method}</p>}
                      </article>
                    ))}
                  </div>
                )}
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .profile-page { min-height: 100vh; background: #f5f7fb; }
        .profile-main { padding: 40px 20px; }
        .profile-shell { max-width: 1100px; margin: 0 auto; }
        .profile-layout { display: grid; gap: 20px; grid-template-columns: 380px 1fr; }
        .profile-card { border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.05); padding: 28px; }

        .avatar-section { text-align: center; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f1f5f9; }
        .avatar { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 12px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .avatar img { width: 100%; height: 100%; object-fit: cover; }
        .avatar span { color: #fff; font-size: 32px; font-weight: 800; }
        .avatar-section h2 { margin: 0 0 4px; font-size: 20px; color: #111827; }
        .user-email { margin: 0; color: #6b7280; font-size: 14px; }

        .profile-details { margin: 0; display: grid; gap: 10px; }
        .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #f9fafb; border-radius: 10px; border: 1px solid #f1f5f9; }
        dt { color: #6b7280; font-size: 13px; font-weight: 600; }
        dd { margin: 0; color: #111827; font-size: 14px; font-weight: 600; text-align: right; max-width: 60%; word-break: break-word; }

        .edit-form { display: grid; gap: 12px; }
        .edit-field { display: flex; flex-direction: column; gap: 4px; }
        .edit-field label { font-size: 12px; font-weight: 700; color: #374151; }
        .edit-field input, .edit-field select, .edit-field textarea { width: 100%; border: 2px solid #c7d2fe; border-radius: 10px; padding: 10px 14px; font: inherit; font-size: 14px; color: #111827; background: #fafbff; }
        .edit-field input:focus, .edit-field select:focus, .edit-field textarea:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
        .edit-field textarea { resize: vertical; min-height: 70px; }

        .profile-actions { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .edit-actions { display: flex; gap: 8px; }
        .btn-edit { width: 100%; padding: 12px; border: 2px solid #4f46e5; border-radius: 10px; background: #eef2ff; color: #4f46e5; font-weight: 700; cursor: pointer; font-size: 14px; }
        .btn-edit:hover { background: #e0e7ff; }
        .btn-save { flex: 1; padding: 12px; border: none; border-radius: 10px; background: #4f46e5; color: #fff; font-weight: 700; cursor: pointer; font-size: 14px; }
        .btn-save:disabled { opacity: 0.6; }
        .btn-cancel { padding: 12px 20px; border: 1px solid #d1d5db; border-radius: 10px; background: #fff; color: #374151; font-weight: 600; cursor: pointer; font-size: 14px; }
        .btn-signout { width: 100%; padding: 12px; border: 1px solid #fecaca; border-radius: 10px; background: #fef2f2; color: #dc2626; font-weight: 700; cursor: pointer; font-size: 14px; }
        .btn-signout:hover { background: #fee2e2; }

        .orders-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .orders-header h2 { margin: 0; font-size: 20px; color: #111827; }
        .order-count { background: #eef2ff; color: #4338ca; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }

        .orders-list { display: grid; gap: 10px; max-height: 500px; overflow-y: auto; }
        .order-item { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 16px; transition: box-shadow 0.2s; }
        .order-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .order-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .order-top strong { color: #111827; font-size: 14px; }
        .order-status { padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-paid { background: #d1fae5; color: #065f46; }
        .status-shipped { background: #dbeafe; color: #1e40af; }
        .status-cancelled { background: #fee2e2; color: #991b1b; }
        .order-meta { display: flex; justify-content: space-between; align-items: center; }
        .order-meta span { color: #6b7280; font-size: 13px; }
        .order-meta strong { color: #111827; font-size: 15px; }
        .order-payment { margin: 6px 0 0; font-size: 12px; color: #6b7280; }

        .empty-box { border: 1px dashed #d1d5db; border-radius: 12px; padding: 24px; text-align: center; }
        .empty-box p { margin: 0 0 12px; color: #6b7280; }

        @media (max-width: 900px) { .profile-layout { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const { getSession } = await import('next-auth/react')
    const session = await getSession({ req: context.req })
    if (!session?.user?.email) return { props: { customer: null, orders: [] } }

    const { getDbPool } = await import('../lib/server/db')
    const db = getDbPool()

    // Get customer record
    const [customers] = await db.execute(
      'SELECT id, full_name, email, phone_number, division, district, shipping_address, profile_image, created_at FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
      [session.user.email.toLowerCase()]
    )

    if (!customers.length) return { props: { customer: null, orders: [] } }

    const customer = customers[0]

    // Get orders by customer_id
    const [orders] = await db.execute(
      'SELECT id, order_no, total_amount, status, payment_method, delivery_charge, created_at FROM orders WHERE customer_id = ? AND deleted_at IS NULL ORDER BY created_at DESC LIMIT 30',
      [customer.id]
    )

    return { props: { customer: JSON.parse(JSON.stringify(customer)), orders: JSON.parse(JSON.stringify(orders)) } }
  } catch (e) {
    console.error('Profile SSR error:', e)
    return { props: { customer: null, orders: [] } }
  }
}

export default Profile
