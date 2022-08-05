import { computed, defineComponent, provide, openBlock, createElementBlock, unref, normalizeClass, renderSlot, onMounted, onBeforeUnmount, ref, watch, createBlock, resolveDynamicComponent, withCtx, Comment, inject, createElementVNode, withDirectives, createTextVNode, toDisplayString, createVNode, createCommentVNode, normalizeStyle, useSlots, mergeProps, getCurrentInstance, reactive, Fragment, renderList, resolveComponent, isReactive, h, useAttrs, withModifiers, isRef, vModelCheckbox, nextTick, onActivated, vModelRadio, vModelSelect, normalizeProps, guardReactiveProps, Teleport, createSlots, Transition, onUnmounted } from "vue";
import Collapse from "bootstrap/js/dist/collapse";
import Alert from "bootstrap/js/dist/alert";
import Carousel from "bootstrap/js/dist/carousel";
import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Popover from "bootstrap/js/dist/popover";
import Tooltip from "bootstrap/js/dist/tooltip";
function getID(suffix = "") {
  return `__BVID__${Math.random().toString().slice(2, 8)}___BV_${suffix}__`;
}
function useId(id, suffix) {
  return computed(() => id || getID(suffix));
}
const _hoisted_1$J = ["id"];
const injectionKey$5 = Symbol();
const _sfc_main$1p = defineComponent({
  __name: "BAccordion",
  props: {
    flush: { type: Boolean, default: false },
    free: { type: Boolean, default: false },
    id: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const computedId = useId(props.id, "accordion");
    const classes = computed(() => ({
      "accordion-flush": props.flush
    }));
    if (!props.free) {
      provide(injectionKey$5, computedId.value.toString());
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(computedId),
        class: normalizeClass(["accordion", unref(classes)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$J);
    };
  }
});
function useEventListener(element, event, callback) {
  onMounted(() => {
    var _a;
    (_a = element == null ? void 0 : element.value) == null ? void 0 : _a.addEventListener(event, callback);
  });
  onBeforeUnmount(() => {
    var _a;
    (_a = element == null ? void 0 : element.value) == null ? void 0 : _a.removeEventListener(event, callback);
  });
}
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "BCollapse",
  props: {
    accordion: null,
    id: { default: getID() },
    modelValue: { type: Boolean, default: false },
    tag: { default: "div" },
    toggle: { type: Boolean, default: false },
    visible: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(__props, { emit }) {
    const props = __props;
    const element = ref();
    const instance = ref();
    const classes = computed(() => ({
      show: props.modelValue
    }));
    const close = () => emit("update:modelValue", false);
    useEventListener(element, "show.bs.collapse", () => {
      emit("show");
      emit("update:modelValue", true);
    });
    useEventListener(element, "hide.bs.collapse", () => {
      emit("hide");
      emit("update:modelValue", false);
    });
    useEventListener(element, "shown.bs.collapse", () => emit("shown"));
    useEventListener(element, "hidden.bs.collapse", () => emit("hidden"));
    onMounted(() => {
      var _a;
      instance.value = new Collapse(element.value, {
        parent: props.accordion ? `#${props.accordion}` : void 0,
        toggle: props.toggle
      });
      if (props.visible || props.modelValue) {
        emit("update:modelValue", true);
        (_a = instance.value) == null ? void 0 : _a.show();
      }
    });
    watch(() => props.modelValue, (value) => {
      var _a, _b;
      if (value) {
        (_a = instance.value) == null ? void 0 : _a.show();
      } else {
        (_b = instance.value) == null ? void 0 : _b.hide();
      }
    });
    watch(() => props.visible, (value) => {
      var _a, _b;
      if (value) {
        emit("update:modelValue", !!value);
        (_a = instance.value) == null ? void 0 : _a.show();
      } else {
        emit("update:modelValue", !!value);
        (_b = instance.value) == null ? void 0 : _b.hide();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: __props.id,
        ref_key: "element",
        ref: element,
        class: normalizeClass(["collapse", unref(classes)]),
        "data-bs-parent": __props.accordion || null
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            visible: __props.modelValue,
            close
          })
        ]),
        _: 3
      }, 8, ["id", "class", "data-bs-parent"]);
    };
  }
});
const RX_UNDERSCORE = /_/g;
const RX_LOWER_UPPER = /([a-z])([A-Z])/g;
const RX_FIRST_START_SPACE_WORD = /(\s|^)(\w)/;
const RX_SPACE_SPLIT = /\s+/;
const RX_HASH = /^#/;
const RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
const arrayIncludes = (array, value) => array.indexOf(value) !== -1;
const from = (...args) => Array.from([...args]);
const concat = (...args) => Array.prototype.concat.apply([], args);
const HAS_WINDOW_SUPPORT = typeof window !== "undefined";
const HAS_DOCUMENT_SUPPORT = typeof document !== "undefined";
const HAS_NAVIGATOR_SUPPORT = typeof navigator !== "undefined";
const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
const RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
const isBoolean = (value) => toType(value) === "boolean";
const isObject = (obj) => obj !== null && typeof obj === "object";
const isString = (value) => typeof value === "string";
const isUndefined = (value) => value === void 0;
const isNull = (value) => value === null;
const isUndefinedOrNull = (value) => isUndefined(value) || isNull(value);
const isNumeric = (value) => RX_NUMBER.test(String(value));
const isNumber = (value) => typeof value === "number";
const toType = (value) => typeof value;
const isFunction = (value) => toType(value) === "function";
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
const isArray = (value) => Array.isArray(value);
const toString = (val, spaces = 2) => isUndefinedOrNull(val) ? "" : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
const startCase = (str) => str.replace(RX_UNDERSCORE, " ").replace(RX_LOWER_UPPER, (str2, $1, $2) => `${$1} ${$2}`).replace(RX_FIRST_START_SPACE_WORD, (str2, $1, $2) => $1 + $2.toUpperCase());
const upperFirst = (str) => {
  str = isString(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const isElement = (el) => !!(el && el.nodeType === Node.ELEMENT_NODE);
const getBCR = (el) => isElement(el) ? el.getBoundingClientRect() : null;
const getActiveElement = (excludes = []) => {
  const { activeElement } = document;
  return activeElement && !excludes.some((el) => el === activeElement) ? activeElement : null;
};
const isActiveElement = (el) => isElement(el) && el === getActiveElement();
const attemptFocus = (el, options = {}) => {
  try {
    el.focus(options);
  } catch (e) {
    console.error(e);
  }
  return isActiveElement(el);
};
const getStyle = (el, prop) => prop && isElement(el) ? el.getAttribute(prop) || null : null;
const isVisible = (el) => {
  if (getStyle(el, "display") === "none") {
    return false;
  }
  const bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
};
const isEmptySlot = (slot, data) => !slot || slot(data).filter((vnode) => vnode.type !== Comment).length < 1;
const select = (selector, root) => (isElement(root) ? root : DOCUMENT).querySelector(selector) || null;
const selectAll = (selector, root) => from((isElement(root) ? root : DOCUMENT).querySelectorAll(selector));
const getAttr = (el, attr) => attr && isElement(el) ? el.getAttribute(attr) : null;
const setAttr = (el, attr, value) => {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
};
const removeAttr = (el, attr) => {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
};
const isTag = (tag, name) => toString(tag).toLowerCase() === toString(name).toLowerCase();
const requestAF = HAS_WINDOW_SUPPORT ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((cb) => setTimeout(cb, 16)) : (cb) => setTimeout(cb, 0);
function resolveToggleType(el) {
  if (el.classList.contains("offcanvas")) {
    return "offcanvas";
  }
  if (el.classList.contains("collapse")) {
    return "collapse";
  }
  throw Error("Couldn't resolve toggle type");
}
const getTargets = (binding, el) => {
  const { modifiers, arg, value } = binding;
  const targets = Object.keys(modifiers || {});
  const localValue = isString(value) ? value.split(RX_SPACE_SPLIT) : value;
  if (isTag(el.tagName, "a")) {
    const href = getAttr(el, "href") || "";
    if (RX_HASH_ID.test(href)) {
      targets.push(href.replace(RX_HASH, ""));
    }
  }
  concat(arg, localValue).forEach((t) => isString(t) && targets.push(t));
  return targets.filter((t, index, arr) => t && arr.indexOf(t) === index);
};
const BToggle = {
  mounted(el, binding) {
    const targetIds = getTargets(binding, el);
    const targetAttrs = [];
    let targetAttr = "data-bs-target";
    if (el.tagName === "a") {
      targetAttr = "href";
    }
    for (let index = 0; index < targetIds.length; index++) {
      const targetId = targetIds[index];
      const target = document.getElementById(targetId);
      if (target) {
        el.setAttribute("data-bs-toggle", resolveToggleType(target));
        targetAttrs.push(`#${targetId}`);
      }
    }
    if (targetAttrs.length > 0) {
      el.setAttribute(targetAttr, targetAttrs.join(","));
    }
  }
};
const _hoisted_1$I = { class: "accordion-item" };
const _hoisted_2$n = ["id"];
const _hoisted_3$9 = ["aria-expanded", "aria-controls"];
const _hoisted_4$6 = { class: "accordion-body" };
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const computedId = useId(props.id, "accordion_item");
    const parent = inject(injectionKey$5, "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$I, [
        createElementVNode("h2", {
          id: `${unref(computedId)}heading`,
          class: "accordion-header"
        }, [
          withDirectives((openBlock(), createElementBlock("button", {
            class: normalizeClass(["accordion-button", { collapsed: !__props.visible }]),
            type: "button",
            "aria-expanded": __props.visible ? "true" : "false",
            "aria-controls": unref(computedId)
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ])
          ], 10, _hoisted_3$9)), [
            [unref(BToggle), void 0, unref(computedId)]
          ])
        ], 8, _hoisted_2$n),
        createVNode(_sfc_main$1o, {
          id: unref(computedId),
          class: "accordion-collapse",
          visible: __props.visible,
          accordion: unref(parent),
          "aria-labelledby": `heading${unref(computedId)}`
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4$6, [
              renderSlot(_ctx.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["id", "visible", "accordion", "aria-labelledby"])
      ]);
    };
  }
});
const toInteger = (value, defaultValue = NaN) => {
  return Number.isInteger(value) ? value : defaultValue;
};
const stringToInteger = (value, defaultValue = NaN) => {
  const integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
};
const toFloat = (value, defaultValue = NaN) => {
  const float = parseFloat(value.toString());
  return isNaN(float) ? defaultValue : float;
};
const _hoisted_1$H = ["aria-label"];
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "BAlert",
  props: {
    dismissLabel: { default: "Close" },
    dismissible: { type: Boolean, default: false },
    fade: { type: Boolean, default: false },
    modelValue: { type: [Boolean, Number], default: false },
    show: { type: Boolean, default: false },
    variant: { default: "info" }
  },
  emits: ["dismissed", "dismiss-count-down", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const element = ref();
    const instance = ref();
    const classes = computed(() => ({
      [`alert-${props.variant}`]: props.variant,
      "show": props.modelValue,
      "alert-dismissible": props.dismissible,
      "fade": props.modelValue
    }));
    let _countDownTimeout;
    const parseCountDown = (value) => {
      if (typeof value === "boolean") {
        return 0;
      }
      const numberValue = toInteger(value, 0);
      return numberValue > 0 ? numberValue : 0;
    };
    const clearCountDownInterval = () => {
      if (_countDownTimeout === void 0)
        return;
      clearTimeout(_countDownTimeout);
      _countDownTimeout = void 0;
    };
    const countDown = ref(parseCountDown(props.modelValue));
    const isAlertVisible = computed(() => !!props.modelValue || props.show);
    onBeforeUnmount(() => {
      var _a;
      clearCountDownInterval();
      (_a = instance.value) == null ? void 0 : _a.dispose();
      instance.value = void 0;
    });
    const parsedModelValue = computed(() => {
      if (props.modelValue === true) {
        return true;
      }
      if (props.modelValue === false)
        return false;
      if (toInteger(props.modelValue, 0) < 1) {
        return false;
      }
      return !!props.modelValue;
    });
    const handleShowAndModelChanged = () => {
      countDown.value = parseCountDown(props.modelValue);
      if ((parsedModelValue.value || props.show) && !instance.value)
        instance.value = new Alert(element.value);
    };
    const dismissClicked = () => {
      if (typeof props.modelValue === "boolean") {
        emit("update:modelValue", false);
      } else {
        emit("update:modelValue", 0);
      }
      emit("dismissed");
    };
    watch(() => props.modelValue, handleShowAndModelChanged);
    watch(() => props.show, handleShowAndModelChanged);
    watch(countDown, (newValue) => {
      clearCountDownInterval();
      if (typeof props.modelValue === "boolean")
        return;
      emit("dismiss-count-down", newValue);
      if (newValue === 0 && props.modelValue > 0)
        emit("dismissed");
      if (props.modelValue !== newValue)
        emit("update:modelValue", newValue);
      if (newValue > 0) {
        _countDownTimeout = setTimeout(() => {
          countDown.value--;
        }, 1e3);
      }
    });
    return (_ctx, _cache) => {
      return unref(isAlertVisible) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "element",
        ref: element,
        class: normalizeClass(["alert", unref(classes)]),
        role: "alert"
      }, [
        renderSlot(_ctx.$slots, "default"),
        __props.dismissible ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: "btn-close",
          "data-bs-dismiss": "alert",
          "aria-label": __props.dismissLabel,
          onClick: dismissClicked
        }, null, 8, _hoisted_1$H)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const mathMin = Math.min;
const mathMax = Math.max;
const injectionKey$4 = Symbol();
const _sfc_main$1l = defineComponent({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    rounded: { type: [Boolean, String], default: false },
    size: null,
    square: { type: Boolean, default: false },
    tag: { default: "div" },
    variant: null
  },
  setup(__props) {
    const props = __props;
    const computedSize = computed(() => computeSize(props.size));
    const computeOverlap = (value) => isString(value) && isNumeric(value) ? toFloat(value, 0) : value || 0;
    const overlapScale = computed(() => mathMin(mathMax(computeOverlap(props.overlap), 0), 1) / 2);
    const paddingStyle = computed(() => {
      let { value } = computedSize;
      value = value ? `calc(${value} * ${overlapScale.value})` : null;
      return value ? { paddingLeft: value, paddingRight: value } : {};
    });
    provide(injectionKey$4, {
      overlapScale,
      size: props.size,
      square: props.square,
      rounded: props.rounded,
      variant: props.variant
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: "b-avatar-group",
        role: "group"
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: "b-avatar-group-inner",
            style: normalizeStyle(unref(paddingStyle))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$G = {
  key: 0,
  class: "b-avatar-custom"
};
const _hoisted_2$m = {
  key: 1,
  class: "b-avatar-img"
};
const _hoisted_3$8 = ["src", "alt"];
const computeSize = (value) => {
  const calcValue = isString(value) && isNumeric(value) ? toFloat(value, 0) : value;
  return isNumber(calcValue) ? `${calcValue}px` : calcValue || null;
};
const _sfc_main$1k = defineComponent({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    ariaLabel: null,
    badge: { type: [Boolean, String], default: false },
    badgeLeft: { type: Boolean, default: false },
    badgeOffset: null,
    badgeTop: { type: Boolean, default: false },
    badgeVariant: { default: "primary" },
    button: { type: Boolean, default: false },
    buttonType: { default: "button" },
    disabled: { type: Boolean, default: false },
    icon: null,
    rounded: { type: [Boolean, String], default: "circle" },
    size: null,
    square: { type: Boolean, default: false },
    src: null,
    text: null,
    textVariant: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["click", "img-error"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const SIZES = ["sm", null, "lg"];
    const FONT_SIZE_SCALE = 0.4;
    const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7;
    const parentData = inject(injectionKey$4, null);
    const computeContrastVariant = (colorVariant) => {
      const variant = colorVariant;
      if (variant === "light")
        return "dark";
      if (variant === "warning")
        return "dark";
      return "light";
    };
    const hasDefaultSlot = computed(() => !isEmptySlot(slots.default));
    const hasBadgeSlot = computed(() => !isEmptySlot(slots.badge));
    const showBadge = computed(() => props.badge || props.badge === "" || hasBadgeSlot.value);
    const computedSize = computed(() => (parentData == null ? void 0 : parentData.size) ? parentData.size : computeSize(props.size));
    const computedVariant = computed(() => (parentData == null ? void 0 : parentData.variant) ? parentData.variant : props.variant);
    const computedRounded = computed(() => (parentData == null ? void 0 : parentData.rounded) ? parentData.rounded : props.rounded);
    const attrs = computed(() => ({
      "aria-label": props.ariaLabel || null,
      "disabled": props.disabled || null
    }));
    const badgeClasses = computed(() => ({
      [`bg-${props.badgeVariant}`]: props.badgeVariant
    }));
    const badgeText = computed(() => props.badge === true ? "" : props.badge);
    const badgeTextClasses = computed(() => {
      const textVariant = computeContrastVariant(props.badgeVariant);
      return `text-${textVariant}`;
    });
    const classes = computed(() => ({
      [`b-avatar-${props.size}`]: props.size && SIZES.indexOf(computeSize(props.size)) !== -1,
      [`bg-${computedVariant.value}`]: computedVariant.value,
      [`badge`]: !props.button && computedVariant.value && hasDefaultSlot.value,
      rounded: computedRounded.value === "" || computedRounded.value === true,
      [`rounded-circle`]: !props.square && computedRounded.value === "circle",
      [`rounded-0`]: props.square || computedRounded.value === "0",
      [`rounded-1`]: !props.square && computedRounded.value === "sm",
      [`rounded-3`]: !props.square && computedRounded.value === "lg",
      [`rounded-top`]: !props.square && computedRounded.value === "top",
      [`rounded-bottom`]: !props.square && computedRounded.value === "bottom",
      [`rounded-start`]: !props.square && computedRounded.value === "left",
      [`rounded-end`]: !props.square && computedRounded.value === "right",
      btn: props.button,
      [`btn-${computedVariant.value}`]: props.button ? computedVariant.value : null
    }));
    const textClasses = computed(() => {
      const textVariant = props.textVariant || computeContrastVariant(computedVariant.value);
      return `text-${textVariant}`;
    });
    const badgeStyle = computed(() => {
      const offset = props.badgeOffset || "0px";
      const fontSize = SIZES.indexOf(computedSize.value || null) === -1 ? `calc(${computedSize.value} * ${BADGE_FONT_SIZE_SCALE})` : "";
      return {
        fontSize: fontSize || "",
        top: props.badgeTop ? offset : "",
        bottom: props.badgeTop ? "" : offset,
        left: props.badgeLeft ? offset : "",
        right: props.badgeLeft ? "" : offset
      };
    });
    const fontStyle = computed(() => {
      const fontSize = SIZES.indexOf(computedSize.value || null) === -1 ? `calc(${computedSize.value} * ${FONT_SIZE_SCALE})` : null;
      return fontSize ? { fontSize } : {};
    });
    const marginStyle = computed(() => {
      var _a;
      const overlapScale = ((_a = parentData == null ? void 0 : parentData.overlapScale) == null ? void 0 : _a.value) || 0;
      const value = computedSize.value && overlapScale ? `calc(${computedSize.value} * -${overlapScale})` : null;
      return value ? { marginLeft: value, marginRight: value } : {};
    });
    const tag = computed(() => props.button ? props.buttonType : "span");
    const tagStyle = computed(() => ({
      ...marginStyle.value,
      width: computedSize.value,
      height: computedSize.value
    }));
    const clicked = (e) => {
      if (!props.disabled && props.button)
        emit("click", e);
    };
    const onImgError = (e) => emit("img-error", e);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(tag)), mergeProps({
        class: ["b-avatar", unref(classes)],
        style: unref(tagStyle)
      }, unref(attrs), { onClick: clicked }), {
        default: withCtx(() => [
          unref(hasDefaultSlot) ? (openBlock(), createElementBlock("span", _hoisted_1$G, [
            renderSlot(_ctx.$slots, "default")
          ])) : __props.src ? (openBlock(), createElementBlock("span", _hoisted_2$m, [
            createElementVNode("img", {
              src: __props.src,
              alt: __props.alt,
              onError: onImgError
            }, null, 40, _hoisted_3$8)
          ])) : __props.text ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass(["b-avatar-text", unref(textClasses)]),
            style: normalizeStyle(unref(fontStyle))
          }, toDisplayString(__props.text), 7)) : createCommentVNode("", true),
          unref(showBadge) ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: normalizeClass(["b-avatar-badge", unref(badgeClasses)]),
            style: normalizeStyle(unref(badgeStyle))
          }, [
            unref(hasBadgeSlot) ? renderSlot(_ctx.$slots, "badge", { key: 0 }) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(badgeTextClasses))
            }, toDisplayString(unref(badgeText)), 3))
          ], 6)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
