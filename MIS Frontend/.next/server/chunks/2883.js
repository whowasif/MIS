"use strict";
exports.id = 2883;
exports.ids = [2883];
exports.modules = {

/***/ 2883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ useScroll)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var value = __webpack_require__(4318);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var microtask = __webpack_require__(4337);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var scroll_timeline = __webpack_require__(4402);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/errors.mjs
var errors = __webpack_require__(667);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/noop.mjs
var noop = __webpack_require__(3481);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__(3014);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/scroll/observe.mjs

function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime  } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    frameloop_frame/* frame.preUpdate */.Wi.preUpdate(onFrame, true);
    return ()=>(0,frameloop_frame/* cancelFrame */.Pn)(onFrame);
}
 //# sourceMappingURL=observe.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs

function canUseNativeTimeline(target) {
    if (true) return false;
    return target ? (0,scroll_timeline/* supportsViewTimeline */.i)() : (0,scroll_timeline/* supportsScrollTimeline */.t)();
}
 //# sourceMappingURL=can-use-native-timeline.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/resize/index.mjs + 2 modules
var resize = __webpack_require__(1374);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
var progress = __webpack_require__(6658);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocity_per_second = __webpack_require__(9610);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs

/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length , position  } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = Math.abs(element[`scroll${position}`]);
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,progress/* progress */.Y)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0,velocity_per_second/* velocityPerSecond */.R)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
 //# sourceMappingURL=info.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs
var interpolate = __webpack_require__(6303);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
var offsets_default = __webpack_require__(9065);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/clamp.mjs
var clamp = __webpack_require__(3679);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs
var is_html_element = __webpack_require__(3083);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs

function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if ((0,is_html_element/* isHTMLElement */.R)(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x , y  } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
 //# sourceMappingURL=inset.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
 //# sourceMappingURL=edge.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs

const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                namedEdges[offset] ? offset : `0`
            ];
        }
    }
    targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
    containerPoint = resolveEdge(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
 //# sourceMappingURL=offset.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ], 
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ], 
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ], 
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ], 
    ]
};
 //# sourceMappingURL=presets.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs





const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = ScrollOffset.All  } = options;
    const { target =container , axis ="y"  } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? calcInset(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0,interpolate/* interpolate */.s)(info[axis].offset, (0,offsets_default/* defaultOffset */.Y)(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0,clamp/* clamp */.u)(0, 1, info[axis].interpolate(info[axis].current));
}
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs



function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions. The document scrolling element
     * is exempt: offsetParent measurements naturally resolve relative to the document.
     */ if (false) {}
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: (time)=>{
            measure(element, options.target, info);
            updateScrollInfo(element, info, time);
            if (options.offset || options.target) {
                resolveOffsets(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
 //# sourceMappingURL=on-scroll-handler.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs




const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const scrollSize = new WeakMap();
const dimensionCheckProcesses = new WeakMap();
const getEventTarget = (element)=>element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container =document.scrollingElement , trackContentSize =false , ...options } = {}) {
    if (!container) return noop/* noop */.Z;
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = createScrollInfo();
    const containerHandler = createOnScrollHandler(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers){
                handler.measure(frameloop_frame/* frameData.timestamp */.w0.timestamp);
            }
            frameloop_frame/* frame.preUpdate */.Wi.preUpdate(notifyAll);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers){
                handler.notify();
            }
        };
        const listener = ()=>frameloop_frame/* frame.read */.Wi.read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener);
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0,resize/* resize */.S)(container, listener));
        }
        target.addEventListener("scroll", listener);
        listener();
    }
    /**
     * Enable content size tracking if requested and not already enabled.
     */ if (trackContentSize && !dimensionCheckProcesses.has(container)) {
        const listener1 = scrollListeners.get(container);
        // Store initial scroll dimensions (object is reused to avoid allocation)
        const size = {
            width: container.scrollWidth,
            height: container.scrollHeight
        };
        scrollSize.set(container, size);
        // Add frame-based scroll dimension checking to detect content changes
        const checkScrollDimensions = ()=>{
            const newWidth = container.scrollWidth;
            const newHeight = container.scrollHeight;
            if (size.width !== newWidth || size.height !== newHeight) {
                listener1();
                size.width = newWidth;
                size.height = newHeight;
            }
        };
        // Schedule with keepAlive=true to run every frame
        const dimensionCheckProcess = frameloop_frame/* frame.read */.Wi.read(checkScrollDimensions, true);
        dimensionCheckProcesses.set(container, dimensionCheckProcess);
    }
    const listener2 = scrollListeners.get(container);
    frameloop_frame/* frame.read */.Wi.read(listener2, false, true);
    return ()=>{
        (0,frameloop_frame/* cancelFrame */.Pn)(listener2);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            resizeListeners.get(container)?.();
            window.removeEventListener("resize", scrollListener);
        }
        // Clean up scroll dimension checking
        const dimensionCheckProcess = dimensionCheckProcesses.get(container);
        if (dimensionCheckProcess) {
            (0,frameloop_frame/* cancelFrame */.Pn)(dimensionCheckProcess);
            dimensionCheckProcesses.delete(container);
        }
        scrollSize.delete(container);
    };
}
 //# sourceMappingURL=track.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs

/**
 * Maps from ProgressIntersection pairs used by Motion's preset offsets to
 * ViewTimeline named ranges. Returns undefined for unrecognised patterns,
 * which signals the caller to fall back to JS-based scroll tracking.
 */ const presets = [
    [
        ScrollOffset.Enter,
        "entry"
    ],
    [
        ScrollOffset.Exit,
        "exit"
    ],
    [
        ScrollOffset.Any,
        "cover"
    ],
    [
        ScrollOffset.All,
        "contain"
    ], 
];
const stringToProgress = {
    start: 0,
    end: 1
};
function parseStringOffset(s) {
    const parts = s.trim().split(/\s+/);
    if (parts.length !== 2) return undefined;
    const a = stringToProgress[parts[0]];
    const b = stringToProgress[parts[1]];
    if (a === undefined || b === undefined) return undefined;
    return [
        a,
        b
    ];
}
function normaliseOffset(offset) {
    if (offset.length !== 2) return undefined;
    const result = [];
    for (const item of offset){
        if (Array.isArray(item)) {
            result.push(item);
        } else if (typeof item === "string") {
            const parsed = parseStringOffset(item);
            if (!parsed) return undefined;
            result.push(parsed);
        } else {
            return undefined;
        }
    }
    return result;
}
function matchesPreset(offset, preset) {
    const normalised = normaliseOffset(offset);
    if (!normalised) return false;
    for(let i = 0; i < 2; i++){
        const o = normalised[i];
        const p = preset[i];
        if (o[0] !== p[0] || o[1] !== p[1]) return false;
    }
    return true;
}
function offsetToViewTimelineRange(offset) {
    if (!offset) {
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    }
    for (const [preset, name] of presets){
        if (matchesPreset(offset, preset)) {
            return {
                rangeStart: `${name} 0%`,
                rangeEnd: `${name} 100%`
            };
        }
    }
    return undefined;
}
 //# sourceMappingURL=offset-to-range.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs



const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = {
        value: 0
    };
    const cancel = scrollInfo((info)=>{
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return {
        currentTime,
        cancel
    };
}
function getTimeline({ source , container , ...options }) {
    const { axis  } = options;
    if (source) container = source;
    let containerCache = timelineCache.get(container);
    if (!containerCache) {
        containerCache = new Map();
        timelineCache.set(container, containerCache);
    }
    const targetKey = options.target ?? "self";
    let targetCache = containerCache.get(targetKey);
    if (!targetCache) {
        targetCache = {};
        containerCache.set(targetKey, targetCache);
    }
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
        if (options.target && canUseNativeTimeline(options.target)) {
            const range = offsetToViewTimelineRange(options.offset);
            if (range) {
                targetCache[axisKey] = new ViewTimeline({
                    subject: options.target,
                    axis
                });
            } else {
                targetCache[axisKey] = scrollTimelineFallback({
                    container,
                    ...options
                });
            }
        } else if (canUseNativeTimeline()) {
            targetCache[axisKey] = new ScrollTimeline({
                source: container,
                axis
            });
        } else {
            targetCache[axisKey] = scrollTimelineFallback({
                container,
                ...options
            });
        }
    }
    return targetCache[axisKey];
}
 //# sourceMappingURL=get-timeline.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs




