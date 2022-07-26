import type { ColorVariant, TextColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    bodyBgVariant: {
        type: null;
        required: false;
    };
    bodyClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    bodyTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bodyTextVariant: {
        type: null;
        required: false;
    };
    overlay: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    subTitle: {
        type: StringConstructor;
        required: false;
    };
    subTitleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    subTitleTextVariant: {
        type: null;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    titleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        bodyBgVariant?: ColorVariant | undefined;
        bodyClass?: string | unknown[] | Record<string, unknown> | undefined;
        bodyTag: string;
        bodyTextVariant?: TextColorVariant | undefined;
        overlay: boolean;
        subTitle?: string | undefined;
        subTitleTag: string;
        subTitleTextVariant?: TextColorVariant | undefined;
        title?: string | undefined;
        titleTag: string;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: "info" | "primary" | "secondary" | "success" | "danger" | "warning" | "light" | "dark" | "white" | "reset" | "muted" | "body" | "black-50" | "white-50" | undefined;
    }>;
    BCardTitle: import("vue").DefineComponent<{
        title: {
            type: StringConstructor;
            required: false;
        };
        titleTag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            required: false;
        };
        titleTag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>>, {
        titleTag: string;
    }>;
    BCardSubTitle: import("vue").DefineComponent<{
        subTitle: {
            type: StringConstructor;
            required: false;
        };
        subTitleTag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        subTitleTextVariant: {
            type: null;
            required: false;
            default: string;
        };
    }, {
        props: {
            subTitle?: string | undefined;
            subTitleTag: string;
            subTitleTextVariant: TextColorVariant;
        };
        classes: import("vue").ComputedRef<{
            [x: string]: TextColorVariant;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        subTitle: {
            type: StringConstructor;
            required: false;
        };
        subTitleTag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        subTitleTextVariant: {
            type: null;
            required: false;
            default: string;
        };
    }>>, {
        subTitleTag: string;
        subTitleTextVariant: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bodyBgVariant: {
        type: null;
        required: false;
    };
    bodyClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    bodyTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bodyTextVariant: {
        type: null;
        required: false;
    };
    overlay: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    subTitle: {
        type: StringConstructor;
        required: false;
    };
    subTitleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    subTitleTextVariant: {
        type: null;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    titleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    overlay: boolean;
    bodyTag: string;
    subTitleTag: string;
    titleTag: string;
}>;
export default _sfc_main;
