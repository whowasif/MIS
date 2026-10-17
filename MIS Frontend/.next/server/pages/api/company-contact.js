"use strict";
(() => {
var exports = {};
exports.id = 3058;
exports.ids = [3058];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 1819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/server/db.js
var server_db = __webpack_require__(6548);
;// CONCATENATED MODULE: ./lib/server/company-contacts.js

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
    const db = (0,server_db/* getDbPool */.z)();
    const [rows] = await db.execute(`SELECT *
    FROM company_contacts
    ORDER BY updated_at DESC, id DESC
    LIMIT 1`);
    if (!rows.length) return defaultCompanyContact;
    return mapCompanyContactRow(rows[0]);
};

// EXTERNAL MODULE: ./lib/server/ttl-cache.js
var ttl_cache = __webpack_require__(6248);
;// CONCATENATED MODULE: ./pages/api/company-contact.js


async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        (0,ttl_cache.setPrivateNoStore)(res);
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        const contact = await (0,ttl_cache.getOrLoad)("api:company-contact", ()=>getPrimaryCompanyContact());
        (0,ttl_cache.setPublicPageCache)(res);
        return res.status(200).json({
            success: true,
            contact
        });
    } catch (error) {
        (0,ttl_cache.setPrivateNoStore)(res);
        return res.status(500).json({
            success: false,
            error: "Failed to load company contact information",
            details:  false ? 0 : undefined
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2065], () => (__webpack_exec__(1819)));
module.exports = __webpack_exports__;

})();