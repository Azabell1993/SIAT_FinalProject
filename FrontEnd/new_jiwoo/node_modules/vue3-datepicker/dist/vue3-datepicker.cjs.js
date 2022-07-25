'use strict';

var vue = require('vue');
var dateFns = require('date-fns');
var fp = require('date-fns/fp');

var script$4 = vue.defineComponent({
    emits: {
        elementClick: (value) => dateFns.isValid(value),
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-2e128338");

vue.pushScopeId("data-v-2e128338");
const _hoisted_1$1 = { class: "v3dp__heading" };
const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /*#__PURE__*/vue.createVNode("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /*#__PURE__*/vue.createVNode("path", {
      stroke: "none",
      d: "M-9 16V-8h24v24z"
    }),
    /*#__PURE__*/vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 0L1 4l4 4"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/vue.createVNode("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /*#__PURE__*/vue.createVNode("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /*#__PURE__*/vue.createVNode("path", {
      stroke: "none",
      d: "M15-8v24H-9V-8z"
    }),
    /*#__PURE__*/vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 8l4-4-4-4"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_4 = { class: "v3dp__body" };
const _hoisted_5 = { class: "v3dp__subheading" };
const _hoisted_6 = /*#__PURE__*/vue.createVNode("hr", { class: "v3dp__divider" }, null, -1 /* HOISTED */);
const _hoisted_7 = { class: "v3dp__elements" };
vue.popScopeId();

const render$4 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("div", {
    class: "v3dp__popout",
    style: { '--popout-column-definition': `repeat(${_ctx.columnCount}, 1fr)` },
    onMousedown: _cache[4] || (_cache[4] = vue.withModifiers(() => {}, ["prevent"]))
  }, [
    vue.createVNode("div", _hoisted_1$1, [
      vue.createVNode("button", {
        class: "v3dp__heading__button",
        disabled: _ctx.leftDisabled,
        onClick: _cache[1] || (_cache[1] = vue.withModifiers($event => (_ctx.$emit('left')), ["stop","prevent"]))
      }, [
        vue.renderSlot(_ctx.$slots, "arrow-left", {}, () => [
          _hoisted_2$1
        ])
      ], 8 /* PROPS */, ["disabled"]),
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.headingClickable ? 'button' : 'span'), {
        class: "v3dp__heading__center",
        onClick: _cache[2] || (_cache[2] = vue.withModifiers($event => (_ctx.$emit('heading')), ["stop","prevent"]))
      }, {
        default: _withId(() => [
          vue.renderSlot(_ctx.$slots, "heading")
        ]),
        _: 3 /* FORWARDED */
      })),
      vue.createVNode("button", {
        class: "v3dp__heading__button",
        disabled: _ctx.rightDisabled,
        onClick: _cache[3] || (_cache[3] = vue.withModifiers($event => (_ctx.$emit('right')), ["stop","prevent"]))
      }, [
        vue.renderSlot(_ctx.$slots, "arrow-right", {}, () => [
          _hoisted_3
        ])
      ], 8 /* PROPS */, ["disabled"])
    ]),
    vue.createVNode("div", _hoisted_4, [
      ('subheading' in _ctx.$slots)
        ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
            vue.createVNode("div", _hoisted_5, [
              vue.renderSlot(_ctx.$slots, "subheading")
            ]),
            _hoisted_6
          ], 64 /* STABLE_FRAGMENT */))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode("div", _hoisted_7, [
        vue.renderSlot(_ctx.$slots, "body", {}, () => [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.items, (item) => {
            return (vue.openBlock(), vue.createBlock("button", {
              key: item.key,
              disabled: item.disabled,
              class: { selected: item.selected },
              onClick: vue.withModifiers($event => (_ctx.$emit('elementClick', item.value)), ["stop","prevent"])
            }, [
              vue.createVNode("span", null, vue.toDisplayString(item.display), 1 /* TEXT */)
            ], 10 /* CLASS, PROPS */, ["disabled", "onClick"]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ])
  ], 36 /* STYLE, HYDRATE_EVENTS */))
});