const assign = (target, ...args) => Object.assign(target, ...args);
const defineProperties = (obj, props) => Object.defineProperties(obj, props);
const defineProperty = (obj, prop, descriptor) => Object.defineProperty(obj, prop, descriptor);
const omit = (obj, props) => Object.keys(obj).filter((key) => props.indexOf(key) === -1).reduce((result, key) => ({ ...result, [key]: obj[key] }), {});
const readonlyDescriptor = () => ({ enumerable: true, configurable: false, writable: false });
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const BLINK_PROPS = {
  active: { type: Boolean, default: false },
  activeClass: { type: String, default: "router-link-active" },
  append: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  event: { type: [String, Array], default: "click" },
  exact: { type: Boolean, default: false },
  exactActiveClass: { type: String, default: "router-link-exact-active" },
  href: { type: String },
  rel: { type: String, default: null },
  replace: { type: Boolean, default: false },
  routerComponentName: { type: String, default: "router-link" },
  routerTag: { type: String, default: "a" },
  target: { type: String, default: "_self" },
  to: { type: [String, Object], default: null }
};
const _sfc_main$1j = defineComponent({
  name: "BLink",
  props: BLINK_PROPS,
  emits: ["click"],
  setup(props, { emit, attrs }) {
    const instance = getCurrentInstance();
    const link = ref(null);
    const tag = computed(() => {
      const routerName = props.routerComponentName.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join("");
      const hasRouter = (instance == null ? void 0 : instance.appContext.app.component(routerName)) !== void 0;
      if (!hasRouter || props.disabled || !props.to) {
        return "a";
      }
      return props.routerComponentName;
    });
    const computedHref = computed(() => {
      const toFallback = "#";
      if (props.href)
        return props.href;
      if (typeof props.to === "string")
        return props.to || toFallback;
      const to = props.to;
      if (Object.prototype.toString.call(to) === "[object Object]" && (to.path || to.query || to.hash)) {
        const path = to.path || "";
        const query = to.query ? `?${Object.keys(to.query).map((e) => `${e}=${to.query[e]}`).join("=")}` : "";
        const hash = !to.hash || to.hash.charAt(0) === "#" ? to.hash || "" : `#${to.hash}`;
        return `${path}${query}${hash}` || toFallback;
      }
      return toFallback;
    });
    const routerAttr = computed(() => ({
      "to": props.to,
      "href": computedHref.value,
      "target": props.target,
      "rel": props.target === "_blank" && props.rel === null ? "noopener" : props.rel || null,
      "tabindex": props.disabled ? "-1" : typeof attrs.tabindex === "undefined" ? null : attrs.tabindex,
      "aria-disabled": props.disabled ? "true" : null
    }));
    const clicked = (e) => {
      if (props.disabled) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      emit("click", e);
    };
    return {
      tag,
      routerAttr,
      link,
      clicked
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.tag === "router-link" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({ key: 0 }, _ctx.routerAttr, { custom: "" }), {
    default: withCtx(({ href, navigate, isActive, isExactActive }) => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.routerTag), mergeProps({
        ref: "link",
        href,
        class: [isActive && _ctx.activeClass, isExactActive && _ctx.exactActiveClass]
      }, _ctx.$attrs, { onClick: navigate }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
    key: 1,
    ref: "link",
    class: { active: _ctx.active, disabled: _ctx.disabled }
  }, _ctx.routerAttr, { onClick: _ctx.clicked }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
var BLink = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["render", _sfc_render$b]]);
const isLink = (props) => !!(props.href || props.to);
const suffixPropName = (suffix, value) => value + (suffix ? upperFirst(suffix) : "");
const pluckProps = (keysToPluck, objToPluck, transformFn = (x) => x) => (isArray(keysToPluck) ? keysToPluck.slice() : Object.keys(keysToPluck)).reduce((memo, prop) => {
  memo[transformFn(prop)] = objToPluck[prop];
  return memo;
}, {});
const linkProps = omit(BLINK_PROPS, ["event", "routerTag"]);
const _sfc_main$1i = defineComponent({
  name: "BBadge",
  props: {
    pill: { type: Boolean, default: false },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: Boolean, default: false },
    dotIndicator: { type: Boolean, default: false },
    ...linkProps
  },
  setup(props) {
    const link = computed(() => isLink(props));
    const computedTag = computed(() => link.value ? "b-link" : props.tag);
    const classes = computed(() => ({
      [`bg-${props.variant}`]: props.variant,
      "active": props.active,
      "disabled": props.disabled,
      "text-dark": ["warning", "info", "light"].includes(props.variant),
      "rounded-pill": props.pill,
      "position-absolute top-0 start-100 translate-middle": props.textIndicator || props.dotIndicator,
      "p-2 border border-light rounded-circle": props.dotIndicator,
      "text-decoration-none": link
    }));
    return {
      classes,
      props: link.value ? pluckProps(linkProps, props) : {},
      computedTag
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.computedTag), mergeProps({
    class: ["badge", _ctx.classes]
  }, _ctx.props), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
var BBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["render", _sfc_render$a]]);
const BREADCRUMB_SYMBOL = Symbol();
const BREADCRUMB_OBJECT = {
  items: reactive([]),
  reset() {
    this.items = reactive([]);
  }
};
function createBreadcrumb(app) {
  app.provide(BREADCRUMB_SYMBOL, BREADCRUMB_OBJECT);
}
function useBreadcrumb() {
  const context = inject(BREADCRUMB_SYMBOL);
  if (!context) {
    return BREADCRUMB_OBJECT;
  }
  return context;
}
const _sfc_main$1h = defineComponent({
  name: "BBreadcrumbItem",
  props: {
    ...omit(BLINK_PROPS, ["event", "routerTag"]),
    active: { type: Boolean, default: false },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: Boolean, default: false },
    text: { type: String, required: false }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const liClasses = computed(() => ({
      active: props.active
    }));
    const computedTag = computed(() => props.active ? "span" : "b-link");
    const computedAriaCurrent = computed(() => ({
      "aria-current": props.active ? props.ariaCurrent : void 0
    }));
    const clicked = (e) => {
      if (props.disabled || props.active) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if (!props.disabled)
        emit("click", e);
    };
    return {
      liClasses,
      computedTag,
      computedAriaCurrent,
      clicked
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["breadcrumb-item", _ctx.liClasses])
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.computedTag), mergeProps({ "aria-current": _ctx.computedAriaCurrent }, _ctx.$props, { onClick: _ctx.clicked }), {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
var BBreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$9]]);
const _hoisted_1$F = { "aria-label": "breadcrumb" };
const _hoisted_2$l = { class: "breadcrumb" };
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(__props) {
    const props = __props;
    const breadcrumb = useBreadcrumb();
    const breadcrumbItemObjects = computed(() => {
      const localItems = props.items || (breadcrumb == null ? void 0 : breadcrumb.items) || [];
      let activeDefined = false;
      const items = localItems.map((item, idx) => {
        if (typeof item === "string") {
          item = { text: item };
          if (idx < localItems.length - 1)
            item.href = "#";
        }
        if (item.active)
          activeDefined = true;
        if (!item.active && !activeDefined) {
          item.active = idx + 1 === localItems.length;
        }
        return item;
      });
      return items;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$F, [
        createElementVNode("ol", _hoisted_2$l, [
          renderSlot(_ctx.$slots, "prepend"),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(breadcrumbItemObjects), (item, i) => {
            return openBlock(), createBlock(BBreadcrumbItem, mergeProps({ key: i }, item), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.text), 1)
              ]),
              _: 2
            }, 1040);
          }), 128)),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "append")
        ])
      ]);
    };
  }
});
const _sfc_main$1f = defineComponent({
  name: "BButton",
  props: {
    ...BLINK_PROPS,
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    href: { type: String, required: false },
    pill: { type: Boolean, default: false },
    pressed: { type: Boolean, default: null },
    rel: { type: String, default: null },
    size: { type: String },
    squared: { type: Boolean, default: false },
    tag: { type: String, default: "button" },
    target: { type: String, default: "_self" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "secondary" }
  },
  emits: ["click", "update:pressed"],
  setup(props, { emit }) {
    const isToggle = props.pressed !== null;
    const isButton = props.tag === "button" && !props.href && !props.to;
    const isLink2 = !!(props.href || props.to);
    const isBLink = !!props.to;
    const nonStandardTag = props.href ? false : !isButton;
    const classes = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      "active": props.active || props.pressed,
      "rounded-pill": props.pill,
      "rounded-0": props.squared,
      "disabled": props.disabled
    }));
    const attrs = computed(() => ({
      "aria-disabled": nonStandardTag ? String(props.disabled) : null,
      "aria-pressed": isToggle ? String(props.pressed) : null,
      "autocomplete": isToggle ? "off" : null,
      "disabled": isButton ? props.disabled : null,
      "href": props.href,
      "rel": isLink2 ? props.rel : null,
      "role": nonStandardTag || isLink2 ? "button" : null,
      "target": isLink2 ? props.target : null,
      "type": isButton ? props.type : null,
      "to": !isButton ? props.to : null,
      "append": isLink2 ? props.append : null,
      "activeClass": isBLink ? props.activeClass : null,
      "event": isBLink ? props.event : null,
      "exact": isBLink ? props.exact : null,
      "exactActiveClass": isBLink ? props.exactActiveClass : null,
      "replace": isBLink ? props.replace : null,
      "routerComponentName": isBLink ? props.routerComponentName : null,
      "routerTag": isBLink ? props.routerTag : null
    }));
    const computedTag = computed(() => {
      if (isBLink)
        return "b-link";
      return props.href ? "a" : props.tag;
    });
    const clicked = (e) => {
      if (props.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      emit("click", e);
      if (isToggle) {
        emit("update:pressed", !props.pressed);
      }
    };
    return {
      classes,
      attrs,
      computedTag,
      clicked
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.computedTag), mergeProps({
    class: ["btn", _ctx.classes]
  }, _ctx.attrs, { onClick: _ctx.clicked }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
var BButton = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$8]]);
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "BButtonGroup",
  props: {
    ariaRole: { default: "group" },
    size: null,
    tag: { default: "div" },
    vertical: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "btn-group": !props.vertical,
      "btn-group-vertical": props.vertical,
      [`btn-group-${props.size}`]: props.size
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(classes)),
        role: "group",
        "aria-role": __props.ariaRole
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "aria-role"]);
    };
  }
});
const _hoisted_1$E = ["aria-label"];
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "BButtonToolbar",
  props: {
    ariaRole: { default: "group" },
    justify: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "justify-content-between": props.justify
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(classes), "btn-toolbar"]),
        role: "toolbar",
        "aria-label": __props.ariaRole
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$E);
    };
  }
});
const _hoisted_1$D = ["innerHTML"];
const _hoisted_2$k = ["innerHTML"];
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "BCard",
  props: {
    align: null,
    bgVariant: null,
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    borderVariant: null,
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: null,
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: null,
    imgAlt: null,
    imgBottom: { type: Boolean, default: false },
    imgEnd: { type: Boolean, default: false },
    imgHeight: null,
    imgLeft: { type: Boolean, default: false },
    imgRight: { type: Boolean, default: false },
    imgSrc: null,
    imgStart: { type: Boolean, default: false },
    imgTop: { type: Boolean, default: false },
    imgWidth: null,
    noBody: { type: Boolean, default: false },
    overlay: { type: Boolean, default: false },
    subTitle: null,
    subTitleTag: { default: "h6" },
    subTitleTextVariant: { default: "muted" },
    tag: { default: "div" },
    textVariant: null,
    title: null,
    titleTag: { default: "h4" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`text-${props.align}`]: props.align,
      [`text-${props.textVariant}`]: props.textVariant,
      [`bg-${props.bgVariant}`]: props.bgVariant,
      [`border-${props.borderVariant}`]: props.borderVariant,
      "flex-row": props.imgLeft || props.imgStart,
      "flex-row-reverse": props.imgEnd || props.imgRight
    }));
    const bodyClasses = computed(() => ({
      "card-body": !props.noBody,
      "card-img-overlay": props.overlay,
      [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
      [`text-${props.bodyTextVariant}`]: props.bodyTextVariant
    }));
    const footerClasses = computed(() => ({
      [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
      [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
      [`text-${props.footerTextVariant}`]: props.footerTextVariant
    }));
    const headerClasses = computed(() => ({
      [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
      [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
      [`text-${props.headerTextVariant}`]: props.headerTextVariant
    }));
    const imgClasses = computed(() => ({
      "card-img": !props.imgEnd && !props.imgRight && !props.imgStart && !props.imgLeft && !props.imgTop && !props.imgTop,
      "card-img-right": props.imgEnd || props.imgRight,
      "card-img-left": props.imgStart || props.imgLeft,
      "card-img-top": props.imgTop,
      "card-img-bottom": props.imgBottom
    }));
    const imgAttr = computed(() => ({
      src: props.imgSrc,
      alt: props.imgAlt,
      height: props.imgHeight,
      width: props.imgWidth
    }));
    const subTitleClasses = computed(() => ({
      [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(["card", unref(classes)])
      }, {
        default: withCtx(() => [
          __props.imgSrc && !__props.imgBottom ? (openBlock(), createElementBlock("img", mergeProps({ key: 0 }, unref(imgAttr), { class: unref(imgClasses) }), null, 16)) : createCommentVNode("", true),
          __props.header || _ctx.$slots.header || __props.headerHtml ? (openBlock(), createBlock(resolveDynamicComponent(__props.headerTag), {
            key: 1,
            class: normalizeClass(["card-header", [__props.headerClass, unref(headerClasses)]])
          }, {
            default: withCtx(() => [
              !!__props.headerHtml ? (openBlock(), createElementBlock("div", {
                key: 0,
                innerHTML: __props.headerHtml
              }, null, 8, _hoisted_1$D)) : renderSlot(_ctx.$slots, "header", { key: 1 }, () => [
                createTextVNode(toDisplayString(__props.header), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true),
          !__props.noBody ? (openBlock(), createBlock(resolveDynamicComponent(__props.bodyTag), {
            key: 2,
            class: normalizeClass([__props.bodyClass, unref(bodyClasses)])
          }, {
            default: withCtx(() => [
              __props.title && !__props.noBody ? (openBlock(), createBlock(resolveDynamicComponent(__props.titleTag), {
                key: 0,
                class: "card-title"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              __props.subTitle && !__props.noBody ? (openBlock(), createBlock(resolveDynamicComponent(__props.subTitleTag), {
                key: 1,
                class: normalizeClass(["card-subtitle mb-2", unref(subTitleClasses)])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.subTitle), 1)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true),
          __props.noBody ? renderSlot(_ctx.$slots, "default", { key: 3 }) : createCommentVNode("", true),
          __props.footer || _ctx.$slots.footer || __props.footerHtml ? (openBlock(), createBlock(resolveDynamicComponent(__props.footerTag), {
            key: 4,
            class: normalizeClass(["card-footer", [__props.footerClass, unref(footerClasses)]])
          }, {
            default: withCtx(() => [
              !!__props.footerHtml ? (openBlock(), createElementBlock("div", {
                key: 0,
                innerHTML: __props.footerHtml
              }, null, 8, _hoisted_2$k)) : renderSlot(_ctx.$slots, "footer", { key: 1 }, () => [
                createTextVNode(toDisplayString(__props.footer), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true),
          __props.imgSrc && __props.imgBottom ? (openBlock(), createElementBlock("img", mergeProps({ key: 5 }, unref(imgAttr), { class: unref(imgClasses) }), null, 16)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "BCardTitle",
  props: {
    title: null,
    titleTag: { default: "h4" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.titleTag), { class: "card-title" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.title), 1)
          ])
        ]),
        _: 3
      });
    };
  }
});
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "BCardSubTitle",
  props: {
    subTitle: null,
    subTitleTag: { default: "h6" },
    subTitleTextVariant: { default: "muted" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.subTitleTag), {
        class: normalizeClass(["card-subtitle mb-2", unref(classes)])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.subTitle), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "BCardBody",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    overlay: { type: Boolean, default: false },
    subTitle: null,
    subTitleTag: { default: "h4" },
    subTitleTextVariant: null,
    title: null,
    titleTag: { default: "h4" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
      [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.bodyTag), {
        class: normalizeClass(["card-body", unref(classes)])
      }, {
        default: withCtx(() => [
          __props.title ? (openBlock(), createBlock(_sfc_main$1b, {
            key: 0,
            "title-tag": __props.titleTag,
            title: __props.title
          }, null, 8, ["title-tag", "title"])) : createCommentVNode("", true),
          __props.subTitle ? (openBlock(), createBlock(_sfc_main$1a, {
            key: 1,
            "sub-title-tag": __props.subTitleTag,
            "sub-title": __props.subTitle,
            "sub-title-text-variant": __props.subTitleTextVariant
          }, null, 8, ["sub-title-tag", "sub-title", "sub-title-text-variant"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1$C = ["innerHTML"];
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "BCardFooter",
  props: {
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: null,
    footerTag: { default: "div" },
    footerTextVariant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`text-${props.footerTextVariant}`]: props.footerTextVariant,
      [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
      [`border-${props.footerBorderVariant}`]: props.footerBorderVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.footerTag), {
        class: normalizeClass(["card-footer", [__props.footerClass, unref(classes)]])
      }, {
        default: withCtx(() => [
          !!__props.footerHtml ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: __props.footerHtml
          }, null, 8, _hoisted_1$C)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
            createTextVNode(toDisplayString(__props.footer), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "BCardGroup",
  props: {
    columns: { type: Boolean, default: false },
    deck: { type: Boolean, default: false },
    tag: { default: "div" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => props.deck ? "card-deck" : props.columns ? "card-columns" : "card-group");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(classes))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1$B = ["innerHTML"];
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "BCardHeader",
  props: {
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: null,
    headerTag: { default: "div" },
    headerTextVariant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`text-${props.headerTextVariant}`]: props.headerTextVariant,
      [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
      [`border-${props.headerBorderVariant}`]: props.headerBorderVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.headerTag), {
        class: normalizeClass(["card-header", [__props.headerClass, unref(classes)]])
      }, {
        default: withCtx(() => [
          !!__props.headerHtml ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: __props.headerHtml
          }, null, 8, _hoisted_1$B)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
            createTextVNode(toDisplayString(__props.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "BCardImg",
  props: {
    alt: { default: void 0 },
    bottom: { type: Boolean, default: false },
    end: { type: Boolean, default: false },
    height: null,
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    src: null,
    start: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    width: null
  },
  setup(__props) {
    const props = __props;
    const attrs = computed(() => ({
      src: props.src,
      alt: props.alt,
      width: (typeof props.width === "number" ? props.width : parseInt(props.width, 10)) || void 0,
      height: (typeof props.height === "number" ? props.height : parseInt(props.height, 10)) || void 0
    }));
    const classes = computed(() => {
      const align = props.left ? "float-left" : props.right ? "float-right" : "";
      let baseClass = "card-img";
      if (props.top) {
        baseClass += "-top";
      } else if (props.right || props.end) {
        baseClass += "-right";
      } else if (props.bottom) {
        baseClass += "-bottom";
      } else if (props.left || props.start) {
        baseClass += "-left";
      }
      return {
        [align]: !!align,
        [baseClass]: true
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", mergeProps({ class: unref(classes) }, unref(attrs)), null, 16);
    };
  }
});
const _sfc_main$14 = {};
const _hoisted_1$A = { class: "card-text" };
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("p", _hoisted_1$A, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var BCardText = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$7]]);
const _hoisted_1$z = ["id"];
const _hoisted_2$j = {
  key: 0,
  class: "carousel-indicators"
};
const _hoisted_3$7 = ["data-bs-target", "data-bs-slide-to", "aria-label"];
const _hoisted_4$5 = { class: "carousel-inner" };
const _hoisted_5$5 = ["data-bs-target"];
const _hoisted_6$3 = /* @__PURE__ */ createElementVNode("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createElementVNode("span", { class: "visually-hidden" }, "Previous", -1);
const _hoisted_8$2 = [
  _hoisted_6$3,
  _hoisted_7$2
];
const _hoisted_9$2 = ["data-bs-target"];
const _hoisted_10$2 = /* @__PURE__ */ createElementVNode("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_11$2 = /* @__PURE__ */ createElementVNode("span", { class: "visually-hidden" }, "Next", -1);
const _hoisted_12$2 = [
  _hoisted_10$2,
  _hoisted_11$2
];
const injectionKey$3 = Symbol();
const _sfc_main$13 = defineComponent({
  __name: "BCarousel",
  props: {
    id: null,
    imgHeight: null,
    imgWidth: null,
    background: null,
    modelValue: { default: 0 },
    controls: { type: Boolean, default: false },
    indicators: { type: Boolean, default: false },
    interval: { default: 5e3 },
    noTouch: { type: Boolean, default: false },
    noWrap: { type: Boolean, default: false }
  },
  emits: ["sliding-start", "sliding-end"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const element = ref();
    const instance = ref();
    const computedId = useId(props.id, "accordion");
    const slides = ref([]);
    useEventListener(element, "slide.bs.carousel", (payload) => emit("sliding-start", payload));
    useEventListener(element, "slid.bs.carousel", (payload) => emit("sliding-end", payload));
    onMounted(() => {
      instance.value = new Carousel(element.value, {
        wrap: !props.noTouch,
        interval: props.interval,
        touch: !props.noTouch
      });
      if (slots.default) {
        slides.value = slots.default().filter((child) => {
          var _a;
          return ((_a = child.type) == null ? void 0 : _a.name) === "BCarouselSlide";
        });
      }
    });
    provide(injectionKey$3, {
      background: props.background,
      width: props.imgWidth,
      height: props.imgHeight
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(computedId),
        ref_key: "element",
        ref: element,
        class: "carousel slide",
        "data-bs-ride": "carousel"
      }, [
        __props.indicators ? (openBlock(), createElementBlock("div", _hoisted_2$j, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(slides.value, (slide, i) => {
            return openBlock(), createElementBlock("button", {
              key: i,
              type: "button",
              "data-bs-target": `#${unref(computedId)}`,
              "data-bs-slide-to": i,
              class: normalizeClass(i === 0 ? "active" : ""),
              "aria-current": "true",
              "aria-label": `Slide ${i}`
            }, null, 10, _hoisted_3$7);
          }), 128))
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_4$5, [
          renderSlot(_ctx.$slots, "default")
        ]),
        __props.controls ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createElementVNode("button", {
            class: "carousel-control-prev",
            type: "button",
            "data-bs-target": `#${unref(computedId)}`,
            "data-bs-slide": "prev"
          }, _hoisted_8$2, 8, _hoisted_5$5),
          createElementVNode("button", {
            class: "carousel-control-next",
            type: "button",
            "data-bs-target": `#${unref(computedId)}`,
            "data-bs-slide": "next"
          }, _hoisted_12$2, 8, _hoisted_9$2)
        ], 64)) : createCommentVNode("", true)
      ], 8, _hoisted_1$z);
    };
  }
});
const _hoisted_1$y = ["id", "data-bs-interval"];
const _hoisted_2$i = { key: 0 };
const _hoisted_3$6 = ["innerHTML"];
const _hoisted_4$4 = { key: 0 };
const _hoisted_5$4 = ["innerHTML"];
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "BCarouselSlide",
  props: {
    imgSrc: null,
    imgHeight: null,
    imgWidth: null,
    interval: null,
    active: { type: Boolean, default: false },
    background: null,
    caption: null,
    captionHtml: null,
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: null,
    id: null,
    imgAlt: null,
    imgBlank: { type: Boolean, default: false },
    imgBlankColor: { default: "transparent" },
    text: null,
    textHtml: null,
    textTag: { default: "p" }
  },
  setup(__props) {
    const props = __props;
    const parentData = inject(injectionKey$3, {});
    const computedId = useId(props.id, "accordion");
    computed(() => props.imgBlank ? props.imgBlank : props.imgSrc);
    const computedAttr = computed(() => ({
      background: `${props.background || parentData.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    }));
    const computedContentClasses = computed(() => ({
      "d-none": props.contentVisibleUp,
      [`d-${props.contentVisibleUp}-block`]: props.contentVisibleUp
    }));
    const showText = computed(() => props.text && !props.textHtml);
    const showTextAsHtml = computed(() => props.textHtml);
    const showCaption = computed(() => props.caption && !props.captionHtml);
    const showCaptionAsHtml = computed(() => props.captionHtml);
    const parentWidth = computed(() => parentData.width);
    const parentHeight = computed(() => parentData.height);
    return (_ctx, _cache) => {
      const _component_b_img = resolveComponent("b-img");
      return openBlock(), createElementBlock("div", {
        id: unref(computedId),
        class: normalizeClass(["carousel-item", { active: __props.active }]),
        "data-bs-interval": __props.interval,
        style: normalizeStyle(unref(computedAttr))
      }, [
        renderSlot(_ctx.$slots, "img", {}, () => [
          createVNode(_component_b_img, {
            class: "d-block w-100",
            alt: __props.imgAlt,
            src: __props.imgSrc,
            width: __props.imgWidth || unref(parentWidth),
            height: __props.imgHeight || unref(parentHeight),
            blank: __props.imgBlank,
            "blank-color": __props.imgBlankColor
          }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
        ]),
        __props.caption || __props.captionHtml || __props.text || __props.textHtml || _ctx.$slots.default ? (openBlock(), createBlock(resolveDynamicComponent(__props.contentTag), {
          key: 0,
          class: normalizeClass(["carousel-caption", unref(computedContentClasses)])
        }, {
          default: withCtx(() => [
            __props.caption || __props.captionHtml ? (openBlock(), createBlock(resolveDynamicComponent(__props.captionTag), { key: 0 }, {
              default: withCtx(() => [
                unref(showCaption) ? (openBlock(), createElementBlock("span", _hoisted_2$i, toDisplayString(__props.caption), 1)) : createCommentVNode("", true),
                unref(showCaptionAsHtml) ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  innerHTML: __props.captionHtml
                }, null, 8, _hoisted_3$6)) : createCommentVNode("", true)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            __props.text || __props.textHtml ? (openBlock(), createBlock(resolveDynamicComponent(__props.textTag), { key: 1 }, {
              default: withCtx(() => [
                unref(showText) ? (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
                unref(showTextAsHtml) ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  innerHTML: __props.textHtml
                }, null, 8, _hoisted_5$4)) : createCommentVNode("", true)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["class"])) : createCommentVNode("", true)
      ], 14, _hoisted_1$y);
    };
  }
});
const _hoisted_1$x = ["disabled"];
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "BCloseButton",
  props: {
    disabled: { type: Boolean, default: false },
    white: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "btn-close-white": props.white
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["btn-close", unref(classes)]),
        disabled: __props.disabled,
        "aria-label": "Close"
      }, null, 10, _hoisted_1$x);
    };
  }
});
var getBreakpointProps = (prefix, breakpoints, definition) => breakpoints.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((props, breakpoint) => {
  props[!prefix ? breakpoint : `${prefix}${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`] = definition;
  return props;
}, /* @__PURE__ */ Object.create(null));
var getClasses$1 = (props, els, propPrefix, classPrefix = propPrefix) => Object.keys(els).reduce((arr, prop) => {
  if (!props[prop])
    return arr;
  arr.push([classPrefix, prop.replace(propPrefix, ""), props[prop]].filter((e) => e && typeof e !== "boolean").join("-").toLowerCase());
  return arr;
}, []);
const breakpointCol = getBreakpointProps("", [], { type: [Boolean, String, Number], default: false });
const breakpointOffset = getBreakpointProps("offset", [""], { type: [String, Number], default: null });
const breakpointOrder = getBreakpointProps("order", [""], { type: [String, Number], default: null });
const _sfc_main$10 = defineComponent({
  name: "BCol",
  props: {
    col: { type: Boolean, default: false },
    cols: { type: [String, Number], default: null },
    ...breakpointCol,
    offset: { type: [String, Number], default: null },
    ...breakpointOffset,
    order: { type: [String, Number], default: null },
    ...breakpointOrder,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(props) {
    const properties = [
      { content: breakpointCol, propPrefix: "cols", classPrefix: "col" },
      { content: breakpointOffset, propPrefix: "offset" },
      { content: breakpointOrder, propPrefix: "order" }
    ];
    const classList = properties.flatMap((el) => getClasses$1(props, el.content, el.propPrefix, el.classPrefix));
    const classes = computed(() => ({
      col: props.col || !classList.some((e) => /^col-/.test(e) && !props.cols),
      [`col-${props.cols}`]: !!props.cols,
      [`offset-${props.offset}`]: !!props.offset,
      [`order-${props.order}`]: !!props.order,
      [`align-self-${props.alignSelf}`]: !!props.alignSelf
    }));
    return {
      classes,
      classList
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass([_ctx.classes, _ctx.classList])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var BCol = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$6]]);
const defaultToastOptions = { delay: 5e3, value: true, pos: "top-right" };
class ToastInstance {
  constructor(vm) {
    if (isReactive(vm)) {
      this.vm = vm;
    } else {
      this.vm = reactive(vm);
    }
    this.containerPositions = computed(() => {
      const s = /* @__PURE__ */ new Set([]);
      this.vm.toasts.map((toast) => {
        if (toast.options.pos) {
          s.add(toast.options.pos);
        }
      });
      return s;
    });
  }
  toasts(position) {
    if (position) {
      return computed(() => this.vm.toasts.filter((toast) => {
        if (toast.options.pos === position && toast.options.value) {
          return toast;
        }
      }));
    }
    return computed(() => this.vm.toasts);
  }
  remove(...forDeletion) {
    this.vm.toasts = this.vm.toasts.filter((item) => {
      if (item.options.id && !forDeletion.includes(item.options.id)) {
        return item;
      }
    });
  }
  isRoot() {
    var _a;
    return (_a = this.vm.root) != null ? _a : false;
  }
  show(content, options = defaultToastOptions) {
    const topts = { id: getID(), ...defaultToastOptions, ...options };
    const toast = {
      options: reactive(topts),
      content
    };
    this.vm.toasts.push(toast);
    return toast;
  }
  info(content, options = defaultToastOptions) {
    return this.show(content, { variant: "info", ...options });
  }
  danger(content, options = defaultToastOptions) {
    return this.show(content, { variant: "danger", ...options });
  }
  warning(content, options = defaultToastOptions) {
    return this.show(content, { variant: "warning", ...options });
  }
  success(content, options = defaultToastOptions) {
    return this.show(content, { variant: "success", ...options });
  }
  hide() {
  }
}
class ToastController {
  constructor() {
    this.useToast = useToast;
    this.vms = {};
  }
  getOrCreateViewModel(vm) {
    if (!vm) {
      if (this.rootInstance) {
        return this.vms[this.rootInstance];
      }
      const vm2 = { root: true, toasts: [], container: void 0, id: Symbol("toast") };
      this.rootInstance = vm2.id;
      this.vms[vm2.id] = vm2;
      return vm2;
    }
    if (vm.root) {
      if (this.rootInstance) {
        return this.vms[this.rootInstance];
      }
      this.rootInstance = vm.id;
    }
    this.vms[vm.id] = vm;
    return vm;
  }
  getVM(id) {
    if (!id && this.rootInstance) {
      return this.vms[this.rootInstance];
    } else if (id) {
      return this.vms[id];
    }
    return void 0;
  }
}
const injectkey = Symbol();
const fetchKey = Symbol();
const defaults = {
  container: void 0,
  toasts: [],
  root: false
};
function getKey() {
  return inject(fetchKey);
}
function useToast(vm, key = injectkey) {
  const controller = inject(getKey());
  if (!vm) {
    return new ToastInstance(controller.getOrCreateViewModel());
  }
  const vm_id = { id: Symbol("toastInstance") };
  const local_vm = { ...defaults, ...vm_id, ...vm };
  const vm_instance = controller.getOrCreateViewModel(local_vm);
  return new ToastInstance(vm_instance);
}
const BToastPlugin = {
  install: (app, options = {}) => {
    var _a, _b, _c, _d;
    app.provide(fetchKey, (_b = (_a = options == null ? void 0 : options.BToast) == null ? void 0 : _a.injectkey) != null ? _b : injectkey);
    app.provide((_d = (_c = options == null ? void 0 : options.BToast) == null ? void 0 : _c.injectkey) != null ? _d : injectkey, new ToastController());
  }
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "BToaster",
  props: {
    position: { default: "top-right" },
    instance: null
  },
  setup(__props) {
    const props = __props;
    const toastPositions = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    };
    const positionClass = computed(() => toastPositions[props.position]);
    const handleDestroy = (id) => {
      var _a;
      (_a = props.instance) == null ? void 0 : _a.remove(id);
    };
    return (_ctx, _cache) => {
      var _a;
      const _component_b_toast = resolveComponent("b-toast");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(positionClass)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.instance) == null ? void 0 : _a.toasts(__props.position).value, (toast) => {
          return openBlock(), createBlock(_component_b_toast, {
            id: toast.options.id,
            key: toast.options.id,
            modelValue: toast.options.value,
            "onUpdate:modelValue": ($event) => toast.options.value = $event,
            delay: toast.options.delay,
            title: toast.content.title,
            body: toast.content.body,
            component: toast.content.body,
            variant: toast.options.variant,
            onDestroyed: handleDestroy
          }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "delay", "title", "body", "component", "variant"]);
        }), 128))
      ], 2);
    };
  }
});
const _sfc_main$_ = defineComponent({
  name: "BContainer",
  props: {
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    fluid: { type: [Boolean, String], default: false },
    toast: { type: Object },
    position: { type: String, required: false }
  },
  setup(props, { slots, expose }) {
    const container = ref();
    let toastInstance;
    const classes = computed(() => ({
      container: !props.fluid,
      [`container-fluid`]: typeof props.fluid === "boolean" && props.fluid,
      [`container-${props.fluid}`]: typeof props.fluid === "string",
      [`gx-${props.gutterX}`]: props.gutterX !== null,
      [`gy-${props.gutterY}`]: props.gutterY !== null
    }));
    onMounted(() => {
      if (props.toast)
        ;
    });
    if (props.toast) {
      toastInstance = useToast({ container, root: props.toast.root });
      expose({});
    }
    return () => {
      var _a;
      const subContainers = [];
      toastInstance == null ? void 0 : toastInstance.containerPositions.value.forEach((position) => {
        subContainers.push(h(_sfc_main$$, { key: position, instance: toastInstance, position }));
      });
      return h("div", { class: [classes.value, props.position], ref: container }, [
        ...subContainers,
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      ]);
    };
  },
  methods: {}
});
function _isObject(item) {
  return item && typeof item === "object" && item.constructor === Object;
}
function mergeDeep(target, source, extendArray = true) {
  const output = target instanceof Date && typeof target.getMonth === "function" ? new Date(target) : Object.assign({}, target);
  if (_isObject(target) && _isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (_isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key], extendArray);
      } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        Object.assign(output, {
          [key]: !extendArray ? source[key] : target[key].concat(source[key].filter((item) => !target[key].includes(item)))
        });
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
const _hoisted_1$w = { class: "visually-hidden" };
const _hoisted_2$h = ["aria-labelledby", "role"];
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "BDropdown",
  props: {
    id: null,
    menuClass: null,
    size: null,
    splitClass: null,
    splitVariant: null,
    text: null,
    toggleClass: null,
    autoClose: { type: [Boolean, String], default: true },
    block: { type: Boolean, default: false },
    boundary: { default: "clippingParents" },
    dark: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dropup: { type: Boolean, default: false },
    dropright: { type: Boolean, default: false },
    dropleft: { type: Boolean, default: false },
    noFlip: { type: Boolean, default: false },
    offset: { default: 0 },
    popperOpts: { default: () => ({}) },
    right: { type: Boolean, default: false },
    role: { default: "menu" },
    split: { type: Boolean, default: false },
    splitButtonType: { default: "button" },
    splitHref: { default: void 0 },
    noCaret: { type: Boolean, default: false },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" }
  },
  emits: ["show", "shown", "hide", "hidden", "click", "toggle"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const parent = ref();
    const dropdown = ref();
    const instance = ref();
    const computedId = useId(props.id, "dropdown");
    useEventListener(parent, "show.bs.dropdown", () => emit("show"));
    useEventListener(parent, "shown.bs.dropdown", () => emit("shown"));
    useEventListener(parent, "hide.bs.dropdown", () => emit("hide"));
    useEventListener(parent, "hidden.bs.dropdown", () => emit("hidden"));
    const onSplitClick = (event) => {
      if (props.split) {
        emit("click", event);
      }
    };
    const classes = computed(() => ({
      "d-grid": props.block,
      "d-flex": props.block && props.split
    }));
    const buttonClasses = computed(() => ({
      "dropdown-toggle": !props.split,
      "dropdown-toggle-no-caret": props.noCaret && !props.split,
      "w-100": props.split && props.block
    }));
    const dropdownMenuClasses = computed(() => ({
      "dropdown-menu-dark": props.dark,
      "dropdown-menu-right": props.right
    }));
    const buttonAttr = computed(() => ({
      "data-bs-toggle": props.split ? void 0 : "dropdown",
      "aria-expanded": props.split ? void 0 : false,
      "ref": props.split ? void 0 : dropdown,
      "href": props.split ? props.splitHref : void 0
    }));
    const splitAttr = computed(() => ({
      ref: props.split ? dropdown : void 0
    }));
    const hide = () => {
      var _a;
      (_a = instance.value) == null ? void 0 : _a.hide();
    };
    onMounted(() => {
      var _a;
      instance.value = new Dropdown((_a = dropdown.value) == null ? void 0 : _a.$el, {
        autoClose: props.autoClose,
        boundary: props.boundary,
        offset: props.offset ? props.offset.toString() : "",
        reference: props.offset || props.split ? "parent" : "toggle",
        popperConfig: (defaultConfig) => {
          const dropDownConfig = {
            placement: "bottom-start",
            modifiers: !props.noFlip ? [] : [
              {
                name: "flip",
                options: {
                  fallbackPlacements: []
                }
              }
            ]
          };
          if (props.dropup) {
            dropDownConfig.placement = props.right ? "top-end" : "top-start";
          } else if (props.dropright) {
            dropDownConfig.placement = "right-start";
          } else if (props.dropleft) {
            dropDownConfig.placement = "left-start";
          } else if (props.right) {
            dropDownConfig.placement = "bottom-end";
          }
          return mergeDeep(defaultConfig, mergeDeep(dropDownConfig, props.popperOpts));
        }
      });
    });
    expose({
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "parent",
        ref: parent,
        class: normalizeClass([unref(classes), "btn-group"])
      }, [
        createVNode(BButton, mergeProps({
          id: unref(computedId),
          variant: __props.splitVariant || __props.variant,
          size: __props.size,
          class: [unref(buttonClasses), __props.split ? __props.splitClass : __props.toggleClass],
          disabled: __props.disabled,
          type: __props.splitButtonType
        }, unref(buttonAttr), { onClick: onSplitClick }), {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.text) + " ", 1),
            renderSlot(_ctx.$slots, "button-content")
          ]),
          _: 3
        }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
        __props.split ? (openBlock(), createBlock(BButton, mergeProps({
          key: 0,
          variant: __props.variant,
          size: __props.size,
          disabled: __props.disabled
        }, unref(splitAttr), {
          class: [__props.toggleClass, "dropdown-toggle-split dropdown-toggle"],
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
        }), {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_1$w, toDisplayString(__props.toggleText), 1)
          ]),
          _: 1
        }, 16, ["variant", "size", "disabled", "class"])) : createCommentVNode("", true),
        createElementVNode("ul", {
          class: normalizeClass(["dropdown-menu", [__props.menuClass, unref(dropdownMenuClasses)]]),
          "aria-labelledby": unref(computedId),
          role: __props.role
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2$h)
      ], 2);
    };
  }
});
const _hoisted_1$v = { role: "presentation" };
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$v, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
          class: "dropdown-divider",
          role: "separator",
          "aria-orientation": "horizontal"
        }))
      ]);
    };
  }
});
const _sfc_main$X = {};
const _hoisted_1$u = { role: "presentation" };
const _hoisted_2$g = { class: "px-4 py-3" };
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("li", _hoisted_1$u, [
    createElementVNode("form", _hoisted_2$g, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var BDropdownForm = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$5]]);
const _hoisted_1$t = { role: "presentation" };
const _hoisted_2$f = ["id", "aria-describedby"];
const __default__$4 = defineComponent({
  inheritAttrs: false
});
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  __name: "BDropdownGroup",
  props: {
    id: null,
    ariaDescribedby: null,
    header: null,
    headerClasses: { default: void 0 },
    headerTag: { default: "header" },
    headerVariant: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const headerId = computed(() => props.id ? [props.id, "group_dd_header"].join("_") : void 0);
    const headerRole = computed(() => props.headerTag === "header" ? void 0 : "heading");
    const classes = computed(() => ({
      [`text-${props.headerVariant}`]: props.headerVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$t, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.headerTag), {
          id: unref(headerId),
          class: normalizeClass(["dropdown-header", [unref(classes), __props.headerClasses]]),
          role: unref(headerRole)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createTextVNode(toDisplayString(__props.header), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "class", "role"])),
        createElementVNode("ul", mergeProps({
          id: __props.id,
          role: "group",
          class: "list-unstyled"
        }, _ctx.$attrs, {
          "aria-describedby": __props.ariaDescribedby || unref(headerId)
        }), [
          renderSlot(_ctx.$slots, "default")
        ], 16, _hoisted_2$f)
      ]);
    };
  }
});
const _sfc_main$V = {};
const _hoisted_1$s = { class: "dropdown-header" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("li", null, [
    createElementVNode("h6", _hoisted_1$s, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var BDropdownHeader = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$4]]);
const _hoisted_1$r = { role: "presentation" };
const __default__$3 = defineComponent({
  inheritAttrs: false
});
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  __name: "BDropdownItem",
  props: {
    href: null,
    linkClass: null,
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rel: { default: void 0 },
    target: { default: "_self" },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const attrs = useAttrs();
    const classes = computed(() => ({
      active: props.active,
      disabled: props.disabled,
      [`text-${props.variant}`]: props.variant
    }));
    const tag = computed(() => props.href ? "a" : attrs.to ? "b-link" : "button");
    const componentAttrs = computed(() => ({
      "aria-current": props.active ? "true" : null,
      "href": tag.value === "a" ? props.href : null,
      "rel": props.rel,
      "type": tag.value === "button" ? "button" : null,
      "target": props.target,
      ...attrs.to ? { activeClass: "active", ...attrs } : {}
    }));
    const clicked = (e) => emit("click", e);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$r, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(tag)), mergeProps({
          class: ["dropdown-item", [unref(classes), __props.linkClass]]
        }, unref(componentAttrs), { onClick: clicked }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"]))
      ]);
    };
  }
});
const _hoisted_1$q = { role: "presentation" };
const __default__$2 = defineComponent({
  inheritAttrs: false
});
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  __name: "BDropdownItemButton",
  props: {
    buttonClass: null,
    active: { type: Boolean, default: false },
    activeClass: { default: "active" },
    disabled: { type: Boolean, default: false },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const classes = computed(() => ({
      [props.activeClass]: props.active,
      disabled: props.disabled,
      [`text-${props.variant}`]: props.variant
    }));
    const attrs = computed(() => ({
      role: "menuitem",
      type: "button",
      disabled: props.disabled
    }));
    const clicked = (e) => emit("click", e);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$q, [
        createElementVNode("button", mergeProps({
          class: ["dropdown-item", [unref(classes), __props.buttonClass]]
        }, unref(attrs), { onClick: clicked }), [
          renderSlot(_ctx.$slots, "default")
        ], 16)
      ]);
    };
  }
});
const _sfc_main$S = {};
const _hoisted_1$p = { role: "presentation" };
const _hoisted_2$e = { class: "px-4 py-1 mb-0 text-muted" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("li", _hoisted_1$p, [
    createElementVNode("p", _hoisted_2$e, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var BDropdownText = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$3]]);
const _hoisted_1$o = ["id", "novalidate", "onSubmit"];
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "BForm",
  props: {
    id: null,
    floating: { type: Boolean, default: false },
    novalidate: { type: Boolean, default: false },
    validated: { type: Boolean, default: false }
  },
  emits: ["submit"],
  setup(__props, { emit }) {
    const props = __props;
    const classes = computed(() => ({
      "form-floating": props.floating,
      "was-validated": props.validated
    }));
    const submitted = (e) => emit("submit", e);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        id: __props.id,
        novalidate: __props.novalidate,
        class: normalizeClass(unref(classes)),
        onSubmit: withModifiers(submitted, ["prevent"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1$o);
    };
  }
});
const _hoisted_1$n = { class: "form-floating" };
const _hoisted_2$d = ["for"];
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("label", { for: __props.labelFor }, toDisplayString(__props.label), 9, _hoisted_2$d)
      ]);
    };
  }
});
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: null,
    forceShow: { type: Boolean, default: false },
    id: null,
    role: null,
    state: { type: Boolean, default: void 0 },
    tag: { default: "div" },
    tooltip: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const computedShow = computed(() => props.forceShow === true || props.state === false);
    const classes = computed(() => ({
      "d-block": computedShow.value,
      "invalid-feedback": !props.tooltip,
      "invalid-tooltip": props.tooltip
    }));
    const attrs = computed(() => ({
      "id": props.id || null,
      "role": props.role || null,
      "aria-live": props.ariaLive || null,
      "aria-atomic": props.ariaLive ? "true" : null
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: unref(classes) }, unref(attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), { class: "row d-flex flex-wrap" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "BFormText",
  props: {
    id: null,
    inline: { type: Boolean, default: false },
    tag: { default: "small" },
    textVariant: { default: "muted" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "form-text": !props.inline,
      [`text-${props.textVariant}`]: props.textVariant
    }));
    const attrs = computed(() => ({
      id: props.id || null
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: unref(classes) }, unref(attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: null,
    forceShow: { type: Boolean, default: false },
    id: null,
    role: null,
    state: { type: Boolean, default: void 0 },
    tag: { default: "div" },
    tooltip: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const computedShow = computed(() => props.forceShow === true || props.state === true);
    const classes = computed(() => ({
      "d-block": computedShow.value,
      "valid-feedback": !props.tooltip,
      "valid-tooltip": props.tooltip
    }));
    const attrs = computed(() => ({
      "id": props.id || null,
      "role": props.role || null,
      "aria-live": props.ariaLive || null,
      "aria-atomic": props.ariaLive ? "true" : null
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: unref(classes) }, unref(attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _getComputedAriaInvalid = (props) => computed(() => {
  if (props.ariaInvalid === true || props.ariaInvalid === "true" || props.ariaInvalid === "") {
    return "true";
  }
  const computedState = typeof props.state === "boolean" ? props.state : null;
  return computedState === false ? "true" : props.ariaInvalid;
});
const getClasses = (props) => computed(() => ({
  "form-check": !props.plain && !props.button,
  "form-check-inline": props.inline,
  "form-switch": props.switch,
  [`form-control-${props.size}`]: props.size && props.size !== "md"
}));
const getInputClasses = (props) => computed(() => ({
  "form-check-input": !props.plain && !props.button,
  "is-valid": props.state === true,
  "is-invalid": props.state === false,
  "btn-check": props.button
}));
const getLabelClasses = (props) => computed(() => ({
  "form-check-label": !props.plain && !props.button,
  "btn": props.button,
  [`btn-${props.buttonVariant}`]: props.button,
  [`btn-${props.size}`]: props.button && props.size && props.size !== "md"
}));
const getGroupAttr = (props) => computed(() => ({
  "aria-invalid": _getComputedAriaInvalid(props).value,
  "aria-required": props.required.toString() === "true" ? "true" : null
}));
const getGroupClasses = (props) => computed(() => ({
  "was-validated": props.validated,
  "btn-group": props.buttons && !props.stacked,
  "btn-group-vertical": props.stacked,
  [`btn-group-${props.size}`]: props.size
}));
const slotsToElements = (slots, nodeType, disabled) => slots.filter((e) => e.type.name === nodeType).map((e) => {
  const txtChild = (e.children.default ? e.children.default() : []).find((e2) => e2.type.toString() === "Symbol(Text)");
  return {
    props: {
      disabled,
      ...e.props
    },
    text: txtChild ? txtChild.children : ""
  };
});
const optionToElement = (option, props) => {
  if (typeof option === "string") {
    return {
      props: {
        value: option,
        disabled: props.disabled
      },
      text: option
    };
  }
  return {
    props: {
      value: option[props.valueField],
      disabled: props.disabled || option[props.disabledField],
      ...option.props
    },
    text: option[props.textField],
    html: option[props.htmlField]
  };
};
const bindGroupProps = (el, idx, props, computedName, computedId) => ({
  ...el,
  props: {
    "button-variant": props.buttonVariant,
    "form": props.form,
    "name": computedName.value,
    "id": `${computedId.value}_option_${idx}`,
    "button": props.buttons,
    "state": props.state,
    "plain": props.plain,
    "size": props.size,
    "inline": !props.stacked,
    "required": props.required,
    ...el.props
  }
});
const _hoisted_1$m = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"];
const _hoisted_2$c = ["for"];
const __default__$1 = defineComponent({
  inheritAttrs: false
});
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    indeterminate: { type: Boolean },
    name: null,
    id: { default: void 0 },
    autofocus: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    buttonVariant: { default: "secondary" },
    inline: { type: Boolean, default: false },
    required: { type: Boolean, default: void 0 },
    size: { default: "md" },
    state: { type: Boolean, default: void 0 },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number], default: false },
    value: { type: [Array, Set, Boolean, String, Object, Number], default: true },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number], default: void 0 }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const computedId = useId(props.id, "form-check");
    const input = ref(null);
    const isFocused = ref(false);
    const localValue = computed({
      get: () => {
        if (props.uncheckedValue) {
          if (!Array.isArray(props.modelValue)) {
            return props.modelValue === props.value;
          }
          return props.modelValue.indexOf(props.value) > -1;
        }
        return props.modelValue;
      },
      set: (newValue) => {
        let emitValue = newValue;
        if (!Array.isArray(props.modelValue)) {
          emitValue = newValue ? props.value : props.uncheckedValue;
        } else {
          if (props.uncheckedValue) {
            emitValue = props.modelValue;
            if (newValue) {
              if (emitValue.indexOf(props.uncheckedValue) > -1)
                emitValue.splice(emitValue.indexOf(props.uncheckedValue), 1);
              emitValue.push(props.value);
            } else {
              if (emitValue.indexOf(props.value) > -1)
                emitValue.splice(emitValue.indexOf(props.value), 1);
              emitValue.push(props.uncheckedValue);
            }
          }
        }
        emit("input", emitValue);
        emit("update:modelValue", emitValue);
        emit("change", emitValue);
      }
    });
    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.indexOf(props.value) > -1;
      }
      return JSON.stringify(props.modelValue) === JSON.stringify(props.value);
    });
    const classes = getClasses(props);
    const inputClasses = getInputClasses(props);
    const labelClasses = getLabelClasses(props);
    onMounted(() => {
      if (props.autofocus) {
        input.value.focus();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        withDirectives(createElementVNode("input", mergeProps({ id: unref(computedId) }, _ctx.$attrs, {
          ref_key: "input",
          ref: input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null),
          class: unref(inputClasses),
          type: "checkbox",
          disabled: __props.disabled,
          required: !!__props.name && !!__props.required,
          name: __props.name,
          form: __props.form,
          "aria-label": __props.ariaLabel,
          "aria-labelledby": __props.ariaLabelledBy,
          "aria-required": __props.name && __props.required ? "true" : void 0,
          value: __props.value,
          indeterminate: __props.indeterminate,
          onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => isFocused.value = false)
        }), null, 16, _hoisted_1$m), [
          [vModelCheckbox, unref(localValue)]
        ]),
        _ctx.$slots.default || !__props.plain ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: unref(computedId),
          class: normalizeClass([unref(labelClasses), { active: unref(isChecked), focus: isFocused.value }])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2$c)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _hoisted_1$l = ["id"];
const _hoisted_2$b = ["innerHTML"];
const _hoisted_3$5 = ["textContent"];
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "BFormCheckboxGroup",
  props: {
    id: null,
    form: null,
    modelValue: { default: () => [] },
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autofocus: { type: Boolean, default: false },
    buttonVariant: { default: "secondary" },
    buttons: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    name: null,
    options: { default: () => [] },
    plain: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: null,
    stacked: { type: Boolean, default: false },
    state: { type: Boolean, default: void 0 },
    switches: { type: Boolean, default: false },
    textField: { default: "text" },
    validated: { type: Boolean, default: false },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const slotsName = "BFormCheckbox";
    const computedId = useId(props.id, "checkbox");
    const computedName = useId(props.name, "checkbox");
    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        if (JSON.stringify(newValue) === JSON.stringify(props.modelValue))
          return;
        emit("input", newValue);
        emit("update:modelValue", newValue);
        emit("change", newValue);
      }
    });
    const checkboxList = computed(() => (slots.first ? slotsToElements(slots.first(), slotsName, props.disabled) : []).concat(props.options.map((e) => optionToElement(e, props))).concat(slots.default ? slotsToElements(slots.default(), slotsName, props.disabled) : []).map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId)).map((e) => ({
      ...e,
      props: {
        switch: props.switches,
        ...e.props
      }
    })));
    const attrs = getGroupAttr(props);
    const classes = getGroupClasses(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(attrs), {
        id: unref(computedId),
        role: "group",
        class: [unref(classes), "bv-no-focus-ring"],
        tabindex: "-1"
      }), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(checkboxList), (item, key) => {
          return openBlock(), createBlock(_sfc_main$L, mergeProps({
            key,
            modelValue: unref(localValue),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null)
          }, item.props), {
            default: withCtx(() => [
              item.html ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: item.html
              }, null, 8, _hoisted_2$b)) : (openBlock(), createElementBlock("span", {
                key: 1,
                textContent: toDisplayString(item.text)
              }, null, 8, _hoisted_3$5))
            ]),
            _: 2
          }, 1040, ["modelValue"]);
        }), 128))
      ], 16, _hoisted_1$l);
    };
  }
});
const escapeChar = (value) => "\\" + value;
const cssEscape = (value) => {
  value = toString(value);
  const length = value.length;
  const firstCharCode = value.charCodeAt(0);
  return value.split("").reduce((result, char, index) => {
    const charCode = value.charCodeAt(index);
    if (charCode === 0) {
      return result + "\uFFFD";
    }
    if (charCode === 127 || charCode >= 1 && charCode <= 31 || index === 0 && charCode >= 48 && charCode <= 57 || index === 1 && charCode >= 48 && charCode <= 57 && firstCharCode === 45) {
      return result + escapeChar(`${charCode.toString(16)} `);
    }
    if (index === 0 && charCode === 45 && length === 1) {
      return result + escapeChar(char);
    }
    if (charCode >= 128 || charCode === 45 || charCode === 95 || charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
      return result + char;
    }
    return result + escapeChar(char);
  }, "");
};
const normalizeSlot = (name, scope = {}, $slots = {}) => {
  const names = [name];
  let slot;
  for (let i = 0; i < names.length && !slot; i++) {
    const name2 = names[i];
    slot = $slots[name2];
  }
  return slot && isFunction(slot) ? slot(scope) : slot;
};
const INPUTS = ["input", "select", "textarea"];
const INPUT_SELECTOR = INPUTS.map((v) => `${v}:not([disabled])`).join();
const LEGEND_INTERACTIVE_ELEMENTS = [...INPUTS, "a", "button", "label"];
const SLOT_NAME_LABEL = "label";
const SLOT_NAME_INVALID_FEEDBACK = "invalid-feedback";
const SLOT_NAME_VALID_FEEDBACK = "valid-feedback";
const SLOT_NAME_DESCRIPTION = "description";
const SLOT_NAME_DEFAULT$1 = "default";
const _sfc_main$J = defineComponent({
  name: "BFormGroup",
  components: { BCol, BFormInvalidFeedback: _sfc_main$P, BFormRow: _sfc_main$O, BFormText: _sfc_main$N, BFormValidFeedback: _sfc_main$M },
  props: {
    contentCols: { type: [Boolean, String, Number], required: false },
    contentColsLg: { type: [Boolean, String, Number], required: false },
    contentColsMd: { type: [Boolean, String, Number], required: false },
    contentColsSm: { type: [Boolean, String, Number], required: false },
    contentColsXl: { type: [Boolean, String, Number], required: false },
    description: { type: [String], required: false },
    disabled: { type: Boolean, default: false },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, required: false },
    invalidFeedback: { type: String, required: false },
    label: { type: String, required: false },
    labelAlign: { type: [Boolean, String, Number], required: false },
    labelAlignLg: { type: [Boolean, String, Number], required: false },
    labelAlignMd: { type: [Boolean, String, Number], required: false },
    labelAlignSm: { type: [Boolean, String, Number], required: false },
    labelAlignXl: { type: [Boolean, String, Number], required: false },
    labelClass: { type: [Array, Object, String], required: false },
    labelCols: { type: [Boolean, String, Number], required: false },
    labelColsLg: { type: [Boolean, String, Number], required: false },
    labelColsMd: { type: [Boolean, String, Number], required: false },
    labelColsSm: { type: [Boolean, String, Number], required: false },
    labelColsXl: { type: [Boolean, String, Number], required: false },
    labelFor: { type: String, required: false },
    labelSize: { type: String, required: false },
    labelSrOnly: { type: Boolean, default: false },
    state: { type: Boolean, default: null },
    tooltip: { type: Boolean, default: false },
    validFeedback: { type: String, required: false },
    validated: { type: Boolean, default: false },
    floating: { type: Boolean, default: false }
  },
  setup(props, { attrs }) {
    const ariaDescribedby = null;
    const breakPoints = ["xs", "sm", "md", "lg", "xl"];
    const getAlignClasses = (props2, prefix) => breakPoints.reduce((result, breakpoint) => {
      const propValue = props2[suffixPropName(breakpoint, `${prefix}Align`)] || null;
      if (propValue) {
        result.push(["text", breakpoint, propValue].filter((p) => p).join("-"));
      }
      return result;
    }, []);
    const getColProps = (props2, prefix) => breakPoints.reduce((result, breakpoint) => {
      let propValue = props2[suffixPropName(breakpoint, `${prefix}Cols`)];
      propValue = propValue === "" ? true : propValue || false;
      if (!isBoolean(propValue) && propValue !== "auto") {
        propValue = stringToInteger(propValue, 0);
        propValue = propValue > 0 ? propValue : false;
      }
      if (propValue) {
        result[breakpoint || (isBoolean(propValue) ? "col" : "cols")] = propValue;
      }
      return result;
    }, {});
    const content = ref();
    const updateAriaDescribedby = (newValue, oldValue = null) => {
      if (IS_BROWSER && props.labelFor) {
        const $input = select(`#${cssEscape(props.labelFor)}`, content);
        if ($input) {
          const attr = "aria-describedby";
          const newIds = (newValue || "").split(RX_SPACE_SPLIT);
          const oldIds = (oldValue || "").split(RX_SPACE_SPLIT);
          const ids = (getAttr($input, attr) || "").split(RX_SPACE_SPLIT).filter((id) => !arrayIncludes(oldIds, id)).concat(newIds).filter((id, index, ids2) => ids2.indexOf(id) === index).filter((x) => x).join(" ").trim();
          if (ids) {
            setAttr($input, attr, ids);
          } else {
            removeAttr($input, attr);
          }
        }
      }
    };
    const contentColProps = computed(() => getColProps(props, "content"));
    const labelAlignClasses = computed(() => getAlignClasses(props, "label"));
    const labelColProps = computed(() => getColProps(props, "label"));
    const isHorizontal = computed(() => Object.keys(contentColProps.value).length > 0 || Object.keys(labelColProps.value).length > 0);
    const computedState = computed(() => isBoolean(props.state) ? props.state : null);
    const stateClass = computed(() => {
      const state = computedState.value;
      return state === true ? "is-valid" : state === false ? "is-invalid" : null;
    });
    const computedAriaInvalid = computed(() => {
      if (attrs.ariaInvalid === true || attrs.ariaInvalid === "true" || attrs.ariaInvalid === "") {
        return "true";
      }
      return computedState.value === false ? "true" : attrs.ariaInvalid;
    });
    watch(() => ariaDescribedby, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        updateAriaDescribedby(newValue, oldValue);
      }
    });
    onMounted(() => {
      nextTick(() => {
        updateAriaDescribedby(ariaDescribedby);
      });
    });
    const onLegendClick = (event) => {
      if (props.labelFor) {
        return;
      }
      const { target } = event;
      const tagName = target ? target.tagName : "";
      if (LEGEND_INTERACTIVE_ELEMENTS.indexOf(tagName) !== -1) {
        return;
      }
      const inputs = selectAll(INPUT_SELECTOR, content).filter(isVisible);
      if (inputs.length === 1) {
        attemptFocus(inputs[0]);
      }
    };
    return {
      ariaDescribedby,
      computedAriaInvalid,
      contentColProps,
      isHorizontal,
      labelAlignClasses,
      labelColProps,
      onLegendClick,
      stateClass
    };
  },
  render() {
    const props = this.$props;
    const slots = this.$slots;
    const id = useId();
    const isFieldset = !props.labelFor;
    let $label = null;
    const labelContent = normalizeSlot(SLOT_NAME_LABEL, {}, slots) || props.label;
    const labelId = labelContent ? getID("_BV_label_") : null;
    if (labelContent || this.isHorizontal) {
      const labelTag = isFieldset ? "legend" : "label";
      if (props.labelSrOnly) {
        if (labelContent) {
          $label = h(labelTag, {
            class: "visually-hidden",
            id: labelId,
            for: props.labelFor || null
          }, labelContent);
        }
        if (this.isHorizontal) {
          $label = h(BCol, this.labelColProps, { default: () => $label });
        } else {
          $label = h("div", {}, [$label]);
        }
      } else {
        const renderProps = {
          onClick: isFieldset ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? labelTag : null,
          id: labelId,
          for: props.labelFor || null,
          tabIndex: isFieldset ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": isFieldset,
              "col-form-label": this.isHorizontal || isFieldset,
              "pt-0": !this.isHorizontal && isFieldset,
              "d-block": !this.isHorizontal && !isFieldset,
              [`col-form-label-${props.labelSize}`]: !!props.labelSize
            },
            this.labelAlignClasses,
            props.labelClass
          ]
        };
        if (this.isHorizontal) {
          $label = h(BCol, renderProps, { default: () => labelContent });
        } else {
          $label = h(labelTag, renderProps, labelContent);
        }
      }
    }
    let $invalidFeedback = null;
    const invalidFeedbackContent = normalizeSlot(SLOT_NAME_INVALID_FEEDBACK, {}, slots) || this.invalidFeedback;
    const invalidFeedbackId = invalidFeedbackContent ? getID("_BV_feedback_invalid_") : void 0;
    if (invalidFeedbackContent) {
      $invalidFeedback = h(_sfc_main$P, {
        ariaLive: props.feedbackAriaLive,
        id: invalidFeedbackId,
        state: props.state,
        tooltip: props.tooltip
      }, { default: () => invalidFeedbackContent });
    }
    let $validFeedback = null;
    const validFeedbackContent = normalizeSlot(SLOT_NAME_VALID_FEEDBACK, {}, slots) || this.validFeedback;
    const validFeedbackId = validFeedbackContent ? getID("_BV_feedback_valid_") : void 0;
    if (validFeedbackContent) {
      $validFeedback = h(_sfc_main$M, {
        ariaLive: props.feedbackAriaLive,
        id: validFeedbackId,
        state: props.state,
        tooltip: props.tooltip
      }, { default: () => validFeedbackContent });
    }
    let $description = null;
    const descriptionContent = normalizeSlot(SLOT_NAME_DESCRIPTION, {}, slots) || this.description;
    const descriptionId = descriptionContent ? getID("_BV_description_") : void 0;
    if (descriptionContent) {
      $description = h(_sfc_main$N, {
        id: descriptionId
      }, { default: () => descriptionContent });
    }
    const ariaDescribedby = this.ariaDescribedby = [
      descriptionId,
      props.state === false ? invalidFeedbackId : null,
      props.state === true ? validFeedbackId : null
    ].filter((x) => x).join(" ") || null;
    const contentBlocks = [
      normalizeSlot(SLOT_NAME_DEFAULT$1, { ariaDescribedby, descriptionId, id, labelId }, slots) || "",
      $invalidFeedback,
      $validFeedback,
      $description
    ];
    if (!this.isHorizontal && props.floating)
      contentBlocks.push($label);
    let $content = h("div", {
      ref: "content",
      class: [
        {
          "form-floating": !this.isHorizontal && props.floating
        }
      ]
    }, contentBlocks);
    if (this.isHorizontal) {
      $content = h(BCol, { ref: "content", ...this.contentColProps }, { default: () => contentBlocks });
    }
    const rowProps = {
      "class": [
        "mb-3",
        this.stateClass,
        {
          "was-validated": props.validated
        }
      ],
      "id": useId(props.id).value,
      "disabled": isFieldset ? props.disabled : null,
      "role": isFieldset ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      "aria-labelledby": isFieldset && this.isHorizontal ? labelId : null
    };
    if (this.isHorizontal && !isFieldset) {
      return h(_sfc_main$O, rowProps, { default: () => [$label, $content] });
    }
    return h(isFieldset ? "fieldset" : "div", rowProps, this.isHorizontal && isFieldset ? [h(_sfc_main$O, {}, { default: () => [$label, $content] })] : this.isHorizontal || !props.floating ? [$label, $content] : [$content]);
  }
});
const COMMON_INPUT_PROPS = {
  ariaInvalid: {
    type: [Boolean, String],
    default: false
  },
  autocomplete: { type: String, required: false },
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  form: { type: String, required: false },
  formatter: { type: Function, required: false },
  id: { type: String, required: false },
  lazy: { type: Boolean, default: false },
  lazyFormatter: { type: Boolean, default: false },
  list: { type: String, required: false },
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: false },
  number: { type: Boolean, default: false },
  placeholder: { type: String, required: false },
  plaintext: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  size: { type: String, required: false },
  state: { type: Boolean, default: null },
  trim: { type: Boolean, default: false }
};
function useFormInput(props, emit) {
  const input = ref();
  let inputValue = null;
  let neverFormatted = true;
  const computedId = useId(props.id, "input");
  const _formatValue = (value, evt, force = false) => {
    value = String(value);
    if (typeof props.formatter === "function" && (!props.lazyFormatter || force)) {
      neverFormatted = false;
      return props.formatter(value, evt);
    }
    return value;
  };
  const _getModelValue = (value) => {
    if (props.trim)
      return value.trim();
    if (props.number)
      return parseFloat(value);
    return value;
  };
  const handleAutofocus = () => {
    nextTick(() => {
      var _a;
      if (props.autofocus)
        (_a = input.value) == null ? void 0 : _a.focus();
    });
  };
  onMounted(handleAutofocus);
  onMounted(() => {
    if (input.value) {
      input.value.value = props.modelValue;
    }
  });
  onActivated(handleAutofocus);
  const computedAriaInvalid = computed(() => {
    if (props.state === false) {
      return true;
    }
    if (props.state === true) {
      return void 0;
    }
    if (typeof props.ariaInvalid === "boolean") {
      if (props.ariaInvalid === false) {
        return void 0;
      }
      return props.ariaInvalid;
    }
    return props.ariaInvalid;
  });
  const onInput = (evt) => {
    const { value } = evt.target;
    const formattedValue = _formatValue(value, evt);
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault();
      return;
    }
    if (props.lazy)
      return;
    emit("input", formattedValue);
    const nextModel = _getModelValue(formattedValue);
    if (props.modelValue !== nextModel) {
      inputValue = value;
      emit("update:modelValue", nextModel);
    }
  };
  const onChange = (evt) => {
    const { value } = evt.target;
    const formattedValue = _formatValue(value, evt);
    if (formattedValue === false || evt.defaultPrevented) {
      evt.preventDefault();
      return;
    }
    if (!props.lazy)
      return;
    inputValue = value;
    emit("update:modelValue", formattedValue);
    const nextModel = _getModelValue(formattedValue);
    if (props.modelValue !== nextModel) {
      emit("change", formattedValue);
    }
  };
  const onBlur = (evt) => {
    emit("blur", evt);
    if (!props.lazy && !props.lazyFormatter)
      return;
    const { value } = evt.target;
    const formattedValue = _formatValue(value, evt, true);
    inputValue = value;
    emit("update:modelValue", formattedValue);
  };
  const focus2 = () => {
    var _a;
    if (!props.disabled)
      (_a = input.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    var _a;
    if (!props.disabled) {
      (_a = input.value) == null ? void 0 : _a.blur();
    }
  };
  watch(() => props.modelValue, (newValue) => {
    if (!input.value)
      return;
    input.value.value = inputValue && neverFormatted ? inputValue : newValue;
    inputValue = null;
    neverFormatted = true;
  });
  return {
    input,
    computedId,
    computedAriaInvalid,
    onInput,
    onChange,
    onBlur,
    focus: focus2,
    blur
  };
}
const allowedTypes = [
  "text",
  "number",
  "email",
  "password",
  "search",
  "url",
  "tel",
  "date",
  "time",
  "range",
  "color"
];
const _sfc_main$I = defineComponent({
  name: "BFormInput",
  props: {
    ...COMMON_INPUT_PROPS,
    max: { type: [String, Number], required: false },
    min: { type: [String, Number], required: false },
    step: { type: [String, Number], required: false },
    type: {
      type: String,
      default: "text",
      validator: (value) => allowedTypes.includes(value)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(props, { emit }) {
    const classes = computed(() => {
      const isRange = props.type === "range";
      const isColor = props.type === "color";
      return {
        "form-range": isRange,
        "form-control": isColor || !props.plaintext && !isRange,
        "form-control-color": isColor,
        "form-control-plaintext": props.plaintext && !isRange && !isColor,
        [`form-control-${props.size}`]: props.size,
        "is-valid": props.state === true,
        "is-invalid": props.state === false
      };
    });
    const localType = computed(() => allowedTypes.includes(props.type) ? props.type : "text");
    const { input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus: focus2, blur } = useFormInput(props, emit);
    return {
      classes,
      localType,
      input,
      computedId,
      computedAriaInvalid,
      onInput,
      onChange,
      onBlur,
      focus: focus2,
      blur
    };
  }
});
const _hoisted_1$k = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    id: _ctx.computedId,
    ref: "input",
    class: _ctx.classes,
    name: _ctx.name || void 0,
    form: _ctx.form || void 0,
    type: _ctx.localType,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    required: _ctx.required,
    autocomplete: _ctx.autocomplete || void 0,
    readonly: _ctx.readonly || _ctx.plaintext,
    min: _ctx.min,
    max: _ctx.max,
    step: _ctx.step,
    list: _ctx.type !== "password" ? _ctx.list : void 0,
    "aria-required": _ctx.required ? "true" : void 0,
    "aria-invalid": _ctx.computedAriaInvalid
  }, _ctx.$attrs, {
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.onInput($event)),
    onChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event)),
    onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.onBlur($event))
  }), null, 16, _hoisted_1$k);
}
var BFormInput = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$2]]);
const _hoisted_1$j = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"];
const _hoisted_2$a = ["for"];
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "BFormRadio",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    id: null,
    name: null,
    size: null,
    autofocus: { type: Boolean, default: false },
    modelValue: { type: [Boolean, String, Array, Object, Number], default: void 0 },
    plain: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    buttonVariant: { default: "secondary" },
    inline: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    state: { type: [Boolean, null], default: void 0 },
    value: { type: [String, Boolean, Object, Number], default: true }
  },
  emits: ["input", "change", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const computedId = useId(props.id, "form-check");
    const input = ref(null);
    const isFocused = ref(false);
    const localValue = computed({
      get: () => Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue,
      set: (newValue) => {
        const value = newValue ? props.value : false;
        const emitValue = Array.isArray(props.modelValue) ? [value] : value;
        emit("input", emitValue);
        emit("change", emitValue);
        emit("update:modelValue", emitValue);
      }
    });
    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return (props.modelValue || []).find((e) => e === props.value);
      }
      return JSON.stringify(props.modelValue) === JSON.stringify(props.value);
    });
    const classes = getClasses(props);
    const inputClasses = getInputClasses(props);
    const labelClasses = getLabelClasses(props);
    onMounted(() => {
      if (props.autofocus) {
        input.value.focus();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        withDirectives(createElementVNode("input", mergeProps({ id: unref(computedId) }, _ctx.$attrs, {
          ref_key: "input",
          ref: input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null),
          class: unref(inputClasses),
          type: "radio",
          disabled: __props.disabled,
          required: !!__props.name && !!__props.required,
          name: __props.name,
          form: __props.form,
          "aria-label": __props.ariaLabel,
          "aria-labelledby": __props.ariaLabelledBy,
          value: __props.value,
          "aria-required": __props.name && __props.required ? true : void 0,
          onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => isFocused.value = false)
        }), null, 16, _hoisted_1$j), [
          [vModelRadio, unref(localValue)]
        ]),
        _ctx.$slots.default || !__props.plain ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: unref(computedId),
          class: normalizeClass([unref(labelClasses), { active: unref(isChecked), focus: isFocused.value }])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2$a)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _hoisted_1$i = ["id"];
const _hoisted_2$9 = ["innerHTML"];
const _hoisted_3$4 = ["textContent"];
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "BFormRadioGroup",
  props: {
    size: null,
    form: null,
    id: null,
    name: null,
    modelValue: { type: [String, Boolean, Array, Object, Number], default: "" },
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autofocus: { type: Boolean, default: false },
    buttonVariant: { default: "secondary" },
    buttons: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    plain: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false },
    state: { type: Boolean, default: void 0 },
    textField: { default: "text" },
    validated: { type: Boolean, default: false },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const slotsName = "BFormRadio";
    const computedId = useId(props.id, "radio");
    const computedName = useId(props.name, "checkbox");
    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        emit("input", newValue);
        emit("update:modelValue", newValue);
        emit("change", newValue);
      }
    });
    const checkboxList = computed(() => (slots.first ? slotsToElements(slots.first(), slotsName, props.disabled) : []).concat(props.options.map((e) => optionToElement(e, props))).concat(slots.default ? slotsToElements(slots.default(), slotsName, props.disabled) : []).map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId)).map((e) => ({
      ...e
    })));
    const attrs = getGroupAttr(props);
    const classes = getGroupClasses(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(attrs), {
        id: unref(computedId),
        role: "radiogroup",
        class: [unref(classes), "bv-no-focus-ring"],
        tabindex: "-1"
      }), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(checkboxList), (item, key) => {
          return openBlock(), createBlock(_sfc_main$H, mergeProps({
            key,
            modelValue: unref(localValue),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null)
          }, item.props), {
            default: withCtx(() => [
              item.html ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: item.html
              }, null, 8, _hoisted_2$9)) : (openBlock(), createElementBlock("span", {
                key: 1,
                textContent: toDisplayString(item.text)
              }, null, 8, _hoisted_3$4))
            ]),
            _: 2
          }, 1040, ["modelValue"]);
        }), 128))
      ], 16, _hoisted_1$i);
    };
  }
});
const _hoisted_1$h = ["value", "disabled"];
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("option", {
        value: (_a = __props.value) != null ? _a : "",
        disabled: __props.disabled
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$h);
    };
  }
});
const _getNested = (obj, path) => {
  if (!obj)
    return obj;
  if (path in obj)
    return obj[path];
  const paths = path.split(".");
  return _getNested(obj[paths[0]], paths.splice(1).join("."));
};
const _normalizeOption = (option, key = null, componentName, props) => {
  if (Object.prototype.toString.call(option) === "[object Object]") {
    const value = _getNested(option, props.valueField);
    const text = _getNested(option, props.textField);
    const html = _getNested(option, props.htmlField);
    const disabled = _getNested(option, props.disabledField);
    const options = option[props.optionsField] || null;
    if (options !== null) {
      return {
        label: String(_getNested(option, props.labelField) || text),
        options: normalizeOptions(options, componentName, props)
      };
    }
    return {
      value: typeof value === "undefined" ? key || text : value,
      text: String(typeof text === "undefined" ? key : text),
      html,
      disabled: Boolean(disabled)
    };
  }
  return {
    value: key || option,
    text: String(option),
    disabled: false
  };
};
const normalizeOptions = (options, componentName, props) => {
  if (Array.isArray(options)) {
    return options.map((option) => _normalizeOption(option, null, componentName, props));
  } else if (Object.prototype.toString.call(options) === "[object Object]") {
    console.warn(`[BootstrapVue warn]: ${componentName} - Setting prop "options" to an object is deprecated. Use the array format instead.`);
    return Object.keys(options).map((key) => {
      const el = options[key];
      switch (typeof el) {
        case "object":
          return _normalizeOption(el.text, String(el.value), componentName, props);
        default:
          return _normalizeOption(el, String(key), componentName, props);
      }
    });
  }
  return [];
};
const _hoisted_1$g = ["label"];
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "BFormSelectOptionGroup",
  props: {
    label: null,
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(__props) {
    const props = __props;
    const formOptions = computed(() => normalizeOptions(props.options, "BFormSelectOptionGroup", props));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("optgroup", { label: __props.label }, [
        renderSlot(_ctx.$slots, "first"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formOptions), (option, index) => {
          return openBlock(), createBlock(_sfc_main$F, mergeProps({
            key: `option_${index}`,
            value: option.value,
            disabled: option.disabled
          }, _ctx.$attrs, {
            innerHTML: option.html || option.text
          }), null, 16, ["value", "disabled", "innerHTML"]);
        }), 128)),
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$g);
    };
  }
});
const _hoisted_1$f = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"];
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { type: [Boolean, String], default: false },
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledField: { default: "disabled" },
    form: null,
    htmlField: { default: "html" },
    id: null,
    labelField: { default: "label" },
    multiple: { type: Boolean, default: false },
    name: null,
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    selectSize: { default: 0 },
    size: null,
    state: { type: Boolean, default: void 0 },
    textField: { default: "text" },
    valueField: { default: "value" },
    modelValue: { default: "" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const input = ref();
    const computedId = useId(props.id, "input");
    const handleAutofocus = () => {
      nextTick(() => {
        var _a;
        if (props.autofocus)
          (_a = input.value) == null ? void 0 : _a.focus();
      });
    };
    onMounted(handleAutofocus);
    onActivated(handleAutofocus);
    const classes = computed(() => ({
      "form-control": props.plain,
      [`form-control-${props.size}`]: props.size && props.plain,
      "form-select": !props.plain,
      [`form-select-${props.size}`]: props.size && !props.plain,
      "is-valid": props.state === true,
      "is-invalid": props.state === false
    }));
    const computedSelectSize = computed(() => {
      if (props.selectSize || props.plain) {
        return props.selectSize;
      }
      return void 0;
    });
    const computedAriaInvalid = computed(() => {
      if (typeof props.state === "boolean") {
        if (!props.state) {
          return true;
        }
        return void 0;
      }
      if (typeof props.ariaInvalid === "boolean") {
        if (!props.ariaInvalid) {
          return void 0;
        }
        return props.ariaInvalid;
      }
      return props.ariaInvalid;
    });
    const formOptions = computed(() => normalizeOptions(props.options, "BFormSelect", props));
    const localValue = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        emit("change", newValue);
        emit("update:modelValue", newValue);
        emit("input", newValue);
      }
    });
    const focus2 = () => {
      var _a;
      if (!props.disabled)
        (_a = input.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      if (!props.disabled) {
        (_a = input.value) == null ? void 0 : _a.blur();
      }
    };
    expose({
      blur,
      focus: focus2
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("select", mergeProps({
        id: unref(computedId),
        ref_key: "input",
        ref: input
      }, _ctx.$attrs, {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null),
        class: unref(classes),
        name: __props.name,
        form: __props.form || void 0,
        multiple: __props.multiple || void 0,
        size: unref(computedSelectSize),
        disabled: __props.disabled,
        required: __props.required,
        "aria-required": __props.required ? true : void 0,
        "aria-invalid": unref(computedAriaInvalid)
      }), [
        renderSlot(_ctx.$slots, "first"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formOptions), (option, index) => {
          return openBlock(), createElementBlock(Fragment, null, [
            Array.isArray(option.options) ? (openBlock(), createBlock(_sfc_main$E, {
              key: `option_${index}`,
              label: option.label,
              options: option.options
            }, null, 8, ["label", "options"])) : (openBlock(), createBlock(_sfc_main$F, {
              key: `option2_${index}`,
              value: option.value,
              disabled: option.disabled,
              innerHTML: option.html || option.text
            }, null, 8, ["value", "disabled", "innerHTML"]))
          ], 64);
        }), 256)),
        renderSlot(_ctx.$slots, "default")
      ], 16, _hoisted_1$f)), [
        [vModelSelect, unref(localValue)]
      ]);
    };
  }
});
const _hoisted_1$e = ["id"];
const _hoisted_2$8 = ["aria-label", "aria-controls", "aria-describedby"];
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "BFormTag",
  props: {
    id: null,
    title: null,
    disabled: { type: Boolean, default: false },
    noRemove: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const tagText = computed(() => {
      var _a, _b, _c;
      return (_c = ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children) == null ? void 0 : _b.toString()) || props.title) != null ? _c : "";
    });
    const computedId = useId(props.id);
    const taglabelId = computed(() => `${computedId.value}taglabel__`);
    const classes = computed(() => [
      `bg-${props.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(props.variant),
        "rounded-pill": props.pill,
        "disabled": props.disabled
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: unref(computedId),
        title: unref(tagText),
        class: normalizeClass(["badge b-form-tag d-inline-flex align-items-center mw-100", unref(classes)]),
        "aria-labelledby": unref(taglabelId)
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            id: unref(taglabelId),
            class: "b-form-tag-content flex-grow-1 text-truncate"
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(unref(tagText)), 1)
            ])
          ], 8, _hoisted_1$e),
          !__props.disabled && !__props.noRemove ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-keyshortcuts": "Delete",
            type: "button",
            "aria-label": __props.removeLabel,
            class: normalizeClass(["btn-close b-form-tag-remove", {
              "btn-close-white": !["warning", "info", "light"].includes(__props.variant)
            }]),
            "aria-controls": __props.id,
            "aria-describedby": unref(taglabelId),
            onClick: _cache[0] || (_cache[0] = ($event) => emit("remove", unref(tagText)))
          }, null, 10, _hoisted_2$8)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["id", "title", "class", "aria-labelledby"]);
    };
  }
});
const _hoisted_1$d = ["id"];
const _hoisted_2$7 = ["id", "for", "aria-live"];
const _hoisted_3$3 = ["id", "aria-live"];
const _hoisted_4$3 = ["id"];
const _hoisted_5$3 = ["aria-controls"];
const _hoisted_6$2 = {
  role: "group",
  class: "d-flex"
};
const _hoisted_7$1 = ["id", "disabled", "value", "type", "placeholder", "form", "required"];
const _hoisted_8$1 = ["disabled"];
const _hoisted_9$1 = {
  "aria-live": "polite",
  "aria-atomic": "true"
};
const _hoisted_10$1 = {
  key: 0,
  class: "d-block invalid-feedback"
};
const _hoisted_11$1 = {
  key: 1,
  class: "form-text text-muted"
};
const _hoisted_12$1 = {
  key: 2,
  class: "form-text text-muted"
};
const _hoisted_13 = ["name", "value"];
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    duplicateTagText: { default: "Duplicate tag(s)" },
    inputAttrs: null,
    inputClass: null,
    inputId: null,
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    form: null,
    limit: null,
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: null,
    noAddOnEnter: { type: Boolean, default: false },
    noOuterFocus: { type: Boolean, default: false },
    noTagRemove: { type: Boolean, default: false },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    separator: null,
    state: { type: Boolean, default: void 0 },
    size: null,
    tagClass: null,
    tagPills: { type: Boolean, default: false },
    tagRemoveLabel: null,
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => true },
    tagVariant: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "tag-state", "focus", "focusin", "focusout", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const input = ref(null);
    const computedId = useId();
    const _inputId = computed(() => props.inputId || `${computedId.value}input__`);
    onMounted(() => {
      checkAutofocus();
      if (props.modelValue.length > 0) {
        shouldRemoveOnDelete.value = true;
      }
    });
    onActivated(() => checkAutofocus());
    watch(() => props.modelValue, (newVal) => {
      tags.value = newVal;
    });
    const tags = ref(props.modelValue);
    const inputValue = ref("");
    const shouldRemoveOnDelete = ref(false);
    const focus2 = ref(false);
    const lastRemovedTag = ref("");
    const validTags = ref([]);
    const invalidTags = ref([]);
    const duplicateTags = ref([]);
    const classes = computed(() => ({
      [`form-control-${props.size}`]: props.size,
      "disabled": props.disabled,
      "focus": focus2.value,
      "is-invalid": props.state === false,
      "is-valid": props.state === true
    }));
    const isDuplicate = computed(() => tags.value.includes(inputValue.value));
    const isInvalid = computed(() => inputValue.value === "" ? false : !props.tagValidator(inputValue.value));
    const isLimitReached = computed(() => tags.value.length === props.limit);
    const disableAddButton = computed(() => !isInvalid.value && !isDuplicate.value);
    const checkAutofocus = () => {
      var _a;
      if (props.autofocus) {
        (_a = input.value) == null ? void 0 : _a.focus();
      }
    };
    const onFocusin = (e) => {
      if (props.disabled) {
        const target = e.target;
        target.blur();
        return;
      }
      emit("focusin", e);
    };
    const onFocus = (e) => {
      if (props.disabled || props.noOuterFocus) {
        return;
      }
      focus2.value = true;
      emit("focus", e);
    };
    const onBlur = (e) => {
      focus2.value = false;
      emit("blur", e);
    };
    const onInput = (e) => {
      var _a, _b;
      const value = typeof e === "string" ? e : e.target.value;
      shouldRemoveOnDelete.value = false;
      if (((_a = props.separator) == null ? void 0 : _a.includes(value.charAt(0))) && value.length > 0) {
        if (input.value) {
          input.value.value = "";
        }
        return;
      }
      inputValue.value = value;
      if ((_b = props.separator) == null ? void 0 : _b.includes(value.charAt(value.length - 1))) {
        addTag(value.slice(0, value.length - 1));
        return;
      }
      validTags.value = props.tagValidator(value) && !isDuplicate.value ? [value] : [];
      invalidTags.value = props.tagValidator(value) ? [] : [value];
      duplicateTags.value = isDuplicate.value ? [value] : [];
      emit("tag-state", validTags.value, invalidTags.value, duplicateTags.value);
    };
    const onChange = (e) => {
      if (props.addOnChange) {
        onInput(e);
        if (!isDuplicate.value) {
          addTag(inputValue.value);
        }
      }
    };
    const onKeydown = (e) => {
      if (e.key === "Enter" && !props.noAddOnEnter) {
        addTag(inputValue.value);
        return;
      }
      if ((e.key === "Backspace" || e.key === "Delete") && props.removeOnDelete && inputValue.value === "" && shouldRemoveOnDelete.value && tags.value.length > 0) {
        removeTag(tags.value[tags.value.length - 1]);
      } else {
        shouldRemoveOnDelete.value = true;
      }
    };
    const addTag = (tag) => {
      var _a;
      tag = (tag || inputValue.value).trim();
      if (tag === "" || isDuplicate.value || !props.tagValidator(tag) || props.limit && isLimitReached.value) {
        return;
      }
      const newValue = [...props.modelValue, tag];
      inputValue.value = "";
      shouldRemoveOnDelete.value = true;
      emit("update:modelValue", newValue);
      emit("input", newValue);
      (_a = input.value) == null ? void 0 : _a.focus();
    };
    const removeTag = (tag) => {
      var _a;
      const tagIndex = tags.value.indexOf((_a = tag == null ? void 0 : tag.toString()) != null ? _a : "");
      lastRemovedTag.value = tags.value.splice(tagIndex, 1).toString();
      emit("update:modelValue", tags.value);
    };
    const slotAttrs = computed(() => {
      const {
        addButtonText,
        addButtonVariant,
        disabled,
        duplicateTagText,
        inputAttrs,
        form,
        inputType,
        invalidTagText,
        limitTagsText,
        limit,
        noTagRemove,
        placeholder,
        required,
        separator,
        size,
        state,
        tagClass,
        tagPills,
        tagRemoveLabel,
        tagVariant
      } = props;
      return {
        addButtonText,
        addButtonVariant,
        addTag,
        disableAddButton,
        disabled,
        duplicateTagText,
        duplicateTags,
        form,
        inputAttrs: {
          ...inputAttrs,
          disabled,
          form,
          id: _inputId,
          value: inputValue
        },
        inputHandlers: {
          input: onInput,
          keydown: onKeydown,
          change: onChange
        },
        inputId: _inputId,
        inputType,
        invalidTagText,
        invalidTags,
        isDuplicate,
        isInvalid,
        isLimitReached,
        limitTagsText,
        limit,
        noTagRemove,
        placeholder,
        removeTag,
        required,
        separator,
        size,
        state,
        tagClass,
        tagPills,
        tagRemoveLabel,
        tagVariant,
        tags
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(computedId),
        class: normalizeClass(["b-form-tags form-control h-auto", unref(classes)]),
        role: "group",
        tabindex: "-1",
        onFocusin,
        onFocusout: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("focusout", $event))
      }, [
        createElementVNode("output", {
          id: `${unref(computedId)}selected_tags__`,
          class: "visually-hidden",
          role: "status",
          for: unref(_inputId),
          "aria-live": focus2.value ? "polite" : "off",
          "aria-atomic": "true",
          "aria-relevant": "additions text"
        }, toDisplayString(tags.value.join(", ")), 9, _hoisted_2$7),
        createElementVNode("div", {
          id: `${unref(computedId)}removed_tags__`,
          role: "status",
          "aria-live": focus2.value ? "assertive" : "off",
          "aria-atomic": "true",
          class: "visually-hidden"
        }, " (" + toDisplayString(__props.tagRemovedLabel) + ") " + toDisplayString(lastRemovedTag.value), 9, _hoisted_3$3),
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(slotAttrs))), () => [
          createElementVNode("ul", {
            id: `${unref(computedId)}tag_list__`,
            class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
              return openBlock(), createBlock(_sfc_main$C, {
                key: tag,
                class: normalizeClass(__props.tagClass),
                tag: "li",
                variant: __props.tagVariant,
                pill: __props.tagPills,
                onRemove: removeTag
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(tag), 1)
                ]),
                _: 2
              }, 1032, ["class", "variant", "pill"]);
            }), 128)),
            createElementVNode("li", {
              role: "none",
              "aria-live": "off",
              class: "b-from-tags-field flex-grow-1",
              "aria-controls": `${unref(computedId)}tag_list__`
            }, [
              createElementVNode("div", _hoisted_6$2, [
                createElementVNode("input", mergeProps({
                  id: unref(_inputId),
                  ref_key: "input",
                  ref: input,
                  disabled: __props.disabled,
                  value: inputValue.value,
                  type: __props.inputType,
                  placeholder: __props.placeholder,
                  class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                  style: { "outline": "currentcolor none 0px", "min-width": "5rem" }
                }, __props.inputAttrs, {
                  form: __props.form,
                  required: __props.required,
                  onInput,
                  onChange,
                  onKeydown,
                  onFocus,
                  onBlur
                }), null, 16, _hoisted_7$1),
                unref(disableAddButton) ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: normalizeClass(["btn b-form-tags-button py-0", [
                    `btn-${__props.addButtonVariant}`,
                    {
                      "disabled invisible": inputValue.value.length === 0
                    },
                    __props.inputClass
                  ]]),
                  style: { "font-size": "90%" },
                  disabled: __props.disabled || inputValue.value.length === 0 || unref(isLimitReached),
                  onClick: _cache[0] || (_cache[0] = ($event) => addTag(inputValue.value))
                }, [
                  renderSlot(_ctx.$slots, "add-button-text", {}, () => [
                    createTextVNode(toDisplayString(__props.addButtonText), 1)
                  ])
                ], 10, _hoisted_8$1)) : createCommentVNode("", true)
              ])
            ], 8, _hoisted_5$3)
          ], 8, _hoisted_4$3),
          createElementVNode("div", _hoisted_9$1, [
            unref(isInvalid) ? (openBlock(), createElementBlock("div", _hoisted_10$1, toDisplayString(__props.invalidTagText) + ": " + toDisplayString(inputValue.value), 1)) : createCommentVNode("", true),
            unref(isDuplicate) ? (openBlock(), createElementBlock("small", _hoisted_11$1, toDisplayString(__props.duplicateTagText) + ": " + toDisplayString(inputValue.value), 1)) : createCommentVNode("", true),
            tags.value.length === __props.limit ? (openBlock(), createElementBlock("small", _hoisted_12$1, "Tag limit reached")) : createCommentVNode("", true)
          ])
        ]),
        __props.name ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(tags.value, (tag) => {
          return openBlock(), createElementBlock("input", {
            key: tag,
            type: "hidden",
            name: __props.name,
            value: tag
          }, null, 8, _hoisted_13);
        }), 128)) : createCommentVNode("", true)
      ], 42, _hoisted_1$d);
    };
  }
});
const _sfc_main$A = defineComponent({
  name: "BFormTextarea",
  props: {
    ...COMMON_INPUT_PROPS,
    noResize: { type: Boolean, default: false },
    rows: { type: [String, Number], required: false, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(props, { emit }) {
    const classes = computed(() => ({
      "form-control": !props.plaintext,
      "form-control-plaintext": props.plaintext,
      [`form-control-${props.size}`]: props.size,
      "is-valid": props.state === true,
      "is-invalid": props.state === false
    }));
    const computedStyles = computed(() => props.noResize ? { resize: "none" } : void 0);
    const { input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus: focus2, blur } = useFormInput(props, emit);
    return {
      input,
      computedId,
      computedAriaInvalid,
      onInput,
      onChange,
      onBlur,
      focus: focus2,
      blur,
      classes,
      computedStyles
    };
  }
});
const _hoisted_1$c = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    id: _ctx.computedId,
    ref: "input",
    class: _ctx.classes,
    name: _ctx.name || void 0,
    form: _ctx.form || void 0,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    required: _ctx.required,
    autocomplete: _ctx.autocomplete || void 0,
    readonly: _ctx.readonly || _ctx.plaintext,
    "aria-required": _ctx.required ? "true" : void 0,
    "aria-invalid": _ctx.computedAriaInvalid,
    rows: _ctx.rows,
    style: _ctx.computedStyles,
    wrap: _ctx.wrap || void 0
  }, _ctx.$attrs, {
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.onInput($event)),
    onChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event)),
    onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.onBlur($event))
  }), null, 16, _hoisted_1$c);
}
var BFormTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$1]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "BImg",
  props: {
    alt: { default: void 0 },
    blank: { type: Boolean, default: false },
    blankColor: { default: "transparent" },
    block: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    fluidGrow: { type: Boolean, default: false },
    height: null,
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    rounded: { type: [Boolean, String], default: false },
    sizes: null,
    src: null,
    srcset: null,
    thumbnail: { type: Boolean, default: false },
    width: null
  },
  setup(__props) {
    const props = __props;
    const BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>';
    const makeBlankImgSrc = (width, height, color) => {
      const src = encodeURIComponent(BLANK_TEMPLATE.replace("%{w}", String(width)).replace("%{h}", String(height)).replace("%{f}", color));
      return `data:image/svg+xml;charset=UTF-8,${src}`;
    };
    const attrs = computed(() => {
      let src = props.src;
      let width = (typeof props.width === "number" ? props.width : parseInt(props.width, 10)) || void 0;
      let height = (typeof props.height === "number" ? props.height : parseInt(props.height, 10)) || void 0;
      let srcset = "";
      if (typeof props.srcset === "string")
        srcset = props.srcset.split(",").filter((x) => x).join(",");
      else if (Array.isArray(props.srcset))
        srcset = props.srcset.filter((x) => x).join(",");
      let sizes = "";
      if (typeof props.sizes === "string")
        sizes = props.sizes.split(",").filter((x) => x).join(",");
      else if (Array.isArray(props.sizes))
        sizes = props.sizes.filter((x) => x).join(",");
      if (props.blank) {
        if (!height && width) {
          height = width;
        } else if (!width && height) {
          width = height;
        }
        if (!width && !height) {
          width = 1;
          height = 1;
        }
        src = makeBlankImgSrc(width, height, props.blankColor || "transparent");
        srcset = "";
        sizes = "";
      }
      return {
        src,
        alt: props.alt,
        width: width || void 0,
        height: height || void 0,
        srcset: srcset || void 0,
        sizes: sizes || void 0
      };
    });
    const classes = computed(() => {
      let align = "";
      let block = props.block;
      if (props.left) {
        align = "float-start";
      } else if (props.right) {
        align = "float-end";
      } else if (props.center) {
        align = "mx-auto";
        block = true;
      }
      return {
        "img-thumbnail": props.thumbnail,
        "img-fluid": props.fluid || props.fluidGrow,
        "w-100": props.fluidGrow,
        "rounded": props.rounded === "" || props.rounded === true,
        [`rounded-${props.rounded}`]: typeof props.rounded === "string" && props.rounded !== "",
        [align]: !!align,
        "d-block": block
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", mergeProps({ class: unref(classes) }, unref(attrs)), null, 16);
    };
  }
});
const _hoisted_1$b = {
  key: 0,
  class: "input-group-text"
};
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = {
  key: 0,
  class: "input-group-text"
};
const _hoisted_5$2 = { key: 0 };
const _hoisted_6$1 = ["innerHTML"];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "BInputGroup",
  props: {
    append: null,
    appendHtml: null,
    id: null,
    prepend: null,
    prependHtml: null,
    size: null,
    tag: { default: "div" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "input-group-sm": props.size === "sm",
      "input-group-lg": props.size === "lg"
    }));
    const hasAppend = computed(() => !!props.append || !!props.appendHtml);
    const hasPrepend = computed(() => !!props.prepend || !!props.prependHtml);
    const showAppendHtml = computed(() => !!props.appendHtml);
    const showPrependHtml = computed(() => !!props.prependHtml);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: __props.id,
        class: normalizeClass(["input-group", unref(classes)]),
        role: "group"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "prepend", {}, () => [
            unref(hasPrepend) ? (openBlock(), createElementBlock("span", _hoisted_1$b, [
              !unref(showPrependHtml) ? (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(__props.prepend), 1)) : createCommentVNode("", true),
              unref(showPrependHtml) ? (openBlock(), createElementBlock("span", {
                key: 1,
                innerHTML: __props.prependHtml
              }, null, 8, _hoisted_3$2)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "append", {}, () => [
            unref(hasAppend) ? (openBlock(), createElementBlock("span", _hoisted_4$2, [
              !unref(showAppendHtml) ? (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString(__props.append), 1)) : createCommentVNode("", true),
              unref(showAppendHtml) ? (openBlock(), createElementBlock("span", {
                key: 1,
                innerHTML: __props.appendHtml
              }, null, 8, _hoisted_6$1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["id", "class"]);
    };
  }
});
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), { class: "input-group-text" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "BInputGroupAddon",
  props: {
    append: { type: Boolean, default: false },
    id: null,
    isText: { type: Boolean },
    tag: { default: "div" }
  },
  setup(__props) {
    const props = __props;
    const computedClasses = computed(() => ({
      "input-group-append": props.append,
      "input-group-prepend": !props.append
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: __props.id,
        class: normalizeClass(["d-flex", unref(computedClasses)])
      }, {
        default: withCtx(() => [
          __props.isText ? (openBlock(), createBlock(_sfc_main$x, { key: 0 }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })) : createCommentVNode("", true),
          !__props.isText ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["id", "class"]);
    };
  }
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "BInputGroupAppend",
  props: {
    id: null,
    isText: { type: Boolean },
    tag: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$w, {
        id: __props.id,
        "is-text": __props.isText,
        tag: __props.tag,
        append: ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "is-text", "tag"]);
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "BInputGroupPrepend",
  props: {
    id: null,
    isText: { type: Boolean },
    tag: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$w, {
        id: __props.id,
        "is-text": __props.isText,
        tag: __props.tag,
        append: false
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "is-text", "tag"]);
    };
  }
});
const injectionKey$2 = Symbol();
const _sfc_main$t = defineComponent({
  __name: "BListGroup",
  props: {
    flush: { type: Boolean, default: false },
    horizontal: { type: [Boolean, null], default: false },
    numbered: { type: Boolean, default: false },
    tag: { default: "div" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      const horizontal = props.flush ? false : props.horizontal;
      return {
        "list-group-flush": props.flush,
        "list-group-horizontal": horizontal === true,
        [`list-group-horizontal-${horizontal}`]: typeof horizontal === "string",
        "list-group-numbered": props.numbered
      };
    });
    const computedTag = computed(() => props.numbered === true ? "ol" : props.tag);
    provide(injectionKey$2, {
      numbered: props.numbered
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(computedTag)), {
        class: normalizeClass(["list-group", unref(classes)])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "BListGroupItem",
  props: {
    action: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    href: null,
    tag: { default: "div" },
    target: { default: "_self" },
    to: null,
    variant: null
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const parentData = inject(injectionKey$2, null);
    const link = computed(() => !props.button && (!!props.href || !!props.to));
    const tagComputed = computed(() => (parentData == null ? void 0 : parentData.numbered) ? "li" : props.button ? "button" : !link.value ? props.tag : BLink);
    const classes = computed(() => {
      const action = props.action || link.value || props.button || ["a", "router-link", "button", "b-link"].includes(props.tag);
      return {
        [`list-group-item-${props.variant}`]: props.variant,
        "list-group-item-action": action,
        "active": props.active,
        "disabled": props.disabled
      };
    });
    const computedAttrs = computed(() => {
      const localAttrs = {};
      if (props.button) {
        if (!attrs || !attrs.type) {
          localAttrs.type = "button";
        }
        if (props.disabled) {
          localAttrs.disabled = true;
        }
      }
      return localAttrs;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(tagComputed)), mergeProps({
        class: ["list-group-item", unref(classes)],
        "aria-current": __props.active ? true : null,
        "aria-disabled": __props.disabled ? true : null,
        target: unref(link) ? __props.target : null,
        href: !__props.button ? __props.href : null,
        to: !__props.button ? __props.to : null
      }, unref(computedAttrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]);
    };
  }
});
const _hoisted_1$a = ["id"];
const _hoisted_2$5 = ["aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "BModal",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTextVariant: null,
    busy: { type: Boolean, default: false },
    buttonSize: { default: "md" },
    cancelDisabled: { type: Boolean, default: false },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { type: Boolean, default: false },
    contentClass: null,
    dialogClass: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerTextVariant: null,
    fullscreen: { type: [Boolean, String], default: false },
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerCloseLabel: { default: "Close" },
    headerCloseWhite: { type: Boolean, default: false },
    headerTextVariant: null,
    hideBackdrop: { type: Boolean, default: false },
    hideFooter: { type: Boolean, default: false },
    hideHeader: { type: Boolean, default: false },
    hideHeaderClose: { type: Boolean, default: false },
    id: null,
    modalClass: null,
    modelValue: { type: Boolean, default: false },
    noCloseOnBackdrop: { type: Boolean, default: false },
    noCloseOnEsc: { type: Boolean, default: false },
    noFade: { type: Boolean, default: false },
    noFocus: { type: Boolean, default: false },
    okDisabled: { type: Boolean, default: false },
    okOnly: { type: Boolean, default: false },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { type: Boolean, default: false },
    show: { type: Boolean, default: false },
    size: null,
    title: null,
    titleClass: null,
    titleSrOnly: { type: Boolean, default: false },
    titleTag: { default: "h5" }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "ok", "cancel"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const element = ref();
    const instance = ref();
    const modalClasses = computed(() => [
      {
        fade: !props.noFade,
        show: props.show
      },
      props.modalClass
    ]);
    const modalDialogClasses = computed(() => [
      {
        "modal-fullscreen": typeof props.fullscreen === "boolean" ? props.fullscreen : false,
        [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === "string" ? props.fullscreen : false,
        [`modal-${props.size}`]: props.size,
        "modal-dialog-centered": props.centered,
        "modal-dialog-scrollable": props.scrollable
      },
      props.dialogClass
    ]);
    const computedBodyClasses = computed(() => [
      {
        [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
        [`text-${props.bodyTextVariant}`]: props.bodyTextVariant
      },
      props.bodyClass
    ]);
    const computedHeaderClasses = computed(() => [
      {
        [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
        [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
        [`text-${props.headerTextVariant}`]: props.headerTextVariant
      },
      props.headerClass
    ]);
    const computedFooterClasses = computed(() => [
      {
        [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
        [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
        [`text-${props.footerTextVariant}`]: props.footerTextVariant
      },
      props.footerClass
    ]);
    const computedTitleClasses = computed(() => [
      {
        ["visually-hidden"]: props.titleSrOnly
      },
      props.titleClass
    ]);
    const hasHeaderCloseSlot = computed(() => !!slots["header-close"]);
    const computedCloseButtonClasses = computed(() => [
      {
        [`btn-close-content`]: hasHeaderCloseSlot.value,
        [`d-flex`]: hasHeaderCloseSlot.value,
        [`btn-close-white`]: !hasHeaderCloseSlot.value && props.headerCloseWhite
      }
    ]);
    const disableCancel = computed(() => props.cancelDisabled || props.busy);
    const disableOk = computed(() => props.okDisabled || props.busy);
    useEventListener(element, "shown.bs.modal", (e) => emit("shown", e));
    useEventListener(element, "hidden.bs.modal", (e) => emit("hidden", e));
    useEventListener(element, "hidePrevented.bs.modal", (e) => emit("hide-prevented", e));
    useEventListener(element, "show.bs.modal", (e) => {
      emit("show", e);
      if (!e.defaultPrevented) {
        emit("update:modelValue", true);
      }
    });
    useEventListener(element, "hide.bs.modal", (e) => {
      emit("hide", e);
      if (!e.defaultPrevented) {
        emit("update:modelValue", false);
      }
    });
    onMounted(() => {
      var _a;
      instance.value = new Modal(element.value, {
        backdrop: props.hideBackdrop ? false : props.noCloseOnBackdrop ? "static" : !props.hideBackdrop,
        keyboard: !props.noCloseOnEsc,
        focus: !props.noFocus
      });
      if (props.modelValue) {
        (_a = instance.value) == null ? void 0 : _a.show();
      }
    });
    watch(() => props.modelValue, (value) => {
      var _a, _b;
      if (value) {
        (_a = instance.value) == null ? void 0 : _a.show();
      } else {
        (_b = instance.value) == null ? void 0 : _b.hide();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createElementVNode("div", mergeProps({
          id: __props.id,
          ref_key: "element",
          ref: element,
          class: ["modal", unref(modalClasses)],
          tabindex: "-1"
        }, _ctx.$attrs), [
          createElementVNode("div", {
            class: normalizeClass(["modal-dialog", unref(modalDialogClasses)])
          }, [
            createElementVNode("div", {
              class: normalizeClass(["modal-content", __props.contentClass])
            }, [
              !__props.hideHeader ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["modal-header", unref(computedHeaderClasses)])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(__props.titleTag), {
                  class: normalizeClass(["modal-title", unref(computedTitleClasses)])
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])),
                !__props.hideHeaderClose ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: normalizeClass(["btn-close", unref(computedCloseButtonClasses)]),
                  "data-bs-dismiss": "modal",
                  "aria-label": __props.headerCloseLabel
                }, [
                  renderSlot(_ctx.$slots, "header-close")
                ], 10, _hoisted_2$5)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              createElementVNode("div", {
                class: normalizeClass(["modal-body", unref(computedBodyClasses)])
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              !__props.hideFooter ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["modal-footer", unref(computedFooterClasses)])
              }, [
                renderSlot(_ctx.$slots, "footer", {}, () => [
                  !__props.okOnly ? (openBlock(), createBlock(BButton, {
                    key: 0,
                    type: "button",
                    class: "btn",
                    "data-bs-dismiss": "modal",
                    disabled: unref(disableCancel),
                    size: __props.buttonSize,
                    variant: __props.cancelVariant,
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("cancel"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.cancelTitle), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "size", "variant"])) : createCommentVNode("", true),
                  createVNode(BButton, {
                    type: "button",
                    class: "btn",
                    "data-bs-dismiss": "modal",
                    disabled: unref(disableOk),
                    size: __props.buttonSize,
                    variant: __props.okVariant,
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("ok"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.okTitle), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "size", "variant"])
                ])
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ], 16, _hoisted_1$a)
      ]);
    };
  }
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "BNav",
  props: {
    align: null,
    fill: { type: Boolean, default: false },
    justified: { type: Boolean, default: false },
    pills: { type: Boolean, default: false },
    tabs: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "flex-column": props.vertical,
      [`justify-content-${props.align}`]: props.align,
      "nav-tabs": props.tabs,
      "nav-pills": props.pills,
      "nav-fill": props.fill,
      "nav-justified": props.justified
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["nav", unref(classes)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$9 = ["href", "tabindex", "aria-disabled"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "BNavItem",
  props: {
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    href: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      active: props.active,
      disabled: props.disabled
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["nav-item", unref(classes)])
      }, [
        createElementVNode("a", {
          href: __props.href,
          class: "nav-link",
          tabindex: __props.disabled ? -1 : void 0,
          "aria-disabled": __props.disabled ? true : void 0
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_1$9)
      ], 2);
    };
  }
});
const _hoisted_1$8 = { class: "nav-item dropdown" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "BNavItemDropdown",
  props: {
    id: null,
    text: null,
    size: null,
    offset: null,
    autoClose: { type: [Boolean, String], default: true },
    dark: { type: Boolean, default: false },
    dropleft: { type: Boolean, default: false },
    dropright: { type: Boolean, default: false },
    dropup: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    left: { type: [Boolean, String], default: false },
    offsetParent: { type: Boolean, default: false },
    split: { type: Boolean, default: false },
    splitVariant: null,
    noCaret: { type: Boolean, default: false },
    variant: { default: "link" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$8, [
        createVNode(_sfc_main$Z, normalizeProps(guardReactiveProps(_ctx.$props)), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_, slot) => {
            return {
              name: slot,
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope || {})))
              ])
            };
          })
        ]), 1040)
      ]);
    };
  }
});
const _hoisted_1$7 = ["data-bs-backdrop", "data-bs-scroll"];
const _hoisted_2$4 = { class: "offcanvas-header" };
const _hoisted_3$1 = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
};
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("button", {
  type: "button",
  class: "btn-close text-reset",
  "data-bs-dismiss": "offcanvas",
  "aria-label": "Close"
}, null, -1);
const _hoisted_5$1 = { class: "offcanvas-body" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "BOffcanvas",
  props: {
    modelValue: { type: Boolean, default: false },
    bodyScrolling: { type: Boolean, default: false },
    backdrop: { type: Boolean, default: true },
    placement: { default: "start" },
    title: null
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(__props, { emit }) {
    const props = __props;
    const element = ref();
    const instance = ref();
    useEventListener(element, "shown.bs.offcanvas", () => emit("shown"));
    useEventListener(element, "hidden.bs.offcanvas", () => emit("hidden"));
    useEventListener(element, "show.bs.offcanvas", () => {
      emit("show");
      emit("update:modelValue", true);
    });
    useEventListener(element, "hide.bs.offcanvas", () => {
      emit("hide");
      emit("update:modelValue", false);
    });
    onMounted(() => {
      var _a;
      instance.value = new Offcanvas(element.value);
      if (props.modelValue) {
        (_a = instance.value) == null ? void 0 : _a.show(element.value);
      }
    });
    const classes = computed(() => ({
      [`offcanvas-${props.placement}`]: props.placement
    }));
    watch(() => props.modelValue, (value) => {
      var _a, _b;
      if (value) {
        (_a = instance.value) == null ? void 0 : _a.show(element.value);
      } else {
        (_b = instance.value) == null ? void 0 : _b.hide();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "element",
        ref: element,
        class: normalizeClass(["offcanvas", unref(classes)]),
        tabindex: "-1",
        "aria-labelledby": "offcanvasLabel",
        "data-bs-backdrop": __props.backdrop,
        "data-bs-scroll": __props.bodyScrolling
      }, [
        createElementVNode("div", _hoisted_2$4, [
          createElementVNode("h5", _hoisted_3$1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ])
          ]),
          _hoisted_4$1
        ]),
        createElementVNode("div", _hoisted_5$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 10, _hoisted_1$7);
    };
  }
});
const NO_FADE_PROPS = {
  name: "",
  enterActiveClass: "",
  enterToClass: "",
  leaveActiveClass: "",
  leaveToClass: "showing",
  enterFromClass: "showing",
  leaveFromClass: ""
};
const FADE_PROPS = {
  ...NO_FADE_PROPS,
  enterActiveClass: "fade showing",
  leaveActiveClass: "fade showing"
};
const _sfc_main$m = defineComponent({
  name: "BTransition",
  props: {
    appear: { type: Boolean, default: false },
    mode: { type: String, required: false },
    noFade: { type: Boolean, default: false },
    transProps: { type: Object, required: false }
  },
  setup(props, { slots }) {
    const transProperties = ref(props.transProps);
    if (!isPlainObject(transProperties.value)) {
      transProperties.value = props.noFade ? NO_FADE_PROPS : FADE_PROPS;
      if (props.appear) {
        transProperties.value = {
          ...transProperties.value,
          appear: true,
          appearClass: transProperties.value.enterClass,
          appearActiveClass: transProperties.value.enterActiveClass,
          appearToClass: transProperties.value.enterToClass
        };
      }
    }
    transProperties.value = {
      mode: props.mode,
      ...transProperties.value,
      css: true
    };
    return () => h(Transition, { ...transProperties.value }, {
      default: () => slots.default ? slots.default() : []
    });
  }
});
const POSITION_COVER = { top: 0, left: 0, bottom: 0, right: 0 };
const SLOT_NAME_DEFAULT = "default";
const SLOT_NAME_OVERLAY = "overlay";
const _sfc_main$l = defineComponent({
  name: "BOverlay",
  components: { BTransition: _sfc_main$m },
  props: {
    bgColor: { type: String, required: false },
    blur: { type: String, default: "2px" },
    fixed: { type: Boolean, default: false },
    noCenter: { type: Boolean, default: false },
    noFade: { type: Boolean, default: false },
    noWrap: { type: Boolean, default: false },
    opacity: {
      type: [Number, String],
      default: 0.85,
      validator: (value) => {
        const number = toFloat(value, 0);
        return number >= 0 && number <= 1;
      }
    },
    overlayTag: { type: String, default: "div" },
    rounded: { type: [Boolean, String], default: false },
    show: { type: Boolean, default: false },
    spinnerSmall: { type: Boolean, default: false },
    spinnerType: { type: String, default: "border" },
    spinnerVariant: { type: String, required: false },
    variant: { type: String, default: "light" },
    wrapTag: { type: String, default: "div" },
    zIndex: { type: [Number, String], default: 10 }
  },
  emits: ["click", "hidden", "shown"],
  setup(props, { slots, emit }) {
    const computedRounded = computed(() => props.rounded === true || props.rounded === "" ? "rounded" : !props.rounded ? "" : `rounded-${props.rounded}`);
    const computedVariant = computed(() => props.variant && !props.bgColor ? `bg-${props.variant}` : "");
    const computedSlotScope = computed(() => ({
      spinnerType: props.spinnerType || null,
      spinnerVariant: props.spinnerVariant || null,
      spinnerSmall: props.spinnerSmall
    }));
    return () => {
      const defaultOverlayFn = (scope) => h(resolveComponent("BSpinner"), {
        type: scope.spinnerType,
        variant: scope.spinnerVariant,
        small: scope.spinnerSmall
      });
      let $overlay = "";
      if (props.show) {
        const $background = h("div", {
          class: ["position-absolute", computedVariant.value, computedRounded.value],
          style: {
            ...POSITION_COVER,
            opacity: props.opacity,
            backgroundColor: props.bgColor || null,
            backdropFilter: props.blur ? `blur(${props.blur})` : null
          }
        });
        const $content = h("div", {
          class: "position-absolute",
          style: props.noCenter ? { ...POSITION_COVER } : { top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }
        }, normalizeSlot(SLOT_NAME_OVERLAY, computedSlotScope.value, slots) || defaultOverlayFn(computedSlotScope.value) || "");
        $overlay = h(props.overlayTag, {
          class: [
            "b-overlay",
            {
              "position-absolute": !props.noWrap || props.noWrap && !props.fixed,
              "position-fixed": props.noWrap && props.fixed
            }
          ],
          style: {
            ...POSITION_COVER,
            zIndex: props.zIndex || 10
          },
          onClick: (event) => emit("click", event),
          key: "overlay"
        }, [$background, $content]);
      }
      const getOverlayTransition = () => h(_sfc_main$m, {
        noFade: props.noFade,
        transProps: { enterToClass: "show" },
        name: "fade",
        onAfterEnter: () => emit("shown"),
        onAfterLeave: () => emit("hidden")
      }, { default: () => $overlay });
      if (props.noWrap)
        return getOverlayTransition();
      const wrapper = h(props.wrapTag, {
        "class": ["b-overlay-wrap position-relative"],
        "aria-busy": props.show ? "true" : null
      }, [h("span", normalizeSlot(SLOT_NAME_DEFAULT, {}, slots)), getOverlayTransition()]);
      return wrapper;
    };
  }
});
function alignment(props) {
  return computed(() => {
    if (props.align === "center") {
      return "justify-content-center";
    } else if (props.align === "end") {
      return "justify-content-end";
    } else if (props.align === "start") {
      return "justify-content-start";
    }
    return "justify-content-start";
  });
}
class BvEvent {
  constructor(eventType, eventInit = {}) {
    this.cancelable = true;
    this.componentId = null;
    this.defaultPrevented = false;
    this.nativeEvent = null;
    this.relatedTarget = null;
    this.target = null;
    this.eventType = "";
    this.vueTarget = null;
    if (!eventType) {
      throw new TypeError(`Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`);
    }
    assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, { eventType });
    defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor()
    });
    let defaultPrevented = false;
    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    };
    defineProperty(this, "defaultPrevented", {
      enumerable: true,
      get() {
        return defaultPrevented;
      }
    });
  }
  static get Defaults() {
    return {
      eventType: "",
      cancelable: true,
      nativeEvent: null,
      target: null,
      relatedTarget: null,
      vueTarget: null,
      componentId: null
    };
  }
}
const DEFAULT_LIMIT = 5;
const DEFAULT_PER_PAGE = 20;
const DEFAULT_TOTAL_ROWS = 0;
const ELLIPSIS_THRESHOLD = 3;
const SLOT_NAME_ELLIPSIS_TEXT = "ellipsis-text";
const SLOT_NAME_FIRST_TEXT = "first-text";
const SLOT_NAME_LAST_TEXT = "last-text";
const SLOT_NAME_NEXT_TEXT = "next-text";
const SLOT_NAME_PAGE = "page";
const SLOT_NAME_PREV_TEXT = "prev-text";
const sanitizePerPage = (value) => Math.max(toInteger(value) || DEFAULT_PER_PAGE, 1);
const sanitizeTotalRows = (value) => Math.max(toInteger(value) || DEFAULT_TOTAL_ROWS, 0);
const sanitizeCurrentPage = (value, numberOfPages) => {
  const page = toInteger(value) || 1;
  return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page;
};
const _sfc_main$k = defineComponent({
  name: "BPagination",
  props: {
    align: { type: String, default: "start" },
    ariaControls: { type: String, required: false },
    ariaLabel: { type: String, default: "Pagination" },
    disabled: { type: Boolean, default: false },
    ellipsisClass: { type: [Array, String], default: () => [] },
    ellipsisText: { type: String, default: "\u2026" },
    firstClass: { type: [Array, String], default: () => [] },
    firstNumber: { type: Boolean, default: false },
    firstText: { type: String, default: "\xAB" },
    hideEllipsis: { type: Boolean, default: false },
    hideGotoEndButtons: { type: Boolean, default: false },
    labelFirstPage: { type: String, default: "Go to first page" },
    labelLastPage: { type: String, default: "Go to last page" },
    labelNextPage: { type: String, default: "Go to next page" },
    labelPage: { type: String, default: "Go to page" },
    labelPrevPage: { type: String, default: "Go to previous page" },
    lastClass: { type: [Array, String], default: () => [] },
    lastNumber: { type: Boolean, default: false },
    lastText: { type: String, default: "\xBB" },
    limit: { type: Number, default: DEFAULT_LIMIT },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "\u203A" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: DEFAULT_PER_PAGE },
    pills: { type: Boolean, default: false },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "\u2039" },
    size: { type: String, required: false },
    totalRows: { type: Number, default: DEFAULT_TOTAL_ROWS }
  },
  emits: ["update:modelValue", "page-click"],
  setup(props, { emit, slots }) {
    const alignment$1 = alignment(props);
    const numberOfPages = computed(() => Math.ceil(sanitizeTotalRows(props.totalRows) / sanitizePerPage(props.perPage)));
    const startNumber = computed(() => {
      let lStartNumber;
      const pagesLeft = numberOfPages.value - props.modelValue;
      if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
        lStartNumber = numberOfPages.value - numberOfLinks.value + 1;
      } else {
        lStartNumber = props.modelValue - Math.floor(numberOfLinks.value / 2);
      }
      if (lStartNumber < 1) {
        lStartNumber = 1;
      } else if (lStartNumber > numberOfPages.value - numberOfLinks.value) {
        lStartNumber = numberOfPages.value - numberOfLinks.value + 1;
      }
      if (props.limit <= ELLIPSIS_THRESHOLD) {
        if (props.lastNumber && numberOfPages.value === lStartNumber + numberOfLinks.value - 1) {
          lStartNumber = Math.max(lStartNumber - 1, 1);
        }
      }
      return lStartNumber;
    });
    const showFirstDots = computed(() => {
      const pagesLeft = numberOfPages.value - props.modelValue;
      let rShowDots = false;
      if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = true;
        }
      } else {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!props.hideEllipsis || props.firstNumber);
        }
      }
      if (startNumber.value <= 1) {
        rShowDots = false;
      }
      if (rShowDots && props.firstNumber && startNumber.value < 4) {
        rShowDots = false;
      }
      return rShowDots;
    });
    const numberOfLinks = computed(() => {
      let n = props.limit;
      if (numberOfPages.value <= props.limit) {
        n = numberOfPages.value;
      } else if (props.modelValue < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
        if (!props.hideEllipsis || props.lastNumber) {
          n = props.limit - (props.firstNumber ? 0 : 1);
        }
        n = Math.min(n, props.limit);
      } else if (numberOfPages.value - props.modelValue + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
        if (!props.hideEllipsis || props.firstNumber) {
          n = props.limit - (props.lastNumber ? 0 : 1);
        }
      } else {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          n = props.limit - (props.hideEllipsis ? 0 : 2);
        }
      }
      return n;
    });
    const showLastDots = computed(() => {
      const paginationWindowEnd = numberOfPages.value - numberOfLinks.value;
      let rShowDots = false;
      if (props.modelValue < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
        if (!props.hideEllipsis || props.lastNumber) {
          rShowDots = true;
        }
      } else {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!props.hideEllipsis || props.lastNumber);
        }
      }
      if (startNumber.value > paginationWindowEnd) {
        rShowDots = false;
      }
      const lastPageNumber = startNumber.value + numberOfLinks.value - 1;
      if (rShowDots && props.lastNumber && lastPageNumber > numberOfPages.value - 3) {
        rShowDots = false;
      }
      return rShowDots;
    });
    const pagination = reactive({
      pageSize: sanitizePerPage(props.perPage),
      totalRows: sanitizeTotalRows(props.totalRows),
      numberOfPages: numberOfPages.value
    });
    const pageClick = (event, pageNumber) => {
      if (pageNumber === props.modelValue) {
        return;
      }
      const { target } = event;
      const clickEvent = new BvEvent("page-click", {
        cancelable: true,
        vueTarget: this,
        target
      });
      emit("page-click", clickEvent, pageNumber);
      if (clickEvent.defaultPrevented) {
        return;
      }
      emit("update:modelValue", pageNumber);
    };
    const btnSize = computed(() => props.size ? `pagination-${props.size}` : "");
    const styleClass = computed(() => props.pills ? "b-pagination-pills" : "");
    watch(() => props.modelValue, (newValue) => {
      const calculatedValue = sanitizeCurrentPage(newValue, numberOfPages.value);
      if (calculatedValue !== props.modelValue)
        emit("update:modelValue", calculatedValue);
    });
    watch(pagination, (oldValue, newValue) => {
      if (!isUndefinedOrNull(oldValue)) {
        if (newValue.pageSize !== oldValue.pageSize && newValue.totalRows === oldValue.totalRows) {
          emit("update:modelValue", 1);
        } else if (newValue.numberOfPages !== oldValue.numberOfPages && props.modelValue > newValue.numberOfPages) {
          emit("update:modelValue", 1);
        }
      }
    });
    const pages = computed(() => {
      const result = [];
      for (let index = 0; index < numberOfLinks.value; index++) {
        result.push({ number: startNumber.value + index, classes: null });
      }
      return result;
    });
    return () => {
      const buttons = [];
      const pageNumbers = pages.value.map((p) => p.number);
      const isActivePage = (pageNumber) => pageNumber === props.modelValue;
      const noCurrentPage = props.modelValue < 1;
      const fill = props.align === "fill";
      const makeEndBtn = (linkTo, ariaLabel, btnSlot, btnText, btnClass, pageTest) => {
        const isDisabled = props.disabled || isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > numberOfPages.value;
        const pageNumber = linkTo < 1 ? 1 : linkTo > numberOfPages.value ? numberOfPages.value : linkTo;
        const scope = { disabled: isDisabled, page: pageNumber, index: pageNumber - 1 };
        const btnContent = normalizeSlot(btnSlot, scope, slots) || btnText || "";
        return h("li", {
          class: [
            "page-item",
            {
              "disabled": isDisabled,
              "flex-fill": fill,
              "d-flex": fill && !isDisabled
            },
            btnClass
          ]
        }, h(isDisabled ? "span" : "button", {
          "class": ["page-link", { "flex-grow-1": !isDisabled && fill }],
          "aria-label": ariaLabel,
          "aria-controls": props.ariaControls || null,
          "aria-disabled": isDisabled ? "true" : null,
          "role": "menuitem",
          "type": isDisabled ? null : "button",
          "tabindex": isDisabled ? null : "-1",
          "onClick": (event) => {
            if (isDisabled) {
              return;
            }
            pageClick(event, pageNumber);
          }
        }, btnContent));
      };
      const makeEllipsis = (isLast) => h("li", {
        class: [
          "page-item",
          "disabled",
          "bv-d-xs-down-none",
          fill ? "flex-fill" : "",
          props.ellipsisClass
        ],
        role: "separator",
        key: `ellipsis-${isLast ? "last" : "first"}`
      }, [
        h("span", { class: ["page-link"] }, normalizeSlot(SLOT_NAME_ELLIPSIS_TEXT, {}, slots) || props.ellipsisText || "...")
      ]);
      const makePageButton = (page, idx) => {
        const active = isActivePage(page.number) && !noCurrentPage;
        const tabIndex = props.disabled ? null : active || noCurrentPage && idx === 0 ? "0" : "-1";
        const scope = {
          active,
          disabled: props.disabled,
          page: page.number,
          index: page.number - 1,
          content: page.number
        };
        const btnContent = normalizeSlot(SLOT_NAME_PAGE, scope, slots) || page.number;
        const inner = h(props.disabled ? "span" : "button", {
          "class": ["page-link", { "flex-grow-1": !props.disabled && fill }],
          "aria-controls": props.ariaControls || null,
          "aria-disabled": props.disabled ? "true" : null,
          "aria-label": props.labelPage ? `${props.labelPage} ${page.number}` : null,
          "role": "menuitemradio",
          "type": props.disabled ? null : "button",
          "tabindex": tabIndex,
          "onClick": (event) => {
            if (!props.disabled) {
              pageClick(event, page.number);
            }
          }
        }, btnContent);
        return h("li", {
          class: [
            "page-item",
            {
              "disabled": props.disabled,
              active,
              "flex-fill": fill,
              "d-flex": fill && !props.disabled
            },
            props.pageClass
          ],
          role: "presentation",
          key: `page-${page.number}`
        }, inner);
      };
      if (!props.hideGotoEndButtons && !props.firstNumber) {
        const gotoFirstPageButton = makeEndBtn(1, props.labelFirstPage, SLOT_NAME_FIRST_TEXT, props.firstText, props.firstClass, 1);
        buttons.push(gotoFirstPageButton);
      }
      const previousButton = makeEndBtn(props.modelValue - 1, props.labelFirstPage, SLOT_NAME_PREV_TEXT, props.prevText, props.prevClass, 1);
      buttons.push(previousButton);
      if (props.firstNumber && pageNumbers[0] !== 1) {
        buttons.push(makePageButton({ number: 1 }, 0));
      }
      if (showFirstDots.value) {
        buttons.push(makeEllipsis(false));
      }
      pages.value.forEach((page, idx) => {
        const offset = showFirstDots.value && props.firstNumber && pageNumbers[0] !== 1 ? 1 : 0;
        buttons.push(makePageButton(page, idx + offset));
      });
      if (showLastDots.value) {
        buttons.push(makeEllipsis(true));
      }
      if (props.lastNumber && pageNumbers[pageNumbers.length - 1] !== numberOfPages.value) {
        buttons.push(makePageButton({ number: numberOfPages.value }, -1));
      }
      const nextButton = makeEndBtn(props.modelValue + 1, props.labelNextPage, SLOT_NAME_NEXT_TEXT, props.nextText, props.nextClass, numberOfPages.value);
      buttons.push(nextButton);
      if (!props.lastNumber && !props.hideGotoEndButtons) {
        const gotoLastPageButton = makeEndBtn(numberOfPages.value, props.labelLastPage, SLOT_NAME_LAST_TEXT, props.lastText, props.lastClass, numberOfPages.value);
        buttons.push(gotoLastPageButton);
      }
      return h("ul", {
        "class": ["pagination", btnSize.value, alignment$1.value, styleClass.value],
        "role": "menubar",
        "aria-disabled": props.disabled,
        "aria-label": props.ariaLabel || null
      }, buttons);
    };
  }
});
const _hoisted_1$6 = ["id"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "BPopover",
  props: {
    id: null,
    title: null,
    content: null,
    container: { default: "body" },
    noninteractive: { type: Boolean, default: false },
    placement: { default: "right" },
    target: { default: void 0 },
    delay: { default: 0 },
    triggers: { default: "click" },
    show: { type: Boolean, default: false },
    variant: { default: void 0 },
    html: { type: Boolean, default: true },
    sanitize: { type: Boolean, default: false },
    offset: { default: "0" }
  },
  emits: ["show", "shown", "hide", "hidden", "inserted"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const element = ref();
    const target = ref();
    const instance = ref();
    const titleRef = ref();
    const contentRef = ref();
    const classes = computed(() => ({
      [`b-popover-${props.variant}`]: props.variant
    }));
    const cleanElementProp = (target2) => {
      if (typeof target2 === "string") {
        return target2;
      } else if (target2 instanceof HTMLElement)
        return target2;
      else if (typeof target2 !== "undefined")
        return target2.$el;
      return void 0;
    };
    const getElement = (element2) => {
      if (!element2)
        return void 0;
      if (typeof element2 === "string") {
        const idElement = document.getElementById(element2);
        return idElement ? idElement : void 0;
      }
      return element2;
    };
    const generatePopoverInstance = (targetValue) => {
      target.value = getElement(cleanElementProp(targetValue));
      if (!target.value)
        return;
      instance.value = new Popover(target.value, {
        container: cleanElementProp(props.container),
        trigger: props.triggers,
        placement: props.placement,
        title: props.title || slots.title ? titleRef.value : "",
        content: contentRef.value,
        html: props.html,
        delay: props.delay,
        sanitize: props.sanitize,
        offset: props.offset
      });
    };
    onMounted(() => {
      var _a, _b, _c;
      nextTick(() => {
        generatePopoverInstance(props.target);
      });
      (_b = (_a = element.value) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(element.value);
      if (props.show) {
        (_c = instance.value) == null ? void 0 : _c.show();
      }
    });
    onBeforeUnmount(() => {
      var _a;
      (_a = instance.value) == null ? void 0 : _a.dispose();
    });
    watch(() => props.target, (newValue) => {
      var _a;
      (_a = instance.value) == null ? void 0 : _a.dispose();
      generatePopoverInstance(newValue);
    });
    watch(() => props.show, (show, oldVal) => {
      var _a, _b;
      if (show !== oldVal) {
        if (show) {
          (_a = instance.value) == null ? void 0 : _a.show();
        } else {
          (_b = instance.value) == null ? void 0 : _b.hide();
        }
      }
    });
    useEventListener(target, "show.bs.popover", () => emit("show"));
    useEventListener(target, "shown.bs.popover", () => emit("shown"));
    useEventListener(target, "hide.bs.popover", () => emit("hide"));
    useEventListener(target, "hidden.bs.popover", () => emit("hidden"));
    useEventListener(target, "inserted.bs.popover", () => emit("inserted"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        ref_key: "element",
        ref: element,
        class: normalizeClass(["popover b-popover", unref(classes)]),
        role: "tooltip",
        tabindex: "-1"
      }, [
        createElementVNode("div", {
          ref_key: "titleRef",
          ref: titleRef
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(__props.title), 1)
          ])
        ], 512),
        createElementVNode("div", {
          ref_key: "contentRef",
          ref: contentRef
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.content), 1)
          ])
        ], 512)
      ], 10, _hoisted_1$6);
    };
  }
});
const _sfc_main$i = defineComponent({
  name: "BProgressBar",
  props: {
    animated: { type: Boolean, default: false },
    label: { type: String },
    labelHtml: { type: String },
    max: { type: [Number, String] },
    precision: { type: [Number, String], default: 0 },
    showProgress: { type: Boolean, default: false },
    showValue: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    value: { type: [Number, String], default: 0 },
    variant: { type: String }
  },
  setup(props, { slots }) {
    const parent = inject(injectionKey$1);
    const classes = computed(() => ({
      "progress-bar-animated": props.animated || (parent == null ? void 0 : parent.animated),
      "progress-bar-striped": props.striped || (parent == null ? void 0 : parent.striped) || props.animated || (parent == null ? void 0 : parent.animated),
      [`bg-${props.variant}`]: props.variant
    }));
    const computedLabel = computed(() => {
      if (props.showValue || (parent == null ? void 0 : parent.showValue)) {
        return parseFloat(props.value).toFixed(props.precision);
      }
      if (props.showProgress || (parent == null ? void 0 : parent.showProgress)) {
        const progress = (props.value * 100 / parseInt(props.max || 100)).toString();
        return parseFloat(progress).toFixed(props.precision);
      }
      return props.label || "";
    });
    const width = computed(() => {
      if (props.max || (parent == null ? void 0 : parent.max)) {
        return `${props.value * 100 / parseInt(props.max || (parent == null ? void 0 : parent.max))}%`;
      }
      return typeof props.value === "string" ? props.value : `${props.value}%`;
    });
    const progressProps = computed(() => {
      const rawProps = {
        "class": ["progress-bar", classes.value],
        "role": "progressbar",
        "aria-valuenow": props.value,
        "aria-valuemin": 0,
        "aria-valuemax": props.max,
        "style": { width: width.value }
      };
      if (props.labelHtml) {
        return {
          ...rawProps,
          innerHTML: props.labelHtml
        };
      }
      return rawProps;
    });
    return () => {
      var _a;
      return h("div", progressProps.value, ((_a = slots.default) == null ? void 0 : _a.call(slots)) || computedLabel.value);
    };
  }
});
const injectionKey$1 = Symbol();
const _sfc_main$h = defineComponent({
  __name: "BProgress",
  props: {
    variant: null,
    max: null,
    height: null,
    animated: { type: Boolean, default: false },
    precision: { default: 0 },
    showProgress: { type: Boolean, default: false },
    showValue: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    value: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    provide(injectionKey$1, {
      animated: props.animated,
      max: props.max,
      showProgress: props.showProgress,
      showValue: props.showValue,
      striped: props.striped
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "progress",
        style: normalizeStyle({ height: __props.height })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(_sfc_main$i, normalizeProps(guardReactiveProps({
            animated: __props.animated,
            max: __props.max,
            precision: __props.precision,
            showProgress: __props.showProgress,
            showValue: __props.showValue,
            striped: __props.striped,
            value: __props.value,
            variant: __props.variant
          })), null, 16)
        ])
      ], 4);
    };
  }
});
const rowColsProps = getBreakpointProps("cols", [""], { type: [String, Number], default: null });
const _sfc_main$g = defineComponent({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...rowColsProps
  },
  setup(props) {
    const rowColsClasses = getClasses$1(props, rowColsProps, "cols", "row-cols");
    const classes = computed(() => ({
      [`gx-${props.gutterX}`]: props.gutterX !== null,
      [`gy-${props.gutterY}`]: props.gutterY !== null,
      [`align-items-${props.alignV}`]: props.alignV,
      [`justify-content-${props.alignH}`]: props.alignH,
      [`align-content-${props.alignContent}`]: props.alignContent
    }));
    return {
      classes,
      rowColsClasses
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass(["row", [_ctx.classes, _ctx.rowColsClasses]])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var BRow = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "BSkeleton",
  props: {
    height: null,
    width: null,
    size: null,
    animation: { default: "wave" },
    type: { default: "text" },
    variant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      `b-skeleton-${props.type}`,
      {
        [`b-skeleton-animate-${props.animation}`]: typeof props.animation === "boolean" ? void 0 : props.animation,
        [`bg-${props.variant}`]: props.variant
      }
    ]);
    const style = computed(() => ({
      width: props.size || props.width,
      height: props.size || props.height
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["b-skeleton", unref(classes)]),
        style: normalizeStyle(unref(style))
      }, null, 6);
    };
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [`b-skeleton-animate-${props.animation}`]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", unref(classes)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BTableSimple",
  props: {
    bordered: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    borderVariant: { type: String },
    captionTop: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    responsive: { type: [Boolean, String], default: false },
    stacked: { type: [Boolean, String], default: false },
    striped: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    tableClass: { type: [Array, Object, String] },
    tableVariant: { type: String }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      "table",
      "b-table",
      {
        "table-bordered": props.bordered,
        "table-borderless": props.borderless,
        [`border-${props.borderVariant}`]: props.borderVariant,
        "caption-top": props.captionTop,
        "table-dark": props.dark,
        "table-hover": props.hover,
        "b-table-stacked": typeof props.stacked === "boolean" && props.stacked,
        [`b-table-stacked-${props.stacked}`]: typeof props.stacked === "string",
        "table-striped": props.striped,
        "table-sm": props.small,
        [`table-${props.tableVariant}`]: props.tableVariant
      },
      props.tableClass
    ]);
    const responsiveClasses = computed(() => [
      {
        "table-responsive": typeof props.responsive === "boolean" && props.responsive,
        [`table-responsive-${props.responsive}`]: typeof props.responsive === "string"
      }
    ]);
    return (_ctx, _cache) => {
      return __props.responsive ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(responsiveClasses))
      }, [
        createElementVNode("table", {
          role: "table",
          class: normalizeClass(unref(classes))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2)) : (openBlock(), createElementBlock("table", {
        key: 1,
        role: "table",
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2));
    };
  }
});
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$3 = { key: 1 };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BSkeletonTable",
  props: {
    animation: { default: "wave" },
    columns: { default: 5 },
    hideHeader: { type: Boolean, default: false },
    rows: { default: 3 },
    showFooter: { type: Boolean, default: false },
    tableProps: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$d, normalizeProps(guardReactiveProps(__props.tableProps)), {
        default: withCtx(() => [
          !__props.hideHeader ? (openBlock(), createElementBlock("thead", _hoisted_1$5, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (th, i) => {
                return openBlock(), createElementBlock("th", { key: i }, [
                  createVNode(_sfc_main$f)
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (tr, j) => {
              return openBlock(), createElementBlock("tr", { key: j }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (td, k) => {
                  return openBlock(), createElementBlock("td", { key: k }, [
                    createVNode(_sfc_main$f, { width: "75%" })
                  ]);
                }), 128))
              ]);
            }), 128))
          ]),
          __props.showFooter ? (openBlock(), createElementBlock("tfoot", _hoisted_2$3, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (th, l) => {
                return openBlock(), createElementBlock("th", { key: l }, [
                  createVNode(_sfc_main$f)
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 16);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BSkeletonWrapper",
  props: {
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : renderSlot(_ctx.$slots, "default", { key: 1 });
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "visually-hidden"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BSpinner",
  props: {
    label: null,
    role: { default: "status" },
    small: { type: Boolean, default: false },
    tag: { default: "span" },
    type: { default: "border" },
    variant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      "spinner-border": props.type === "border",
      "spinner-border-sm": props.type === "border" && props.small,
      "spinner-grow": props.type === "grow",
      "spinner-grow-sm": props.type === "grow" && props.small,
      [`text-${props.variant}`]: !!props.variant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(classes)),
        role: __props.label || _ctx.$slots.label ? __props.role : null,
        "aria-hidden": __props.label || _ctx.$slots.label ? null : true
      }, {
        default: withCtx(() => [
          __props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("span", _hoisted_1$4, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(__props.label), 1)
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "role", "aria-hidden"]);
    };
  }
});
const _hoisted_1$3 = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"];
const injectionKey = Symbol();
const _sfc_main$9 = defineComponent({
  __name: "BTabs",
  props: {
    activeNavItemClass: { default: void 0 },
    activeTabClass: { default: void 0 },
    align: { default: void 0 },
    card: { type: Boolean, default: false },
    contentClass: { default: void 0 },
    end: { type: Boolean, default: false },
    fill: { type: Boolean, default: false },
    id: { default: void 0 },
    justified: { type: Boolean, default: false },
    lazy: { type: Boolean, default: false },
    navClass: { default: void 0 },
    navWrapperClass: { default: void 0 },
    noFade: { type: Boolean, default: false },
    noNavStyle: { type: Boolean, default: false },
    pills: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    tag: { default: "div" },
    vertical: { type: Boolean, default: false },
    modelValue: { default: -1 }
  },
  emits: ["update:modelValue", "activate-tab", "click"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const _tabIndex = ref(props.modelValue);
    const _currentTabButton = ref("");
    const tabIndex = computed({
      get: () => _tabIndex.value,
      set: (value) => {
        _tabIndex.value = value;
        if (tabs.value.length > 0 && value >= 0 && value < tabs.value.length) {
          _currentTabButton.value = tabs.value[value].buttonId;
        } else {
          _currentTabButton.value = "";
        }
        emit("update:modelValue", value);
      }
    });
    const tabs = computed(() => {
      let tabs2 = [];
      if (slots.default) {
        tabs2 = getTabs(slots).map((tab, idx) => {
          if (!tab.props)
            tab.props = {};
          const buttonId = tab.props["button-id"] || getID("tab");
          const contentId = tab.props.id || getID();
          const active = tabIndex.value > -1 ? idx === tabIndex.value : tab.props.active === "";
          const titleItemClass = tab.props["title-item-class"];
          const titleLinkAttributes = tab.props["title-link-attributes"];
          return {
            buttonId,
            contentId,
            active,
            disabled: tab.props.disabled === "" || tab.props.disabled === true,
            navItemClasses: [
              {
                active,
                disabled: tab.props.disabled === "" || tab.props.disabled === true
              },
              active && props.activeNavItemClass ? props.activeNavItemClass : null,
              tab.props["title-link-class"]
            ],
            tabClasses: [
              {
                fade: !props.noFade
              },
              active && props.activeTabClass ? props.activeTabClass : null
            ],
            target: `#${contentId}`,
            title: tab.props.title,
            titleItemClass,
            titleLinkAttributes,
            onClick: tab.props.onClick,
            tab
          };
        });
      }
      return tabs2;
    });
    const showEmpty = computed(() => !((tabs == null ? void 0 : tabs.value) && tabs.value.length > 0));
    const classes = computed(() => ({
      "d-flex align-items-start": props.vertical
    }));
    const navTabsClasses = computed(() => ({
      "nav-pills": props.pills,
      "flex-column me-3": props.vertical,
      [`justify-content-${props.align}`]: !!props.align,
      "nav-fill": props.fill,
      "card-header-tabs": props.card,
      "nav-justified": props.justified,
      "nav-tabs": !props.noNavStyle && !props.pills,
      "small": props.small
    }));
    const activateTab = (index) => {
      let result = false;
      if (index !== void 0) {
        if (index > -1 && index < tabs.value.length && !tabs.value[index].disabled && (tabIndex.value < 0 || tabs.value[index].buttonId !== _currentTabButton.value)) {
          const tabEvent = new BvEvent("activate-tab", { cancelable: true, vueTarget: this });
          emit("activate-tab", index, tabIndex.value, tabEvent);
          if (!tabEvent.defaultPrevented) {
            tabIndex.value = index;
            result = true;
          }
        }
      }
      if (!result && props.modelValue !== tabIndex.value) {
        emit("update:modelValue", tabIndex.value);
      }
      return result;
    };
    const handleClick = (event, index) => {
      var _a;
      activateTab(index);
      if (index >= 0 && !tabs.value[index].disabled && ((_a = tabs.value[index]) == null ? void 0 : _a.onClick) && isFunction(tabs.value[index].onClick)) {
        tabs.value[index].onClick(event);
      }
    };
    const getTabs = (slots2) => {
      if (!slots2 || !slots2.default)
        return [];
      return slots2.default().reduce((arr, slot) => {
        if (typeof slot.type === "symbol") {
          arr = arr.concat(slot.children);
        } else {
          arr.push(slot);
        }
        return arr;
      }, []).filter((child) => {
        var _a;
        return ((_a = child.type) == null ? void 0 : _a.__name) === "BTab";
      });
    };
    activateTab(_tabIndex.value);
    watch(() => props.modelValue, (newValue, oldValue) => {
      if (newValue === oldValue)
        return;
      newValue = mathMax(newValue, -1);
      oldValue = mathMax(oldValue, -1);
      if (tabs.value.length <= 0) {
        tabIndex.value = -1;
        return;
      }
      const goForward = newValue > oldValue;
      let index = newValue;
      const maxIdx = tabs.value.length - 1;
      while (index >= 0 && index <= maxIdx && tabs.value[index].disabled) {
        index += goForward ? 1 : -1;
      }
      if (index < 0) {
        activateTab(0);
        return;
      }
      if (index >= tabs.value.length) {
        activateTab(tabs.value.length - 1);
        return;
      }
      activateTab(index);
    });
    watch(() => tabs.value, () => {
      let activeTabIndex = tabs.value.map((tab) => tab.active && !tab.disabled).lastIndexOf(true);
      if (activeTabIndex < 0) {
        if (tabIndex.value >= tabs.value.length) {
          activeTabIndex = tabs.value.map((tab) => !tab.disabled).lastIndexOf(true);
        } else {
          if (tabs.value[tabIndex.value] && !tabs.value[tabIndex.value].disabled)
            activeTabIndex = tabIndex.value;
        }
      }
      if (activeTabIndex < 0) {
        activeTabIndex = tabs.value.map((tab) => !tab.disabled).indexOf(true);
      }
      tabs.value.forEach((tab, idx) => tab.active = idx === activeTabIndex);
      activateTab(activeTabIndex);
    });
    onMounted(() => {
      if (tabIndex.value < 0 && tabs.value.length > 0 && !tabs.value.some((tab) => tab.active)) {
        const firstTab = tabs.value.map((t) => !t.disabled).indexOf(true);
        activateTab(firstTab >= 0 ? firstTab : -1);
      }
    });
    provide(injectionKey, {
      lazy: props.lazy,
      card: props.card
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: __props.id,
        class: normalizeClass(["tabs", unref(classes)])
      }, {
        default: withCtx(() => [
          __props.end ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["tab-content", __props.contentClass])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabs), ({ tab, contentId, tabClasses, active }, i) => {
              return openBlock(), createBlock(resolveDynamicComponent(tab), {
                key: i,
                id: contentId,
                class: normalizeClass(tabClasses),
                active
              }, null, 8, ["id", "class", "active"]);
            }), 128)),
            unref(showEmpty) ? (openBlock(), createElementBlock("div", {
              key: "bv-empty-tab",
              class: normalizeClass(["tab-pane active", { "card-body": __props.card }])
            }, [
              renderSlot(_ctx.$slots, "empty")
            ], 2)) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true),
          createElementVNode("div", {
            class: normalizeClass([__props.navWrapperClass, { "card-header": __props.card, "ms-auto": __props.vertical && __props.end }])
          }, [
            createElementVNode("ul", {
              class: normalizeClass(["nav", [unref(navTabsClasses), __props.navClass]]),
              role: "tablist"
            }, [
              renderSlot(_ctx.$slots, "tabs-start"),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabs), ({ tab, buttonId, contentId, navItemClasses, active, target }, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: idx,
                  class: normalizeClass(["nav-item", tab.props["title-item-class"]])
                }, [
                  createElementVNode("button", mergeProps({
                    id: buttonId,
                    class: ["nav-link", navItemClasses],
                    "data-bs-toggle": "tab",
                    "data-bs-target": target,
                    role: "tab",
                    "aria-controls": contentId,
                    "aria-selected": active
                  }, tab.props["title-link-attributes"], {
                    onClick: withModifiers((e) => handleClick(e, idx), ["stop", "prevent"])
                  }), [
                    tab.children && tab.children.title ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.title), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(tab.props.title), 1)
                    ], 64))
                  ], 16, _hoisted_1$3)
                ], 2);
              }), 128)),
              renderSlot(_ctx.$slots, "tabs-end")
            ], 2)
          ], 2),
          !__props.end ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["tab-content", __props.contentClass])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabs), ({ tab, contentId, tabClasses, active }, i) => {
              return openBlock(), createBlock(resolveDynamicComponent(tab), {
                key: i,
                id: contentId,
                class: normalizeClass(tabClasses),
                active
              }, null, 8, ["id", "class", "active"]);
            }), 128)),
            unref(showEmpty) ? (openBlock(), createElementBlock("div", {
              key: "bv-empty-tab",
              class: normalizeClass(["tab-pane active", { "card-body": __props.card }])
            }, [
              renderSlot(_ctx.$slots, "empty")
            ], 2)) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["id", "class"]);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BTab",
  props: {
    id: null,
    title: null,
    active: { type: Boolean, default: false },
    buttonId: { default: void 0 },
    disabled: { type: Boolean, default: false },
    lazy: { type: Boolean, default: false },
    noBody: { type: [Boolean, String], default: false },
    tag: { default: "div" },
    titleItemClass: { default: void 0 },
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const parentData = inject(injectionKey, null);
    const computedLazy = computed(() => (parentData == null ? void 0 : parentData.lazy) || props.lazy);
    const computedActive = computed(() => props.active && !props.disabled);
    const showSlot = computed(() => computedActive.value || !computedLazy.value);
    const classes = computed(() => ({
      "active": props.active,
      "show": props.active,
      "card-body": (parentData == null ? void 0 : parentData.card) && props.noBody === false
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        id: __props.id,
        class: normalizeClass(["tab-pane", unref(classes)]),
        role: "tabpanel",
        "aria-labelledby": "profile-tab"
      }, {
        default: withCtx(() => [
          unref(showSlot) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["id", "class"]);
    };
  }
});
const useItemHelper = () => {
  const normaliseFields = (origFields, items) => {
    const fields = [];
    if (!(origFields == null ? void 0 : origFields.length) && (items == null ? void 0 : items.length)) {
      Object.keys(items[0]).forEach((k) => fields.push({ key: k, label: startCase(k) }));
      return fields;
    }
    if (Array.isArray(origFields)) {
      origFields.forEach((f) => {
        if (typeof f === "string") {
          fields.push({ key: f, label: startCase(f) });
        } else if (isObject(f) && f.key && isString(f.key)) {
          fields.push({ ...f });
        }
      });
      return fields;
    }
    return fields;
  };
  return {
    normaliseFields
  };
};
const _hoisted_1$2 = ["title", "abbr"];
const _hoisted_2$2 = { key: 1 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["title", "abbr"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 2 };
const _hoisted_7 = ["title", "abbr"];
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = ["title", "abbr"];
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { key: 2 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BTable",
  props: {
    align: { type: String },
    caption: { type: String },
    captionTop: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    borderVariant: { type: String },
    dark: { type: Boolean, default: false },
    fields: { type: Array, default: () => [] },
    footClone: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
    responsive: { type: [Boolean, String], default: false },
    small: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    variant: { type: String }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      "table",
      {
        [`align-${props.align}`]: props.align,
        [`table-${props.variant}`]: props.variant,
        "table-striped": props.striped,
        "table-hover": props.hover,
        "table-dark": props.dark,
        "table-bordered": props.bordered,
        [`border-${props.borderVariant}`]: props.borderVariant,
        "table-borderless": props.borderless,
        "table-sm": props.small,
        "caption-top": props.captionTop
      }
    ]);
    const itemHelper = useItemHelper();
    const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items));
    const responsiveClasses = computed(() => [
      {
        "table-responsive": typeof props.responsive === "boolean" && props.responsive,
        [`table-responsive-${props.responsive}`]: typeof props.responsive === "string"
      }
    ]);
    return (_ctx, _cache) => {
      return __props.responsive ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(responsiveClasses))
      }, [
        createElementVNode("table", {
          class: normalizeClass(unref(classes))
        }, [
          createElementVNode("thead", null, [
            _ctx.$slots["thead-top"] ? renderSlot(_ctx.$slots, "thead-top", { key: 0 }) : createCommentVNode("", true),
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
                return openBlock(), createElementBlock("th", mergeProps({
                  key: field.key,
                  scope: "col",
                  class: [field.class, field.thClass, field.variant ? `table-${field.variant}` : ""],
                  title: field.headerTitle,
                  abbr: field.headerAbbr,
                  style: field.thStyle
                }, field.thAttr), [
                  _ctx.$slots["head(" + field.key + ")"] ? renderSlot(_ctx.$slots, "head(" + field.key + ")", {
                    key: 0,
                    label: field.label
                  }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(field.label), 1)
                  ], 64))
                ], 16, _hoisted_1$2);
              }), 128))
            ]),
            _ctx.$slots["thead-sub"] ? (openBlock(), createElementBlock("tr", _hoisted_2$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
                return openBlock(), createElementBlock("td", {
                  key: field.key,
                  scope: "col",
                  class: normalizeClass([field.class, field.thClass, field.variant ? `table-${field.variant}` : ""])
                }, [
                  _ctx.$slots["thead-sub"] ? renderSlot(_ctx.$slots, "thead-sub", mergeProps({
                    key: 0,
                    items: unref(computedFields)
                  }, field)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(field.label), 1)
                  ], 64))
                ], 2);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (tr) => {
              return openBlock(), createElementBlock("tr", {
                class: normalizeClass([tr._rowVariant ? `table-${tr._rowVariant}` : null])
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field, index) => {
                  return openBlock(), createElementBlock("td", mergeProps({
                    key: field.key
                  }, field.tdAttr, {
                    class: [
                      field.class,
                      field.tdClass,
                      field.variant ? `table-${field.variant}` : "",
                      (tr == null ? void 0 : tr._cellVariants) && (tr == null ? void 0 : tr._cellVariants[field.key]) ? `table-${tr == null ? void 0 : tr._cellVariants[field.key]}` : ""
                    ]
                  }), [
                    _ctx.$slots["cell(" + field.key + ")"] ? renderSlot(_ctx.$slots, "cell(" + field.key + ")", {
                      key: 0,
                      value: tr[field.key],
                      index,
                      item: tr,
                      items: __props.items
                    }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(tr[field.key]), 1)
                    ], 64))
                  ], 16);
                }), 128))
              ], 2);
            }), 256))
          ]),
          __props.footClone ? (openBlock(), createElementBlock("tfoot", _hoisted_3, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
                return openBlock(), createElementBlock("th", mergeProps({
                  key: field.key
                }, field.thAttr, {
                  scope: "col",
                  class: [field.class, field.thClass, field.variant ? `table-${field.variant}` : ""],
                  title: field.headerTitle,
                  abbr: field.headerAbbr,
                  style: field.thStyle
                }), toDisplayString(field.label), 17, _hoisted_4);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          _ctx.$slots["table-caption"] ? (openBlock(), createElementBlock("caption", _hoisted_5, [
            renderSlot(_ctx.$slots, "table-caption")
          ])) : __props.caption ? (openBlock(), createElementBlock("caption", _hoisted_6, toDisplayString(__props.caption), 1)) : createCommentVNode("", true)
        ], 2)
      ], 2)) : (openBlock(), createElementBlock("table", {
        key: 1,
        class: normalizeClass(unref(classes))
      }, [
        createElementVNode("thead", null, [
          _ctx.$slots["thead-top"] ? renderSlot(_ctx.$slots, "thead-top", { key: 0 }) : createCommentVNode("", true),
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
              return openBlock(), createElementBlock("th", mergeProps({
                key: field.key,
                scope: "col",
                class: [field.class, field.thClass, field.variant ? `table-${field.variant}` : ""],
                title: field.headerTitle,
                abbr: field.headerAbbr,
                style: field.thStyle
              }, field.thAttr), [
                _ctx.$slots["head(" + field.key + ")"] ? renderSlot(_ctx.$slots, "head(" + field.key + ")", {
                  key: 0,
                  label: field.label
                }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(field.label), 1)
                ], 64))
              ], 16, _hoisted_7);
            }), 128))
          ]),
          _ctx.$slots["thead-sub"] ? (openBlock(), createElementBlock("tr", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
              return openBlock(), createElementBlock("td", {
                key: field.key,
                scope: "col",
                class: normalizeClass([field.class, field.thClass, field.variant ? `table-${field.variant}` : ""])
              }, [
                _ctx.$slots["thead-sub"] ? renderSlot(_ctx.$slots, "thead-sub", mergeProps({
                  key: 0,
                  items: unref(computedFields)
                }, field)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(field.label), 1)
                ], 64))
              ], 2);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (tr) => {
            return openBlock(), createElementBlock("tr", {
              class: normalizeClass([tr._rowVariant ? `table-${tr._rowVariant}` : null])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field, index) => {
                return openBlock(), createElementBlock("td", mergeProps({
                  key: field.key
                }, field.tdAttr, {
                  class: [
                    field.class,
                    field.tdClass,
                    field.variant ? `table-${field.variant}` : "",
                    (tr == null ? void 0 : tr._cellVariants) && (tr == null ? void 0 : tr._cellVariants[field.key]) ? `table-${tr == null ? void 0 : tr._cellVariants[field.key]}` : ""
                  ]
                }), [
                  _ctx.$slots["cell(" + field.key + ")"] ? renderSlot(_ctx.$slots, "cell(" + field.key + ")", {
                    key: 0,
                    value: tr[field.key],
                    index,
                    item: tr,
                    items: __props.items
                  }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(tr[field.key]), 1)
                  ], 64))
                ], 16);
              }), 128))
            ], 2);
          }), 256))
        ]),
        __props.footClone ? (openBlock(), createElementBlock("tfoot", _hoisted_9, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedFields), (field) => {
              return openBlock(), createElementBlock("th", mergeProps({
                key: field.key
              }, field.thAttr, {
                scope: "col",
                class: [field.class, field.thClass, field.variant ? `table-${field.variant}` : ""],
                title: field.headerTitle,
                abbr: field.headerAbbr,
                style: field.thStyle
              }), toDisplayString(field.label), 17, _hoisted_10);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        _ctx.$slots["table-caption"] ? (openBlock(), createElementBlock("caption", _hoisted_11, [
          renderSlot(_ctx.$slots, "table-caption")
        ])) : __props.caption ? (openBlock(), createElementBlock("caption", _hoisted_12, toDisplayString(__props.caption), 1)) : createCommentVNode("", true)
      ], 2));
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BTbody",
  props: {
    headVariant: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`thead-${props.headVariant}`]: props.headVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tbody", {
        role: "rowgroup",
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$1 = ["scope", "colspan", "rowspan", "data-label"];
const _hoisted_2$1 = { key: 0 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BTd",
  props: {
    colspan: { type: [String, Number] },
    rowspan: { type: [String, Number] },
    stackedHeading: { type: String },
    stickyColumn: { type: Boolean, default: false },
    variant: { type: String }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`table-${props.variant}`]: props.variant,
      "b-table-sticky-column": props.stickyColumn,
      "table-b-table-default": props.stickyColumn && !props.variant
    }));
    const scope = computed(() => props.colspan ? "colspan" : props.rowspan ? "rowspan" : "col");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        role: "cell",
        scope: unref(scope),
        class: normalizeClass(unref(classes)),
        colspan: __props.colspan,
        rowspan: __props.rowspan,
        "data-label": __props.stackedHeading
      }, [
        __props.stackedHeading ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ])) : renderSlot(_ctx.$slots, "default", { key: 1 })
      ], 10, _hoisted_1$1);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BTfoot",
  props: {
    footVariant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`table-${props.footVariant}`]: props.footVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tfoot", {
        role: "rowgroup",
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1 = ["scope", "colspan", "rowspan", "data-label"];
const _hoisted_2 = { key: 0 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BTh",
  props: {
    colspan: { type: [String, Number] },
    rowspan: { type: [String, Number] },
    stackedHeading: { type: String },
    stickyColumn: { type: Boolean, default: false },
    variant: { type: String }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`table-${props.variant}`]: props.variant,
      "b-table-sticky-column": props.stickyColumn,
      "table-b-table-default": props.stickyColumn && !props.variant
    }));
    const scope = computed(() => props.colspan ? "colspan" : props.rowspan ? "rowspan" : "col");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", {
        role: "columnheader",
        scope: unref(scope),
        class: normalizeClass(unref(classes)),
        colspan: __props.colspan,
        rowspan: __props.rowspan,
        "data-label": __props.stackedHeading
      }, [
        __props.stackedHeading ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])) : renderSlot(_ctx.$slots, "default", { key: 1 })
      ], 10, _hoisted_1);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BThead",
  props: {
    headVariant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`table-${props.headVariant}`]: props.headVariant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("thead", {
        role: "rowgroup",
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      [`table-${props.variant}`]: props.variant
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", {
        role: "row",
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const SLOT_NAME_TOAST_TITLE = "toast-title";
const MIN_DURATION = 1e3;
const _sfc_main = defineComponent({
  name: "BToast",
  props: {
    ...BLINK_PROPS,
    delay: { type: Number, default: 5e3 },
    bodyClass: { type: String },
    body: { type: [Object, String] },
    headerClass: { type: String },
    headerTag: { type: String, default: "div" },
    animation: { type: Boolean, default: true },
    id: { type: String },
    isStatus: { type: Boolean, default: false },
    autoHide: { type: Boolean, default: true },
    noCloseButton: { type: Boolean, default: false },
    noFade: { type: Boolean, default: false },
    noHoverPause: { type: Boolean, default: false },
    solid: { type: Boolean, default: false },
    static: { type: Boolean, default: false },
    title: { type: String },
    modelValue: { type: Boolean, default: false },
    toastClass: { type: Array },
    variant: { type: String }
  },
  emits: ["destroyed", "update:modelValue"],
  setup(props, { emit, slots }) {
    const isTransitioning = ref(false);
    const isHiding = ref(false);
    const localShow = ref(false);
    const classes = computed(() => ({
      [`b-toast-${props.variant}`]: props.variant,
      show: localShow.value || isTransitioning.value
    }));
    let dismissTimer;
    let dismissStarted;
    let resumeDismiss;
    const clearDismissTimer = () => {
      if (typeof dismissTimer === "undefined")
        return;
      clearTimeout(dismissTimer);
      dismissTimer = void 0;
    };
    const computedDuration = computed(() => Math.max(toInteger(props.delay, 0), MIN_DURATION));
    const hide = () => {
      if (props.modelValue) {
        dismissStarted = resumeDismiss = 0;
        clearDismissTimer();
        isHiding.value = true;
        requestAF(() => {
          localShow.value = false;
        });
      }
    };
    const show = () => {
      clearDismissTimer();
      emit("update:modelValue", true);
      dismissStarted = resumeDismiss = 0;
      isHiding.value = false;
      nextTick(() => {
        requestAF(() => {
          localShow.value = true;
        });
      });
    };
    const onPause = () => {
      if (!props.autoHide || props.noHoverPause || !dismissTimer || resumeDismiss) {
        return;
      }
      const passed = Date.now() - dismissStarted;
      if (passed > 0) {
        clearDismissTimer();
        resumeDismiss = Math.max(computedDuration.value - passed, MIN_DURATION);
      }
    };
    const onUnPause = () => {
      if (!props.autoHide || props.noHoverPause || !resumeDismiss) {
        resumeDismiss = dismissStarted = 0;
      }
      startDismissTimer();
    };
    watch(() => props.modelValue, (newValue) => {
      newValue ? show() : hide();
    });
    const startDismissTimer = () => {
      clearDismissTimer();
      if (props.autoHide) {
        dismissTimer = setTimeout(hide, resumeDismiss || computedDuration.value);
        dismissStarted = Date.now();
        resumeDismiss = 0;
      }
    };
    const OnBeforeEnter = () => {
      isTransitioning.value = true;
      emit("update:modelValue", true);
    };
    const OnAfterEnter = () => {
      isTransitioning.value = false;
      startDismissTimer();
    };
    const OnBeforeLeave = () => {
      isTransitioning.value = true;
    };
    const OnAfterLeave = () => {
      isTransitioning.value = false;
      resumeDismiss = dismissStarted = 0;
      emit("update:modelValue", false);
    };
    onUnmounted(() => {
      clearDismissTimer();
      if (!props.autoHide) {
        return;
      }
      emit("destroyed", props.id);
    });
    onMounted(() => {
      nextTick(() => {
        if (props.modelValue) {
          requestAF(() => {
            show();
          });
        }
      });
    });
    const onLinkClick = () => {
      nextTick(() => {
        requestAF(() => {
          hide();
        });
      });
    };
    return () => {
      const makeToast = () => {
        const $headerContent = [];
        const $title = normalizeSlot(SLOT_NAME_TOAST_TITLE, { hide }, slots);
        if ($title) {
          $headerContent.push(h($title));
        } else if (props.title) {
          $headerContent.push(h("strong", { class: "me-auto" }, props.title));
        }
        if (!props.noCloseButton && $headerContent.length !== 0) {
          $headerContent.push(h(_sfc_main$11, {
            class: ["btn-close"],
            onClick: () => {
              hide();
            }
          }));
        }
        const $innertoast = [];
        if ($headerContent.length > 0) {
          $innertoast.push(h(props.headerTag, {
            class: "toast-header"
          }, { default: () => $headerContent }));
        }
        if (normalizeSlot("default", { hide }, slots) || props.body) {
          const $body = h(isLink(props) ? "b-link" : "div", {
            class: ["toast-body", props.bodyClass],
            onClick: isLink(props) ? { click: onLinkClick } : {}
          }, normalizeSlot("default", { hide }, slots) || props.body);
          $innertoast.push($body);
        }
        return h("div", {
          class: ["toast", props.toastClass, classes.value],
          tabindex: "0"
        }, $innertoast);
      };
      return h("div", {
        "class": ["b-toast"],
        "id": props.id,
        "role": isHiding.value ? null : props.isStatus ? "status" : "alert",
        "aria-live": isHiding.value ? null : props.isStatus ? "polite" : "assertive",
        "aria-atomic": isHiding.value ? null : "true",
        "onmouseenter": onPause,
        "onmouseleave": onUnPause
      }, [
        h(_sfc_main$m, {
          noFade: props.noFade,
          onAfterEnter: OnAfterEnter,
          onBeforeEnter: OnBeforeEnter,
          onAfterLeave: OnAfterLeave,
          onBeforeLeave: OnBeforeLeave
        }, () => [localShow.value ? makeToast() : ""])
      ]);
    };
  }
});
var Components = {
  BAccordion: _sfc_main$1p,
  BAccordionItem: _sfc_main$1n,
  BAlert: _sfc_main$1m,
  BAvatar: _sfc_main$1k,
  BAvatarGroup: _sfc_main$1l,
  BBadge,
  BBreadcrumb: _sfc_main$1g,
  BBreadcrumbItem,
  BButton,
  BButtonGroup: _sfc_main$1e,
  BButtonToolbar: _sfc_main$1d,
  BCard: _sfc_main$1c,
  BCardBody: _sfc_main$19,
  BCardFooter: _sfc_main$18,
  BCardGroup: _sfc_main$17,
  BCardHeader: _sfc_main$16,
  BCardImg: _sfc_main$15,
  BCardSubTitle: _sfc_main$1a,
  BCardText,
  BCardTitle: _sfc_main$1b,
  BCarousel: _sfc_main$13,
  BCarouselSlide: _sfc_main$12,
  BCloseButton: _sfc_main$11,
  BCol,
  BCollapse: _sfc_main$1o,
  BContainer: _sfc_main$_,
  BDropdown: _sfc_main$Z,
  BDropdownDivider: _sfc_main$Y,
  BDropdownForm,
  BDropdownGroup: _sfc_main$W,
  BDropdownHeader,
  BDropdownItem: _sfc_main$U,
  BDropdownItemButton: _sfc_main$T,
  BDropdownText,
  BForm: _sfc_main$R,
  BFormCheckbox: _sfc_main$L,
  BFormCheckboxGroup: _sfc_main$K,
  BFormFloatingLabel: _sfc_main$Q,
  BFormGroup: _sfc_main$J,
  BFormInput,
  BFormInvalidFeedback: _sfc_main$P,
  BFormRadio: _sfc_main$H,
  BFormRadioGroup: _sfc_main$G,
  BFormRow: _sfc_main$O,
  BFormSelect: _sfc_main$D,
  BFormSelectOption: _sfc_main$F,
  BFormSelectOptionGroup: _sfc_main$E,
  BFormText: _sfc_main$N,
  BFormTextarea,
  BFormTag: _sfc_main$C,
  BFormTags: _sfc_main$B,
  BFormValidFeedback: _sfc_main$M,
  BImg: _sfc_main$z,
  BInputGroup: _sfc_main$y,
  BInputGroupAddon: _sfc_main$w,
  BInputGroupAppend: _sfc_main$v,
  BInputGroupPrepend: _sfc_main$u,
  BInputGroupText: _sfc_main$x,
  BLink,
  BListGroup: _sfc_main$t,
  BListGroupItem: _sfc_main$s,
  BModal: _sfc_main$r,
  BNav: _sfc_main$q,
  BNavItem: _sfc_main$p,
  BNavItemDropdown: _sfc_main$o,
  BOffcanvas: _sfc_main$n,
  BOverlay: _sfc_main$l,
  BPagination: _sfc_main$k,
  BPopover: _sfc_main$j,
  BProgress: _sfc_main$h,
  BProgressBar: _sfc_main$i,
  BRow,
  BSkeleton: _sfc_main$f,
  BSkeletonIcon: _sfc_main$e,
  BSkeletonTable: _sfc_main$c,
  BSkeletonWrapper: _sfc_main$b,
  BSpinner: _sfc_main$a,
  BTab: _sfc_main$8,
  BTable: _sfc_main$7,
  BTableSimple: _sfc_main$d,
  BTbody: _sfc_main$6,
  BTd: _sfc_main$5,
  BTfoot: _sfc_main$4,
  BTh: _sfc_main$3,
  BThead: _sfc_main$2,
  BTr: _sfc_main$1,
  BToast: _sfc_main,
  BToaster: _sfc_main$$,
  BToastContainer: _sfc_main$$,
  BTabs: _sfc_main$9,
  BTransition: _sfc_main$m,
  BToastPlugin
};
var BModal = {
  mounted(el, binding) {
    let target = binding.value;
    if (Object.keys(binding.modifiers).length > 0) {
      [target] = Object.keys(binding.modifiers);
    }
    el.setAttribute("data-bs-toggle", "modal");
    el.setAttribute("data-bs-target", `#${target}`);
  }
};
const BPopover = {
  mounted(el, binding) {
    let placement = "right";
    const trigger = [];
    if (binding.modifiers.left) {
      placement = "left";
    } else if (binding.modifiers.right) {
      placement = "right";
    } else if (binding.modifiers.bottom) {
      placement = "bottom";
    } else if (binding.modifiers.top) {
      placement = "top";
    }
    if (binding.modifiers.manual) {
      trigger.push("manual");
    } else {
      if (binding.modifiers.click) {
        trigger.push("click");
      }
      if (binding.modifiers.hover) {
        trigger.push("hover");
      }
      if (binding.modifiers.focus) {
        trigger.push("focus");
      }
    }
    el.setAttribute("data-bs-toggle", "popover");
    new Popover(el, {
      trigger: trigger.length === 0 ? "click" : trigger.join(" "),
      placement,
      content: binding.value
    });
  },
  unmounted(el) {
    const instance = Popover.getInstance(el);
    instance == null ? void 0 : instance.dispose();
  }
};
function resolveTrigger(modifiers) {
  if (modifiers.manual) {
    return "manual";
  }
  const trigger = [];
  if (modifiers.click) {
    trigger.push("click");
  }
  if (modifiers.hover) {
    trigger.push("hover");
  }
  if (modifiers.focus) {
    trigger.push("focus");
  }
  if (trigger.length > 0) {
    return trigger.join(" ");
  }
  return "hover focus";
}
function resolvePlacement(modifiers) {
  if (modifiers.left) {
    return "left";
  }
  if (modifiers.right) {
    return "right";
  }
  if (modifiers.bottom) {
    return "bottom";
  }
  return "top";
}
function resolveDelay(values) {
  if (values == null ? void 0 : values.delay) {
    return values.delay;
  }
  return 0;
}
const BTooltip = {
  beforeMount(el, binding) {
    el.setAttribute("data-bs-toggle", "tooltip");
    const isHtml = /<("[^"]*"|'[^']*'|[^'">])*>/.test(el.title);
    const trigger = resolveTrigger(binding.modifiers);
    const placement = resolvePlacement(binding.modifiers);
    const delay = resolveDelay(binding.value);
    const title = el.getAttribute("title");
    new Tooltip(el, {
      trigger,
      placement,
      delay,
      html: isHtml
    });
    if (title) {
      el.setAttribute("data-bs-original-title", title);
    }
  },
  updated(el) {
    const title = el.getAttribute("title");
    const originalTitle = el.getAttribute("data-bs-original-title");
    const instance = Tooltip.getInstance(el);
    el.removeAttribute("title");
    if (title && title !== originalTitle) {
      instance == null ? void 0 : instance.setContent({ ".tooltip-inner": title });
      el.setAttribute("data-bs-original-title", title);
    }
  },
  unmounted(el) {
    const instance = Tooltip.getInstance(el);
    instance == null ? void 0 : instance.dispose();
  }
};
const observerInstances = /* @__PURE__ */ new Map();
function destroy(el) {
  if (observerInstances.has(el)) {
    const observer = observerInstances.get(el);
    if (observer && observer.stop) {
      observer.stop();
    }
    observerInstances.delete(el);
  }
}
function bind(el, binding) {
  const options = {
    margin: "0px",
    once: false,
    callback: binding.value
  };
  Object.keys(binding.modifiers).forEach((mod) => {
    if (Number.isInteger(mod)) {
      options.margin = `${mod}px`;
    } else if (mod.toLowerCase() === "once") {
      options.once = true;
    }
  });
  destroy(el);
  const observer = new VisibilityObserver(el, options.margin, options.once, options.callback, binding.instance);
  observerInstances.set(el, observer);
}
const BVisible = {
  beforeMount(el, binding) {
    bind(el, binding);
  },
  updated(el, binding) {
    bind(el, binding);
  },
  unmounted(el) {
    destroy(el);
  }
};
class VisibilityObserver {
  constructor(element, margin, once, callback, instance) {
    this.element = element;
    this.margin = margin;
    this.once = once;
    this.callback = callback;
    this.instance = instance;
    this.createObserver();
  }
  createObserver() {
    if (this.observer) {
      this.stop();
    }
    if (this.doneOnce || typeof this.callback !== "function") {
      return;
    }
    try {
      this.observer = new IntersectionObserver(this.handler.bind(this), {
        root: null,
        rootMargin: this.margin,
        threshold: 0
      });
    } catch (e) {
      console.error("Intersection Observer not supported");
      this.doneOnce = true;
      this.observer = void 0;
      this.callback(null);
      return;
    }
    this.instance.$nextTick(() => {
      if (this.observer) {
        this.observer.observe(this.element);
      }
    });
  }
  handler(entries) {
    const [entry] = entries;
    const isIntersecting = Boolean(entry.isIntersecting || entry.intersectionRatio > 0);
    if (isIntersecting !== this.visible) {
      this.visible = isIntersecting;
      this.callback(isIntersecting);
      if (this.once && this.visible) {
        this.doneOnce = true;
        this.stop();
      }
    }
  }
  stop() {
    this.observer && this.observer.disconnect();
    this.observer = null;
  }
}
var focus = {
  mounted(el, binding) {
    if (binding.value !== false) {
      el.focus();
    }
  }
};
var Directives = {
  BModal,
  BPopover,
  BToggle,
  BTooltip,
  BVisible,
  focus
};
var styles = "";
const plugin = {
  install(app, options = {}) {
    Object.entries(Components).forEach(([name, component]) => {
      app.component(name, component);
    });
    Object.entries(Directives).forEach(([name, component]) => {
      app.directive(name, component);
    });
    createBreadcrumb(app);
  }
};
export { _sfc_main$1p as BAccordion, _sfc_main$1n as BAccordionItem, _sfc_main$1m as BAlert, _sfc_main$1k as BAvatar, _sfc_main$1l as BAvatarGroup, BBadge, _sfc_main$1g as BBreadcrumb, BBreadcrumbItem, BButton, _sfc_main$1e as BButtonGroup, _sfc_main$1d as BButtonToolbar, _sfc_main$1c as BCard, _sfc_main$19 as BCardBody, _sfc_main$18 as BCardFooter, _sfc_main$17 as BCardGroup, _sfc_main$16 as BCardHeader, _sfc_main$15 as BCardImg, _sfc_main$1a as BCardSubTitle, BCardText, _sfc_main$1b as BCardTitle, _sfc_main$13 as BCarousel, _sfc_main$12 as BCarouselSlide, _sfc_main$11 as BCloseButton, BCol, _sfc_main$1o as BCollapse, _sfc_main$_ as BContainer, _sfc_main$Z as BDropdown, _sfc_main$Y as BDropdownDivider, BDropdownForm, _sfc_main$W as BDropdownGroup, BDropdownHeader, _sfc_main$U as BDropdownItem, _sfc_main$T as BDropdownItemButton, BDropdownText, _sfc_main$R as BForm, _sfc_main$L as BFormCheckbox, _sfc_main$K as BFormCheckboxGroup, _sfc_main$Q as BFormFloatingLabel, _sfc_main$J as BFormGroup, BFormInput, _sfc_main$P as BFormInvalidFeedback, _sfc_main$H as BFormRadio, _sfc_main$G as BFormRadioGroup, _sfc_main$O as BFormRow, _sfc_main$D as BFormSelect, _sfc_main$F as BFormSelectOption, _sfc_main$E as BFormSelectOptionGroup, _sfc_main$N as BFormText, BFormTextarea, _sfc_main$M as BFormValidFeedback, _sfc_main$z as BImg, _sfc_main$y as BInputGroup, _sfc_main$w as BInputGroupAddon, _sfc_main$v as BInputGroupAppend, _sfc_main$u as BInputGroupPrepend, _sfc_main$x as BInputGroupText, BLink, _sfc_main$t as BListGroup, _sfc_main$s as BListGroupItem, _sfc_main$r as BModal, _sfc_main$q as BNav, _sfc_main$p as BNavItem, _sfc_main$n as BOffcanvas, _sfc_main$l as BOverlay, _sfc_main$k as BPagination, _sfc_main$j as BPopover, _sfc_main$h as BProgress, _sfc_main$i as BProgressBar, BRow, _sfc_main$a as BSpinner, _sfc_main$8 as BTab, _sfc_main$7 as BTable, _sfc_main$d as BTableSimple, _sfc_main$9 as BTabs, _sfc_main$6 as BTbody, _sfc_main$5 as BTd, _sfc_main$4 as BTfoot, _sfc_main$3 as BTh, _sfc_main$2 as BThead, _sfc_main as BToast, BToastPlugin, _sfc_main$$ as BToaster, _sfc_main$1 as BTr, _sfc_main$m as BTransition, plugin as BootstrapVue3, BPopover as VBPopover, BToggle as VBToggle, BTooltip as VBTooltip, BVisible as VBVisible, plugin as default, useToast };
