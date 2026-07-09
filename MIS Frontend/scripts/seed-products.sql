-- ============================================================
-- MIS Solution - Product Seed Data (Part 1)
-- Run SELECT id, name FROM categories WHERE parent_id IS NOT NULL;
-- to verify your subcategory IDs before running this.
-- ============================================================
-- IMPORTANT: Adjust category_id values if your IDs differ!
-- Expected mapping (based on seed order):
-- 16=Desktop Offer, 17=Star PC, 18=Gaming PC, 19=Brand PC
-- 20=All-in-One PC, 21=AI PC, 22=Portable Mini PC
-- 23=Apple Mac Mini, 24=Apple iMac, 25=Apple Mac Studio, 26=Apple Mac Pro
-- 27=All Laptop, 28=Gaming Laptop, 29=Premium Ultrabook
-- 30=Laptop Bag, 31=Laptop Accessories
-- 32=Processor, 33=CPU Cooler, 34=Water/Liquid Cooling
-- 35=Motherboard, 36=Graphics Card, 37=RAM Desktop, 38=RAM Laptop
-- 39=Power Supply, 40=HDD, 41=Portable HDD, 42=SSD, 43=Portable SSD
-- 44=Casing, 45=Casing Cooler, 46=Optical Drive, 47=Vertical GPU Holder
-- 48=Gaming Monitor, 49=Curved Monitor, 50=Touch Monitor
-- 51=4K Monitor, 52=Portable Monitor, 53=Monitor Arm
-- 54=UPS, 55=Online UPS, 56=Mini UPS, 57=Portable Power Station
-- 58=IPS, 59=UPS Battery, 60=Voltage Stabilizer, 61=Inverter, 62=Solar Panel
-- 63=Projector, 64=Conference System, 65=Interactive Flat Panel
-- 66=Printer, 67=Laser Printer, 68=Scanner, 69=Barcode Scanner
-- 70=Toner, 71=IP Phone, 72=Paper Shredder
-- 73=Action Camera, 74=DSLR, 75=Mirrorless, 76=Dash Cam
-- 77=Camera Accessories, 78=Camera Tripod
-- 79=IP Camera, 80=CC Camera, 81=CC Camera Package
-- 82=DVR, 83=NVR, 84=Door Lock, 85=Access Control, 86=KVM Switch
-- 87=Router, 88=Pocket Router, 89=WiFi Range Extender
-- 90=Access Point, 91=Network Switch, 92=Firewall
-- 93=Networking Cable, 94=Patch Panel
-- 95=Operating System, 96=Office Application, 97=Antivirus
-- 98=Adobe, 99=Cloud Solutions
-- 100=Server, 101=GPU Server, 102=Server Rack, 103=Workstation
-- 104=NAS Storage, 105=Server HDD, 106=Server RAM, 107=Server SSD
-- 108=Keyboard, 109=Mouse, 110=Headphone
-- 111=Speaker & Home Theater, 112=Webcam, 113=Cable
-- 114=Hubs & Docks, 115=Microphone, 116=Pen Drive, 117=Power Strip
-- 118=Smart Watch, 119=Earbuds, 120=Power Bank
-- 121=Trimmer, 122=Drones, 123=TV Box, 124=Smart Ring
-- 125=Gaming Chair, 126=Gaming Desk, 127=Gaming Keyboard
-- 128=Gaming Mouse, 129=Gaming Headphone, 130=Gamepad
-- 131=Gaming Console, 132=VR
-- 133=LED TV, 134=Smart TV, 135=Android TV, 136=4K TV
-- 137=TV Stand & Wall Mount
-- ============================================================

SET NAMES utf8mb4;

-- ============================================================
-- PROCESSORS (category_id = 32)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(32, 'Component', 'AMD', 'Ryzen 5 9600X', 'AMD Ryzen 5 9600X Processor', 'amd-ryzen-5-9600x-processor', 'AMD Ryzen 5 9600X Desktop Processor with 6 Cores, 12 Threads, 4.7GHz Base Clock, 5.4GHz Boost Clock, AM5 Socket, 65W TDP.', 24740.00, 25500.00, 15, '{"processor-brand":"AMD","processor-model":"Ryzen 5 9600X","socket":"AM5","size":"6 Cores / 12 Threads","speed":"4.7GHz - 5.4GHz","power":"65W"}', 1, 1),
(32, 'Component', 'Intel', 'Core i5-14400F', 'Intel Core i5-14400F 14th Gen Processor', 'intel-core-i5-14400f-processor', 'Intel Core i5-14400F 14th Gen Raptor Lake Processor with 10 Cores (6P+4E), 16 Threads, up to 4.7GHz, LGA1700 Socket.', 18500.00, 19200.00, 20, '{"processor-brand":"Intel","processor-model":"Core i5-14400F","socket":"LGA1700","size":"10 Cores / 16 Threads","speed":"2.5GHz - 4.7GHz","power":"65W"}', 1, 1),
(32, 'Component', 'AMD', 'Ryzen 7 7800X3D', 'AMD Ryzen 7 7800X3D Processor', 'amd-ryzen-7-7800x3d-processor', 'AMD Ryzen 7 7800X3D with 3D V-Cache, 8 Cores, 16 Threads, 4.2GHz Base, 5.0GHz Boost, AM5 Socket. Best gaming processor.', 38500.00, 40000.00, 8, '{"processor-brand":"AMD","processor-model":"Ryzen 7 7800X3D","socket":"AM5","size":"8 Cores / 16 Threads","speed":"4.2GHz - 5.0GHz","power":"120W"}', 1, 1);

