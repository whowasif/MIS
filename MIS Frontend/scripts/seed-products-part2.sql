-- ============================================================
-- MIS Solution - Product Seed Data (Part 2)
-- Remaining subcategories
-- ============================================================
SET NAMES utf8mb4;

-- ============================================================
-- CPU COOLER (category_id = 33)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(33, 'Component', 'Deepcool', 'AK400', 'Deepcool AK400 CPU Air Cooler', 'deepcool-ak400-cpu-cooler', 'Deepcool AK400 Single Tower CPU Cooler, 4 Heat Pipes, 120mm FDB Fan, 220W TDP, Intel/AMD Compatible.', 3200.00, 3500.00, 15, '{"brand":"Deepcool","type":"Air Cooler","socket":"LGA1700/LGA1200/AM5/AM4","size":"120mm Fan","power":"220W TDP"}', 1, 0),
(33, 'Component', 'Noctua', 'NH-D15', 'Noctua NH-D15 Dual Tower CPU Cooler', 'noctua-nh-d15-cpu-cooler', 'Noctua NH-D15 Premium Dual Tower CPU Cooler with 2x NF-A15 140mm Fans, 250W TDP, Silent Operation.', 12500.00, 13500.00, 5, '{"brand":"Noctua","type":"Air Cooler","socket":"LGA1700/LGA1200/AM5/AM4","size":"2x 140mm Fan","power":"250W TDP"}', 1, 1);

-- ============================================================
-- WATER / LIQUID COOLING (category_id = 34)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(34, 'Component', 'Corsair', 'iCUE H100i Elite', 'Corsair iCUE H100i Elite Capellix XT 240mm AIO', 'corsair-icue-h100i-elite-240mm', 'Corsair iCUE H100i Elite Capellix XT 240mm AIO Liquid Cooler, RGB Pump Head, 2x 120mm ML RGB Fans.', 14500.00, 15500.00, 7, '{"brand":"Corsair","type":"AIO Liquid Cooler","socket":"LGA1700/AM5/AM4","size":"240mm Radiator","speed":"2x 120mm Fans"}', 1, 0),
(34, 'Component', 'NZXT', 'Kraken 360', 'NZXT Kraken 360 RGB AIO Liquid Cooler', 'nzxt-kraken-360-rgb-aio', 'NZXT Kraken 360 RGB 360mm AIO, LCD Display on Pump, 3x 120mm F120 RGB Fans, Rotatable Pump Head.', 22000.00, 24000.00, 4, '{"brand":"NZXT","type":"AIO Liquid Cooler","socket":"LGA1700/AM5/AM4","size":"360mm Radiator","speed":"3x 120mm Fans"}', 1, 1);

-- ============================================================
-- CURVED MONITOR (category_id = 49)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(49, 'Monitor', 'Samsung', 'Odyssey G5 34"', 'Samsung Odyssey G5 34" WQHD 165Hz Curved Monitor', 'samsung-odyssey-g5-34-curved', 'Samsung Odyssey G5 34" Ultra WQHD (3440x1440), 165Hz, 1ms, 1000R Curvature, FreeSync Premium, HDR10.', 45000.00, 48000.00, 6, '{"brand":"Samsung","display-size":"34 inch","resolution":"UWQHD 3440x1440","panel-type":"VA","refresh-rate":"165Hz","response-time":"1ms","adaptive-sync":"FreeSync Premium"}', 1, 1),
(49, 'Monitor', 'MSI', 'MAG 275CQRF', 'MSI MAG 275CQRF 27" QHD 170Hz Curved Monitor', 'msi-mag-275cqrf-27-curved', 'MSI MAG 275CQRF 27" QHD Rapid VA, 170Hz, 1ms GtG, 1000R Curve, FreeSync Premium, Night Vision.', 32000.00, 34000.00, 8, '{"brand":"MSI","display-size":"27 inch","resolution":"QHD 2560x1440","panel-type":"Rapid VA","refresh-rate":"170Hz","response-time":"1ms GtG","adaptive-sync":"FreeSync Premium"}', 1, 0);

