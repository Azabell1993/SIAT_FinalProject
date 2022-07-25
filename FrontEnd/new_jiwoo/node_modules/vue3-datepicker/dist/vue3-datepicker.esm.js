import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, withModifiers, createVNode, renderSlot, resolveDynamicComponent, Fragment, createCommentVNode, renderList, toDisplayString, withScopeId, computed, resolveComponent, withCtx, createTextVNode, ref, watchEffect, withDirectives, mergeProps, vModelText, vShow } from 'vue';
import { isValid, startOfDecade, endOfDecade, eachYearOfInterval, getYear, getDecade, isBefore, isAfter, subYears, addYears, startOfYear, endOfYear, eachMonthOfInterval, isSameMonth, isSameYear, startOfMonth, endOfMonth, startOfWeek, endOfWeek, setDay, eachDayOfInterval, isSameDay, isWithinInterval, startOfDay, endOfDay, subMonths, addMonths, parse, format } from 'date-fns';
import { formatWithOptions } from 'date-fns/fp';

var script$4 = defineComponent({
    emits: {
        elementClick: (value) => isValid(value),
        left: () => true,
        right: () => true,
        heading: () => true,
    },
    props: {
        headingClickable: {
            type: Boolean,
            default: false,
        },
        leftDisabled: {
            type: Boolean,
            default: false,
        },
        rightDisabled: {
            type: Boolean,
            default: false,
        },
        columnCount: {
            type: Number,
            default: 7,
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
});

const _withId = /*#__PURE__*/withScopeId("data-v-2e128338");

pushScopeId("data-v-2e128338");
const _hoisted_1$1 = { class: "v3dp__heading" };
const _hoisted_2$1 = /*#__PURE__*/createVNode("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /*#__PURE__*/createVNode("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /*#__PURE__*/createVNode("path", {
      stroke: "none",
      d: "M-9 16V-8h24v24z"
    }),
    /*#__PURE__*/createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 0L1 4l4 4"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createVNode("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /*#__PURE__*/createVNode("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /*#__PURE__*/createVNode("path", {
      stroke: "none",
      d: "M15-8v24H-9V-8z"
    }),
    /*#__PURE__*/createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 8l4-4-4-4"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_4 = { class: "v3dp__body" };
const _hoisted_5 = { class: "v3dp__subheading" };
const _hoisted_6 = /*#__PURE__*/createVNode("hr", { class: "v3dp__divider" }, null, -1 /* HOISTED */);
const _hoisted_7 = { class: "v3dp__elements" };
popScopeId();

const render$4 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", {
    class: "v3dp__popout",
    style: { '--popout-column-definition': `repeat(${_ctx.columnCount}, 1fr)` },
    onMousedown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["prevent"]))
  }, [
    createVNode("div", _hoisted_1$1, [
      createVNode("button", {
        class: "v3dp__heading__button",
        disabled: _ctx.leftDisabled,
        onClick: _cache[1] || (_cache[1] = withModifiers($event => (_ctx.$emit('left')), ["stop","prevent"]))
      }, [
        renderSlot(_ctx.$slots, "arrow-left", {}, () => [
          _hoisted_2$1
        ])
      ], 8 /* PROPS */, ["disabled"]),
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.headingClickable ? 'button' : 'span'), {
        class: "v3dp__heading__center",
        onClick: _cache[2] || (_cache[2] = withModifiers($event => (_ctx.$emit('heading')), ["stop","prevent"]))
      }, {
        default: _withId(() => [
          renderSlot(_ctx.$slots, "heading")
        ]),
        _: 3 /* FORWARDED */
      })),
      createVNode("button", {
        class: "v3dp__heading__button",
        disabled: _ctx.rightDisabled,
        onClick: _cache[3] || (_cache[3] = withModifiers($event => (_ctx.$emit('right')), ["stop","prevent"]))
      }, [
        renderSlot(_ctx.$slots, "arrow-right", {}, () => [
          _hoisted_3
        ])
      ], 8 /* PROPS */, ["disabled"])
    ]),
    createVNode("div", _hoisted_4, [
      ('subheading' in _ctx.$slots)
        ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "subheading")
            ]),
            _hoisted_6
          ], 64 /* STABLE_FRAGMENT */))
        : createCommentVNode("v-if", true),
      createVNode("div", _hoisted_7, [
        renderSlot(_ctx.$slots, "body", {}, () => [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return (openBlock(), createBlock("button", {
              key: item.key,
              disabled: item.disabled,
              class: { selected: item.selected },
              onClick: withModifiers($event => (_ctx.$emit('elementClick', item.value)), ["stop","prevent"])
            }, [
              createVNode("span", null, toDisplayString(item.display), 1 /* TEXT */)
            ], 10 /* CLASS, PROPS */, ["disabled", "onClick"]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ])
  ], 36 /* STYLE, HYDRATE_EVENTS */))
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.v3dp__popout[data-v-2e128338] {\n  z-index: 10;\n  position: absolute;\n  /* bottom: 0; */\n  text-align: center;\n  width: 17.5em;\n  background-color: var(--popout-bg-color);\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius);\n  padding: 8px 0 1em;\n  color: var(--text-color);\n}\n.v3dp__popout *[data-v-2e128338] {\n  color: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.v3dp__popout button[data-v-2e128338] {\n  background: none;\n  border: none;\n  outline: none;\n}\n.v3dp__popout button[data-v-2e128338]:not(:disabled) {\n  cursor: pointer;\n}\n.v3dp__heading[data-v-2e128338] {\n  width: 100%;\n  display: flex;\n  height: var(--heading-size);\n  line-height: var(--heading-size);\n  font-weight: var(--heading-weight);\n}\n.v3dp__heading__button[data-v-2e128338] {\n  background: none;\n  border: none;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--heading-size);\n}\nbutton.v3dp__heading__center[data-v-2e128338]:hover,\n.v3dp__heading__button[data-v-2e128338]:not(:disabled):hover {\n  background-color: var(--heading-hover-color);\n}\n.v3dp__heading__center[data-v-2e128338] {\n  flex: 1;\n}\n.v3dp__heading__icon[data-v-2e128338] {\n  height: 12px;\n  stroke: var(--arrow-color);\n}\n.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-2e128338] {\n  stroke: var(--elem-disabled-color);\n}\n.v3dp__subheading[data-v-2e128338],\n.v3dp__elements[data-v-2e128338] {\n  display: grid;\n  grid-template-columns: var(--popout-column-definition);\n  font-size: var(--elem-font-size);\n}\n.v3dp__subheading[data-v-2e128338] {\n  margin-top: 1em;\n}\n.v3dp__divider[data-v-2e128338] {\n  border: 1px solid var(--divider-color);\n  border-radius: 3px;\n}\n.v3dp__elements button[data-v-2e128338]:disabled {\n  color: var(--elem-disabled-color);\n}\n.v3dp__elements button[data-v-2e128338] {\n  padding: 0.3em 0.6em;\n}\n.v3dp__elements button span[data-v-2e128338] {\n  display: block;\n  line-height: 1.9em;\n  height: 1.8em;\n  border-radius: var(--elem-border-radius);\n}\n.v3dp__elements button:not(:disabled):hover span[data-v-2e128338] {\n  background-color: var(--elem-hover-bg-color);\n  color: var(--elem-hover-color);\n}\n.v3dp__elements button.selected span[data-v-2e128338] {\n  background-color: var(--elem-selected-bg-color);\n  color: var(--elem-selected-color);\n}\n";
styleInject(css_248z$1);