-- ============================================================
-- GRAPHICS CARDS (category_id = 36)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(36, 'Component', 'MSI', 'RTX 4060 Gaming X', 'MSI GeForce RTX 4060 Gaming X 8G Graphics Card', 'msi-rtx-4060-gaming-x-8g', 'MSI GeForce RTX 4060 Gaming X 8GB GDDR6, Boost Clock 2610MHz, PCI-E 4.0, DLSS 3.0, Ray Tracing.', 42500.00, 44000.00, 12, '{"size":"8GB","type":"GDDR6","resolution":"up to 7680x4320","speed":"2610 MHz Boost","interface":"PCIe 4.0 x8"}', 1, 1),
(36, 'Component', 'Gigabyte', 'RTX 4070 Windforce OC', 'Gigabyte GeForce RTX 4070 Windforce OC 12G', 'gigabyte-rtx-4070-windforce-oc-12g', 'Gigabyte GeForce RTX 4070 Windforce OC 12GB GDDR6X, Boost Clock 2490MHz, Triple Fan Cooling, Ada Lovelace Architecture.', 72000.00, 75000.00, 8, '{"size":"12GB","type":"GDDR6X","resolution":"up to 7680x4320","speed":"2490 MHz Boost","interface":"PCIe 4.0 x16"}', 1, 1),
(36, 'Component', 'ZOTAC', 'RTX 4070 Ti Super', 'ZOTAC Gaming RTX 4070 Ti Super 16GB Graphics Card', 'zotac-rtx-4070-ti-super-16gb', 'ZOTAC Gaming GeForce RTX 4070 Ti Super 16GB GDDR6X, 8448 CUDA Cores, Boost 2640MHz, IceStorm 2.0 Cooling.', 95000.00, 98000.00, 5, '{"size":"16GB","type":"GDDR6X","resolution":"up to 7680x4320","speed":"2640 MHz Boost","interface":"PCIe 4.0 x16"}', 1, 1);

-- ============================================================
-- MOTHERBOARDS (category_id = 35)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(35, 'Component', 'MSI', 'MAG B650 Tomahawk', 'MSI MAG B650 Tomahawk WiFi AM5 ATX Motherboard', 'msi-mag-b650-tomahawk-wifi', 'MSI MAG B650 Tomahawk WiFi ATX Motherboard, AMD AM5 Socket, DDR5 Support, PCIe 5.0, 2.5G LAN, WiFi 6E.', 22500.00, 23500.00, 10, '{"brand":"MSI","model":"MAG B650 Tomahawk WiFi","socket":"AM5","form-factor":"ATX","type":"DDR5"}', 1, 0),
(35, 'Component', 'ASUS', 'ROG Strix B760-F', 'ASUS ROG Strix B760-F Gaming WiFi LGA1700 Motherboard', 'asus-rog-strix-b760-f-gaming-wifi', 'ASUS ROG Strix B760-F Gaming WiFi II, Intel LGA1700, DDR5, PCIe 5.0 M.2, WiFi 6E, 2.5Gb Ethernet.', 26000.00, 27500.00, 8, '{"brand":"ASUS","model":"ROG Strix B760-F Gaming WiFi","socket":"LGA1700","form-factor":"ATX","type":"DDR5"}', 1, 0),
(35, 'Component', 'Gigabyte', 'B550M DS3H', 'Gigabyte B550M DS3H AM4 Micro-ATX Motherboard', 'gigabyte-b550m-ds3h', 'Gigabyte B550M DS3H Micro-ATX, AMD AM4, DDR4 up to 128GB, PCIe 4.0, M.2, USB 3.2 Gen1.', 9200.00, 9800.00, 25, '{"brand":"Gigabyte","model":"B550M DS3H","socket":"AM4","form-factor":"Micro-ATX","type":"DDR4"}', 1, 0);

-- ============================================================
-- RAM DESKTOP (category_id = 37)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(37, 'Component', 'Corsair', 'Vengeance DDR5 16GB', 'Corsair Vengeance DDR5 16GB 5600MHz Desktop RAM', 'corsair-vengeance-ddr5-16gb-5600mhz', 'Corsair Vengeance DDR5 16GB 5600MHz CL36 Desktop Memory, Intel XMP 3.0 Ready, Black Heatspreader.', 5800.00, 6200.00, 30, '{"brand":"Corsair","size":"16GB","type":"DDR5","speed":"5600MHz","interface":"DIMM"}', 1, 0),
(37, 'Component', 'Kingston', 'FURY Beast DDR4 16GB', 'Kingston FURY Beast 16GB DDR4 3200MHz Desktop RAM', 'kingston-fury-beast-16gb-ddr4-3200mhz', 'Kingston FURY Beast 16GB DDR4 3200MHz CL16 Desktop Memory with Heat Spreader, Plug N Play.', 4200.00, 4500.00, 40, '{"brand":"Kingston","size":"16GB","type":"DDR4","speed":"3200MHz","interface":"DIMM"}', 1, 0),
(37, 'Component', 'G.SKILL', 'Trident Z5 RGB 32GB', 'G.SKILL Trident Z5 RGB 32GB (2x16GB) DDR5 6000MHz', 'gskill-trident-z5-rgb-32gb-ddr5-6000mhz', 'G.SKILL Trident Z5 RGB 32GB (2x16GB) DDR5 6000MHz CL30 Dual Channel Kit, Intel XMP 3.0.', 13500.00, 14200.00, 10, '{"brand":"G.SKILL","size":"32GB (2x16GB)","type":"DDR5","speed":"6000MHz","interface":"DIMM"}', 1, 1);

