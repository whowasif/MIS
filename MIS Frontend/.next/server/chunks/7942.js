"use strict";
exports.id = 7942;
exports.ids = [7942,6548];
exports.modules = {

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 7942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XW": () => (/* binding */ listNotificationsForAdmin),
/* harmony export */   "eK": () => (/* binding */ markNotificationsSeen),
/* harmony export */   "hZ": () => (/* binding */ countUnreadForAdmin),
/* harmony export */   "ix": () => (/* binding */ VISIBILITY),
/* harmony export */   "sc": () => (/* binding */ createNotification)
/* harmony export */ });
/* unused harmony exports ROLE_RANK, roleRank */
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);

// Role ranks: higher rank sees more. super_admin sees everything.
const ROLE_RANK = {
    super_admin: 3,
    senior_admin: 2,
    junior_admin: 1
};
const roleRank = (role)=>ROLE_RANK[String(role || "")] || 0;
// Convenience min-rank constants for notification visibility.
const VISIBILITY = {
    SUPER_ONLY: 3,
    SENIOR_UP: 2,
    ALL_ADMINS: 1
};
/**
 * Create an admin notification. Fire-and-forget: never throws so it can't
 * break the customer-facing or admin flow that triggered it.
 */ const createNotification = async ({ type , title , message =null , resource =null , resourceId =null , ipAddress =null , minRoleRank =VISIBILITY.SUPER_ONLY ,  })=>{
    try {
        const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
        await db.execute(`INSERT INTO admin_notifications (type, title, message, resource, resource_id, ip_address, min_role_rank, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`, [
            type,
            String(title).slice(0, 255),
            message ? String(message).slice(0, 500) : null,
            resource || null,
            resourceId != null ? String(resourceId).slice(0, 100) : null,
            ipAddress || null,
            Number(minRoleRank) || VISIBILITY.SUPER_ONLY, 
        ]);
    } catch (e) {
        console.error("Notification create error:", e.message);
    }
};
/**
 * List notifications visible to an admin (by role rank), newest first, each
 * annotated with whether THIS admin has seen it.
 */ const listNotificationsForAdmin = async ({ adminId , role , limit =30  })=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const rank = roleRank(role);
    const safeLimit = Math.max(1, Math.min(100, Number(limit) || 30));
    const [rows] = await db.execute(`SELECT n.id, n.type, n.title, n.message, n.resource, n.resource_id, n.ip_address, n.created_at,
            (r.id IS NOT NULL) AS is_read
     FROM admin_notifications n
     LEFT JOIN admin_notification_reads r
       ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ?
     ORDER BY n.created_at DESC
     LIMIT ${safeLimit}`, [
        adminId,
        rank
    ]);
    return rows.map((r)=>({
            ...r,
            is_read: !!r.is_read
        }));
};
/**
 * Count notifications this admin has NOT yet seen.
 */ const countUnreadForAdmin = async ({ adminId , role  })=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const rank = roleRank(role);
    const [rows] = await db.execute(`SELECT COUNT(*) AS unread
     FROM admin_notifications n
     LEFT JOIN admin_notification_reads r
       ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ? AND r.id IS NULL`, [
        adminId,
        rank
    ]);
    return Number(rows[0]?.unread || 0);
};
/**
 * Mark notifications as seen for THIS admin only. Pass an array of ids, or
 * omit to mark all currently-visible notifications as seen.
 * INSERT IGNORE keeps it idempotent and per-admin (UNIQUE notification_id+admin_id).
 */ const markNotificationsSeen = async ({ adminId , role , ids =null  })=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    const rank = roleRank(role);
    if (Array.isArray(ids) && ids.length > 0) {
        const cleanIds = ids.map((n)=>Number(n)).filter((n)=>Number.isInteger(n) && n > 0);
        if (cleanIds.length === 0) return;
        const placeholders = cleanIds.map(()=>"?").join(",");
        await db.execute(`INSERT IGNORE INTO admin_notification_reads (notification_id, admin_id)
       SELECT n.id, ? FROM admin_notifications n
       WHERE n.id IN (${placeholders}) AND n.min_role_rank <= ?`, [
            adminId,
            ...cleanIds,
            rank
        ]);
        return;
    }
    // Mark ALL visible notifications as seen for this admin.
    await db.execute(`INSERT IGNORE INTO admin_notification_reads (notification_id, admin_id)
     SELECT n.id, ? FROM admin_notifications n
     LEFT JOIN admin_notification_reads r ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ? AND r.id IS NULL`, [
        adminId,
        adminId,
        rank
    ]);
};


/***/ })

};
;