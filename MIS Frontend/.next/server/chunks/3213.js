"use strict";
exports.id = 3213;
exports.ids = [3213];
exports.modules = {

/***/ 6383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ useReducedMotion)
});

;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};
 //# sourceMappingURL=state.mjs.map

;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs

const isBrowser = "undefined" !== "undefined";
function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>prefersReducedMotion.current = motionMediaQuery.matches;
        motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else {
        prefersReducedMotion.current = false;
    }
}
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
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
     */ !hasReducedMotionListener.current && initPrefersReducedMotion();
    const { 0: shouldReduceMotion  } = (0,external_react_.useState)(prefersReducedMotion.current);
    if (false) {}
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
 //# sourceMappingURL=use-reduced-motion.mjs.map


/***/ }),

/***/ 7421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ useInView)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
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

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs

const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root , margin: rootMargin , amount ="some"  } = {}) {
    const elements = resolveElements(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs
"use client";


function useInView(ref, { root , margin , amount , once =false , initial =false ,  } = {}) {
    const { 0: isInView , 1: setInView  } = (0,external_react_.useState)(initial);
    (0,external_react_.useEffect)(()=>{
        if (!ref.current || once && isInView) return;
        const onEnter = ()=>{
            setInView(true);
            return once ? undefined : ()=>setInView(false);
        };
        const options = {
            root: root && root.current || undefined,
            margin,
            amount
        };
        return inView(ref.current, onEnter, options);
    }, [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
 //# sourceMappingURL=use-in-view.mjs.map


/***/ })

};
;