-- ============================================================
-- SSD (category_id = 42)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(42, 'Component', 'Samsung', '990 Pro 1TB', 'Samsung 990 Pro 1TB PCIe 4.0 NVMe M.2 SSD', 'samsung-990-pro-1tb-nvme', 'Samsung 990 Pro 1TB M.2 NVMe SSD, Read 7450MB/s, Write 6900MB/s, PCIe Gen 4.0 x4, V-NAND TLC.', 10500.00, 11200.00, 20, '{"brand":"Samsung","size":"1TB","type":"NVMe M.2","speed":"7450/6900 MB/s","interface":"PCIe 4.0 x4"}', 1, 1),
(42, 'Component', 'WD', 'Black SN770 512GB', 'WD Black SN770 512GB NVMe M.2 SSD', 'wd-black-sn770-512gb', 'Western Digital Black SN770 512GB M.2 2280 NVMe SSD, Read 5000MB/s, Write 4000MB/s, PCIe Gen 4.0.', 5200.00, 5600.00, 30, '{"brand":"Western Digital","size":"512GB","type":"NVMe M.2","speed":"5000/4000 MB/s","interface":"PCIe 4.0 x4"}', 1, 0),
(42, 'Component', 'Kingston', 'NV2 256GB', 'Kingston NV2 256GB PCIe 4.0 NVMe M.2 SSD', 'kingston-nv2-256gb-nvme', 'Kingston NV2 256GB M.2 2280 NVMe SSD, Read 3500MB/s, Write 1300MB/s, Compact Single-Sided Design.', 2600.00, 2900.00, 50, '{"brand":"Kingston","size":"256GB","type":"NVMe M.2","speed":"3500/1300 MB/s","interface":"PCIe 4.0 x4"}', 1, 0);

-- ============================================================
-- GAMING MONITOR (category_id = 48)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(48, 'Monitor', 'ASUS', 'VG249Q1A', 'ASUS TUF Gaming VG249Q1A 24" FHD 165Hz Monitor', 'asus-tuf-vg249q1a-165hz', 'ASUS TUF Gaming 23.8" FHD IPS, 165Hz, 1ms MPRT, FreeSync Premium, Shadow Boost, ELMB.', 19500.00, 20500.00, 12, '{"brand":"ASUS","display-size":"23.8 inch","resolution":"FHD 1920x1080","panel-type":"IPS","refresh-rate":"165Hz","response-time":"1ms MPRT","adaptive-sync":"FreeSync Premium"}', 1, 1),
(48, 'Monitor', 'LG', '27GP850-B', 'LG UltraGear 27GP850-B 27" QHD 165Hz Gaming Monitor', 'lg-ultragear-27gp850-b', 'LG UltraGear 27" QHD Nano IPS, 165Hz (OC 180Hz), 1ms GtG, G-Sync Compatible, HDR400, DCI-P3 98%.', 38000.00, 40000.00, 6, '{"brand":"LG","display-size":"27 inch","resolution":"QHD 2560x1440","panel-type":"Nano IPS","refresh-rate":"165Hz","response-time":"1ms GtG","adaptive-sync":"G-Sync Compatible"}', 1, 1),
(48, 'Monitor', 'MSI', 'G2712F', 'MSI G2712F 27" FHD 180Hz IPS Gaming Monitor', 'msi-g2712f-180hz', 'MSI G2712F 27" FHD IPS Gaming Monitor, 180Hz Refresh Rate, 1ms GtG, FreeSync Premium, Night Vision.', 21000.00, 22000.00, 15, '{"brand":"MSI","display-size":"27 inch","resolution":"FHD 1920x1080","panel-type":"IPS","refresh-rate":"180Hz","response-time":"1ms GtG","adaptive-sync":"FreeSync Premium"}', 1, 0);

