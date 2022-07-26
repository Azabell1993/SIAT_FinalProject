import type { ColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    header: {
        type: StringConstructor;
        required: false;
    };
    headerBgVariant: {
        type: null;
        required: false;
    };
    headerBorderVariant: {
        type: null;
        required: false;
    };
    headerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    headerHtml: {
        type: StringConstructor;
        required: false;
    };
    headerTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    headerTextVariant: {
        type: null;
        required: false;
    };
}, {
    props: {
        header?: string | undefined;
        headerBgVariant?: ColorVariant | undefined;
        headerBorderVariant?: ColorVariant | undefined;
        headerClass?: string | unknown[] | Record<string, unknown> | undefined;
        headerHtml?: string | undefined;
        headerTag: string;
        headerTextVariant?: ColorVariant | undefined;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: ColorVariant | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
        required: false;
    };
    headerBgVariant: {
        type: null;
        required: false;
    };
    headerBorderVariant: {
        type: null;
        required: false;
    };
    headerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    headerHtml: {
        type: StringConstructor;
        required: false;
    };
    headerTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    headerTextVariant: {
        type: null;
        required: false;
    };
}>>, {
    headerTag: string;
}>;
export default _sfc_main;
