import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * Currently selected date, needed for highlighting
     */
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
    locale: {
        type: PropType<Locale>;
        required: false;
    };
    lowerLimit: {
        type: PropType<Date>;
        required: false;
    };
    upperLimit: {
        type: PropType<Date>;
        required: false;
    };
}, {
    months: import("vue").ComputedRef<{
        value: Date;
        display: string;
        key: string;
        selected: boolean | undefined;
        disabled: boolean;
    }[]>;
    heading: import("vue").ComputedRef<number>;
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
} & {
    selected?: Date | undefined;
    locale?: Locale | undefined;
    lowerLimit?: Date | undefined;
    upperLimit?: Date | undefined;
}>, {
    format: string;
}>;
export default _default;