-- ============================================================
-- ROUTER (category_id = 87)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(87, 'Networking', 'TP-Link', 'Archer AX55', 'TP-Link Archer AX55 AX3000 Dual Band WiFi 6 Router', 'tp-link-archer-ax55-wifi6', 'TP-Link Archer AX55 AX3000 Dual Band WiFi 6 Gigabit Router, OFDMA, MU-MIMO, 4 Gigabit Ports, OneMesh.', 7200.00, 7800.00, 20, '{"brand":"TP-Link","type":"WiFi 6 Router","wifi-standard":"WiFi 6 (802.11ax)","speed":"3000Mbps (2402+574)","frequency-band":"Dual Band (2.4GHz + 5GHz)","ports":"4 Gigabit LAN, 1 Gigabit WAN"}', 1, 1),
(87, 'Networking', 'TP-Link', 'Archer C6U', 'TP-Link Archer C6U AC1200 Dual Band Gigabit Router', 'tp-link-archer-c6u', 'TP-Link Archer C6U AC1200 Dual Band MU-MIMO Gigabit WiFi Router with 5 Gigabit Ports, 4 Antennas.', 3800.00, 4200.00, 30, '{"brand":"TP-Link","type":"WiFi 5 Router","wifi-standard":"WiFi 5 (802.11ac)","speed":"1200Mbps (867+300)","frequency-band":"Dual Band (2.4GHz + 5GHz)","ports":"4 Gigabit LAN, 1 Gigabit WAN"}', 1, 0),
(87, 'Networking', 'Tenda', 'TX27 Pro', 'Tenda TX27 Pro AX5700 Tri-Band WiFi 6E Router', 'tenda-tx27-pro-wifi6e', 'Tenda TX27 Pro AX5700 Tri-Band WiFi 6E Router, 6GHz Band Support, 8 Streams, OFDMA, 160MHz Channel.', 12500.00, 13500.00, 8, '{"brand":"Tenda","type":"WiFi 6E Router","wifi-standard":"WiFi 6E (802.11axe)","speed":"5700Mbps","frequency-band":"Tri-Band (2.4+5+6GHz)","ports":"4 Gigabit LAN, 1 Gigabit WAN"}', 1, 1);

-- ============================================================
-- UPS (category_id = 54)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(54, 'Power', 'APC', 'BX1100C-IN', 'APC Back-UPS BX1100C-IN 1100VA UPS', 'apc-bx1100c-in-1100va', 'APC Back-UPS 1100VA/660W, 4 India Outlets, AVR, USB Charging Port, Battery Backup & Surge Protection.', 8500.00, 9000.00, 15, '{"brand":"APC","capacity":"1100VA / 660W","type":"Line Interactive","backup-time":"15-20 min (half load)","num-outlets":"4"}', 1, 1),
(54, 'Power', 'Power Guard', 'PG1200VA-PS', 'Power Guard 1200VA Offline UPS', 'power-guard-1200va-offline-ups', 'Power Guard 1200VA Offline UPS with AVR, Metal Body, LED Indicator, Overload Protection.', 4500.00, 5000.00, 25, '{"brand":"Power Guard","capacity":"1200VA","type":"Offline","backup-time":"10-15 min","num-outlets":"4"}', 1, 0),
(54, 'Power', 'CyberPower', 'UT1500E', 'CyberPower UT1500E 1500VA UPS', 'cyberpower-ut1500e-1500va', 'CyberPower UT1500E 1500VA/900W Line Interactive UPS, 4 Outlets, AVR, USB Port, LED Status.', 9800.00, 10500.00, 10, '{"brand":"CyberPower","capacity":"1500VA / 900W","type":"Line Interactive","backup-time":"20-25 min (half load)","num-outlets":"4"}', 1, 0);

-- ============================================================
-- GAMING LAPTOP (category_id = 28)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(28, 'Laptop', 'ASUS', 'TUF Gaming A15', 'ASUS TUF Gaming A15 FA507NV Ryzen 7 RTX 4060 Laptop', 'asus-tuf-gaming-a15-fa507nv', 'ASUS TUF Gaming A15, AMD Ryzen 7 7735HS, 16GB DDR5, 512GB SSD, RTX 4060 8GB, 15.6" FHD 144Hz, Windows 11.', 125000.00, 132000.00, 6, '{"processor-brand":"AMD","processor-model":"Ryzen 7 7735HS","ram":"16GB DDR5","storage":"512GB NVMe SSD","display-size":"15.6 inch","display-resolution":"FHD 1920x1080 144Hz","graphics-card":"NVIDIA RTX 4060 8GB","operating-system":"Windows 11","weight":"2.2 kg"}', 1, 1),
(28, 'Laptop', 'Lenovo', 'Legion 5i Pro', 'Lenovo Legion 5i Pro 16" Core i7 RTX 4070 Gaming Laptop', 'lenovo-legion-5i-pro-i7-rtx4070', 'Lenovo Legion 5i Pro, Intel Core i7-13700H, 16GB DDR5, 1TB SSD, RTX 4070 8GB, 16" WQXGA 165Hz, Windows 11.', 175000.00, 185000.00, 4, '{"processor-brand":"Intel","processor-model":"Core i7-13700H","ram":"16GB DDR5","storage":"1TB NVMe SSD","display-size":"16 inch","display-resolution":"WQXGA 2560x1600 165Hz","graphics-card":"NVIDIA RTX 4070 8GB","operating-system":"Windows 11","weight":"2.5 kg"}', 1, 1),
(28, 'Laptop', 'MSI', 'Katana 15 B13V', 'MSI Katana 15 B13VFK Core i7 RTX 4060 Gaming Laptop', 'msi-katana-15-b13vfk-rtx4060', 'MSI Katana 15, Intel Core i7-13620H, 16GB DDR5, 512GB SSD, RTX 4060 8GB, 15.6" FHD 144Hz.', 115000.00, 120000.00, 8, '{"processor-brand":"Intel","processor-model":"Core i7-13620H","ram":"16GB DDR5","storage":"512GB NVMe SSD","display-size":"15.6 inch","display-resolution":"FHD 1920x1080 144Hz","graphics-card":"NVIDIA RTX 4060 8GB","operating-system":"Windows 11","weight":"2.25 kg"}', 1, 0);