function attachToAnimation(animation, options) {
    const timeline = getTimeline(options);
    const range = options.target ? offsetToViewTimelineRange(options.offset) : undefined;
    /**
     * Use native timeline when:
     * - No target: ScrollTimeline (existing behaviour)
     * - Target with mappable offset: ViewTimeline with named range
     * - Target with unmappable offset: fall back to JS observe
     */ const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
    return animation.attachTimeline({
        timeline: useNative ? timeline : undefined,
        ...range && useNative && {
            rangeStart: range.rangeStart,
            rangeEnd: range.rangeEnd
        },
        observe: (valueAnimation)=>{
            valueAnimation.pause();
            return observeTimeline((progress)=>{
                valueAnimation.time = valueAnimation.iterationDuration * progress;
            }, timeline);
        }
    });
}
 //# sourceMappingURL=attach-animation.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/utils/is-element-tracking.mjs
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */ function isElementTracking(options) {
    return options && (options.target || options.offset);
}
 //# sourceMappingURL=is-element-tracking.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs




/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) {
        return scrollInfo((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return observeTimeline(onScroll, getTimeline(options));
    }
}
 //# sourceMappingURL=attach-function.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs



function scroll_scroll(onScroll, { axis ="y" , container =document.scrollingElement , ...options } = {}) {
    if (!container) return noop/* noop */.Z;
    const optionsWithDefaults = {
        axis,
        container,
        ...options
    };
    return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(3453);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs + 1 modules
var use_isomorphic_effect = __webpack_require__(9115);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs
"use client";







const createScrollMotionValues = ()=>({
        scrollX: (0,value/* motionValue */.BX)(0),
        scrollY: (0,value/* motionValue */.BX)(0),
        scrollXProgress: (0,value/* motionValue */.BX)(0),
        scrollYProgress: (0,value/* motionValue */.BX)(0)
    });
const isRefPending = (ref)=>{
    if (!ref) return false;
    return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
    return {
        // Refs attach child-first; defer so target.current is populated
        // before scroll() reads it.
        factory: (animation)=>{
            let cleanup;
            const start = ()=>{
                // A provided ref may be hydrated by an effect declared after
                // useScroll (or in a parent). Don't attach to the window
                // scroll in the meantime — that result gets cached and would
                // permanently mistrack. Wait until the ref resolves.
                if (isRefPending(container) || isRefPending(target)) {
                    microtask/* microtask.read */.g.read(start);
                    return;
                }
                cleanup = scroll_scroll(animation, {
                    ...options,
                    axis,
                    container: container?.current || undefined,
                    target: target?.current || undefined
                });
            };
            microtask/* microtask.read */.g.read(start);
            return ()=>{
                (0,microtask/* cancelMicrotask */.$)(start);
                cleanup?.();
            };
        },
        times: [
            0,
            1
        ],
        keyframes: [
            0,
            1
        ],
        ease: (v)=>v,
        duration: 1
    };
}
function canAccelerateScroll(target, offset) {
    if (true) return false;
    return target ? (0,scroll_timeline/* supportsViewTimeline */.i)() && !!offsetToViewTimelineRange(offset) : (0,scroll_timeline/* supportsScrollTimeline */.t)();
}
function useScroll({ container , target , ...options } = {}) {
    const values = (0,use_constant/* useConstant */.h)(createScrollMotionValues);
    if (canAccelerateScroll(target, options.offset)) {
        values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
        values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
    }
    const scrollAnimation = (0,external_react_.useRef)(null);
    const needsStart = (0,external_react_.useRef)(false);
    const start = (0,external_react_.useCallback)(()=>{
        scrollAnimation.current = scroll_scroll((_progress, { x , y ,  })=>{
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: container?.current || undefined,
            target: target?.current || undefined
        });
        return ()=>{
            scrollAnimation.current?.();
        };
    }, [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(()=>{
        needsStart.current = false;
        if (isRefPending(container) || isRefPending(target)) {
            needsStart.current = true;
            return;
        } else {
            return start();
        }
    }, [
        start
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!needsStart.current) return;
        // Defer to a microtask so any sibling/parent effect that hydrates the
        // ref has a chance to run first.
        let cleanup;
        const tryStart = ()=>{
            const containerPending = isRefPending(container);
            const targetPending = isRefPending(target);
            (0,errors/* invariant */.k)(!containerPending, "Container ref is defined but not hydrated", "use-scroll-ref");
            (0,errors/* invariant */.k)(!targetPending, "Target ref is defined but not hydrated", "use-scroll-ref");
            if (!containerPending && !targetPending) cleanup = start();
        };
        microtask/* microtask.read */.g.read(tryStart);
        return ()=>{
            (0,microtask/* cancelMicrotask */.$)(tryStart);
            cleanup?.();
        };
    }, [
        start
    ]);
    return values;
}
 //# sourceMappingURL=use-scroll.mjs.map


/***/ })

};
;