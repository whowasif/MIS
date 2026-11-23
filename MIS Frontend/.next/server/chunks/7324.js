"use strict";
exports.id = 7324;
exports.ids = [7324];
exports.modules = {

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ animate)
});

// UNUSED EXPORTS: createScopedAnimate

;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs
class GroupAnimation {
    constructor(animations){
        // Bound to accomadate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        return Promise.all(this.animations.map((animation)=>animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline) {
        const subscriptions = this.animations.map((animation)=>animation.attachTimeline(timeline));
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get state() {
        return this.getAll("state");
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        return getMax(this.animations, "duration");
    }
    get iterationDuration() {
        return getMax(this.animations, "iterationDuration");
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
function getMax(animations, propName) {
    let max = 0;
    for(let i = 0; i < animations.length; i++){
        const value = animations[i][propName];
        if (value !== null && value > max) {
            max = value;
        }
    }
    return max;
}
 //# sourceMappingURL=GroupAnimation.mjs.map

;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs

class GroupAnimationWithThen extends GroupAnimation {
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(()=>{});
    }
}
 //# sourceMappingURL=GroupAnimationWithThen.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/array.mjs
var array = __webpack_require__(1917);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var value = __webpack_require__(4318);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var spring = __webpack_require__(4);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
var offsets_default = __webpack_require__(9065);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
var is_generator = __webpack_require__(2850);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
var create_generator_easing = __webpack_require__(9806);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
var fill = __webpack_require__(8061);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var is_motion_value = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/time-conversion.mjs
var time_conversion = __webpack_require__(1211);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/errors.mjs
var errors = __webpack_require__(667);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverse = __webpack_require__(2954);
;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/wrap.mjs
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
 //# sourceMappingURL=wrap.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var is_easing_array = __webpack_require__(5965);
;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs


/*#__NO_SIDE_EFFECTS__*/ function getEasingForSegment(easing, i) {
    return (0,is_easing_array/* isEasingArray */.N)(easing) ? easing[wrap(0, easing.length, i)] : easing;
}
 //# sourceMappingURL=get-easing-for-segment.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
var progress = __webpack_require__(6658);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
var resolve_elements = __webpack_require__(1202);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}
 //# sourceMappingURL=is-dom-keyframes.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs


function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (subject == null) {
        return [];
    }
    if (typeof subject === "string" && isDOMKeyframes(keyframes)) {
        return (0,resolve_elements/* resolveElements */.I)(subject, scope, selectorCache);
    } else if (subject instanceof NodeList) {
        return Array.from(subject);
    } else if (Array.isArray(subject)) {
        return subject.filter((s)=>s != null);
    } else {
        return [
            subject
        ];
    }
}
 //# sourceMappingURL=resolve-subjects.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, repeatDelay) {
    return duration * (repeat + 1) + repeatDelay * repeat;
}
 //# sourceMappingURL=calc-repeat-duration.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ function calcNextTime(current, next, prev, labels) {
    if (typeof next === "number") {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else if (next.startsWith("<")) {
        return Math.max(0, prev + parseFloat(next.slice(1)));
    } else {
        return labels.get(next) ?? current;
    }
}
 //# sourceMappingURL=calc-time.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/mix/number.mjs
var number = __webpack_require__(9831);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs


function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0,array/* removeItem */.cl)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0,number/* mixNumber */.t)(startTime, endTime, offset[i]),
            easing: getEasingForSegment(easing, i)
        });
    }
}
 //# sourceMappingURL=edit.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 *
 * `repeatDelayUnits` is the repeatDelay expressed in units of a single
 * iteration's duration, so the total span equals `(repeat + 1) + repeat * repeatDelayUnits`.
 */ function normalizeTimes(times, repeat, repeatDelayUnits = 0) {
    const totalUnits = repeat + 1 + repeat * repeatDelayUnits;
    for(let i = 0; i < times.length; i++){
        times[i] = times[i] / totalUnits;
    }
}
 //# sourceMappingURL=normalize-times.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else {
        return a.at - b.at;
    }
}
 //# sourceMappingURL=sort.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/sequence/create.mjs