-- ============================================================
-- ALL LAPTOP (category_id = 27)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(27, 'Laptop', 'HP', 'ProBook 450 G10', 'HP ProBook 450 G10 Core i5 13th Gen Laptop', 'hp-probook-450-g10-i5-13th', 'HP ProBook 450 G10, Intel Core i5-1335U, 8GB DDR4, 512GB SSD, 15.6" FHD IPS, Fingerprint, Windows 11 Pro.', 72000.00, 76000.00, 10, '{"processor-brand":"Intel","processor-model":"Core i5-1335U","ram":"8GB DDR4","storage":"512GB SSD","display-size":"15.6 inch","display-resolution":"FHD 1920x1080","operating-system":"Windows 11 Pro","weight":"1.79 kg"}', 1, 0),
(27, 'Laptop', 'Lenovo', 'IdeaPad Slim 3', 'Lenovo IdeaPad Slim 3 Ryzen 5 7530U Laptop', 'lenovo-ideapad-slim-3-ryzen5-7530u', 'Lenovo IdeaPad Slim 3, AMD Ryzen 5 7530U, 8GB DDR4, 512GB SSD, 15.6" FHD IPS, Fingerprint Reader.', 52000.00, 55000.00, 15, '{"processor-brand":"AMD","processor-model":"Ryzen 5 7530U","ram":"8GB DDR4","storage":"512GB SSD","display-size":"15.6 inch","display-resolution":"FHD 1920x1080","operating-system":"Windows 11","weight":"1.63 kg"}', 1, 0),
(27, 'Laptop', 'Dell', 'Vostro 3520', 'Dell Vostro 3520 Core i5 12th Gen Laptop', 'dell-vostro-3520-i5-12th', 'Dell Vostro 3520, Intel Core i5-1235U, 8GB DDR4, 512GB SSD, 15.6" FHD, Anti-Glare, Ubuntu Linux.', 58000.00, 62000.00, 12, '{"processor-brand":"Intel","processor-model":"Core i5-1235U","ram":"8GB DDR4","storage":"512GB SSD","display-size":"15.6 inch","display-resolution":"FHD 1920x1080","operating-system":"Ubuntu Linux","weight":"1.66 kg"}', 1, 0);

-- ============================================================
-- KEYBOARD (category_id = 108)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(108, 'Accessories', 'Logitech', 'K120', 'Logitech K120 Wired USB Keyboard', 'logitech-k120-wired-usb', 'Logitech K120 Full-size Wired USB Keyboard, Spill-Resistant, Quiet Typing, Durable Keys, Plug & Play.', 850.00, 950.00, 50, '{"brand":"Logitech","type":"Membrane","connectivity":"USB Wired","color":"Black"}', 1, 0),
(108, 'Accessories', 'A4Tech', 'KR-92', 'A4Tech KR-92 FN-Hotkeys Wired Keyboard', 'a4tech-kr-92-wired-keyboard', 'A4Tech KR-92 Wired Keyboard with FN Multimedia Hotkeys, Laser Engraved Keys, USB Interface.', 650.00, 750.00, 60, '{"brand":"A4Tech","type":"Membrane","connectivity":"USB Wired","color":"Black"}', 1, 0),
(108, 'Accessories', 'Rapoo', 'V500 Pro', 'Rapoo V500 Pro Backlit Mechanical Gaming Keyboard', 'rapoo-v500-pro-mechanical', 'Rapoo V500 Pro Mechanical Keyboard, Blue Switch, RGB Backlight, Anti-Ghosting, Aluminum Body.', 3200.00, 3500.00, 20, '{"brand":"Rapoo","type":"Mechanical (Blue Switch)","connectivity":"USB Wired","color":"Black"}', 1, 0);

-- ============================================================
-- MOUSE (category_id = 109)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(109, 'Accessories', 'Logitech', 'M171', 'Logitech M171 Wireless Mouse', 'logitech-m171-wireless-mouse', 'Logitech M171 Wireless Mouse, 2.4GHz with USB Nano Receiver, 1000 DPI, 12 Month Battery Life.', 1050.00, 1200.00, 40, '{"brand":"Logitech","type":"Wireless Mouse","connectivity":"2.4GHz Wireless","color":"Black","interface":"USB Nano Receiver"}', 1, 0),
(109, 'Accessories', 'A4Tech', 'OP-620D', 'A4Tech OP-620D 2X Click Optical Mouse', 'a4tech-op-620d-optical-mouse', 'A4Tech OP-620D USB Wired Optical Mouse, 1000 DPI, 2X Click Button, Ergonomic Design.', 350.00, 400.00, 80, '{"brand":"A4Tech","type":"Wired Mouse","connectivity":"USB Wired","color":"Black","interface":"USB"}', 1, 0);

