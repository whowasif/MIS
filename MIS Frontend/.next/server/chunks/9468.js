"use strict";
exports.id = 9468;
exports.ids = [9468];
exports.modules = {

/***/ 9115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useIsomorphicLayoutEffect)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.mjs
const isBrowser = "undefined" !== "undefined";
 //# sourceMappingURL=is-browser.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
"use client";


const useIsomorphicLayoutEffect = isBrowser ? external_react_.useLayoutEffect : external_react_.useEffect;
 //# sourceMappingURL=use-isomorphic-effect.mjs.map


/***/ }),

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useMotionValue)
/* harmony export */ });
/* harmony import */ var motion_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3453);
"use client";




/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useConstant */ .h)(()=>(0,motion_dom__WEBPACK_IMPORTED_MODULE_2__/* .motionValue */ .BX)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__/* .MotionConfigContext */ ._);
    if (isStatic) {
        const { 1: setLatest  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>value.on("change", setLatest), []);
    }
    return value;
}
 //# sourceMappingURL=use-motion-value.mjs.map


/***/ }),

/***/ 9468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ useTransform)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs
var interpolate = __webpack_require__(6303);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/transform.mjs

function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,interpolate/* interpolate */.s)(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}
 //# sourceMappingURL=transform.mjs.map

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(3453);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__(3014);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs + 1 modules
var use_isomorphic_effect = __webpack_require__(9115);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var use_motion_value = __webpack_require__(388);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs
"use client";



function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0,use_motion_value/* useMotionValue */.c)(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(()=>{
        const scheduleUpdate = ()=>frameloop_frame/* frame.preRender */.Wi.preRender(updateValue, false, true);
        const subscriptions = values.map((v)=>v.on("change", scheduleUpdate));
        return ()=>{
            subscriptions.forEach((unsubscribe)=>unsubscribe());
            (0,frameloop_frame/* cancelFrame */.Pn)(updateValue);
        };
    });
    return value;
}
 //# sourceMappingURL=use-combine-values.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var es_value = __webpack_require__(4318);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-computed.mjs
"use client";


function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ es_value/* collectMotionValues.current */.S1.current = [];
    compute();
    const value = useCombineMotionValues(es_value/* collectMotionValues.current */.S1.current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ es_value/* collectMotionValues.current */.S1.current = undefined;
    return value;
}
 //# sourceMappingURL=use-computed.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs
"use client";




function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") {
        return useComputed(input);
    }
    /**
     * Detect if outputRangeOrMap is an output map (object with keys)
     * rather than an output range (array).
     */ const isOutputMap = outputRangeOrMap !== undefined && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) {
        return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    }
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], ([latest])=>transformer(latest));
    const inputAccelerate = !Array.isArray(input) ? input.accelerate : undefined;
    if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
        result.accelerate = {
            ...inputAccelerate,
            times: inputRangeOrTransformer,
            keyframes: outputRangeOrMap,
            isTransformed: true,
            ...options?.ease ? {
                ease: options.ease
            } : {}
        };
    }
    return result;
}
function useListTransform(values, transformer) {
    const latest = (0,use_constant/* useConstant */.h)(()=>[]);
    return useCombineMotionValues(values, ()=>{
        latest.length = 0;
        const numValues = values.length;
        for(let i = 0; i < numValues; i++){
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
    /**
     * Capture keys once to ensure hooks are called in consistent order.
     */ const keys = (0,use_constant/* useConstant */.h)(()=>Object.keys(outputMap));
    const output = (0,use_constant/* useConstant */.h)(()=>({}));
    for (const key of keys){
        output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    }
    return output;
}
 //# sourceMappingURL=use-transform.mjs.map


/***/ })

};
;