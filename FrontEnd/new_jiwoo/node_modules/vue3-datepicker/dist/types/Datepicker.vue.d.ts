import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * `v-model` for selected date
     */
    modelValue: {
        type: PropType<Date>;
        required: false;
    };
    /**
     * Dates not available for picking
     */
    disabledDates: {
        type: PropType<{
            dates?: Date[] | undefined;
        }>;
        required: false;
    };
    /**
     * Upper limit for available dates for picking
     */
    upperLimit: {
        type: PropType<Date>;
        required: false;
    };
    /**
     * Lower limit for available dates for picking
     */
    lowerLimit: {
        type: PropType<Date>;
        required: false;
    };
    /**
     * View on which the date picker should open. Can be either `year`, `month`, or `day`
     */
    startingView: {
        type: PropType<"day" | "month" | "year">;
        required: false;
        default: string;
        validate: (v: unknown) => boolean;
    };
    /**
     * `date-fns`-type formatting for a month view heading
     */
    monthHeadingFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * `date-fns`-type formatting for the month picker view
     */
    monthListFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * `date-fns`-type formatting for a line of weekdays on day view
     */
    weekdayFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * `date-fns`-type format in which the string in the input should be both
     * parsed and displayed
     */
    inputFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
     * Used in string formatting (see default `monthHeadingFormat`)
     */
    locale: {
        type: PropType<Locale>;
        required: false;
    };
    /**
     * Day on which the week should start.
     *
     * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
     * Week starts with a Monday (1) by default
     */
    weekStartsOn: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (value: any) => boolean;
    };
    /**
     * Disables datepicker and prevents it's opening
     */
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Clears selected date
     */
    clearable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    typeable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * If set, lower-level views won't show
     */
    minimumView: {
        type: PropType<"day" | "month" | "year">;
        required: false;
        default: string;
        validate: (v: unknown) => boolean;
    };
}, {
    input: import("vue").Ref<string>;
    inputRef: import("vue").Ref<HTMLInputElement | null>;
    pageDate: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    } & {
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    renderView: (view?: "day" | "month" | "year" | "none") => void;
    selectYear: (date: Date) => void;
    selectMonth: (date: Date) => void;
    selectDay: (date: Date) => void;
    keyUp: (event: KeyboardEvent) => void;
    viewShown: import("vue").Ref<"day" | "month" | "year" | "none">;
    clearModelValue: () => void;
    initialView: import("vue").ComputedRef<"day" | "month" | "year">;
    log: (e: any) => void;
    variables: (object: {
        style?: Record<string, string>;
    }) => {
        [k: string]: Record<string, string>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: Date | null | undefined) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder: string;
    startingView: "day" | "month" | "year";
    monthHeadingFormat: string;
    monthListFormat: string;
    weekdayFormat: string;
    inputFormat: string;
    weekStartsOn: number;
    disabled: boolean;
    clearable: boolean;
    typeable: boolean;
    minimumView: "day" | "month" | "year";
} & {
    modelValue?: Date | undefined;
    disabledDates?: {
        dates?: Date[] | undefined;
    } | undefined;
    upperLimit?: Date | undefined;
    lowerLimit?: Date | undefined;
    locale?: Locale | undefined;
}>, {
    placeholder: string;
    startingView: "day" | "month" | "year";
    monthHeadingFormat: string;
    monthListFormat: string;
    weekdayFormat: string;
    inputFormat: string;
    weekStartsOn: number;
    disabled: boolean;
    clearable: boolean;
    typeable: boolean;
    minimumView: "day" | "month" | "year";
}>;
export default _default;