const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition ={} , ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) {
            currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay =0 , times =(0,offsets_default/* defaultOffset */.Y)(valueKeyframesAsList) , type =defaultTransition.type || "keyframes" , repeat , repeatType , repeatDelay =0 , ...remainingTransition } = valueTransition;
            let { ease =defaultTransition.ease || "easeOut" , duration  } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0,is_generator/* isGenerator */.x)(type) ? type : generators?.[type || "keyframes"];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...defaultTransition,
                    ...remainingTransition
                };
                if (duration !== undefined) {
                    springTransition.duration = (0,time_conversion/* secondsToMilliseconds */.w)(duration);
                }
                const springEasing = (0,create_generator_easing/* createGeneratorEasing */.S)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration ?? (duration = defaultDuration);
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0,fill/* fillOffset */.c)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Segments can't express `repeat: Infinity` or very large
             * counts — they'd leave dead time after the segment or
             * explode the keyframe array. Ignore with a warning.
             */ if (repeat) {
                (0,errors/* warning */.K)(repeat < MAX_REPEAT, `Sequence segments can't repeat ${repeat} times — ignoring repeat option. Use a value below ${MAX_REPEAT} or apply repeat at the sequence level instead.`);
            }
            if (repeat && repeat < MAX_REPEAT) {
                /**
                 * Express repeatDelay in units of a single iteration's duration
                 * so it can be added to the per-iteration time offsets below
                 * before they're normalized to 0-1.
                 */ const repeatDelayUnits = duration > 0 ? repeatDelay / duration : 0;
                duration = calculateRepeatDuration(duration, repeat, repeatDelay);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                /**
                 * For reverse/mirror, alternate iterations play the segment
                 * backwards. mirror matches JSAnimation's mirroredGenerator:
                 * reversed keyframes, easings unchanged. reverse matches
                 * JSAnimation's iterationProgress = 1 - p: reversed
                 * keyframes, easing array reversed AND each function easing
                 * mapped through reverseEasing (string easings unchanged —
                 * they're resolved later by the keyframes engine).
                 */ const isFlipping = repeatType === "reverse" || repeatType === "mirror";
                let flippedKeyframes = originalKeyframes;
                let flippedEases = originalEase;
                if (isFlipping) {
                    flippedKeyframes = [
                        ...originalKeyframes
                    ].reverse();
                    if (repeatType === "reverse") {
                        flippedEases = [
                            ...originalEase
                        ].reverse().map((e)=>typeof e === "function" ? (0,reverse/* reverseEasing */.M)(e) : e);
                    }
                }
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    const isFlipped = isFlipping && repeatIndex % 2 === 0;
                    const iterKeyframes = isFlipped ? flippedKeyframes : originalKeyframes;
                    const iterEase = isFlipped ? flippedEases : originalEase;
                    const iterStartOffset = (repeatIndex + 1) * (1 + repeatDelayUnits);
                    /**
                     * If repeatDelay is set, hold the previous iteration's
                     * final value through the delay by inserting a keyframe
                     * at the moment the next iteration begins.
                     */ if (repeatDelayUnits > 0) {
                        valueKeyframesAsList.push(valueKeyframesAsList[valueKeyframesAsList.length - 1]);
                        times.push(iterStartOffset);
                        ease.push("linear");
                    }
                    valueKeyframesAsList.push(...iterKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < iterKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + iterStartOffset);
                        ease.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(iterEase, keyframeIndex - 1));
                    }
                }
                normalizeTimes(times, repeat, repeatDelayUnits);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ addKeyframes(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0,is_motion_value/* isMotionValue */.i)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = resolveSubjects(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence1 = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes){
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence1), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(compareByTime);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at , value , easing  } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0,progress/* progress */.Y)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {}
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            /**
             * Exclude `type` from defaultTransition since springs have been
             * converted to duration-based easing functions in resolveValueSequence.
             * Including `type: "spring"` would cause JSAnimation to error when
             * the merged keyframes array has more than 2 keyframes.
             */ const { type: _type , ...remainingDefaultTransition } = defaultTransition;
            definition.transition[key] = {
                ...remainingDefaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);
 //# sourceMappingURL=create.mjs.map

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
var single_value = __webpack_require__(3950);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/render/store.mjs
var store = __webpack_require__(7444);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs + 1 modules
var visual_element_target = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
var is_svg_element = __webpack_require__(6332);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
var is_svg_svg_element = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs + 2 modules
var SVGVisualElement = __webpack_require__(1567);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
var HTMLVisualElement = __webpack_require__(930);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var models = __webpack_require__(6372);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/render/VisualElement.mjs + 2 modules
var VisualElement = __webpack_require__(769);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs


function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends VisualElement/* VisualElement */.l9 {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0,models/* createBox */.dO)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output  }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}
 //# sourceMappingURL=ObjectVisualElement.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs

function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0,is_svg_element/* isSVGElement */.v)(element) && !(0,is_svg_svg_element/* isSVGSVGElement */.r)(element) ? new SVGVisualElement/* SVGVisualElement */.e(options) : new HTMLVisualElement/* HTMLVisualElement */.W(options);
    node.mount(element);
    store/* visualElementStore.set */.R.set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new ObjectVisualElement(options);
    node.mount(subject);
    store/* visualElementStore.set */.R.set(subject, node);
}
 //# sourceMappingURL=create-visual-element.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/subject.mjs





