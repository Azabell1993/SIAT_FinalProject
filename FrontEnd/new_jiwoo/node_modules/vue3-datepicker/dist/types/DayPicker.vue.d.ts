import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    selected: {
        type: PropType<Date>;
        required: false;
    };
    pageDate: {
        type: PropType<Date>;
        required: true;
    };
    format: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    headingFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    weekdayFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    locale: {
        type: PropType<Locale>;
        required: false;
    };
    weekStartsOn: {
        type: PropType<0 | 1 | 2 | 3 | 4 | 5 | 6>;
        required: false;
        default: number;
        validator: (i: unknown) => boolean;
    };
    lowerLimit: {
        type: PropType<Date>;
        required: false;
    };
    upperLimit: {
        type: PropType<Date>;
        required: false;
    };
    disabledDates: {
        type: PropType<{
            dates?: Date[] | undefined;
        }>;
        required: false;
    };
}, {
    weekDays: import("vue").ComputedRef<string[]>;
    days: import("vue").ComputedRef<{
        value: Date;
        display: string;
        selected: boolean | undefined;
        disabled: boolean;
        key: string;
    }[]>;
    heading: import("vue").ComputedRef<string>;
    leftDisabled: import("vue").ComputedRef<boolean | undefined>;
    rightDisabled: import("vue").ComputedRef<boolean | undefined>;
    previousPage: () => void;
    nextPage: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:pageDate': (date: Date) => boolean;
    select: (date: Date) => boolean;
    back: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pageDate: Date;
    format: string;
    headingFormat: string;
    weekdayFormat: string;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
} & {
    selected?: Date | undefined;
    locale?: Locale | undefined;
    lowerLimit?: Date | undefined;
    upperLimit?: Date | undefined;
    disabledDates?: {
        dates?: Date[] | undefined;
    } | undefined;
}>, {
    format: string;
    headingFormat: string;
    weekdayFormat: string;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}>;
export default _default;