-- ============================================================
-- 4K MONITOR (category_id = 51)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(51, 'Monitor', 'LG', '27UP850N-W', 'LG 27UP850N-W 27" 4K UHD IPS Monitor', 'lg-27up850n-w-4k', 'LG 27UP850N-W 27" 4K UHD IPS, HDR400, DCI-P3 95%, USB-C 96W PD, FreeSync, VESA DisplayHDR 400.', 42000.00, 45000.00, 5, '{"brand":"LG","display-size":"27 inch","resolution":"4K UHD 3840x2160","panel-type":"IPS","refresh-rate":"60Hz","adaptive-sync":"FreeSync"}', 1, 0),
(51, 'Monitor', 'BenQ', 'PD2706U', 'BenQ PD2706U 27" 4K USB-C Designer Monitor', 'benq-pd2706u-4k-designer', 'BenQ PD2706U 27" 4K IPS, 100% sRGB, HDR10, USB-C 90W PD, AQCOLOR Technology, Mac Compatible.', 52000.00, 55000.00, 4, '{"brand":"BenQ","display-size":"27 inch","resolution":"4K UHD 3840x2160","panel-type":"IPS","refresh-rate":"60Hz","color-gamut":"100% sRGB, 95% P3"}', 1, 1);

-- ============================================================
-- LASER PRINTER (category_id = 67)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(67, 'Office Equipment', 'HP', 'LaserJet Pro M404dn', 'HP LaserJet Pro M404dn Mono Laser Printer', 'hp-laserjet-pro-m404dn', 'HP LaserJet Pro M404dn, 40ppm, Auto Duplex, Network Ready, 80000 Pages Monthly Duty Cycle, USB/Ethernet.', 28000.00, 30000.00, 8, '{"brand":"HP","type":"Mono Laser Printer","print-speed":"40 ppm","connectivity":"USB, Ethernet","paper-size":"A4","duplex":"Auto Duplex"}', 1, 0),
(67, 'Office Equipment', 'Brother', 'HL-L2460DW', 'Brother HL-L2460DW Mono Laser Printer', 'brother-hl-l2460dw-laser', 'Brother HL-L2460DW Wireless Mono Laser Printer, 36ppm, Auto Duplex, WiFi, Mobile Print, 700 Sheet Input.', 16500.00, 18000.00, 10, '{"brand":"Brother","type":"Mono Laser Printer","print-speed":"36 ppm","connectivity":"WiFi, USB, Ethernet","paper-size":"A4","duplex":"Auto Duplex"}', 1, 0);

-- ============================================================
-- DSLR (category_id = 74)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(74, 'Camera', 'Canon', 'EOS 200D II', 'Canon EOS 200D II DSLR Camera with 18-55mm Lens', 'canon-eos-200d-ii-18-55mm', 'Canon EOS 200D II (Rebel SL3) 24.1MP, DIGIC 8, 4K Video, Dual Pixel AF, WiFi/Bluetooth, Vari-Angle LCD.', 68000.00, 72000.00, 5, '{"brand":"Canon","type":"DSLR","megapixels":"24.1MP","sensor":"APS-C CMOS","video-resolution":"4K 25fps","lens-mount":"Canon EF-S"}', 1, 0),
(74, 'Camera', 'Nikon', 'D5600', 'Nikon D5600 DSLR Camera with 18-55mm VR Lens', 'nikon-d5600-18-55mm-vr', 'Nikon D5600 24.2MP DX-Format DSLR, EXPEED 4, 39-Point AF, 1080p 60fps Video, Vari-Angle Touchscreen.', 72000.00, 76000.00, 4, '{"brand":"Nikon","type":"DSLR","megapixels":"24.2MP","sensor":"APS-C CMOS","video-resolution":"1080p 60fps","lens-mount":"Nikon F (DX)"}', 1, 0);

-- ============================================================
-- MIRRORLESS CAMERA (category_id = 75)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(75, 'Camera', 'Sony', 'Alpha A6400', 'Sony Alpha A6400 Mirrorless Camera Body', 'sony-alpha-a6400-body', 'Sony A6400 24.2MP APS-C Mirrorless, Real-Time Eye AF, 4K HDR Video, 425 Phase-Detect AF Points, 11fps.', 95000.00, 100000.00, 3, '{"brand":"Sony","type":"Mirrorless","megapixels":"24.2MP","sensor":"APS-C Exmor CMOS","video-resolution":"4K 30fps","lens-mount":"Sony E-mount"}', 1, 1),
(75, 'Camera', 'Canon', 'EOS R50', 'Canon EOS R50 Mirrorless Camera with RF-S 18-45mm', 'canon-eos-r50-rf-s-18-45mm', 'Canon EOS R50 24.2MP, DIGIC X, 4K 30p, Subject Detection AF, WiFi/Bluetooth, Content Creator Friendly.', 82000.00, 88000.00, 5, '{"brand":"Canon","type":"Mirrorless","megapixels":"24.2MP","sensor":"APS-C CMOS","video-resolution":"4K 30fps","lens-mount":"Canon RF-S"}', 1, 0);