-- ============================================================
-- HEADPHONE (category_id = 110)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(110, 'Accessories', 'JBL', 'Tune 520BT', 'JBL Tune 520BT Wireless On-Ear Headphone', 'jbl-tune-520bt-wireless', 'JBL Tune 520BT Wireless On-Ear Headphone, Bluetooth 5.3, 57H Battery, JBL Pure Bass Sound, Multi-Point Connection.', 4500.00, 5000.00, 15, '{"brand":"JBL","type":"Wireless On-Ear","connectivity":"Bluetooth 5.3","color":"Black"}', 1, 0),
(110, 'Accessories', 'Sony', 'WH-1000XM5', 'Sony WH-1000XM5 Wireless Noise Cancelling Headphone', 'sony-wh-1000xm5', 'Sony WH-1000XM5 Premium ANC Headphone, 30H Battery, LDAC Hi-Res Audio, Multipoint, Speak-to-Chat.', 38000.00, 42000.00, 5, '{"brand":"Sony","type":"Wireless Over-Ear ANC","connectivity":"Bluetooth 5.2","color":"Black"}', 1, 1);

-- ============================================================
-- EARBUDS (category_id = 119)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(119, 'Gadget', 'Samsung', 'Galaxy Buds3 Pro', 'Samsung Galaxy Buds3 Pro TWS Earbuds', 'samsung-galaxy-buds3-pro', 'Samsung Galaxy Buds3 Pro with Intelligent ANC, 360 Audio, IP57 Water Resistance, 24H Total Playback.', 22000.00, 24000.00, 10, '{"brand":"Samsung","type":"TWS Earbuds","connectivity":"Bluetooth 5.4","water-resistance":"IP57","compatibility":"Android/iOS"}', 1, 1),
(119, 'Gadget', 'QCY', 'T13 ANC 2', 'QCY T13 ANC 2 True Wireless Earbuds', 'qcy-t13-anc-2', 'QCY T13 ANC 2 TWS Earbuds, Active Noise Cancellation, 30H Battery, Bluetooth 5.3, IPX5.', 2200.00, 2500.00, 30, '{"brand":"QCY","type":"TWS Earbuds","connectivity":"Bluetooth 5.3","water-resistance":"IPX5","compatibility":"Android/iOS"}', 1, 0),
(119, 'Gadget', 'Apple', 'AirPods Pro 2', 'Apple AirPods Pro 2nd Gen USB-C', 'apple-airpods-pro-2-usbc', 'Apple AirPods Pro 2nd Generation with USB-C, Active Noise Cancellation, Adaptive Audio, IP54.', 32000.00, 35000.00, 7, '{"brand":"Apple","type":"TWS Earbuds","connectivity":"Bluetooth 5.3","water-resistance":"IP54","compatibility":"iOS/Android"}', 1, 1);

-- ============================================================
-- SMART WATCH (category_id = 118)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(118, 'Gadget', 'Apple', 'Watch Series 10', 'Apple Watch Series 10 GPS 46mm', 'apple-watch-series-10-gps-46mm', 'Apple Watch Series 10 GPS 46mm Aluminum Case, Always-On Retina LTPO3 Display, S10 SiP, WR50.', 55000.00, 58000.00, 5, '{"brand":"Apple","type":"Smartwatch","display-size":"46mm","connectivity":"Bluetooth 5.3, WiFi","water-resistance":"WR50 (50m)","compatibility":"iOS"}', 1, 1),
(118, 'Gadget', 'Samsung', 'Galaxy Watch7', 'Samsung Galaxy Watch7 44mm Bluetooth', 'samsung-galaxy-watch7-44mm', 'Samsung Galaxy Watch7 44mm, Exynos W1000, 2GB RAM, 1.47" AMOLED, BioActive Sensor, IP68.', 32000.00, 35000.00, 8, '{"brand":"Samsung","type":"Smartwatch","display-size":"1.47 inch AMOLED","connectivity":"Bluetooth 5.3, WiFi","water-resistance":"IP68 + 5ATM","compatibility":"Android"}', 1, 0);

-- ============================================================
-- IP CAMERA (category_id = 79)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(79, 'Security', 'Dahua', 'IPC-HFW1230S1P', 'Dahua IPC-HFW1230S1P 2MP IR Bullet IP Camera', 'dahua-ipc-hfw1230s1p-2mp', 'Dahua 2MP IR Fixed-Focal Bullet IP Camera, 30m IR, IP67 Weatherproof, PoE, H.265+ Compression.', 3500.00, 4000.00, 25, '{"brand":"Dahua","type":"IP Bullet Camera","resolution":"2MP (1080p)","night-vision":"30m IR","connectivity":"Ethernet (PoE)","weather-proof":"IP67"}', 1, 0),
(79, 'Security', 'Hikvision', 'DS-2CD1043G2-I', 'Hikvision DS-2CD1043G2-I 4MP Bullet IP Camera', 'hikvision-ds-2cd1043g2-i-4mp', 'Hikvision 4MP Fixed Bullet Network Camera, 30m IR, IP67, WDR, H.265+, PoE.', 5500.00, 6000.00, 20, '{"brand":"Hikvision","type":"IP Bullet Camera","resolution":"4MP (2560x1440)","night-vision":"30m IR","connectivity":"Ethernet (PoE)","weather-proof":"IP67"}', 1, 0),
(79, 'Security', 'Dahua', 'IPC-HDW1439T1P', 'Dahua IPC-HDW1439T1P 4MP Dome IP Camera', 'dahua-ipc-hdw1439t1p-4mp-dome', 'Dahua 4MP Entry IR Fixed-Focal Dome IP Camera, 30m Smart IR, IP67, PoE, H.265+, Smart Detection.', 4800.00, 5200.00, 18, '{"brand":"Dahua","type":"IP Dome Camera","resolution":"4MP","night-vision":"30m Smart IR","connectivity":"Ethernet (PoE)","weather-proof":"IP67"}', 1, 0);

