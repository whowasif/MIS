-- ============================================================
-- MIS Solution - Complete Database Schema
-- Run this in phpMyAdmin on your Dhaka Webhost cPanel
-- Database: missolut_mis (or whatever your cPanel prefixed name is)
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. ADMIN USERS
-- ============================================================
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `role` ENUM('super_admin', 'senior_admin', 'junior_admin') NOT NULL DEFAULT 'junior_admin',
  `password_hash` VARCHAR(255) NOT NULL,
  `failed_login_attempts` INT NOT NULL DEFAULT 0,
  `last_login_ip` VARCHAR(45) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_admin_users_email` (`email`),
  UNIQUE KEY `uq_admin_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 2. CUSTOMERS
-- ============================================================
CREATE TABLE IF NOT EXISTS `customers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) DEFAULT '',
  `google_id` VARCHAR(255) DEFAULT NULL,
  `profile_image` VARCHAR(512) DEFAULT NULL,
  `phone_number` VARCHAR(50) DEFAULT NULL,
  `shipping_address` TEXT DEFAULT NULL,
  `is_email_verified` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_customers_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 3. CATEGORIES (hierarchical)
-- ============================================================
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `parent_id` INT DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_categories_slug` (`slug`),
  KEY `idx_categories_parent` (`parent_id`),
  KEY `idx_categories_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 4. CATEGORY SPECS (specs per category for product filtering)
-- ============================================================
CREATE TABLE IF NOT EXISTS `category_specs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `spec_name` VARCHAR(255) NOT NULL,
  `spec_label` VARCHAR(255) NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_filterable` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_category_specs_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 5. PRODUCTS
-- ============================================================
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `slug` VARCHAR(500) DEFAULT NULL,
  `short_desc` TEXT DEFAULT NULL,
  `long_desc` LONGTEXT DEFAULT NULL,
  `features` TEXT DEFAULT NULL,
  `specifications` JSON DEFAULT NULL,
  `brand` VARCHAR(255) DEFAULT NULL,
  `model` VARCHAR(255) DEFAULT NULL,
  `type` VARCHAR(100) DEFAULT 'Hardware',
  `category_id` INT DEFAULT NULL,
  `regular_price` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `price` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `stock_qty` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `thumbnail_1` VARCHAR(512) DEFAULT NULL,
  `thumbnail_2` VARCHAR(512) DEFAULT NULL,
  `photos` JSON DEFAULT NULL,
  `video_url` VARCHAR(512) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_products_category` (`category_id`),
  KEY `idx_products_active` (`is_active`, `deleted_at`),
  KEY `idx_products_slug` (`slug`(191)),
  KEY `idx_products_featured` (`is_featured`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 6. ORDERS
-- ============================================================
CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_no` VARCHAR(50) NOT NULL,
  `customer_id` INT DEFAULT NULL,
  `total_amount` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `delivery_charge` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `discount_amount` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `discount_percent` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  `shipping_address` TEXT DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'pending',
  `payment_method` VARCHAR(100) DEFAULT NULL,
  `promo_code` VARCHAR(100) DEFAULT NULL,
  `delivery_zone` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_orders_order_no` (`order_no`),
  KEY `idx_orders_customer` (`customer_id`),
  KEY `idx_orders_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 7. ORDER ITEMS
-- ============================================================
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT DEFAULT NULL,
  `product_name` VARCHAR(500) DEFAULT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `price_at_purchase` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_order_items_order` (`order_id`),
  KEY `idx_order_items_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 8. CUSTOMER CART
-- ============================================================
CREATE TABLE IF NOT EXISTS `customer_cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `product_slug` VARCHAR(500) NOT NULL,
  `product_name` VARCHAR(500) NOT NULL,
  `product_image` VARCHAR(512) DEFAULT '',
  `product_id` INT DEFAULT NULL,
  `price` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `quantity` INT NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_customer_cart_customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 9. PROMO CODES
-- ============================================================
CREATE TABLE IF NOT EXISTS `promo_codes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(100) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `discount_type` ENUM('percentage', 'fixed') NOT NULL DEFAULT 'fixed',
  `discount_value` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `min_order_amount` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `max_uses` INT NOT NULL DEFAULT 0,
  `used_count` INT NOT NULL DEFAULT 0,
  `valid_from` DATETIME DEFAULT NULL,
  `valid_until` DATETIME DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_promo_codes_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 10. DELIVERY ZONES
-- ============================================================
CREATE TABLE IF NOT EXISTS `delivery_zones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `zone_name` VARCHAR(255) NOT NULL,
  `charge` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `estimated_days` VARCHAR(50) DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 11. QUOTES (custom quote requests + contact inquiries)
-- ============================================================
CREATE TABLE IF NOT EXISTS `quotes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_name` VARCHAR(255) NOT NULL,
  `company_name` VARCHAR(255) DEFAULT '',
  `email` VARCHAR(255) NOT NULL,
  `project_type` VARCHAR(255) DEFAULT '',
  `requirements_text` TEXT NOT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'new',
  `admin_notes` TEXT DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_quotes_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 12. NEWSLETTER SUBSCRIBERS
-- ============================================================
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `subscribed_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_newsletter_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 13. COMPANY CONTACTS
-- ============================================================
CREATE TABLE IF NOT EXISTS `company_contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `branch_name` VARCHAR(255) DEFAULT 'Main Branch',
  `full_address` TEXT DEFAULT NULL,
  `google_map_embed_url` TEXT DEFAULT NULL,
  `latitude` DECIMAL(10,7) DEFAULT NULL,
  `longitude` DECIMAL(10,7) DEFAULT NULL,
  `primary_email` VARCHAR(255) DEFAULT NULL,
  `support_email` VARCHAR(255) DEFAULT NULL,
  `hotline_phone` VARCHAR(50) DEFAULT NULL,
  `whatsapp_number` VARCHAR(50) DEFAULT NULL,
  `facebook_url` VARCHAR(512) DEFAULT NULL,
  `linkedin_url` VARCHAR(512) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 14. DIGITAL SERVICES (content table)
-- ============================================================
CREATE TABLE IF NOT EXISTS `digi_services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_digi_services_slug` (`slug`),
  KEY `idx_digi_services_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 15. BUSINESS & CORPORATE SOLUTIONS (content table)
-- ============================================================
CREATE TABLE IF NOT EXISTS `bus_corp_sol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_bus_corp_sol_slug` (`slug`),
  KEY `idx_bus_corp_sol_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 16. SERVICE & MAINTENANCE (content table)
-- ============================================================
CREATE TABLE IF NOT EXISTS `service_maintenance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_service_maintenance_slug` (`slug`),
  KEY `idx_service_maintenance_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 17. PAGE CONTENTS (static pages managed from admin)
-- ============================================================
CREATE TABLE IF NOT EXISTS `page_contents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` LONGTEXT DEFAULT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_page_contents_slug` (`slug`),
  KEY `idx_page_contents_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 18. CAREER POSTS
-- ============================================================
CREATE TABLE IF NOT EXISTS `career_posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` LONGTEXT DEFAULT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_career_posts_slug` (`slug`),
  KEY `idx_career_posts_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 19. CAREER APPLICATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS `career_applications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `career_post_id` INT DEFAULT NULL,
  `applicant_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `cover_letter` TEXT DEFAULT NULL,
  `resume_path` VARCHAR(512) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_career_applications_post` (`career_post_id`),
  KEY `idx_career_applications_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 20. ADVERTISEMENTS (homepage carousel)
-- ============================================================
CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `image_url` VARCHAR(512) DEFAULT NULL,
  `link_url` VARCHAR(512) DEFAULT NULL,
  `product_id` INT DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_advertisements_active` (`is_active`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 21. CLIENT PROJECTS (portfolio/case studies)
-- ============================================================
CREATE TABLE IF NOT EXISTS `client_projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `description` LONGTEXT DEFAULT NULL,
  `icon_url` VARCHAR(512) DEFAULT NULL,
  `client_name` VARCHAR(255) DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'active',
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_client_projects_slug` (`slug`),
  KEY `idx_client_projects_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================
-- SEED DATA: Categories
-- ============================================================

-- Main Categories
INSERT INTO categories (id, parent_id, name, slug, status, display_order) VALUES
(1, NULL, 'Desktop', 'desktop', 'active', 1),
(2, NULL, 'Laptop', 'laptop', 'active', 2),
(3, NULL, 'Component', 'component', 'active', 3),
(4, NULL, 'Monitor', 'monitor', 'active', 4),
(5, NULL, 'Power', 'power', 'active', 5),
(6, NULL, 'Office Equipment', 'office-equipment', 'active', 6),
(7, NULL, 'Camera', 'camera', 'active', 7),
(8, NULL, 'Security', 'security', 'active', 8),
(9, NULL, 'Networking', 'networking', 'active', 9),
(10, NULL, 'Software', 'software', 'active', 10),
(11, NULL, 'Server & Storage', 'server-storage', 'active', 11),
(12, NULL, 'Accessories', 'accessories', 'active', 12),
(13, NULL, 'Gadget', 'gadget', 'active', 13),
(14, NULL, 'Gaming', 'gaming', 'active', 14),
(15, NULL, 'TV', 'tv', 'active', 15);

-- Desktop Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(1, 'Desktop Offer', 'desktop-offer', 'active', 1),
(1, 'Star PC', 'star-pc', 'active', 2),
(1, 'Gaming PC', 'gaming-pc', 'active', 3),
(1, 'Brand PC', 'brand-pc', 'active', 4),
(1, 'All-in-One PC', 'all-in-one-pc', 'active', 5),
(1, 'AI PC', 'ai-pc', 'active', 6),
(1, 'Portable Mini PC', 'portable-mini-pc', 'active', 7),
(1, 'Apple Mac Mini', 'apple-mac-mini', 'active', 8),
(1, 'Apple iMac', 'apple-imac', 'active', 9),
(1, 'Apple Mac Studio', 'apple-mac-studio', 'active', 10),
(1, 'Apple Mac Pro', 'apple-mac-pro', 'active', 11);

-- Laptop Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(2, 'All Laptop', 'all-laptop', 'active', 1),
(2, 'Gaming Laptop', 'gaming-laptop', 'active', 2),
(2, 'Premium Ultrabook', 'premium-ultrabook', 'active', 3),
(2, 'Laptop Bag', 'laptop-bag', 'active', 4),
(2, 'Laptop Accessories', 'laptop-accessories', 'active', 5);

-- Component Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(3, 'Processor', 'processor', 'active', 1),
(3, 'CPU Cooler', 'cpu-cooler', 'active', 2),
(3, 'Water / Liquid Cooling', 'water-liquid-cooling', 'active', 3),
(3, 'Motherboard', 'motherboard', 'active', 4),
(3, 'Graphics Card', 'graphics-card', 'active', 5),
(3, 'RAM (Desktop)', 'ram-desktop', 'active', 6),
(3, 'RAM (Laptop)', 'ram-laptop', 'active', 7),
(3, 'Power Supply', 'power-supply', 'active', 8),
(3, 'Hard Disk Drive', 'hard-disk-drive', 'active', 9),
(3, 'Portable Hard Disk Drive', 'portable-hard-disk-drive', 'active', 10),
(3, 'SSD', 'ssd', 'active', 11),
(3, 'Portable SSD', 'portable-ssd', 'active', 12),
(3, 'Casing', 'casing', 'active', 13),
(3, 'Casing Cooler', 'casing-cooler', 'active', 14),
(3, 'Optical Disk Drive', 'optical-disk-drive', 'active', 15),
(3, 'Vertical GPU Holder', 'vertical-gpu-holder', 'active', 16);

-- Monitor Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(4, 'Gaming Monitor', 'gaming-monitor', 'active', 1),
(4, 'Curved Monitor', 'curved-monitor', 'active', 2),
(4, 'Touch Monitor', 'touch-monitor', 'active', 3),
(4, '4K Monitor', '4k-monitor', 'active', 4),
(4, 'Portable Monitor', 'portable-monitor', 'active', 5),
(4, 'Monitor Arm', 'monitor-arm', 'active', 6);

-- Power Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(5, 'UPS', 'ups', 'active', 1),
(5, 'Online UPS', 'online-ups', 'active', 2),
(5, 'Mini UPS', 'mini-ups', 'active', 3),
(5, 'Portable Power Station', 'portable-power-station', 'active', 4),
(5, 'IPS', 'ips', 'active', 5),
(5, 'UPS Battery', 'ups-battery', 'active', 6),
(5, 'Voltage Stabilizer', 'voltage-stabilizer', 'active', 7),
(5, 'Inverter', 'inverter', 'active', 8),
(5, 'Solar Panel', 'solar-panel', 'active', 9);

-- Office Equipment Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(6, 'Projector', 'projector', 'active', 1),
(6, 'Conference System', 'conference-system', 'active', 2),
(6, 'Interactive Flat Panel', 'interactive-flat-panel', 'active', 3),
(6, 'Printer', 'printer', 'active', 4),
(6, 'Laser Printer', 'laser-printer', 'active', 5),
(6, 'Scanner', 'scanner', 'active', 6),
(6, 'Barcode Scanner', 'barcode-scanner', 'active', 7),
(6, 'Toner', 'toner', 'active', 8),
(6, 'IP Phone', 'ip-phone', 'active', 9),
(6, 'Paper Shredder', 'paper-shredder', 'active', 10);

-- Camera Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(7, 'Action Camera', 'action-camera', 'active', 1),
(7, 'DSLR', 'dslr', 'active', 2),
(7, 'Mirrorless Camera', 'mirrorless-camera', 'active', 3),
(7, 'Dash Cam', 'dash-cam', 'active', 4),
(7, 'Camera Accessories', 'camera-accessories', 'active', 5),
(7, 'Camera Tripod', 'camera-tripod', 'active', 6);

-- Security Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(8, 'IP Camera', 'ip-camera', 'active', 1),
(8, 'CC Camera', 'cc-camera', 'active', 2),
(8, 'CC Camera Package', 'cc-camera-package', 'active', 3),
(8, 'DVR', 'dvr', 'active', 4),
(8, 'NVR', 'nvr', 'active', 5),
(8, 'Door Lock', 'door-lock', 'active', 6),
(8, 'Access Control', 'access-control', 'active', 7),
(8, 'KVM Switch', 'kvm-switch', 'active', 8);

-- Networking Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(9, 'Router', 'router', 'active', 1),
(9, 'Pocket Router', 'pocket-router', 'active', 2),
(9, 'WiFi Range Extender', 'wifi-range-extender', 'active', 3),
(9, 'Access Point', 'access-point', 'active', 4),
(9, 'Network Switch', 'network-switch', 'active', 5),
(9, 'Firewall', 'firewall', 'active', 6),
(9, 'Networking Cable', 'networking-cable', 'active', 7),
(9, 'Patch Panel', 'patch-panel', 'active', 8);

-- Software Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(10, 'Operating System', 'operating-system', 'active', 1),
(10, 'Office Application', 'office-application', 'active', 2),
(10, 'Antivirus', 'antivirus', 'active', 3),
(10, 'Adobe', 'adobe', 'active', 4),
(10, 'Cloud Solutions', 'cloud-solutions', 'active', 5);

-- Server & Storage Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(11, 'Server', 'server', 'active', 1),
(11, 'GPU Server', 'gpu-server', 'active', 2),
(11, 'Server Rack', 'server-rack', 'active', 3),
(11, 'Workstation', 'workstation', 'active', 4),
(11, 'NAS Storage', 'nas-storage', 'active', 5),
(11, 'Server HDD', 'server-hdd', 'active', 6),
(11, 'Server RAM', 'server-ram', 'active', 7),
(11, 'Server SSD', 'server-ssd', 'active', 8);

-- Accessories Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(12, 'Keyboard', 'keyboard', 'active', 1),
(12, 'Mouse', 'mouse', 'active', 2),
(12, 'Headphone', 'headphone', 'active', 3),
(12, 'Speaker & Home Theater', 'speaker-home-theater', 'active', 4),
(12, 'Webcam', 'webcam', 'active', 5),
(12, 'Cable', 'cable', 'active', 6),
(12, 'Hubs & Docks', 'hubs-docks', 'active', 7),
(12, 'Microphone', 'microphone', 'active', 8),
(12, 'Pen Drive', 'pen-drive', 'active', 9),
(12, 'Power Strip', 'power-strip', 'active', 10);

-- Gadget Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(13, 'Smart Watch', 'smart-watch', 'active', 1),
(13, 'Earbuds', 'earbuds', 'active', 2),
(13, 'Power Bank', 'power-bank', 'active', 3),
(13, 'Trimmer', 'trimmer', 'active', 4),
(13, 'Drones', 'drones', 'active', 5),
(13, 'TV Box', 'tv-box', 'active', 6),
(13, 'Smart Ring', 'smart-ring', 'active', 7);

-- Gaming Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(14, 'Gaming Chair', 'gaming-chair', 'active', 1),
(14, 'Gaming Desk', 'gaming-desk', 'active', 2),
(14, 'Gaming Keyboard', 'gaming-keyboard', 'active', 3),
(14, 'Gaming Mouse', 'gaming-mouse', 'active', 4),
(14, 'Gaming Headphone', 'gaming-headphone', 'active', 5),
(14, 'Gamepad', 'gamepad', 'active', 6),
(14, 'Gaming Console', 'gaming-console', 'active', 7),
(14, 'VR', 'vr', 'active', 8);

-- TV Subcategories
INSERT INTO categories (parent_id, name, slug, status, display_order) VALUES
(15, 'LED TV', 'led-tv', 'active', 1),
(15, 'Smart TV', 'smart-tv', 'active', 2),
(15, 'Android TV', 'android-tv', 'active', 3),
(15, '4K TV', '4k-tv', 'active', 4),
(15, 'TV Stand & Wall Mount', 'tv-stand-wall-mount', 'active', 5);

-- ============================================================
-- SEED DATA: Content Tables
-- ============================================================

INSERT INTO digi_services (name, slug, description, icon_url, status, display_order) VALUES
('Service 1', 'service-1', 'Description for Service 1', '/icons/service-1.png', 'active', 10),
('Service 2', 'service-2', 'Description for Service 2', '/icons/service-2.png', 'active', 20),
('Service 3', 'service-3', 'Description for Service 3', '/icons/service-3.png', 'active', 30);

INSERT INTO bus_corp_sol (name, slug, description, icon_url, status, display_order) VALUES
('Power Solutions', 'power-solutions', 'UPS, Batteries, and Monitoring Systems', '/icons/power-solutions.png', 'active', 10),
('Networking', 'networking', 'Routers, Switches, and Network Accessories', '/icons/networking.png', 'active', 20),
('Printing Solutions', 'printing-solutions', 'Printers, Calendars, and Notebooks', '/icons/printing-solutions.png', 'active', 30),
('Security Solutions', 'security-solutions', 'CCTV, Access Control, and Fire Alarms', '/icons/security-solutions.png', 'active', 40),
('Enterprise Solutions', 'enterprise-solutions', 'Data Center, Video Conferencing, and Audio Systems', '/icons/enterprise-solutions.png', 'active', 50);

INSERT INTO service_maintenance (name, slug, description, icon_url, status, display_order) VALUES
('Maintenance 1', 'maintenance-1', 'Description for Maintenance 1', '/icons/maintenance-1.png', 'active', 10),
('Maintenance 2', 'maintenance-2', 'Description for Maintenance 2', '/icons/maintenance-2.png', 'active', 20),
('Maintenance 3', 'maintenance-3', 'Description for Maintenance 3', '/icons/maintenance-3.png', 'active', 30);

-- ============================================================
-- SEED DATA: Initial Delivery Zones
-- ============================================================

INSERT INTO delivery_zones (zone_name, charge, estimated_days, is_active) VALUES
('Inside Dhaka', 60.00, '1-2 days', 1),
('Outside Dhaka', 120.00, '3-5 days', 1),
('Remote Areas', 200.00, '5-7 days', 1);

-- ============================================================
-- SEED DATA: Your first Super Admin account
-- Password: Admin@2026! (bcrypt hash below)
-- CHANGE THIS PASSWORD IMMEDIATELY after first login!
-- ============================================================

INSERT INTO admin_users (name, username, email, role, password_hash) VALUES
('Super Admin', 'superadmin', 'admin@mrssolution.com.bd', 'super_admin', '$2b$12$3su1XAfqkN6YjT75BFN7fOo7LvMzF/T3aHMhcD.Wzh6jtotgnxfii');

-- ============================================================
-- DONE! Your database is ready.
-- ============================================================
