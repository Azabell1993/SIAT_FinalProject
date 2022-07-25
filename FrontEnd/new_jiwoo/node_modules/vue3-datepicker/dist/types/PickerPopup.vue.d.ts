import { PropType } from 'vue';
declare type Item = {
    key: string;
    value: Date;
    display: number | string;
    disabled: boolean;
    selected: boolean;
};
declare const _default: import("vue").DefineComponent<{
    headingClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rightDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<Item[]>;
        default: () => Item[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    elementClick: (value: Date) => boolean;
    left: () => true;
    right: () => true;
    heading: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    headingClickable: boolean;
    leftDisabled: boolean;
    rightDisabled: boolean;
    columnCount: number;
    items: Item[];
} & {}>, {
    headingClickable: boolean;
    leftDisabled: boolean;
    rightDisabled: boolean;
    columnCount: number;
    items: Item[];
}>;
export default _default;
