# MIS Solution - Deployment & Project Notes

## Live Site
- **URL:** https://missolution.com.bd
- **Admin Panel:** https://missolution.com.bd/portal-secure-99x/access
- **Admin Login:** missolution2007@gmail.com / MIS@dmin2026#

## Hosting
- **Provider:** Dhaka Web Host (Enterprise plan)
- **Server:** server17.dhakawebhost.com (CloudLinux + LiteSpeed)
- **cPanel User:** missolut
- **App Path:** /home/missolut/mis-app/mis-frontend
- **Node.js:** 18.20.8 via cPanel Node.js App (Phusion Passenger)
- **Startup File:** app.js (custom server for Passenger)

## Database
- **Type:** MySQL
- **Host:** localhost
- **DB Name:** mis
- **User:** mis_user
- **Password:** mis_user@pass

## Key Technical Details
- **Framework:** Next.js 12.3.7 (Pages Router) + React 17
- **Auth:** NextAuth (customer Google OAuth + credentials) + Custom JWT (admin)
- **jose version:** v4 (CJS compatible - v6 ESM-only breaks on this hosting)
- **Build:** Must build locally (server RAM too low), push .next folder via git
- **Folder rename:** Git tracks as "MIS Frontend" but server uses "mis-frontend" (no spaces allowed in cPanel)

## Deploy Process
1. Make changes locally
2. `npm run build` (in MIS Frontend folder)
3. `git add -A && git commit -m "message" && git push origin main`
4. SSH to server:
```
source /home/missolut/nodevenv/mis-app/mis-frontend/18/bin/activate
cd ~/mis-app/mis-frontend
git pull origin main
cp -r ~/mis-app/"MIS Frontend"/.next/* .next/
cp -r ~/mis-app/"MIS Frontend"/pages/* pages/
cp -r ~/mis-app/"MIS Frontend"/lib/* lib/
cp ~/mis-app/"MIS Frontend"/components/* components/
cp ~/mis-app/"MIS Frontend"/middleware.js middleware.js
cp ~/mis-app/"MIS Frontend"/package.json package.json
touch tmp/restart.txt
```

## Environment Variables (server .env.local)
- DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
- ADMIN_SESSION_SECRET
- NEXTAUTH_URL=https://missolution.com.bd
- NEXTAUTH_SECRET
- GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
- NEXT_PUBLIC_TURNSTILE_SITE_KEY, TURNSTILE_SECRET_KEY (currently test keys)
- DEFAULT_DELIVERY_CHARGE=100
- NODE_ENV=production
- SMTP_HOST=localhost, SMTP_PORT=465
- SMTP_USER=noreply@missolution.com.bd
- SMTP_PASSWORD=noreply@missolution.
- SMTP_FROM=MIS Solution <noreply@missolution.com.bd>

## Email Accounts
- info@missolution.com.bd (general)
- noreply@missolution.com.bd (system emails, password resets)

## Known Issues / Notes
- Google OAuth: redirect URI configured for missolution.com.bd
- Turnstile: currently using TEST keys (admin login works but shows "for testing only")
- .next folder is committed to git (needed because server can't build)
- Admin token table uses customer_id + 1000000 offset to share password_reset_tokens table
- The "predev" script in package.json is Windows-only (doesn't affect production)

## Database Tables (21 + 1)
admin_users, advertisements, bus_corp_sol, career_applications, career_posts,
categories, category_specs, client_projects, company_contacts, customer_cart,
customers, delivery_zones, digi_services, newsletter_subscribers, order_items,
orders, page_contents, password_reset_tokens, products, promo_codes, quotes,
service_maintenance
