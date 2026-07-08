export const managedTableConfig = [
  { name: 'admin_users', label: 'Admin Users', group: 'Security' },
  { name: 'customers', label: 'Customers', group: 'CRM' },
  { name: 'newsletter_subscribers', label: 'Newsletter Subscribers', group: 'CRM' },
  { name: 'company_contacts', label: 'Company Contacts', group: 'Content' },
  { name: 'digi_services', label: 'Digital Services', group: 'Content' },
  { name: 'bus_corp_sol', label: 'Business & Corporate Solutions', group: 'Content' },
  { name: 'service_maintenance', label: 'Service & Maintenance', group: 'Content' },
  { name: 'page_contents', label: 'Page Contents', group: 'Content' },
  { name: 'career_posts', label: 'Career Posts', group: 'Content' },
  { name: 'advertisements', label: 'Advertisements', group: 'Content' },
  { name: 'client_projects', label: 'Client Projects', group: 'Content' },
  { name: 'category_specs', label: 'Category Specs', group: 'Catalog' },
  { name: 'products', label: 'Products', group: 'Catalog' },
  { name: 'orders', label: 'Orders', group: 'Commerce' },
  { name: 'promo_codes', label: 'Promo Codes', group: 'Commerce' },
  { name: 'delivery_zones', label: 'Delivery Zones', group: 'Commerce' },
]

export const managedTableNames = managedTableConfig.map((item) => item.name)
