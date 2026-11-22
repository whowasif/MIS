"use strict";
exports.id = 6274;
exports.ids = [6274];
exports.modules = {

/***/ 6274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ useInView)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
var resolve_elements = __webpack_require__(1202);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs

const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root , margin: rootMargin , amount ="some"  } = {}) {
    const elements = (0,resolve_elements/* resolveElements */.I)(elementOrSelector);
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