script$4.render = render$4;
script$4.__scopeId = "data-v-2e128338";
script$4.__file = "src/datepicker/PickerPopup.vue";

var script$3 = defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => isValid(date),
        select: (date) => isValid(date),
    },
    props: {
        selected: {
            type: Date,
            required: false,
        },
        pageDate: {
            type: Date,
            required: true,
        },
        lowerLimit: {
            type: Date,
            required: false,
        },
        upperLimit: {
            type: Date,
            required: false,
        },
    },
    setup(props, { emit }) {
        const from = computed(() => startOfDecade(props.pageDate));
        const to = computed(() => endOfDecade(props.pageDate));
        const isEnabled = (target, lower, upper) => {
            if (!lower && !upper)
                return true;
            if (lower && getYear(target) < getYear(lower))
                return false;
            if (upper && getYear(target) > getYear(upper))
                return false;
            return true;
        };
        const years = computed(() => eachYearOfInterval({
            start: from.value,
            end: to.value,
        }).map((value) => ({
            value,
            key: String(getYear(value)),
            display: getYear(value),
            selected: props.selected && getYear(value) === getYear(props.selected),
            disabled: !isEnabled(value, props.lowerLimit, props.upperLimit),
        })));
        const heading = computed(() => {
            const start = getYear(from.value);
            const end = getYear(to.value);
            return `${start} - ${end}`;
        });
        const leftDisabled = computed(() => props.lowerLimit &&
            (getDecade(props.lowerLimit) === getDecade(props.pageDate) ||
                isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = computed(() => props.upperLimit &&
            (getDecade(props.upperLimit) === getDecade(props.pageDate) ||
                isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', subYears(props.pageDate, 10));
        const nextPage = () => emit('update:pageDate', addYears(props.pageDate, 10));
        return {
            years,
            heading,
            leftDisabled,
            rightDisabled,
            previousPage,
            nextPage,
        };
    },
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_popup = resolveComponent("picker-popup");

  return (openBlock(), createBlock(_component_picker_popup, {
    columnCount: 3,
    leftDisabled: _ctx.leftDisabled,
    rightDisabled: _ctx.rightDisabled,
    items: _ctx.years,
    onLeft: _ctx.previousPage,
    onRight: _ctx.nextPage,
    onElementClick: _cache[1] || (_cache[1] = $event => (_ctx.$emit('select', $event)))
  }, {
    heading: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]))
}

script$3.render = render$3;
script$3.__file = "src/datepicker/YearPicker.vue";

var script$2 = defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => isValid(date),
        select: (date) => isValid(date),
        back: () => true,
    },
    props: {
        /**
         * Currently selected date, needed for highlighting
         */
        selected: {
            type: Date,
            required: false,
        },
        pageDate: {
            type: Date,
            required: true,
        },
        format: {
            type: String,
            required: false,
            default: 'LLL',
        },
        locale: {
            type: Object,
            required: false,
        },
        lowerLimit: {
            type: Date,
            required: false,
        },
        upperLimit: {
            type: Date,
            required: false,
        },
    },
    setup(props, { emit }) {
        const from = computed(() => startOfYear(props.pageDate));
        const to = computed(() => endOfYear(props.pageDate));
        const format = computed(() => formatWithOptions({
            locale: props.locale,
        })(props.format));
        const isEnabled = (target, lower, upper) => {
            if (!lower && !upper)
                return true;
            if (lower && isBefore(target, startOfMonth(lower)))
                return false;
            if (upper && isAfter(target, endOfMonth(upper)))
                return false;
            return true;
        };
        const months = computed(() => eachMonthOfInterval({
            start: from.value,
            end: to.value,
        }).map((value) => ({
            value,
            display: format.value(value),
            key: format.value(value),
            selected: props.selected && isSameMonth(props.selected, value),
            disabled: !isEnabled(value, props.lowerLimit, props.upperLimit),
        })));
        const heading = computed(() => getYear(from.value));
        const leftDisabled = computed(() => props.lowerLimit &&
            (isSameYear(props.lowerLimit, props.pageDate) ||
                isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = computed(() => props.upperLimit &&
            (isSameYear(props.upperLimit, props.pageDate) ||
                isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', subYears(props.pageDate, 1));
        const nextPage = () => emit('update:pageDate', addYears(props.pageDate, 1));
        return {
            months,
            heading,
            leftDisabled,
            rightDisabled,
            previousPage,
            nextPage,
        };
    },
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_popup = resolveComponent("picker-popup");

  return (openBlock(), createBlock(_component_picker_popup, {
    headingClickable: "",
    columnCount: 3,
    items: _ctx.months,
    leftDisabled: _ctx.leftDisabled,
    rightDisabled: _ctx.rightDisabled,
    onLeft: _ctx.previousPage,
    onRight: _ctx.nextPage,
    onHeading: _cache[1] || (_cache[1] = $event => (_ctx.$emit('back'))),
    onElementClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('select', $event)))
  }, {
    heading: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]))
}

script$2.render = render$2;
script$2.__file = "src/datepicker/MonthPicker.vue";

var script$1 = defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => isValid(date),
        select: (date) => isValid(date),
        back: () => true,
    },
    props: {
        selected: {
            type: Date,
            required: false,
        },
        pageDate: {
            type: Date,
            required: true,
        },
        format: {
            type: String,
            required: false,
            default: 'dd',
        },
        headingFormat: {
            type: String,
            required: false,
            default: 'LLLL yyyy',
        },
        weekdayFormat: {
            type: String,
            required: false,
            default: 'EE',
        },
        locale: {
            type: Object,
            required: false,
        },
        weekStartsOn: {
            type: Number,
            required: false,
            default: 1,
            validator: (i) => typeof i === 'number' && Number.isInteger(i) && i >= 0 && i <= 6,
        },
        lowerLimit: {
            type: Date,
            required: false,
        },
        upperLimit: {
            type: Date,
            required: false,
        },
        disabledDates: {
            type: Object,
            required: false,
        },
    },
    setup(props, { emit }) {
        const format = computed(() => formatWithOptions({
            locale: props.locale,
            weekStartsOn: props.weekStartsOn,
        }));
        const monthStart = computed(() => startOfMonth(props.pageDate));
        const monthEnd = computed(() => endOfMonth(props.pageDate));
        const currentMonth = computed(() => ({
            start: monthStart.value,
            end: monthEnd.value,
        }));
        const displayedInterval = computed(() => ({
            start: startOfWeek(monthStart.value, {
                weekStartsOn: props.weekStartsOn,
            }),
            end: endOfWeek(monthEnd.value, {
                weekStartsOn: props.weekStartsOn,
            }),
        }));
        const weekDays = computed(() => {
            const initial = props.weekStartsOn;
            const dayFormat = format.value(props.weekdayFormat);
            return Array.from(Array(7))
                .map((_, i) => (initial + i) % 7)
                .map((v) => setDay(new Date(), v, {
                weekStartsOn: props.weekStartsOn,
            }))
                .map(dayFormat);
        });
        const isEnabled = (target, lower, upper, disabledDates) => {
            var _a;
            if ((_a = disabledDates === null || disabledDates === void 0 ? void 0 : disabledDates.dates) === null || _a === void 0 ? void 0 : _a.some(date => isSameDay(target, date)))
                return false;
            if (!lower && !upper)
                return true;
            if (lower && isBefore(target, startOfDay(lower)))
                return false;
            if (upper && isAfter(target, endOfDay(upper)))
                return false;
            return true;
        };
        const days = computed(() => {
            const dayFormat = format.value(props.format);
            return eachDayOfInterval(displayedInterval.value).map((value) => ({
                value,
                display: dayFormat(value),
                selected: props.selected && isSameDay(props.selected, value),
                disabled: !isWithinInterval(value, currentMonth.value) ||
                    !isEnabled(value, props.lowerLimit, props.upperLimit, props.disabledDates),
                key: format.value('yyyy-MM-dd', value),
            }));
        });
        const heading = computed(() => format.value(props.headingFormat)(props.pageDate));
        const leftDisabled = computed(() => props.lowerLimit &&
            (isSameMonth(props.lowerLimit, props.pageDate) ||
                isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = computed(() => props.upperLimit &&
            (isSameMonth(props.upperLimit, props.pageDate) ||
                isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', subMonths(props.pageDate, 1));
        const nextPage = () => emit('update:pageDate', addMonths(props.pageDate, 1));
        return {
            weekDays,
            days,
            heading,
            leftDisabled,
            rightDisabled,
            previousPage,
            nextPage,
        };
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_popup = resolveComponent("picker-popup");

  return (openBlock(), createBlock(_component_picker_popup, {
    headingClickable: "",
    leftDisabled: _ctx.leftDisabled,
    rightDisabled: _ctx.rightDisabled,
    items: _ctx.days,
    onLeft: _ctx.previousPage,
    onRight: _ctx.nextPage,
    onHeading: _cache[1] || (_cache[1] = $event => (_ctx.$emit('back'))),
    onElementClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('select', $event)))
  }, {
    heading: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    subheading: withCtx(() => [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.weekDays, (day) => {
        return (openBlock(), createBlock("span", { key: day }, toDisplayString(day), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]))
}

script$1.render = render$1;
script$1.__file = "src/datepicker/DayPicker.vue";

const TIME_RESOLUTIONS = ['day', 'month', 'year'];
var script = defineComponent({
    components: {
        YearPicker: script$3,
        MonthPicker: script$2,
        DayPicker: script$1,
    },
    inheritAttrs: false,
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        /**
         * `v-model` for selected date
         */
        modelValue: {
            type: Date,
            required: false,
        },
        /**
         * Dates not available for picking
         */
        disabledDates: {
            type: Object,
            required: false,
        },
        /**
         * Upper limit for available dates for picking
         */
        upperLimit: {
            type: Date,
            required: false,
        },
        /**
         * Lower limit for available dates for picking
         */
        lowerLimit: {
            type: Date,
            required: false,
        },
        /**
         * View on which the date picker should open. Can be either `year`, `month`, or `day`
         */
        startingView: {
            type: String,
            required: false,
            default: 'day',
            validate: (v) => typeof v === 'string' && TIME_RESOLUTIONS.includes(v),
        },
        /**
         * `date-fns`-type formatting for a month view heading
         */
        monthHeadingFormat: {
            type: String,
            required: false,
            default: 'LLLL yyyy',
        },
        /**
         * `date-fns`-type formatting for the month picker view
         */
        monthListFormat: {
            type: String,
            required: false,
            default: 'LLL',
        },
        /**
         * `date-fns`-type formatting for a line of weekdays on day view
         */
        weekdayFormat: {
            type: String,
            required: false,
            default: 'EE',
        },
        /**
         * `date-fns`-type format in which the string in the input should be both
         * parsed and displayed
         */
        inputFormat: {
            type: String,
            required: false,
            default: 'yyyy-MM-dd',
        },
        /**
         * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
         * Used in string formatting (see default `monthHeadingFormat`)
         */
        locale: {
            type: Object,
            required: false,
        },
        /**
         * Day on which the week should start.
         *
         * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
         * Week starts with a Monday (1) by default
         */
        weekStartsOn: {
            type: Number,
            required: false,
            default: 1,
            validator: (value) => [0, 1, 2, 3, 4, 5, 6].includes(value),
        },
        /**
         * Disables datepicker and prevents it's opening
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Clears selected date
         */
        clearable: {
            type: Boolean,
            required: false,
            default: false,
        },
        /*
         * Allows user to input date manually
         */
        typeable: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * If set, lower-level views won't show
         */
        minimumView: {
            type: String,
            required: false,
            default: 'day',
            validate: (v) => typeof v === 'string' && TIME_RESOLUTIONS.includes(v),
        },
    },
    emits: {
        'update:modelValue': (value) => value === null || value === undefined || isValid(value),
    },
    setup(props, { emit, attrs }) {
        const viewShown = ref('none');
        const pageDate = ref(new Date());
        const inputRef = ref(null);
        const input = ref('');
        watchEffect(() => {
            const parsed = parse(input.value, props.inputFormat, new Date());
            if (isValid(parsed)) {
                pageDate.value = parsed;
            }
        });
        watchEffect(() => (input.value =
            props.modelValue && isValid(props.modelValue)
                ? format(props.modelValue, props.inputFormat, {
                    locale: props.locale,
                })
                : ''));
        const renderView = (view = 'none') => {
            if (!props.disabled)
                viewShown.value = view;
        };
        watchEffect(() => {
            if (props.disabled)
                viewShown.value = 'none';
        });
        const selectYear = (date) => {
            pageDate.value = date;
            if (props.minimumView === 'year') {
                viewShown.value = 'none';
                emit('update:modelValue', date);
            }
            else {
                viewShown.value = 'month';
            }
        };
        const selectMonth = (date) => {
            pageDate.value = date;
            if (props.minimumView === 'month') {
                viewShown.value = 'none';
                emit('update:modelValue', date);
            }
            else {
                viewShown.value = 'day';
            }
        };
        const selectDay = (date) => {
            emit('update:modelValue', date);
            viewShown.value = 'none';
        };
        const clearModelValue = () => {
            if (props.clearable) {
                emit('update:modelValue', null);
            }
        };
        const keyUp = (event) => {
            const code = event.keyCode ? event.keyCode : event.which;
            // close calendar if escape or enter are pressed
            const closeButton = [
                27,
                13, // enter
            ].includes(code);
            if (closeButton) {
                inputRef.value.blur();
            }
            if (props.typeable) {
                const parsedDate = parse(inputRef.value.value, props.inputFormat, new Date(), { locale: props.locale });
                if (isValid(parsedDate)) {
                    input.value = inputRef.value.value;
                    emit('update:modelValue', parsedDate);
                }
            }
        };
        const initialView = computed(() => {
            const startingViewOrder = TIME_RESOLUTIONS.indexOf(props.startingView);
            const minimumViewOrder = TIME_RESOLUTIONS.indexOf(props.minimumView);
            return startingViewOrder < minimumViewOrder
                ? props.minimumView
                : props.startingView;
        });
        const variables = (object) => Object.fromEntries(Object.entries(object !== null && object !== void 0 ? object : {}).filter(([key, _]) => key.startsWith('--')));
        return {
            input,
            inputRef,
            pageDate,
            renderView,
            selectYear,
            selectMonth,
            selectDay,
            keyUp,
            viewShown,
            clearModelValue,
            initialView,
            log: (e) => console.log(e),
            variables,
        };
    },
});

const _hoisted_1 = { class: "v3dp__input_wrapper" };
const _hoisted_2 = { class: "v3dp__clearable" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_year_picker = resolveComponent("year-picker");
  const _component_month_picker = resolveComponent("month-picker");
  const _component_day_picker = resolveComponent("day-picker");

  return (openBlock(), createBlock("div", {
    class: "v3dp__datepicker",
    style: _ctx.variables(_ctx.$attrs.style)
  }, [
    createVNode("div", _hoisted_1, [
      withDirectives(createVNode("input", mergeProps({
        type: "text",
        ref: "inputRef",
        readonly: !_ctx.typeable,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.input = $event))
      }, _ctx.$attrs, {
        placeholder: _ctx.placeholder,
        disabled: _ctx.disabled,
        tabindex: _ctx.disabled ? -1 : 0,
        onKeyup: _cache[2] || (_cache[2] = (...args) => (_ctx.keyUp && _ctx.keyUp(...args))),
        onBlur: _cache[3] || (_cache[3] = $event => (_ctx.renderView())),
        onFocus: _cache[4] || (_cache[4] = $event => (_ctx.renderView(_ctx.initialView))),
        onClick: _cache[5] || (_cache[5] = $event => (_ctx.renderView(_ctx.initialView)))
      }), null, 16 /* FULL_PROPS */, ["readonly", "placeholder", "disabled", "tabindex"]), [
        [vModelText, _ctx.input]
      ]),
      withDirectives(createVNode("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "clear", { onClear: _ctx.clearModelValue }, () => [
          createVNode("i", {
            onClick: _cache[6] || (_cache[6] = $event => (_ctx.clearModelValue()))
          }, "x")
        ])
      ], 512 /* NEED_PATCH */), [
        [vShow, _ctx.clearable && _ctx.modelValue]
      ])
    ]),
    withDirectives(createVNode(_component_year_picker, {
      pageDate: _ctx.pageDate,
      "onUpdate:pageDate": _cache[7] || (_cache[7] = $event => (_ctx.pageDate = $event)),
      selected: _ctx.modelValue,
      lowerLimit: _ctx.lowerLimit,
      upperLimit: _ctx.upperLimit,
      onSelect: _ctx.selectYear
    }, null, 8 /* PROPS */, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [vShow, _ctx.viewShown === 'year']
    ]),
    withDirectives(createVNode(_component_month_picker, {
      pageDate: _ctx.pageDate,
      "onUpdate:pageDate": _cache[8] || (_cache[8] = $event => (_ctx.pageDate = $event)),
      selected: _ctx.modelValue,
      onSelect: _ctx.selectMonth,
      lowerLimit: _ctx.lowerLimit,
      upperLimit: _ctx.upperLimit,
      format: _ctx.monthListFormat,
      headingFormat: _ctx.monthHeadingFormat,
      locale: _ctx.locale,
      onBack: _cache[9] || (_cache[9] = $event => (_ctx.viewShown = 'year'))
    }, null, 8 /* PROPS */, ["pageDate", "selected", "onSelect", "lowerLimit", "upperLimit", "format", "headingFormat", "locale"]), [
      [vShow, _ctx.viewShown === 'month']
    ]),
    withDirectives(createVNode(_component_day_picker, {
      pageDate: _ctx.pageDate,
      "onUpdate:pageDate": _cache[10] || (_cache[10] = $event => (_ctx.pageDate = $event)),
      selected: _ctx.modelValue,
      weekStartsOn: _ctx.weekStartsOn,
      lowerLimit: _ctx.lowerLimit,
      upperLimit: _ctx.upperLimit,
      disabledDates: _ctx.disabledDates,
      locale: _ctx.locale,
      weekdayFormat: _ctx.weekdayFormat,
      onSelect: _ctx.selectDay,
      onBack: _cache[11] || (_cache[11] = $event => (_ctx.viewShown = 'month'))
    }, null, 8 /* PROPS */, ["pageDate", "selected", "weekStartsOn", "lowerLimit", "upperLimit", "disabledDates", "locale", "weekdayFormat", "onSelect"]), [
      [vShow, _ctx.viewShown === 'day']
    ])
  ], 4 /* STYLE */))
}

var css_248z = "\n.v3dp__datepicker {\n  --popout-bg-color: var(--vdp-bg-color, #fff);\n  --box-shadow: var(\n    --vdp-box-shadow,\n    0 4px 10px 0 rgba(128, 144, 160, 0.1),\n    0 0 1px 0 rgba(128, 144, 160, 0.81)\n  );\n  --text-color: var(--vdp-text-color, #000000);\n  --border-radius: var(--vdp-border-radius, 3px);\n  --heading-size: var(--vdp-heading-size, 2.5em); /* 40px for 16px font */\n  --heading-weight: var(--vdp-heading-weight, bold);\n  --heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);\n  --arrow-color: var(--vdp-arrow-color, currentColor);\n\n  --elem-color: var(--vdp-elem-color, currentColor);\n  --elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);\n  --elem-hover-color: var(--vdp-hover-color, #fff);\n  --elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);\n  --elem-selected-color: var(--vdp-selected-color, #fff);\n  --elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);\n\n  --elem-font-size: var(--vdp-elem-font-size, 0.8em);\n  --elem-border-radius: var(--vdp-elem-border-radius, 3px);\n\n  --divider-color: var(--vdp-divider-color, var(--elem-disabled-color));\n\n  position: relative;\n}\n.v3dp__clearable {\n  display: inline;\n  position: relative;\n  left: -15px;\n  cursor: pointer;\n}\n";
styleInject(css_248z);

script.render = render;
script.__file = "src/datepicker/Datepicker.vue";

export default script;