-- ============================================================
-- NVR (category_id = 83)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(83, 'Security', 'Dahua', 'NVR4108HS-8P', 'Dahua NVR4108HS-8P-4KS3 8 Channel 8PoE NVR', 'dahua-nvr4108hs-8p-4ks3', 'Dahua 8 Channel 1U 8PoE 4K NVR, H.265+, Up to 12MP Resolution, 1 SATA (10TB), Smart Search.', 16000.00, 17500.00, 10, '{"brand":"Dahua","type":"NVR","channels":"8 Channel","resolution":"Up to 12MP","storage":"1 SATA (10TB max)","connectivity":"8 PoE Ports"}', 1, 0),
(83, 'Security', 'Hikvision', 'DS-7608NI-K2/8P', 'Hikvision DS-7608NI-K2/8P 8CH 8PoE 4K NVR', 'hikvision-ds-7608ni-k2-8p', 'Hikvision 8 Channel 8PoE 4K NVR, H.265+, Up to 8MP, 2 SATA (6TB each), HDMI/VGA Output.', 18500.00, 20000.00, 8, '{"brand":"Hikvision","type":"NVR","channels":"8 Channel","resolution":"Up to 8MP","storage":"2 SATA (6TB each)","connectivity":"8 PoE Ports"}', 1, 0);

-- ============================================================
-- DVR (category_id = 82)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(82, 'Security', 'Dahua', 'XVR5108HS-I3', 'Dahua XVR5108HS-I3 8 Channel DVR', 'dahua-xvr5108hs-i3-8ch', 'Dahua 8 Channel Penta-Brid 5MP DVR, AI/H.265+, 1 SATA (10TB), HDCVI/AHD/TVI/CVBS/IP Support.', 11000.00, 12000.00, 12, '{"brand":"Dahua","type":"DVR","channels":"8 Channel","resolution":"5MP","storage":"1 SATA (10TB max)","connectivity":"HDCVI/AHD/TVI/CVBS/IP"}', 1, 0),
(82, 'Security', 'Hikvision', 'iDS-7208HUHI-M1/S', 'Hikvision iDS-7208HUHI-M1/S 8CH 5MP DVR', 'hikvision-ids-7208huhi-m1-s', 'Hikvision 8 Channel 5MP 1U H.265 AcuSense DVR, Human/Vehicle Detection, 1 SATA (10TB).', 13500.00, 14500.00, 8, '{"brand":"Hikvision","type":"DVR","channels":"8 Channel","resolution":"5MP","storage":"1 SATA (10TB max)","connectivity":"HDTVI/AHD/CVI/CVBS/IP"}', 1, 0);

-- ============================================================
-- NETWORK SWITCH (category_id = 91)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(91, 'Networking', 'TP-Link', 'TL-SG1016D', 'TP-Link TL-SG1016D 16-Port Gigabit Switch', 'tp-link-tl-sg1016d-16-port', 'TP-Link TL-SG1016D 16-Port Gigabit Desktop/Rackmount Switch, Plug & Play, Steel Case, Green Technology.', 5500.00, 6000.00, 15, '{"brand":"TP-Link","type":"Unmanaged Switch","speed":"10/100/1000Mbps","ports":"16 Gigabit Ports"}', 1, 0),
(91, 'Networking', 'D-Link', 'DGS-1024D', 'D-Link DGS-1024D 24-Port Gigabit Switch', 'dlink-dgs-1024d-24-port', 'D-Link DGS-1024D 24-Port Unmanaged Gigabit Switch, Rackmount, Fanless Design, QoS Support.', 8200.00, 9000.00, 10, '{"brand":"D-Link","type":"Unmanaged Switch","speed":"10/100/1000Mbps","ports":"24 Gigabit Ports"}', 1, 0),
(91, 'Networking', 'TP-Link', 'TL-SG108', 'TP-Link TL-SG108 8-Port Gigabit Desktop Switch', 'tp-link-tl-sg108-8-port', 'TP-Link TL-SG108 8-Port 10/100/1000Mbps Gigabit Desktop Switch, Plug & Play, Compact Design.', 2200.00, 2500.00, 25, '{"brand":"TP-Link","type":"Unmanaged Switch","speed":"10/100/1000Mbps","ports":"8 Gigabit Ports"}', 1, 0);

