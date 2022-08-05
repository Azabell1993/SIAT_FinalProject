import type { InputSize } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    append: {
        type: StringConstructor;
        required: false;
    };
    appendHtml: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    prepend: {
        type: StringConstructor;
        required: false;
    };
    prependHtml: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        append?: string | undefined;
        appendHtml?: string | undefined;
        id?: string | undefined;
        prepend?: string | undefined;
        prependHtml?: string | undefined;
        size?: InputSize | undefined;
        tag: string;
    };
    classes: import("vue").ComputedRef<{
        'input-group-sm': boolean;
        'input-group-lg': boolean;
    }>;
    hasAppend: import("vue").ComputedRef<boolean>;
    hasPrepend: import("vue").ComputedRef<boolean>;
    showAppendHtml: import("vue").ComputedRef<boolean>;
    showPrependHtml: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    append: {
        type: StringConstructor;
        required: false;
    };
    appendHtml: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    prepend: {
        type: StringConstructor;
        required: false;
    };
    prependHtml: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    tag: string;
}>;
export default _sfc_main;
