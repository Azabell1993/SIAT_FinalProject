import { VNodeNormalizedChildren } from 'vue';
import type { ColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noRemove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    removeLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: {
        id?: string | undefined;
        title?: string | undefined;
        disabled: boolean;
        noRemove: boolean;
        pill: boolean;
        removeLabel: string;
        tag: string;
        variant: ColorVariant;
    };
    emit: (e: 'remove', value?: VNodeNormalizedChildren | undefined) => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    tagText: import("vue").ComputedRef<string>;
    computedId: import("vue").ComputedRef<string>;
    taglabelId: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<(string | {
        'text-dark': boolean;
        'rounded-pill': boolean;
        disabled: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noRemove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    removeLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
        default: string;
    };
}>> & {
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    tag: string;
    variant: any;
    disabled: boolean;
    pill: boolean;
    noRemove: boolean;
    removeLabel: string;
}>;
export default _sfc_main;