-- ============================================================
-- ANTIVIRUS (category_id = 97)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(97, 'Software', 'Kaspersky', 'Internet Security', 'Kaspersky Internet Security 1 User 1 Year', 'kaspersky-internet-security-1user-1year', 'Kaspersky Internet Security, 1 Device, 1 Year License, Real-Time Protection, Anti-Phishing, VPN.', 1800.00, 2200.00, 50, '{"brand":"Kaspersky","type":"Internet Security","license-type":"Retail","duration":"1 Year","devices":"1 Device","platform":"Windows/Mac/Android"}', 1, 0),
(97, 'Software', 'Norton', '360 Standard', 'Norton 360 Standard 1 Device 1 Year', 'norton-360-standard-1device-1year', 'Norton 360 Standard, 1 Device, 1 Year, Real-Time Threat Protection, VPN, Dark Web Monitoring, 10GB Cloud Backup.', 2500.00, 3000.00, 40, '{"brand":"Norton","type":"Total Security","license-type":"Retail","duration":"1 Year","devices":"1 Device","platform":"Windows/Mac/Android/iOS"}', 1, 0),
(97, 'Software', 'ESET', 'NOD32 Antivirus', 'ESET NOD32 Antivirus 1 User 1 Year', 'eset-nod32-antivirus-1user-1year', 'ESET NOD32 Antivirus, 1 PC, 1 Year License, Lightweight Engine, Anti-Phishing, Gamer Mode.', 1500.00, 1800.00, 60, '{"brand":"ESET","type":"Antivirus","license-type":"Retail","duration":"1 Year","devices":"1 Device","platform":"Windows"}', 1, 0);

-- ============================================================
-- OPERATING SYSTEM (category_id = 95)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(95, 'Software', 'Microsoft', 'Windows 11 Pro', 'Microsoft Windows 11 Pro 64-bit OEM License', 'microsoft-windows-11-pro-oem', 'Microsoft Windows 11 Pro OEM 64-bit, Single License, Full Version, English, DVD/Digital Delivery.', 15500.00, 17000.00, 20, '{"brand":"Microsoft","type":"Operating System","license-type":"OEM","duration":"Lifetime","devices":"1 PC","platform":"Windows"}', 1, 0),
(95, 'Software', 'Microsoft', 'Windows 11 Home', 'Microsoft Windows 11 Home 64-bit OEM License', 'microsoft-windows-11-home-oem', 'Microsoft Windows 11 Home OEM 64-bit, Single License, Full Version, English.', 12000.00, 13500.00, 25, '{"brand":"Microsoft","type":"Operating System","license-type":"OEM","duration":"Lifetime","devices":"1 PC","platform":"Windows"}', 1, 0);

-- ============================================================
-- OFFICE APPLICATION (category_id = 96)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(96, 'Software', 'Microsoft', 'Office 2021 Pro Plus', 'Microsoft Office 2021 Professional Plus', 'microsoft-office-2021-pro-plus', 'Microsoft Office 2021 Professional Plus, Perpetual License, Word/Excel/PowerPoint/Outlook/Access/Publisher.', 18000.00, 20000.00, 15, '{"brand":"Microsoft","type":"Office Suite","license-type":"Perpetual","duration":"Lifetime","devices":"1 PC","platform":"Windows"}', 1, 0),
(96, 'Software', 'Microsoft', 'Microsoft 365 Personal', 'Microsoft 365 Personal 1 Year Subscription', 'microsoft-365-personal-1year', 'Microsoft 365 Personal, 1 User, 1 Year, 1TB OneDrive, Word/Excel/PowerPoint/Outlook, Always Updated.', 5500.00, 6500.00, 30, '{"brand":"Microsoft","type":"Office Suite","license-type":"Subscription","duration":"1 Year","devices":"5 Devices","platform":"Windows/Mac/iOS/Android"}', 1, 0);