script$4.render = render$4;
script$4.__scopeId = "data-v-2e128338";
script$4.__file = "src/datepicker/PickerPopup.vue";

var script$3 = vue.defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => dateFns.isValid(date),
        select: (date) => dateFns.isValid(date),
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
        const from = vue.computed(() => dateFns.startOfDecade(props.pageDate));
        const to = vue.computed(() => dateFns.endOfDecade(props.pageDate));
        const isEnabled = (target, lower, upper) => {
            if (!lower && !upper)
                return true;
            if (lower && dateFns.getYear(target) < dateFns.getYear(lower))
                return false;
            if (upper && dateFns.getYear(target) > dateFns.getYear(upper))
                return false;
            return true;
        };
        const years = vue.computed(() => dateFns.eachYearOfInterval({
            start: from.value,
            end: to.value,
        }).map((value) => ({
            value,
            key: String(dateFns.getYear(value)),
            display: dateFns.getYear(value),
            selected: props.selected && dateFns.getYear(value) === dateFns.getYear(props.selected),
            disabled: !isEnabled(value, props.lowerLimit, props.upperLimit),
        })));
        const heading = vue.computed(() => {
            const start = dateFns.getYear(from.value);
            const end = dateFns.getYear(to.value);
            return `${start} - ${end}`;
        });
        const leftDisabled = vue.computed(() => props.lowerLimit &&
            (dateFns.getDecade(props.lowerLimit) === dateFns.getDecade(props.pageDate) ||
                dateFns.isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = vue.computed(() => props.upperLimit &&
            (dateFns.getDecade(props.upperLimit) === dateFns.getDecade(props.pageDate) ||
                dateFns.isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', dateFns.subYears(props.pageDate, 10));
        const nextPage = () => emit('update:pageDate', dateFns.addYears(props.pageDate, 10));
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
  const _component_picker_popup = vue.resolveComponent("picker-popup");

  return (vue.openBlock(), vue.createBlock(_component_picker_popup, {
    columnCount: 3,
    leftDisabled: _ctx.leftDisabled,
    rightDisabled: _ctx.rightDisabled,
    items: _ctx.years,
    onLeft: _ctx.previousPage,
    onRight: _ctx.nextPage,
    onElementClick: _cache[1] || (_cache[1] = $event => (_ctx.$emit('select', $event)))
  }, {
    heading: vue.withCtx(() => [
      vue.createTextVNode(vue.toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]))
}

script$3.render = render$3;
script$3.__file = "src/datepicker/YearPicker.vue";

var script$2 = vue.defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => dateFns.isValid(date),
        select: (date) => dateFns.isValid(date),
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
        const from = vue.computed(() => dateFns.startOfYear(props.pageDate));
        const to = vue.computed(() => dateFns.endOfYear(props.pageDate));
        const format = vue.computed(() => fp.formatWithOptions({
            locale: props.locale,
        })(props.format));
        const isEnabled = (target, lower, upper) => {
            if (!lower && !upper)
                return true;
            if (lower && dateFns.isBefore(target, dateFns.startOfMonth(lower)))
                return false;
            if (upper && dateFns.isAfter(target, dateFns.endOfMonth(upper)))
                return false;
            return true;
        };
        const months = vue.computed(() => dateFns.eachMonthOfInterval({
            start: from.value,
            end: to.value,
        }).map((value) => ({
            value,
            display: format.value(value),
            key: format.value(value),
            selected: props.selected && dateFns.isSameMonth(props.selected, value),
            disabled: !isEnabled(value, props.lowerLimit, props.upperLimit),
        })));
        const heading = vue.computed(() => dateFns.getYear(from.value));
        const leftDisabled = vue.computed(() => props.lowerLimit &&
            (dateFns.isSameYear(props.lowerLimit, props.pageDate) ||
                dateFns.isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = vue.computed(() => props.upperLimit &&
            (dateFns.isSameYear(props.upperLimit, props.pageDate) ||
                dateFns.isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', dateFns.subYears(props.pageDate, 1));
        const nextPage = () => emit('update:pageDate', dateFns.addYears(props.pageDate, 1));
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
  const _component_picker_popup = vue.resolveComponent("picker-popup");

  return (vue.openBlock(), vue.createBlock(_component_picker_popup, {
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
    heading: vue.withCtx(() => [
      vue.createTextVNode(vue.toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]))
}

script$2.render = render$2;
script$2.__file = "src/datepicker/MonthPicker.vue";

var script$1 = vue.defineComponent({
    components: {
        PickerPopup: script$4,
    },
    emits: {
        'update:pageDate': (date) => dateFns.isValid(date),
        select: (date) => dateFns.isValid(date),
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
        const format = vue.computed(() => fp.formatWithOptions({
            locale: props.locale,
            weekStartsOn: props.weekStartsOn,
        }));
        const monthStart = vue.computed(() => dateFns.startOfMonth(props.pageDate));
        const monthEnd = vue.computed(() => dateFns.endOfMonth(props.pageDate));
        const currentMonth = vue.computed(() => ({
            start: monthStart.value,
            end: monthEnd.value,
        }));
        const displayedInterval = vue.computed(() => ({
            start: dateFns.startOfWeek(monthStart.value, {
                weekStartsOn: props.weekStartsOn,
            }),
            end: dateFns.endOfWeek(monthEnd.value, {
                weekStartsOn: props.weekStartsOn,
            }),
        }));
        const weekDays = vue.computed(() => {
            const initial = props.weekStartsOn;
            const dayFormat = format.value(props.weekdayFormat);
            return Array.from(Array(7))
                .map((_, i) => (initial + i) % 7)
                .map((v) => dateFns.setDay(new Date(), v, {
                weekStartsOn: props.weekStartsOn,
            }))
                .map(dayFormat);
        });
        const isEnabled = (target, lower, upper, disabledDates) => {
            var _a;
            if ((_a = disabledDates === null || disabledDates === void 0 ? void 0 : disabledDates.dates) === null || _a === void 0 ? void 0 : _a.some(date => dateFns.isSameDay(target, date)))
                return false;
            if (!lower && !upper)
                return true;
            if (lower && dateFns.isBefore(target, dateFns.startOfDay(lower)))
                return false;
            if (upper && dateFns.isAfter(target, dateFns.endOfDay(upper)))
                return false;
            return true;
        };
        const days = vue.computed(() => {
            const dayFormat = format.value(props.format);
            return dateFns.eachDayOfInterval(displayedInterval.value).map((value) => ({
                value,
                display: dayFormat(value),
                selected: props.selected && dateFns.isSameDay(props.selected, value),
                disabled: !dateFns.isWithinInterval(value, currentMonth.value) ||
                    !isEnabled(value, props.lowerLimit, props.upperLimit, props.disabledDates),
                key: format.value('yyyy-MM-dd', value),
            }));
        });
        const heading = vue.computed(() => format.value(props.headingFormat)(props.pageDate));
        const leftDisabled = vue.computed(() => props.lowerLimit &&
            (dateFns.isSameMonth(props.lowerLimit, props.pageDate) ||
                dateFns.isBefore(props.pageDate, props.lowerLimit)));
        const rightDisabled = vue.computed(() => props.upperLimit &&
            (dateFns.isSameMonth(props.upperLimit, props.pageDate) ||
                dateFns.isAfter(props.pageDate, props.upperLimit)));
        const previousPage = () => emit('update:pageDate', dateFns.subMonths(props.pageDate, 1));
        const nextPage = () => emit('update:pageDate', dateFns.addMonths(props.pageDate, 1));
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
  const _component_picker_popup = vue.resolveComponent("picker-popup");

  return (vue.openBlock(), vue.createBlock(_component_picker_popup, {
    headingClickable: "",
    leftDisabled: _ctx.leftDisabled,
    rightDisabled: _ctx.rightDisabled,
    items: _ctx.days,
    onLeft: _ctx.previousPage,
    onRight: _ctx.nextPage,
    onHeading: _cache[1] || (_cache[1] = $event => (_ctx.$emit('back'))),
    onElementClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('select', $event)))
  }, {
    heading: vue.withCtx(() => [
      vue.createTextVNode(vue.toDisplayString(_ctx.heading), 1 /* TEXT */)
    ]),
    subheading: vue.withCtx(() => [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.weekDays, (day) => {
        return (vue.openBlock(), vue.createBlock("span", { key: day }, vue.toDisplayString(day), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]))
}

script$1.render = render$1;
script$1.__file = "src/datepicker/DayPicker.vue";

const TIME_RESOLUTIONS = ['day', 'month', 'year'];
var script = vue.defineComponent({
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
        'update:modelValue': (value) => value === null || value === undefined || dateFns.isValid(value),
    },
    setup(props, { emit, attrs }) {
        const viewShown = vue.ref('none');
        const pageDate = vue.ref(new Date());
        const inputRef = vue.ref(null);
        const input = vue.ref('');
        vue.watchEffect(() => {
            const parsed = dateFns.parse(input.value, props.inputFormat, new Date());
            if (dateFns.isValid(parsed)) {
                pageDate.value = parsed;
            }
        });
        vue.watchEffect(() => (input.value =
            props.modelValue && dateFns.isValid(props.modelValue)
                ? dateFns.format(props.modelValue, props.inputFormat, {
                    locale: props.locale,
                })
                : ''));
        const renderView = (view = 'none') => {
            if (!props.disabled)
                viewShown.value = view;
        };
        vue.watchEffect(() => {
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
                const parsedDate = dateFns.parse(inputRef.value.value, props.inputFormat, new Date(), { locale: props.locale });
                if (dateFns.isValid(parsedDate)) {
                    input.value = inputRef.value.value;
                    emit('update:modelValue', parsedDate);
                }
            }
        };
        const initialView = vue.computed(() => {
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
  const _component_year_picker = vue.resolveComponent("year-picker");
  const _component_month_picker = vue.resolveComponent("month-picker");
  const _component_day_picker = vue.resolveComponent("day-picker");

  return (vue.openBlock(), vue.createBlock("div", {
    class: "v3dp__datepicker",
    style: _ctx.variables(_ctx.$attrs.style)
  }, [
    vue.createVNode("div", _hoisted_1, [
      vue.withDirectives(vue.createVNode("input", vue.mergeProps({
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
        [vue.vModelText, _ctx.input]
      ]),
      vue.withDirectives(vue.createVNode("div", _hoisted_2, [
        vue.renderSlot(_ctx.$slots, "clear", { onClear: _ctx.clearModelValue }, () => [
          vue.createVNode("i", {
            onClick: _cache[6] || (_cache[6] = $event => (_ctx.clearModelValue()))
          }, "x")
        ])
      ], 512 /* NEED_PATCH */), [
        [vue.vShow, _ctx.clearable && _ctx.modelValue]
      ])
    ]),
    vue.withDirectives(vue.createVNode(_component_year_picker, {
      pageDate: _ctx.pageDate,
      "onUpdate:pageDate": _cache[7] || (_cache[7] = $event => (_ctx.pageDate = $event)),
      selected: _ctx.modelValue,
      lowerLimit: _ctx.lowerLimit,
      upperLimit: _ctx.upperLimit,
      onSelect: _ctx.selectYear
    }, null, 8 /* PROPS */, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [vue.vShow, _ctx.viewShown === 'year']
    ]),
    vue.withDirectives(vue.createVNode(_component_month_picker, {
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
      [vue.vShow, _ctx.viewShown === 'month']
    ]),
    vue.withDirectives(vue.createVNode(_component_day_picker, {
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
      [vue.vShow, _ctx.viewShown === 'day']
    ])
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "src/datepicker/Datepicker.vue";

module.exports = script;
