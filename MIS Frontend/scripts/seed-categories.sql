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

-- Monitor Subcategories (types only, not brands)
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
