export const managedTableConfig = [
  { name: 'admin_users', label: 'Admin Users', group: 'Security' },
  { name: 'customers', label: 'Customers', group: 'CRM' },
  { name: 'company_contacts', label: 'Company Contacts', group: 'Content' },
  { name: 'categories', label: 'Categories', group: 'Catalog' },
  { name: 'cart_sessions', label: 'Cart Sessions', group: 'Commerce' },
  { name: 'products', label: 'Products', group: 'Catalog' },
  { name: 'page_contents', label: 'Page Contents', group: 'Content' },
  { name: 'orders', label: 'Orders', group: 'Commerce' },
  { name: 'order_items', label: 'Order Items', group: 'Commerce' },
  { name: 'quotes', label: 'Quotes', group: 'Sales' },
]

export const managedTableNames = managedTableConfig.map((item) => item.name)