function isSingleValue(subject, keyframes) {
    return (0,is_motion_value/* isMotionValue */.i)(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0,single_value/* animateSingleValue */.D)(subject, isDOMKeyframes(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    } else {
        // Gracefully handle null/undefined subjects (e.g., from querySelector returning null)
        if (subject == null) {
            return animations;
        }
        const subjects = resolveSubjects(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0,errors/* invariant */.k)(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
            if (!store/* visualElementStore.has */.R.has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = store/* visualElementStore.get */.R.get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0,visual_element_target/* animateTarget */.w)(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}
 //# sourceMappingURL=subject.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/sequence.mjs



function animateSequence(sequence, options, scope) {
    const animations = [];
    /**
     * Pre-process: replace function segments with MotionValue segments,
     * subscribe callbacks immediately
     */ const processedSequence = sequence.map((segment)=>{
        if (Array.isArray(segment) && typeof segment[0] === "function") {
            const callback = segment[0];
            const mv = (0,value/* motionValue */.BX)(0);
            mv.on("change", callback);
            if (segment.length === 1) {
                return [
                    mv,
                    [
                        0,
                        1
                    ]
                ];
            } else if (segment.length === 2) {
                return [
                    mv,
                    [
                        0,
                        1
                    ],
                    segment[1]
                ];
            } else {
                return [
                    mv,
                    segment[1],
                    segment[2]
                ];
            }
        }
        return segment;
    });
    const animationDefinitions = createAnimationsFromSequence(processedSequence, options, scope, {
        spring: spring/* spring */.S
    });
    animationDefinitions.forEach(({ keyframes , transition  }, subject)=>{
        animations.push(...animateSubject(subject, keyframes, transition));
    });
    return animations;
}
 //# sourceMappingURL=sequence.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/index.mjs




function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(options = {}) {
    const { scope , reduceMotion , skipAnimations  } = options;
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        let animationOnComplete;
        const inherited = {};
        if (reduceMotion !== undefined) inherited.reduceMotion = reduceMotion;
        if (skipAnimations !== undefined) inherited.skipAnimations = skipAnimations;
        if (isSequence(subjectOrSequence)) {
            const { onComplete , ...sequenceOptions } = optionsOrKeyframes || {};
            if (typeof onComplete === "function") {
                animationOnComplete = onComplete;
            }
            animations = animateSequence(subjectOrSequence, {
                ...inherited,
                ...sequenceOptions
            }, scope);
        } else {
            // Extract top-level onComplete so it doesn't get applied per-value
            const { onComplete: onComplete1 , ...rest } = options || {};
            if (typeof onComplete1 === "function") {
                animationOnComplete = onComplete1;
            }
            animations = animateSubject(subjectOrSequence, optionsOrKeyframes, {
                ...inherited,
                ...rest
            }, scope);
        }
        const animation = new GroupAnimationWithThen(animations);
        if (animationOnComplete) {
            animation.finished.then(animationOnComplete);
        }
        if (scope) {
            scope.animations.push(animation);
            animation.finished.then(()=>{
                (0,array/* removeItem */.cl)(scope.animations, animation);
            });
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 5984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(3453);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs + 1 modules
var use_isomorphic_effect = __webpack_require__(9115);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(1773);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs
var is_html_element = __webpack_require__(3083);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(8432);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs

/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return external_react_.useCallback(composeRefs(...refs), refs);
}
 //# sourceMappingURL=use-composed-ref.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
"use client";






/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends external_react_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if ((0,is_html_element/* isHTMLElement */.R)(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
            const parent = element.offsetParent;
            const parentWidth = (0,is_html_element/* isHTMLElement */.R)(parent) ? parent.offsetWidth || 0 : 0;
            const parentHeight = (0,is_html_element/* isHTMLElement */.R)(parent) ? parent.offsetHeight || 0 : 0;
            const computedStyle = getComputedStyle(element);
            const size = this.props.sizeRef.current;
            size.height = parseFloat(computedStyle.height);
            size.width = parseFloat(computedStyle.width);
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
            size.direction = computedStyle.direction;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children , isPresent , anchorX , anchorY , root , pop  }) {
    const id = (0,external_react_.useId)();
    const ref = (0,external_react_.useRef)(null);
    const size = (0,external_react_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        direction: "ltr"
    });
    const { nonce  } = (0,external_react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     *
     * The composed ref is only used when popping the child out (pop !== false),
     * so we avoid reading children.props.ref otherwise. In React 18.3 that read
     * triggers a spurious "`ref` is not a prop" warning getter (#3745).
     */ const childRef = pop !== false ? children.props?.ref ?? children?.ref : undefined;
    const composedRef = useComposedRefs(ref, childRef);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0,external_react_.useInsertionEffect)(()=>{
        const { width , height , top , left , right , bottom , direction  } = size.current;
        if (isPresent || pop === false || !ref.current || !width || !height) return;
        const isRTL = direction === "rtl";
        const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
        const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce) style.nonce = nonce;
        const parent = root ?? document.head;
        parent.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
        }
        return ()=>{
            ref.current?.removeAttribute("data-motion-pop-id");
            if (parent.contains(style)) {
                parent.removeChild(style);
            }
        };
    }, [
        isPresent
    ]);
    return (0,jsx_runtime_.jsx)(PopChildMeasure, {
        isPresent: isPresent,
        childRef: ref,
        sizeRef: size,
        pop: pop,
        children: pop === false ? children : /*#__PURE__*/ external_react_.cloneElement(children, {
            ref: composedRef
        })
    });
}
 //# sourceMappingURL=PopChild.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
"use client";







const PresenceChild = ({ children , initial , isPresent , onExitComplete , custom , presenceAffectsLayout , mode , anchorX , anchorY , root  })=>{
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,external_react_.useId)();
    // Written in a layout effect (not render) so discarded concurrent
    // renders can't leave the refs pointing at uncommitted state.
    const isPresentRef = (0,external_react_.useRef)(isPresent);
    const onExitCompleteRef = (0,external_react_.useRef)(onExitComplete);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(()=>{
        isPresentRef.current = isPresent;
        onExitCompleteRef.current = onExitComplete;
    });
    let isReusedContext = true;
    let context = (0,external_react_.useMemo)(()=>{
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId)=>{
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()){
                    if (!isComplete) return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId)=>{
                presenceChildren.set(childId, false);
                return ()=>{
                    presenceChildren.delete(childId);
                    !isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
                };
            }
        };
    }, [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) {
        context = {
            ...context
        };
    }
    (0,external_react_.useMemo)(()=>{
        presenceChildren.forEach((_, key)=>presenceChildren.set(key, false));
    }, [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ external_react_.useEffect(()=>{
        !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [
        isPresent
    ]);
    children = (0,jsx_runtime_.jsx)(PopChild, {
        pop: mode === "popLayout",
        isPresent: isPresent,
        anchorX: anchorX,
        anchorY: anchorY,
        root: root,
        children: children
    });
    return (0,jsx_runtime_.jsx)(PresenceContext/* PresenceContext.Provider */.O.Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}
 //# sourceMappingURL=PresenceChild.mjs.map

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var use_presence = __webpack_require__(9142);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs

const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    external_react_.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ (0,external_react_.isValidElement)(child)) filtered.push(child);
    });
    return filtered;
}
 //# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
"use client";








/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children , custom , initial =true , onExitComplete , presenceAffectsLayout =true , mode ="sync" , propagate =false , anchorX ="left" , anchorY ="top" , root  })=>{
    const [isParentPresent, safeToRemove] = (0,use_presence/* usePresence */.oO)(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0,external_react_.useMemo)(()=>onlyElements(children), [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0,external_react_.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */ const pendingPresentChildren = (0,external_react_.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0,use_constant/* useConstant */.h)(()=>new Map());
    /**
     * Track which components are currently processing exit to prevent duplicate processing.
     */ const exitingComponents = (0,external_react_.useRef)(new Set());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const { 0: diffedChildren , 1: setDiffedChildren  } = (0,external_react_.useState)(presentChildren);
    const { 0: renderedChildren , 1: setRenderedChildren  } = (0,external_react_.useState)(presentChildren);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(()=>{
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const key = getChildKey(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            } else {
                exitComplete.delete(key);
                exitingComponents.current.delete(key);
            }
        }
    }, [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const child = renderedChildren[i];
            const key = getChildKey(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */ if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren(onlyElements(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    if (false) {}
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender  } = (0,external_react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p);
    return (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: renderedChildren.map((child)=>{
            const key = getChildKey(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitingComponents.current.has(key)) {
                    return;
                }
                if (exitComplete.has(key)) {
                    exitingComponents.current.add(key);
                    exitComplete.set(key, true);
                } else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return (0,jsx_runtime_.jsx)(PresenceChild, {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                anchorY: anchorY,
                children: child
            }, key);
        })
    });
};
 //# sourceMappingURL=index.mjs.map


/***/ }),

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