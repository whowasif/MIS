"use strict";
exports.id = 6058;
exports.ids = [6058,2984];
exports.modules = {

/***/ 6058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrimaryCompanyContact": () => (/* binding */ getPrimaryCompanyContact)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2984);

const defaultCompanyContact = {
    branchName: "Main Branch",
    fullAddress: "Address not available",
    googleMapEmbedUrl: null,
    latitude: null,
    longitude: null,
    primaryEmail: "support@missolution.com",
    supportEmail: null,
    hotlinePhone: "N/A",
    whatsappNumber: null,
    facebookUrl: null,
    linkedinUrl: null
};
const toNullableNumber = (value)=>{
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) return null;
    return numberValue;
};
const pickCoordinate = (row, keys)=>{
    for (const key of keys){
        if (row[key] === undefined || row[key] === null || row[key] === "") continue;
        const parsed = toNullableNumber(row[key]);
        if (parsed !== null) return parsed;
    }
    return null;
};
const mapCompanyContactRow = (row)=>({
        branchName: row.branch_name || defaultCompanyContact.branchName,
        fullAddress: row.full_address || defaultCompanyContact.fullAddress,
        googleMapEmbedUrl: row.google_map_embed_url || null,
        latitude: pickCoordinate(row, [
            "latitude",
            "lat",
            "map_latitude",
            "location_latitude"
        ]),
        longitude: pickCoordinate(row, [
            "longitude",
            "lng",
            "lon",
            "map_longitude",
            "location_longitude"
        ]),
        primaryEmail: row.primary_email || defaultCompanyContact.primaryEmail,
        supportEmail: row.support_email || null,
        hotlinePhone: row.hotline_phone || defaultCompanyContact.hotlinePhone,
        whatsappNumber: row.whatsapp_number || null,
        facebookUrl: row.facebook_url || null,
        linkedinUrl: row.linkedin_url || null
    });
const getPrimaryCompanyContact = async ()=>{
    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getDbPool)();
    const [rows] = await db.execute(`SELECT *
    FROM company_contacts
    ORDER BY updated_at DESC, id DESC
    LIMIT 1`);
    if (!rows.length) return defaultCompanyContact;
    return mapCompanyContactRow(rows[0]);
};


/***/ }),

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDbPool": () => (/* binding */ getDbPool)
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


/***/ })

};
;