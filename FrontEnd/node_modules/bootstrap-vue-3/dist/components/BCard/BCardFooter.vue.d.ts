import type { ColorVariant, TextColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    footer: {
        type: StringConstructor;
        required: false;
    };
    footerBgVariant: {
        type: null;
        required: false;
    };
    footerBorderVariant: {
        type: null;
        required: false;
    };
    footerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    footerHtml: {
        type: StringConstructor;
        required: false;
    };
    footerTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    footerTextVariant: {
        type: null;
        required: false;
    };
}, {
    props: {
        footer?: string | undefined;
        footerBgVariant?: ColorVariant | undefined;
        footerBorderVariant?: ColorVariant | undefined;
        footerClass?: string | unknown[] | Record<string, unknown> | undefined;
        footerHtml?: string | undefined;
        footerTag: string;
        footerTextVariant?: TextColorVariant | undefined;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: "info" | "primary" | "secondary" | "success" | "danger" | "warning" | "light" | "dark" | "white" | "reset" | "muted" | "body" | "black-50" | "white-50" | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    footer: {
        type: StringConstructor;
        required: false;
    };
    footerBgVariant: {
        type: null;
        required: false;
    };
    footerBorderVariant: {
        type: null;
        required: false;
    };
    footerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    footerHtml: {
        type: StringConstructor;
        required: false;
    };
    footerTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    footerTextVariant: {
        type: null;
        required: false;
    };
}>>, {
    footerTag: string;
}>;
export default _sfc_main;