-- ============================================================
-- SMART TV (category_id = 134)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(134, 'TV', 'Samsung', 'Crystal UHD 55"', 'Samsung 55" CU7000 Crystal UHD 4K Smart TV', 'samsung-55-cu7000-crystal-4k', 'Samsung 55" CU7000 Crystal UHD 4K Smart TV, Crystal Processor 4K, PurColor, HDR10+, Tizen OS, WiFi.', 62000.00, 68000.00, 5, '{"brand":"Samsung","display-size":"55 inch","resolution":"4K UHD 3840x2160","display-type":"Crystal UHD","smart-tv":"Yes","operating-system":"Tizen","refresh-rate":"60Hz"}', 1, 1),
(134, 'TV', 'LG', 'UR7550 55"', 'LG 55" UR7550PSC 4K Smart TV', 'lg-55-ur7550-4k-smart-tv', 'LG 55" UR7550 4K UHD Smart TV, a5 Gen6 AI Processor, HDR10 Pro, WebOS 23, Magic Remote, WiFi.', 58000.00, 63000.00, 6, '{"brand":"LG","display-size":"55 inch","resolution":"4K UHD 3840x2160","display-type":"LED","smart-tv":"Yes","operating-system":"WebOS 23","refresh-rate":"60Hz"}', 1, 0),
(134, 'TV', 'Xiaomi', 'A Pro 43"', 'Xiaomi TV A Pro 43" 4K Google TV', 'xiaomi-tv-a-pro-43-4k', 'Xiaomi TV A Pro 43" 4K UHD, Google TV, Dolby Vision, DTS:X, Metal Bezel-Less Design, 30W Speakers.', 32000.00, 35000.00, 10, '{"brand":"Xiaomi","display-size":"43 inch","resolution":"4K UHD 3840x2160","display-type":"LED","smart-tv":"Yes","operating-system":"Google TV","refresh-rate":"60Hz"}', 1, 0);

-- ============================================================
-- GAMING HEADPHONE (category_id = 129)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(129, 'Gaming', 'HyperX', 'Cloud III', 'HyperX Cloud III Wired Gaming Headset', 'hyperx-cloud-iii-wired', 'HyperX Cloud III Gaming Headset, 53mm Drivers, DTS Spatial Audio, Detachable Mic, Memory Foam, Multi-Platform.', 9500.00, 10500.00, 10, '{"brand":"HyperX","type":"Wired Gaming Headset","connectivity":"USB/3.5mm","driver-size":"53mm","color":"Black/Red"}', 1, 0),
(129, 'Gaming', 'Razer', 'BlackShark V2 X', 'Razer BlackShark V2 X Gaming Headset', 'razer-blackshark-v2-x', 'Razer BlackShark V2 X, TriForce 50mm Drivers, 7.1 Surround, HyperClear Cardioid Mic, Memory Foam, 240g.', 5500.00, 6200.00, 15, '{"brand":"Razer","type":"Wired Gaming Headset","connectivity":"3.5mm","driver-size":"50mm","color":"Black"}', 1, 0),
(129, 'Gaming', 'Logitech', 'G435', 'Logitech G435 LIGHTSPEED Wireless Gaming Headset', 'logitech-g435-wireless-gaming', 'Logitech G435 Wireless Gaming Headset, LIGHTSPEED + Bluetooth, 40mm Drivers, 18H Battery, 165g Ultra-Light.', 6800.00, 7500.00, 12, '{"brand":"Logitech","type":"Wireless Gaming Headset","connectivity":"LIGHTSPEED 2.4GHz + Bluetooth","driver-size":"40mm","color":"Black/Neon"}', 1, 0);

-- ============================================================
-- WEBCAM (category_id = 112)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(112, 'Accessories', 'Logitech', 'C920 HD Pro', 'Logitech C920 HD Pro 1080p Webcam', 'logitech-c920-hd-pro-webcam', 'Logitech C920 HD Pro Webcam, Full HD 1080p/30fps, Dual Stereo Mics, Auto Light Correction, USB.', 7500.00, 8200.00, 12, '{"brand":"Logitech","type":"Webcam","connectivity":"USB","interface":"USB-A","color":"Black"}', 1, 0),
(112, 'Accessories', 'Fantech', 'Luminous C30', 'Fantech Luminous C30 2K QHD Webcam', 'fantech-luminous-c30-2k-webcam', 'Fantech Luminous C30 2K QHD Webcam, 2560x1440, Ring Light, Noise Reduction Mic, 360 Rotation, USB.', 4200.00, 4800.00, 15, '{"brand":"Fantech","type":"Webcam","connectivity":"USB","interface":"USB-A","color":"Black"}', 1, 0);

