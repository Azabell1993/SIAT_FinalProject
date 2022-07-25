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
    lowerLimit: {
        type: PropType<Date>;
        required: false;
    };
    upperLimit: {
        type: PropType<Date>;
        required: false;
    };
}, {
    years: import("vue").ComputedRef<{
        value: Date;
        key: string;
        display: number;
        selected: boolean | undefined;
        disabled: boolean;
    }[]>;
    heading: import("vue").ComputedRef<string>;
    leftDisabled: import("vue").ComputedRef<boolean | undefined>;
    rightDisabled: import("vue").ComputedRef<boolean | undefined>;
    previousPage: () => void;
    nextPage: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:pageDate': (date: Date) => boolean;
    select: (date: Date) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pageDate: Date;
} & {
    selected?: Date | undefined;
    lowerLimit?: Date | undefined;
    upperLimit?: Date | undefined;
}>, {}>;
export default _default;
