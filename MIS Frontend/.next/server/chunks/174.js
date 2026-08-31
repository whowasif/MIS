"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bm": () => (/* binding */ getVisitorLogs),
/* harmony export */   "SC": () => (/* binding */ logAdminActivity),
/* harmony export */   "T0": () => (/* binding */ getAdminActivityFilterOptions),
/* harmony export */   "aH": () => (/* binding */ getVisitorStats),
/* harmony export */   "e9": () => (/* binding */ logVisitorEvent),
/* harmony export */   "th": () => (/* binding */ getAdminActivityLogsFiltered)
/* harmony export */ });
/* unused harmony export getAdminActivityLogs */
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);

/**
 * Log an admin activity
 * @param {object} params
 * @param {number} params.adminId - The admin user ID
 * @param {string} params.adminEmail - The admin email
 * @param {string} params.action - Action type: login, logout, create, update, delete, view
 * @param {string} params.resource - Resource type: products, orders, categories, etc.
 * @param {number|string} [params.resourceId] - ID of the affected resource
 * @param {string} [params.details] - Additional details (JSON or text)
 * @param {string} [params.ipAddress] - IP address of the admin
 */ const logAdminActivity = async ({ adminId , adminEmail , action , resource , resourceId =null , details =null , ipAddress =null  })=>{
    try {
        const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
        await db.execute(`INSERT INTO admin_activity_logs (admin_id, admin_email, action, resource, resource_id, details, ip_address, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`, [
            adminId || null,
            adminEmail || null,
            action,
            resource,
            resourceId || null,
            details || null,
            ipAddress || null
        ]);
    } catch (e) {
        // Don't let logging failures break the app
        console.error("Activity log error:", e.message);
    }
};
/**
 * Log a visitor event (page view, search, product view)
 * @param {object} params
 * @param {string} params.eventType - page_view, search, product_view, add_to_cart
 * @param {string} [params.page] - Page URL/path
 * @param {string} [params.searchQuery] - Search query (for search events)
 * @param {number|string} [params.productId] - Product ID (for product events)
 * @param {string} [params.productName] - Product name
 * @param {string} [params.ipAddress] - Visitor IP
 * @param {string} [params.userAgent] - Browser user agent
 * @param {string} [params.referrer] - Referrer URL
 * @param {number} [params.customerId] - Customer ID if logged in
 */ const logVisitorEvent = async ({ eventType , page =null , searchQuery =null , productId =null , productName =null , ipAddress =null , userAgent =null , referrer =null , customerId =null  })=>{
    try {
        const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
        await db.execute(`INSERT INTO visitor_logs (event_type, page, search_query, product_id, product_name, ip_address, user_agent, referrer, customer_id, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`, [
            eventType,
            page || null,
            searchQuery || null,
            productId || null,
            productName || null,
            ipAddress || null,
            (userAgent || "").substring(0, 500),
            referrer || null,
            customerId || null
        ]);
        // Auto-cleanup: delete visitor logs older than 90 days (runs ~1% of the time to avoid overhead)
        if (Math.random() < 0.01) {
            db.query("DELETE FROM visitor_logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY)").catch(()=>{});
        }
    } catch (e) {
        console.error("Visitor log error:", e.message);
    }
};
/**
 * Get admin activity logs
 */ const getAdminActivityLogs = async (limit = 100, offset = 0)=>{
    const db = getDbPool();
    const safeLimit = Math.max(1, Math.min(500, Number(limit) || 100));
    const safeOffset = Math.max(0, Number(offset) || 0);
    const [rows] = await db.query(`SELECT * FROM admin_activity_logs ORDER BY created_at DESC LIMIT ${safeLimit} OFFSET ${safeOffset}`);
    return rows;
};
/**
 * Get admin activity logs with filters + total count (for pagination).
 * @param {object} opts
 * @param {number} opts.limit
 * @param {number} opts.offset
 * @param {string} [opts.adminEmail] - exact admin email
 * @param {string} [opts.action] - exact action (create/update/delete/login/...)
 * @param {string} [opts.resource] - exact resource
 * @param {string} [opts.resourceId] - resource id (matched as string)
 * @param {string} [opts.dateFrom] - ISO/date string, inclusive
 * @param {string} [opts.dateTo] - ISO/date string, inclusive (end of day)
 * @returns {{ rows: any[], total: number }}
 */ const getAdminActivityLogsFiltered = async ({ limit =50 , offset =0 , adminEmail =null , action =null , resource =null , resourceId =null , dateFrom =null , dateTo =null ,  } = {})=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const safeLimit = Math.max(1, Math.min(200, Number(limit) || 50));
    const safeOffset = Math.max(0, Number(offset) || 0);
    const where = [];
    const params = [];
    if (adminEmail) {
        where.push("admin_email = ?");
        params.push(adminEmail);
    }
    if (action) {
        where.push("action = ?");
        params.push(action);
    }
    if (resource) {
        where.push("resource = ?");
        params.push(resource);
    }
    if (resourceId) {
        where.push("resource_id = ?");
        params.push(resourceId);
    }
    if (dateFrom) {
        where.push("created_at >= ?");
        params.push(`${dateFrom} 00:00:00`);
    }
    if (dateTo) {
        where.push("created_at <= ?");
        params.push(`${dateTo} 23:59:59`);
    }
    const whereClause = where.length ? ` WHERE ${where.join(" AND ")}` : "";
    const [countRows] = await db.query(`SELECT COUNT(*) as total FROM admin_activity_logs${whereClause}`, params);
    const total = Number(countRows[0]?.total || 0);
    const [rows] = await db.query(`SELECT * FROM admin_activity_logs${whereClause} ORDER BY created_at DESC LIMIT ${safeLimit} OFFSET ${safeOffset}`, params);
    return {
        rows,
        total
    };
};
/**
 * Distinct values for admin-log filter dropdowns.
 */ const getAdminActivityFilterOptions = async ()=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const [admins] = await db.query(`SELECT DISTINCT admin_email FROM admin_activity_logs WHERE admin_email IS NOT NULL AND admin_email <> '' ORDER BY admin_email ASC`);
    const [actions] = await db.query(`SELECT DISTINCT action FROM admin_activity_logs WHERE action IS NOT NULL AND action <> '' ORDER BY action ASC`);
    const [resources] = await db.query(`SELECT DISTINCT resource FROM admin_activity_logs WHERE resource IS NOT NULL AND resource <> '' ORDER BY resource ASC`);
    return {
        admins: admins.map((r)=>r.admin_email),
        actions: actions.map((r)=>r.action),
        resources: resources.map((r)=>r.resource)
    };
};
/**
 * Get visitor logs
 */ const getVisitorLogs = async (limit = 100, offset = 0, eventType = null)=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const safeLimit = Math.max(1, Math.min(500, Number(limit) || 100));
    const safeOffset = Math.max(0, Number(offset) || 0);
    let query = "SELECT * FROM visitor_logs";
    const params = [];
    if (eventType) {
        query += " WHERE event_type = ?";
        params.push(eventType);
    }
    query += ` ORDER BY created_at DESC LIMIT ${safeLimit} OFFSET ${safeOffset}`;
    const [rows] = await db.query(query, params);
    return rows;
};
/**
 * Get visitor stats summary
 */ const getVisitorStats = async (days = 7)=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const [pageViews] = await db.query(`SELECT COUNT(*) as total FROM visitor_logs WHERE event_type = 'page_view' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)`, [
        days
    ]);
    const [searches] = await db.query(`SELECT COUNT(*) as total FROM visitor_logs WHERE event_type = 'search' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)`, [
        days
    ]);
    const [productViews] = await db.query(`SELECT COUNT(*) as total FROM visitor_logs WHERE event_type = 'product_view' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)`, [
        days
    ]);
    const [uniqueVisitors] = await db.query(`SELECT COUNT(DISTINCT ip_address) as total FROM visitor_logs WHERE created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)`, [
        days
    ]);
    const [topPages] = await db.query(`SELECT page, COUNT(*) as visits FROM visitor_logs WHERE event_type = 'page_view' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY) GROUP BY page ORDER BY visits DESC LIMIT 10`, [
        days
    ]);
    const [topSearches] = await db.query(`SELECT search_query, COUNT(*) as count FROM visitor_logs WHERE event_type = 'search' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY) AND search_query IS NOT NULL GROUP BY search_query ORDER BY count DESC LIMIT 10`, [
        days
    ]);
    const [topProducts] = await db.query(`SELECT product_name, product_id, COUNT(*) as views FROM visitor_logs WHERE event_type = 'product_view' AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY) AND product_name IS NOT NULL GROUP BY product_id, product_name ORDER BY views DESC LIMIT 10`, [
        days
    ]);
    return {
        pageViews: Number(pageViews[0]?.total || 0),
        searches: Number(searches[0]?.total || 0),
        productViews: Number(productViews[0]?.total || 0),
        uniqueVisitors: Number(uniqueVisitors[0]?.total || 0),
        topPages,
        topSearches,
        topProducts
    };
};


/***/ })

};
;