import type { TextColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    inline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    textVariant: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: {
        id?: string | undefined;
        inline: boolean;
        tag: string;
        textVariant: TextColorVariant;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | TextColorVariant;
        'form-text': boolean;
    }>;
    attrs: import("vue").ComputedRef<{
        id: string | null;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    inline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    textVariant: {
        type: null;
        required: false;
        default: string;
    };
}>>, {
    tag: string;
    textVariant: any;
    inline: boolean;
}>;
export default _sfc_main;