-- ============================================================
-- PROJECTOR (category_id = 63)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(63, 'Office Equipment', 'Epson', 'EB-X51', 'Epson EB-X51 3800 Lumens XGA Projector', 'epson-eb-x51-3800-lumens', 'Epson EB-X51 3LCD Projector, 3800 Lumens, XGA (1024x768), 16000:1 Contrast, HDMI, USB, 12000H Lamp Life.', 52000.00, 55000.00, 4, '{"brand":"Epson","type":"3LCD Projector","lumens":"3800","connectivity":"HDMI, USB, VGA","paper-size":"N/A"}', 1, 0),
(63, 'Office Equipment', 'BenQ', 'MW560', 'BenQ MW560 4000 Lumens WXGA DLP Projector', 'benq-mw560-4000-lumens', 'BenQ MW560 DLP Projector, 4000 Lumens, WXGA (1280x800), 20000:1 Contrast, Dual HDMI, 15000H Lamp.', 48000.00, 52000.00, 5, '{"brand":"BenQ","type":"DLP Projector","lumens":"4000","connectivity":"2x HDMI, VGA, USB","paper-size":"N/A"}', 1, 0);

-- ============================================================
-- HARD DISK DRIVE (category_id = 40)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(40, 'Component', 'WD', 'Blue 1TB', 'WD Blue 1TB 7200RPM 3.5" HDD', 'wd-blue-1tb-7200rpm-hdd', 'Western Digital Blue 1TB Internal Hard Drive, 7200RPM, 64MB Cache, SATA 6Gb/s, 3.5 Inch Desktop HDD.', 4200.00, 4600.00, 30, '{"brand":"Western Digital","size":"1TB","type":"HDD 3.5 inch","speed":"7200 RPM","interface":"SATA 6Gb/s"}', 1, 0),
(40, 'Component', 'Seagate', 'Barracuda 2TB', 'Seagate Barracuda 2TB 7200RPM 3.5" HDD', 'seagate-barracuda-2tb-7200rpm', 'Seagate Barracuda 2TB Internal Hard Drive, 7200RPM, 256MB Cache, SATA 6Gb/s, 3.5 Inch.', 6500.00, 7000.00, 20, '{"brand":"Seagate","size":"2TB","type":"HDD 3.5 inch","speed":"7200 RPM","interface":"SATA 6Gb/s"}', 1, 0);

-- ============================================================
-- PORTABLE SSD (category_id = 43)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(43, 'Component', 'Samsung', 'T7 1TB', 'Samsung T7 1TB Portable SSD', 'samsung-t7-1tb-portable-ssd', 'Samsung T7 1TB Portable SSD, USB 3.2 Gen 2, Read 1050MB/s, Write 1000MB/s, Compact Metal Design.', 9500.00, 10500.00, 12, '{"brand":"Samsung","size":"1TB","type":"Portable SSD","speed":"1050/1000 MB/s","interface":"USB 3.2 Gen 2 (USB-C)"}', 1, 0),
(43, 'Component', 'SanDisk', 'Extreme Pro 1TB', 'SanDisk Extreme Pro 1TB Portable SSD', 'sandisk-extreme-pro-1tb-portable', 'SanDisk Extreme Pro 1TB Portable SSD, Read 2000MB/s, Write 2000MB/s, IP65, Forged Aluminum.', 12500.00, 13500.00, 8, '{"brand":"SanDisk","size":"1TB","type":"Portable SSD","speed":"2000/2000 MB/s","interface":"USB 3.2 Gen 2x2 (USB-C)"}', 1, 1);

