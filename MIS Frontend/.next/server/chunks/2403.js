"use strict";
exports.id = 2403;
exports.ids = [2403];
exports.modules = {

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useReducedMotion)
/* harmony export */ });
/* harmony import */ var motion_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9748);
/* harmony import */ var motion_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";



/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */ function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */ !motion_dom__WEBPACK_IMPORTED_MODULE_1__/* .hasReducedMotionListener.current */ .O.current && (0,motion_dom__WEBPACK_IMPORTED_MODULE_2__/* .initPrefersReducedMotion */ .Ad)();
    const { 0: shouldReduceMotion  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(motion_dom__WEBPACK_IMPORTED_MODULE_1__/* .prefersReducedMotion.current */ .n.current);
    if (false) {}
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
 //# sourceMappingURL=use-reduced-motion.mjs.map


/***/ }),

/***/ 4173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": () => (/* binding */ initPrefersReducedMotion)
/* harmony export */ });
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9748);

const isBrowser = "undefined" !== "undefined";
function initPrefersReducedMotion() {
    _state_mjs__WEBPACK_IMPORTED_MODULE_0__/* .hasReducedMotionListener.current */ .O.current = true;
    if (!isBrowser) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>_state_mjs__WEBPACK_IMPORTED_MODULE_0__/* .prefersReducedMotion.current */ .n.current = motionMediaQuery.matches;
        motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else {
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__/* .prefersReducedMotion.current */ .n.current = false;
    }
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ hasReducedMotionListener),
/* harmony export */   "n": () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};
 //# sourceMappingURL=state.mjs.map


/***/ }),

/***/ 1202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ resolveElements)
/* harmony export */ });
function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) {
        return [];
    }
    if (elementOrSelector instanceof EventTarget) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            root = scope.current;
        }
        const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter((element)=>element != null);
}
 //# sourceMappingURL=resolve-elements.mjs.map


/***/ })

};
;