-- ============================================================
-- PRINTER (category_id = 66)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(66, 'Office Equipment', 'HP', 'Smart Tank 580', 'HP Smart Tank 580 All-in-One Printer', 'hp-smart-tank-580-all-in-one', 'HP Smart Tank 580 Wireless All-in-One Ink Tank Printer, Print/Scan/Copy, WiFi, Bluetooth, up to 6000 Black Pages.', 18500.00, 20000.00, 10, '{"brand":"HP","type":"Ink Tank All-in-One","connectivity":"WiFi, Bluetooth, USB","paper-size":"A4","duplex":"No"}', 1, 0),
(66, 'Office Equipment', 'Epson', 'L3250', 'Epson EcoTank L3250 WiFi All-in-One Printer', 'epson-ecotank-l3250-wifi', 'Epson EcoTank L3250 WiFi Ink Tank Printer, Print/Scan/Copy, High Yield Ink Bottles, 4500 Pages Black.', 16500.00, 17500.00, 15, '{"brand":"Epson","type":"Ink Tank All-in-One","connectivity":"WiFi, USB","paper-size":"A4","duplex":"No"}', 1, 0);

-- ============================================================
-- GAMING KEYBOARD (category_id = 127)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(127, 'Gaming', 'Razer', 'BlackWidow V4', 'Razer BlackWidow V4 Mechanical Gaming Keyboard', 'razer-blackwidow-v4-mechanical', 'Razer BlackWidow V4, Green Mechanical Switches, Chroma RGB, Magnetic Wrist Rest, Media Controls.', 15500.00, 17000.00, 8, '{"brand":"Razer","type":"Mechanical Keyboard","connectivity":"USB Wired","switch-type":"Razer Green","color":"Black"}', 1, 1),
(127, 'Gaming', 'Corsair', 'K65 Plus', 'Corsair K65 Plus Wireless 75% Mechanical Keyboard', 'corsair-k65-plus-wireless-75', 'Corsair K65 Plus Wireless 75% RGB Mechanical Keyboard, MLX Red Linear Switches, Tri-Mode Connectivity.', 14000.00, 15500.00, 6, '{"brand":"Corsair","type":"Mechanical Keyboard","connectivity":"USB/Bluetooth/2.4GHz","switch-type":"MLX Red Linear","color":"Black"}', 1, 0),
(127, 'Gaming', 'Fantech', 'MAXFIT108', 'Fantech MAXFIT108 Mechanical Gaming Keyboard', 'fantech-maxfit108-mechanical', 'Fantech MAXFIT108 Full Size Mechanical Keyboard, Hot-Swappable, Gateron Switches, RGB, PBT Keycaps.', 5500.00, 6000.00, 15, '{"brand":"Fantech","type":"Mechanical Keyboard","connectivity":"USB Wired","switch-type":"Gateron Yellow","color":"Black/White"}', 1, 0);

-- ============================================================
-- GAMING MOUSE (category_id = 128)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(128, 'Gaming', 'Logitech', 'G502 X Plus', 'Logitech G502 X Plus Wireless Gaming Mouse', 'logitech-g502-x-plus-wireless', 'Logitech G502 X Plus Wireless RGB Gaming Mouse, LIGHTFORCE Hybrid Switches, HERO 25K Sensor, 25600 DPI.', 14500.00, 16000.00, 7, '{"brand":"Logitech","type":"Wireless Gaming Mouse","connectivity":"LIGHTSPEED 2.4GHz + Bluetooth","dpi":"25600 DPI","color":"Black"}', 1, 1),
(128, 'Gaming', 'Razer', 'DeathAdder V3', 'Razer DeathAdder V3 Wired Gaming Mouse', 'razer-deathadder-v3-wired', 'Razer DeathAdder V3, Focus Pro 30K Sensor, 30000 DPI, 90-hour Battery, Ultra-Light 59g, 6 Buttons.', 7500.00, 8500.00, 12, '{"brand":"Razer","type":"Wired Gaming Mouse","connectivity":"USB Wired","dpi":"30000 DPI","color":"Black"}', 1, 0),
(128, 'Gaming', 'Fantech', 'Helios XD5', 'Fantech Helios XD5 Wireless Gaming Mouse', 'fantech-helios-xd5-wireless', 'Fantech Helios XD5 Wireless Gaming Mouse, PAW3370 Sensor, 19000 DPI, 71g Ultra-Light, Tri-Mode.', 3800.00, 4200.00, 20, '{"brand":"Fantech","type":"Wireless Gaming Mouse","connectivity":"2.4GHz/Bluetooth/USB","dpi":"19000 DPI","color":"Black/White"}', 1, 0);

