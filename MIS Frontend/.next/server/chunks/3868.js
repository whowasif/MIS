"use strict";
exports.id = 3868;
exports.ids = [3868];
exports.modules = {

/***/ 3868:
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