-- ============================================================
-- SPEAKER & HOME THEATER (category_id = 111)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(111, 'Accessories', 'JBL', 'Flip 6', 'JBL Flip 6 Portable Bluetooth Speaker', 'jbl-flip-6-bluetooth-speaker', 'JBL Flip 6 Portable Wireless Speaker, IP67 Waterproof, 12H Battery, PartyBoost, JBL Pro Sound.', 9500.00, 10500.00, 10, '{"brand":"JBL","type":"Portable Bluetooth Speaker","connectivity":"Bluetooth 5.1","color":"Black","compatibility":"Universal"}', 1, 0),
(111, 'Accessories', 'Edifier', 'R1280T', 'Edifier R1280T 2.0 Bookshelf Speaker', 'edifier-r1280t-bookshelf', 'Edifier R1280T 2.0 Active Bookshelf Speakers, 42W RMS, Dual RCA Input, Wooden Enclosure, Remote.', 7500.00, 8200.00, 8, '{"brand":"Edifier","type":"2.0 Bookshelf Speaker","connectivity":"Wired (RCA/3.5mm)","color":"Wood Finish","compatibility":"PC/TV/Phone"}', 1, 0);

-- ============================================================
-- GAMING CONSOLE (category_id = 131)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(131, 'Gaming', 'Sony', 'PS5 Slim', 'Sony PlayStation 5 Slim Digital Edition', 'sony-ps5-slim-digital-edition', 'Sony PS5 Slim Digital Edition, Custom AMD Zen 2 CPU, 16GB GDDR6, 1TB SSD, 4K 120Hz, Ray Tracing, DualSense.', 52000.00, 56000.00, 4, '{"brand":"Sony","type":"Gaming Console","connectivity":"WiFi 6, Bluetooth 5.1, USB","color":"White/Black"}', 1, 1),
(131, 'Gaming', 'Microsoft', 'Xbox Series S', 'Microsoft Xbox Series S 512GB Console', 'microsoft-xbox-series-s-512gb', 'Xbox Series S 512GB, Custom AMD Zen 2 CPU, 10GB GDDR6, 1440p 120fps, Ray Tracing, Game Pass Ready.', 35000.00, 38000.00, 6, '{"brand":"Microsoft","type":"Gaming Console","connectivity":"WiFi 5, Bluetooth, USB","color":"White"}', 1, 0);

-- ============================================================
-- ACTION CAMERA (category_id = 73)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(73, 'Camera', 'GoPro', 'HERO13 Black', 'GoPro HERO13 Black Action Camera', 'gopro-hero13-black', 'GoPro HERO13 Black, 5.3K60 Video, 27MP Photos, HyperSmooth 6.0, 10m Waterproof, GPS, Enduro Battery.', 45000.00, 48000.00, 5, '{"brand":"GoPro","type":"Action Camera","megapixels":"27MP","video-resolution":"5.3K 60fps","connectivity":"WiFi, Bluetooth, USB-C"}', 1, 1),
(73, 'Camera', 'DJI', 'Osmo Action 4', 'DJI Osmo Action 4 Adventure Combo', 'dji-osmo-action-4', 'DJI Osmo Action 4, 1/1.3" Sensor, 4K 120fps, 155 FOV, RockSteady 3.0, 10m Waterproof, Magnetic Mount.', 38000.00, 42000.00, 6, '{"brand":"DJI","type":"Action Camera","megapixels":"12MP","video-resolution":"4K 120fps","connectivity":"WiFi, Bluetooth, USB-C"}', 1, 0);

-- ============================================================
-- GAMING PC (category_id = 18)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(18, 'Desktop', 'MIS Custom', 'Ryzen 5 5600 RTX 4060', 'MIS Gaming PC Ryzen 5 5600 RTX 4060 16GB', 'mis-gaming-pc-ryzen5-5600-rtx4060', 'Custom Gaming PC: AMD Ryzen 5 5600, 16GB DDR4 3200MHz, 512GB NVMe SSD, NVIDIA RTX 4060 8GB, 650W PSU.', 95000.00, 102000.00, 5, '{"processor-brand":"AMD","processor-model":"Ryzen 5 5600","ram":"16GB DDR4 3200MHz","storage":"512GB NVMe SSD","graphics-card":"NVIDIA RTX 4060 8GB","operating-system":"Windows 11"}', 1, 1),
(18, 'Desktop', 'MIS Custom', 'Core i5-14400F RTX 4070', 'MIS Pro Gaming PC i5-14400F RTX 4070 32GB', 'mis-pro-gaming-pc-i5-14400f-rtx4070', 'Custom Pro Gaming PC: Intel Core i5-14400F, 32GB DDR5 5600MHz, 1TB NVMe SSD, NVIDIA RTX 4070 12GB, 750W Gold.', 155000.00, 165000.00, 3, '{"processor-brand":"Intel","processor-model":"Core i5-14400F","ram":"32GB DDR5 5600MHz","storage":"1TB NVMe SSD","graphics-card":"NVIDIA RTX 4070 12GB","operating-system":"Windows 11"}', 1, 1);