-- ============================================================
-- CASING (category_id = 44)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(44, 'Component', 'NZXT', 'H5 Flow', 'NZXT H5 Flow ATX Mid-Tower Case', 'nzxt-h5-flow-mid-tower', 'NZXT H5 Flow ATX Mid-Tower Case, Perforated Front Panel, Tempered Glass Side, Cable Management, 2x 120mm Fans.', 8500.00, 9200.00, 10, '{"brand":"NZXT","form-factor":"ATX Mid-Tower","type":"Airflow Case","size":"ATX/Micro-ATX/Mini-ITX"}', 1, 0),
(44, 'Component', 'Corsair', '4000D Airflow', 'Corsair 4000D Airflow ATX Mid-Tower Case', 'corsair-4000d-airflow', 'Corsair 4000D Airflow Tempered Glass Mid-Tower ATX Case, High Airflow Front Panel, 2x 120mm Fans, USB-C.', 9500.00, 10200.00, 8, '{"brand":"Corsair","form-factor":"ATX Mid-Tower","type":"Airflow Case","size":"ATX/Micro-ATX/Mini-ITX"}', 1, 1),
(44, 'Component', 'Deepcool', 'CH560', 'Deepcool CH560 ATX Mid-Tower Case', 'deepcool-ch560-mid-tower', 'Deepcool CH560 Mesh Front ATX Mid-Tower, Tempered Glass, 4x Pre-installed ARGB Fans, USB 3.0.', 7200.00, 7800.00, 12, '{"brand":"Deepcool","form-factor":"ATX Mid-Tower","type":"Mesh Airflow Case","size":"E-ATX/ATX/Micro-ATX/Mini-ITX"}', 1, 0);

-- ============================================================
-- POWER SUPPLY (category_id = 39)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(39, 'Component', 'Corsair', 'RM750e', 'Corsair RM750e 750W 80+ Gold Modular PSU', 'corsair-rm750e-750w-gold', 'Corsair RM750e 750W Fully Modular ATX Power Supply, 80+ Gold Certified, Zero RPM Fan Mode, 105C Capacitors.', 9800.00, 10500.00, 10, '{"brand":"Corsair","power":"750W","type":"Fully Modular","speed":"80+ Gold","form-factor":"ATX"}', 1, 0),
(39, 'Component', 'Deepcool', 'PF600', 'Deepcool PF600 600W 80+ Power Supply', 'deepcool-pf600-600w', 'Deepcool PF600 600W ATX Power Supply, 80+ Certified, 120mm PWM Fan, DC-DC Circuit, Fixed Cables.', 4500.00, 5000.00, 20, '{"brand":"Deepcool","power":"600W","type":"Non-Modular","speed":"80+","form-factor":"ATX"}', 1, 0);

-- ============================================================
-- POWER BANK (category_id = 120)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(120, 'Gadget', 'Xiaomi', '20000mAh 33W', 'Xiaomi 20000mAh 33W Power Bank Pocket Edition Pro', 'xiaomi-20000mah-33w-power-bank', 'Xiaomi 20000mAh Power Bank Pocket Edition Pro, 33W Fast Charging, USB-C In/Out, Dual USB-A Output.', 2800.00, 3200.00, 25, '{"brand":"Xiaomi","type":"Power Bank","battery":"20000mAh","connectivity":"USB-C, USB-A","compatibility":"Universal"}', 1, 0),
(120, 'Gadget', 'Baseus', '30000mAh 65W', 'Baseus Amblight 30000mAh 65W Power Bank', 'baseus-amblight-30000mah-65w', 'Baseus Amblight 30000mAh Power Bank, 65W PD Fast Charge, USB-C + 2x USB-A, Digital Display, Laptop Charging.', 5500.00, 6200.00, 12, '{"brand":"Baseus","type":"Power Bank","battery":"30000mAh","connectivity":"USB-C PD 65W, 2x USB-A","compatibility":"Laptop/Phone/Tablet"}', 1, 0);

-- ============================================================
-- GAMING CHAIR (category_id = 125)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(125, 'Gaming', 'Fantech', 'Alpha GC-283', 'Fantech Alpha GC-283 Gaming Chair', 'fantech-alpha-gc-283-gaming-chair', 'Fantech Alpha GC-283 Gaming Chair, PU Leather, 4D Armrest, 155 Degree Recline, 160kg Max Load.', 22000.00, 24000.00, 6, '{"brand":"Fantech","type":"Gaming Chair","material":"PU Leather","weight-capacity":"160kg","color":"Black/Red"}', 1, 0),
(125, 'Gaming', 'A4Tech', 'Bloody GC-330', 'A4Tech Bloody GC-330 Gaming Chair', 'a4tech-bloody-gc-330-gaming-chair', 'A4Tech Bloody GC-330 Gaming Chair, Ergonomic Design, 2D Armrest, 150 Degree Recline, Lumbar Support.', 18500.00, 20000.00, 8, '{"brand":"A4Tech","type":"Gaming Chair","material":"PU Leather","weight-capacity":"150kg","color":"Black"}', 1, 0);

-- ============================================================
-- Done! This covers products across major subcategories.
-- ============================================================
