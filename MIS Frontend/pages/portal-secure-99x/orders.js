import React, { useRef, useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from './SecureAdminLayout'
import { getDbPool } from '../../lib/server/db'

const STATUS_OPTIONS = ['pending', 'paid', 'shipped', 'cancelled']
const statusColors = {
  pending: { bg: '#fef3c7', color: '#92400e' },
  paid: { bg: '#d1fae5', color: '#065f46' },
  shipped: { bg: '#dbeafe', color: '#1e40af' },
  cancelled: { bg: '#fee2e2', color: '#991b1b' },
}

const formatCurrency = (v) => `৳${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'

const OrdersPage = ({ initialOrders = [] }) => {
  const [orders, setOrders] = useState(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orderItems, setOrderItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [updatingId, setUpdatingId] = useState(null)
  const [statusFilter, setStatusFilter] = useState('')
  const printRef = useRef(null)

  const filteredOrders = statusFilter ? orders.filter((o) => o.status === statusFilter) : orders

  const viewOrder = async (order) => {
    setSelectedOrder(order)
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/orders/${order.id}/items`)
      const data = await res.json()
      setOrderItems(data.items || [])
    } catch (e) {
      setOrderItems([])
    } finally {
      setLoading(false)
    }
  }

  const closeDetail = () => {
    setSelectedOrder(null)
    setOrderItems([])
  }

  const updateStatus = async (orderId, newStatus) => {
    setUpdatingId(orderId)
    try {
      await fetch(`/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)))
      if (selectedOrder?.id === orderId) {
        setSelectedOrder((prev) => ({ ...prev, status: newStatus }))
      }
    } catch (e) {
      console.error('Status update failed', e)
    } finally {
      setUpdatingId(null)
    }
  }

  const handlePrint = () => {
    const content = printRef.current
    if (!content) return
    const win = window.open('', '_blank')
    win.document.write(`
      <html>
        <head>
          <title>${selectedOrder.order_no || 'Order #' + selectedOrder.id} - MIS Solution</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1f2937; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
            .brand-block { display: flex; align-items: center; gap: 14px; }
            .invoice-logo { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
            .brand { font-size: 22px; font-weight: 800; color: #4f46e5; }
            .order-id { font-size: 14px; color: #6b7280; margin-top: 4px; }
            .invoice-title { font-size: 28px; font-weight: 700; text-align: right; }
            .invoice-date { font-size: 13px; color: #6b7280; text-align: right; margin-top: 4px; }
            .section { margin-bottom: 24px; }
            .section h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; margin-bottom: 8px; font-weight: 700; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
            .info-block p { font-size: 14px; line-height: 1.6; }
            .info-block strong { display: block; font-size: 15px; margin-bottom: 2px; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; }
            th { text-align: left; padding: 10px 12px; background: #f9fafb; font-size: 12px; text-transform: uppercase; color: #374151; border-bottom: 2px solid #e5e7eb; }
            td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
            .text-right { text-align: right; }
            .total-row td { font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; padding-top: 12px; }
            .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
            .status { display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
          <div class="footer">MIS Solution — Generated on ${new Date().toLocaleString()}</div>
        </body>
      </html>
    `)
    win.document.close()
    win.print()
  }

  return (
    <SecureAdminLayout>
      <Head><title>Orders | Admin</title></Head>

      <div className="orders-page">
        <header className="page-header">
          <div>
            <h1>Orders</h1>
            <p>{filteredOrders.length} of {orders.length} orders</p>
          </div>
          <select className="status-filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="shipped">Shipped</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </header>

        {/* Order Table */}
        {!selectedOrder && (
          <div className="table-wrap">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 && (
                  <tr><td colSpan="7" className="empty">No orders yet.</td></tr>
                )}
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="id-col">{order.order_no || `#${order.id}`}</td>
                    <td>
                      <strong>{order.customer_name || '—'}</strong>
                      <span className="sub">{order.customer_email || ''}</span>
                    </td>
                    <td className="mono">{formatCurrency(order.total_amount)}</td>
                    <td>{order.payment_method || '—'}</td>
                    <td>
                      <select
                        className="status-pill"
                        value={order.status}
                        disabled={updatingId === order.id}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                        style={{ background: statusColors[order.status]?.bg, color: statusColors[order.status]?.color }}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </td>
                    <td className="sub">{formatDate(order.created_at)}</td>
                    <td>
                      <button className="view-btn" onClick={() => viewOrder(order)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Order Detail View */}
        {selectedOrder && (
          <div className="detail-view">
            <div className="detail-toolbar">
              <button className="back-btn" onClick={closeDetail}>← Back to Orders</button>
              <button className="print-btn" onClick={handlePrint}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                Print Invoice
              </button>
            </div>

            <div className="invoice-card" ref={printRef}>
              <div className="header">
                <div className="brand-block">
                  <img src="/footer%20logo.png" alt="MIS Solution" className="invoice-logo" />
                  <div>
                    <div className="brand">MIS Solution</div>
                    <div className="order-id">{selectedOrder.order_no || `Order #${selectedOrder.id}`}</div>
                  </div>
                </div>
                <div className="header-right">
                  <div className="invoice-title">Invoice</div>
                  <div className="invoice-date">{formatDate(selectedOrder.created_at)}</div>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-block">
                  <div className="section"><h3>Customer</h3></div>
                  <p><strong>{selectedOrder.customer_name || '—'}</strong></p>
                  <p>{selectedOrder.customer_email || '—'}</p>
                </div>
                <div className="info-block">
                  <div className="section"><h3>Shipping Address</h3></div>
                  <p>{selectedOrder.shipping_address || 'Not provided'}</p>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-block">
                  <div className="section"><h3>Payment Method</h3></div>
                  <p>{selectedOrder.payment_method || '—'}</p>
                </div>
                <div className="info-block">
                  <div className="section"><h3>Status</h3></div>
                  <span className="status" style={{ background: statusColors[selectedOrder.status]?.bg, color: statusColors[selectedOrder.status]?.color }}>
                    {selectedOrder.status?.charAt(0).toUpperCase() + selectedOrder.status?.slice(1)}
                  </span>
                </div>
              </div>

              <div className="section"><h3>Order Items</h3></div>
              {loading ? (
                <p className="loading-text">Loading items...</p>
              ) : (
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th className="text-right">Unit Price</th>
                      <th className="text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.length === 0 && (
                      <tr><td colSpan="4" className="empty">No items recorded for this order.</td></tr>
                    )}
                    {orderItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.product_name || 'Unknown Product'}</td>
                        <td>{item.quantity}</td>
                        <td className="text-right">{formatCurrency(item.price_at_purchase)}</td>
                        <td className="text-right">{formatCurrency(item.price_at_purchase * item.quantity)}</td>
                      </tr>
                    ))}
                    {selectedOrder.discount_percent > 0 || selectedOrder.discount_amount > 0 ? (
                      <tr className="discount-row">
                        <td colSpan="3" className="text-right">Discount {selectedOrder.discount_percent > 0 ? `(${selectedOrder.discount_percent}%)` : ''}</td>
                        <td className="text-right discount-val">-{formatCurrency(selectedOrder.discount_amount || (selectedOrder.total_amount * selectedOrder.discount_percent / 100))}</td>
                      </tr>
                    ) : null}
                    {Number(selectedOrder.delivery_charge) > 0 ? (
                      <tr>
                        <td colSpan="3" className="text-right">Delivery Charge</td>
                        <td className="text-right">{formatCurrency(selectedOrder.delivery_charge)}</td>
                      </tr>
                    ) : null}
                    <tr className="total-row">
                      <td colSpan="3" className="text-right">Grand Total</td>
                      <td className="text-right">{formatCurrency(Number(selectedOrder.total_amount) - Number(selectedOrder.discount_amount || 0))}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>

            {/* Pricing Adjustment */}
            <div className="discount-editor">
              <h3>Adjust Pricing</h3>
              <div className="discount-fields">
                <div className="discount-field">
                  <label>Discount %</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    defaultValue={selectedOrder.discount_percent || 0}
                    id="discountPercent"
                  />
                </div>
                <div className="discount-field">
                  <label>Discount Amount (৳)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    defaultValue={selectedOrder.discount_amount || 0}
                    id="discountAmount"
                  />
                </div>
                <div className="discount-field">
                  <label>Delivery Charge (৳)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    defaultValue={selectedOrder.delivery_charge || 0}
                    id="deliveryCharge"
                  />
                </div>
                <button
                  className="save-discount-btn"
                  onClick={async () => {
                    const pct = Number(document.getElementById('discountPercent').value) || 0
                    const amt = Number(document.getElementById('discountAmount').value) || 0
                    const delivery = Number(document.getElementById('deliveryCharge').value) || 0
                    try {
                      await fetch(`/api/admin/orders/${selectedOrder.id}/discount`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ discountPercent: pct, discountAmount: amt, deliveryCharge: delivery }),
                      })
                      setSelectedOrder((prev) => ({ ...prev, discount_percent: pct, discount_amount: amt, delivery_charge: delivery }))
                      setOrders((prev) => prev.map((o) => o.id === selectedOrder.id ? { ...o, discount_percent: pct, discount_amount: amt, delivery_charge: delivery } : o))
                    } catch (e) { console.error(e) }
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .orders-page { display: grid; gap: 20px; }
        .page-header { display: flex; justify-content: space-between; align-items: center; }
        .page-header h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .page-header p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
        .status-filter { padding: 9px 14px; border: 2px solid #c7d2fe; border-radius: 10px; background: #fafbff; font: inherit; font-size: 14px; cursor: pointer; }
        .status-filter:focus { outline: none; border-color: #6366f1; }

        .table-wrap { overflow-x: auto; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; }
        .orders-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .orders-table thead th { text-align: left; padding: 12px 16px; background: #f9fafb; color: #374151; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #e5e7eb; white-space: nowrap; }
        .orders-table tbody td { padding: 14px 16px; border-bottom: 1px solid #f3f4f6; vertical-align: middle; }
        .orders-table tbody tr:hover { background: #f9fafb; }
        .id-col { font-weight: 700; color: #4338ca; }
        .mono { font-weight: 700; }
        .sub { display: block; font-size: 12px; color: #6b7280; margin-top: 2px; }
        .status-pill { border: none; border-radius: 6px; padding: 5px 10px; font-weight: 700; font-size: 12px; cursor: pointer; appearance: none; }
        .view-btn { border: 1px solid #d1d5db; border-radius: 8px; padding: 6px 14px; background: #fff; color: #374151; font-size: 13px; font-weight: 600; cursor: pointer; }
        .view-btn:hover { background: #f3f4f6; }
        .empty { text-align: center; color: #9ca3af; padding: 32px !important; }

        /* Detail View */
        .detail-view { display: grid; gap: 16px; }
        .detail-toolbar { display: flex; justify-content: space-between; align-items: center; }
        .back-btn { border: 1px solid #d1d5db; border-radius: 8px; padding: 8px 16px; background: #fff; font-size: 13px; font-weight: 600; cursor: pointer; color: #374151; }
        .back-btn:hover { background: #f3f4f6; }
        .print-btn { display: inline-flex; align-items: center; gap: 8px; border: none; border-radius: 8px; padding: 8px 18px; background: #4f46e5; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; }
        .print-btn:hover { background: #4338ca; }

        .invoice-card { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; padding: 32px; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
        .brand-block { display: flex; align-items: center; gap: 14px; }
        .invoice-logo { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
        .brand { font-size: 20px; font-weight: 800; color: #4f46e5; }
        .order-id { font-size: 13px; color: #6b7280; margin-top: 4px; }
        .header-right { text-align: right; }
        .invoice-title { font-size: 26px; font-weight: 700; color: #111827; }
        .invoice-date { font-size: 13px; color: #6b7280; margin-top: 4px; }

        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .info-block p { font-size: 14px; color: #374151; line-height: 1.6; margin: 0; }
        .info-block strong { display: block; margin-bottom: 2px; }
        .section h3 { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; margin-bottom: 8px; font-weight: 700; }
        .status { display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; }

        .items-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 14px; }
        .items-table thead th { text-align: left; padding: 10px 12px; background: #f9fafb; font-size: 12px; text-transform: uppercase; color: #374151; font-weight: 700; border-bottom: 2px solid #e5e7eb; }
        .items-table td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; }
        .text-right { text-align: right; }
        .total-row td { font-weight: 700; font-size: 15px; border-top: 2px solid #e5e7eb; padding-top: 14px; }
        .loading-text { color: #6b7280; padding: 16px 0; }

        .discount-row td { color: #dc2626; }
        .discount-val { font-weight: 600; }

        .discount-editor { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; padding: 20px; margin-top: 16px; }
        .discount-editor h3 { margin: 0 0 14px; font-size: 14px; color: #111827; font-weight: 700; }
        .discount-fields { display: flex; gap: 12px; align-items: flex-end; flex-wrap: wrap; }
        .discount-field { display: flex; flex-direction: column; gap: 4px; }
        .discount-field label { font-size: 12px; color: #6b7280; font-weight: 600; }
        .discount-field input { width: 140px; height: 38px; border: 1px solid #d1d5db; border-radius: 8px; padding: 0 10px; font: inherit; font-size: 14px; }
        .discount-field input:focus { outline: none; border-color: #4f46e5; }
        .save-discount-btn { height: 38px; padding: 0 18px; border: none; border-radius: 8px; background: #4f46e5; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; }
        .save-discount-btn:hover { background: #4338ca; }

        @media (max-width: 768px) {
          .invoice-card { padding: 20px; }
          .info-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async ({ req }) => {
  try {
    const { verifyAdminSessionToken, ROLE_RESTRICTIONS } = await import('../../lib/auth/session')
    const cookieStr = req.headers?.cookie || ''
    const match = cookieStr.match(/mis_admin_session=([^;]+)/)
    if (match) {
      const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]))
      if (payload) {
        const restrictions = ROLE_RESTRICTIONS[payload.role] || []
        if (restrictions.includes('orders')) {
          return { redirect: { destination: '/portal-secure-99x', permanent: false } }
        }
      }
    }

    const db = getDbPool()
    const [rows] = await db.query(`
      SELECT o.*, c.full_name AS customer_name, c.email AS customer_email
      FROM orders o
      LEFT JOIN customers c ON c.id = o.customer_id
      WHERE o.deleted_at IS NULL
      ORDER BY o.created_at DESC
      LIMIT 200
    `)
    return { props: { initialOrders: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { initialOrders: [] } }
  }
}

export default OrdersPage