-- ============================================================
-- STAR PC / BUDGET DESKTOP (category_id = 17)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(17, 'Desktop', 'MIS Custom', 'Ryzen 5 5600G Budget', 'MIS Star PC Ryzen 5 5600G 8GB Budget Desktop', 'mis-star-pc-ryzen5-5600g-budget', 'Budget Desktop PC: AMD Ryzen 5 5600G (Integrated Vega 7), 8GB DDR4, 256GB NVMe SSD, No GPU Required.', 32000.00, 35000.00, 10, '{"processor-brand":"AMD","processor-model":"Ryzen 5 5600G","ram":"8GB DDR4 3200MHz","storage":"256GB NVMe SSD","graphics-card":"Integrated Radeon Vega 7","operating-system":"Windows 11"}', 1, 0),
(17, 'Desktop', 'MIS Custom', 'Core i3-12100 Office', 'MIS Star PC Core i3-12100 Office Desktop', 'mis-star-pc-i3-12100-office', 'Office Desktop: Intel Core i3-12100, 8GB DDR4, 256GB SSD, Intel UHD 730 Graphics, Compact Case.', 28000.00, 30000.00, 12, '{"processor-brand":"Intel","processor-model":"Core i3-12100","ram":"8GB DDR4 3200MHz","storage":"256GB NVMe SSD","graphics-card":"Intel UHD 730","operating-system":"Windows 11"}', 1, 0);

-- ============================================================
-- PORTABLE MONITOR (category_id = 52)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(52, 'Monitor', 'ASUS', 'ZenScreen MB16ACV', 'ASUS ZenScreen MB16ACV 15.6" FHD Portable Monitor', 'asus-zenscreen-mb16acv-portable', 'ASUS ZenScreen 15.6" FHD IPS Portable Monitor, USB-C, Flicker-Free, Blue Light Filter, 780g, Foldable Case.', 25000.00, 27000.00, 6, '{"brand":"ASUS","display-size":"15.6 inch","resolution":"FHD 1920x1080","panel-type":"IPS","refresh-rate":"60Hz","connectivity":"USB-C"}', 1, 0),
(52, 'Monitor', 'Lenovo', 'ThinkVision M14', 'Lenovo ThinkVision M14 14" FHD Portable Monitor', 'lenovo-thinkvision-m14-portable', 'Lenovo ThinkVision M14 14" FHD IPS Portable Monitor, USB-C, 570g Ultra-Light, Tilt Stand, 4ms Response.', 22000.00, 24000.00, 8, '{"brand":"Lenovo","display-size":"14 inch","resolution":"FHD 1920x1080","panel-type":"IPS","refresh-rate":"60Hz","connectivity":"2x USB-C"}', 1, 0);

-- ============================================================
-- MICROPHONE (category_id = 115)
-- ============================================================
INSERT INTO products (category_id, type, brand, model, name, slug, short_desc, price, regular_price, stock_qty, specifications, is_active, is_featured) VALUES
(115, 'Accessories', 'Rode', 'NT-USB Mini', 'Rode NT-USB Mini Studio USB Microphone', 'rode-nt-usb-mini-studio', 'Rode NT-USB Mini USB Condenser Microphone, Studio Quality, Detachable Magnetic Stand, Headphone Output.', 9500.00, 10500.00, 8, '{"brand":"Rode","type":"USB Condenser Microphone","connectivity":"USB","interface":"USB-C","color":"Black"}', 1, 0),
(115, 'Accessories', 'Fantech', 'MCX01 Leviosa', 'Fantech MCX01 Leviosa USB Condenser Microphone', 'fantech-mcx01-leviosa-usb-mic', 'Fantech MCX01 Leviosa RGB USB Condenser Microphone, Cardioid Pattern, Mute Button, Tripod Stand.', 3200.00, 3600.00, 15, '{"brand":"Fantech","type":"USB Condenser Microphone","connectivity":"USB","interface":"USB-A","color":"Black"}', 1, 0);

-- ============================================================
-- Done Part 2! Total ~55 more products across remaining categories.
-- ============================================================
