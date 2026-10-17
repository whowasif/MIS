"use strict";
exports.id = 2065;
exports.ids = [2065,6548];
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

/***/ 6248:
/***/ ((module) => {


const PUBLIC_CACHE_CONTROL = "public, max-age=60, stale-while-revalidate=60";
const PRIVATE_CACHE_CONTROL = "private, no-store";
const DEFAULT_TTL_MS = 120000;
const MAX_ENTRIES = 100;
const globalCache = globalThis.__misPublicTtlCache || {
    entries: new Map(),
    inflight: new Map()
};
globalThis.__misPublicTtlCache = globalCache;
const entries = globalCache.entries;
const inflight = globalCache.inflight;
const setCacheControl = (res, value)=>{
    if (!res || typeof res.setHeader !== "function" || res.headersSent) return;
    res.setHeader("Cache-Control", value);
};
const setPublicPageCache = (res)=>{
    setCacheControl(res, PUBLIC_CACHE_CONTROL);
};
const setPrivateNoStore = (res)=>{
    setCacheControl(res, PRIVATE_CACHE_CONTROL);
};
const cloneData = (value)=>JSON.parse(JSON.stringify(value));
const isPinned = (key)=>key.startsWith("page:") || key.startsWith("api:");
const remember = (key, value)=>{
    if (entries.has(key)) entries.delete(key);
    entries.set(key, {
        value,
        expiresAt: Date.now() + DEFAULT_TTL_MS
    });
    while(entries.size > MAX_ENTRIES){
        let oldestEvictable;
        for (const candidate of entries.keys()){
            if (!isPinned(candidate)) {
                oldestEvictable = candidate;
                break;
            }
        }
        const oldest = oldestEvictable || entries.keys().next().value;
        if (!oldest || oldest === key && !oldestEvictable) break;
        entries.delete(oldest);
    }
};
const readFresh = (key)=>{
    const hit = entries.get(key);
    if (!hit) return undefined;
    if (hit.expiresAt <= Date.now()) {
        entries.delete(key);
        return undefined;
    }
    entries.delete(key);
    entries.set(key, hit);
    return hit.value;
};
const getOrLoad = async (key, loader)=>{
    if (typeof key !== "string" || !key) {
        throw new Error("Cache key is required");
    }
    const fresh = readFresh(key);
    if (fresh !== undefined) return cloneData(fresh);
    let pending = inflight.get(key);
    if (!pending) {
        pending = (async ()=>{
            try {
                const raw = await loader();
                try {
                    const stored = cloneData(raw);
                    remember(key, stored);
                    return {
                        cached: true,
                        value: stored
                    };
                } catch (cloneError) {
                    return {
                        cached: false,
                        value: raw
                    };
                }
            } finally{
                inflight.delete(key);
            }
        })();
        inflight.set(key, pending);
    }
    const result = await pending;
    if (!result.cached) return result.value;
    return cloneData(result.value);
};
const servePublicCache = async (res, key, loader, fallback)=>{
    try {
        const result = await getOrLoad(key, loader);
        setPublicPageCache(res);
        return result;
    } catch (error) {
        setPrivateNoStore(res);
        if (typeof fallback === "function") return fallback(error);
        throw error;
    }
};
module.exports = {
    PUBLIC_CACHE_CONTROL,
    PRIVATE_CACHE_CONTROL,
    DEFAULT_TTL_MS,
    MAX_ENTRIES,
    getOrLoad,
    servePublicCache,
    setPublicPageCache,
    setPrivateNoStore
};


/***/ })

};
;