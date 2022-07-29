import type { ColorVariant, SpinnerType } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
    };
    role: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    type: {
        type: null;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
    };
}, {
    props: {
        label?: string | undefined;
        role: string;
        small: boolean;
        tag: string;
        type: SpinnerType;
        variant?: ColorVariant | undefined;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'spinner-border': boolean;
        'spinner-border-sm': boolean;
        'spinner-grow': boolean;
        'spinner-grow-sm': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
    };
    role: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    type: {
        type: null;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
    };
}>>, {
    small: boolean;
    type: any;
    tag: string;
    role: string;
}>;
export default _sfc_main;
