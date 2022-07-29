import type { Alignment, ColorVariant, TextColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    align: {
        type: null;
        required: false;
    };
    bgVariant: {
        type: null;
        required: false;
    };
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
    borderVariant: {
        type: null;
        required: false;
    };
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
        default: string;
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
        default: string;
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
    imgAlt: {
        type: StringConstructor;
        required: false;
    };
    imgBottom: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgEnd: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgHeight: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    imgLeft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgRight: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgSrc: {
        type: StringConstructor;
        required: false;
    };
    imgStart: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgTop: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    noBody: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    textVariant: {
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
        align?: Alignment | undefined;
        bgVariant?: ColorVariant | undefined;
        bodyBgVariant?: ColorVariant | undefined;
        bodyClass?: string | unknown[] | Record<string, unknown> | undefined;
        bodyTag: string;
        bodyTextVariant?: ColorVariant | undefined;
        borderVariant?: ColorVariant | undefined;
        footer?: string | undefined;
        footerBgVariant?: ColorVariant | undefined;
        footerBorderVariant?: ColorVariant | undefined;
        footerClass?: string | unknown[] | Record<string, unknown> | undefined;
        footerHtml: string;
        footerTag: string;
        footerTextVariant?: ColorVariant | undefined;
        header?: string | undefined;
        headerBgVariant?: ColorVariant | undefined;
        headerBorderVariant?: ColorVariant | undefined;
        headerClass?: string | unknown[] | Record<string, unknown> | undefined;
        headerHtml: string;
        headerTag: string;
        headerTextVariant?: ColorVariant | undefined;
        imgAlt?: string | undefined;
        imgBottom: boolean;
        imgEnd: boolean;
        imgHeight?: string | number | undefined;
        imgLeft: boolean;
        imgRight: boolean;
        imgSrc?: string | undefined;
        imgStart: boolean;
        imgTop: boolean;
        imgWidth?: string | number | undefined;
        noBody: boolean;
        overlay: boolean;
        subTitle?: string | undefined;
        subTitleTag: string;
        subTitleTextVariant: TextColorVariant;
        tag: string;
        textVariant?: TextColorVariant | undefined;
        title?: string | undefined;
        titleTag: string;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | "fill" | "info" | "primary" | "secondary" | "success" | "danger" | "warning" | "light" | "dark" | "white" | "center" | "end" | "start" | "reset" | "muted" | "body" | "black-50" | "white-50" | undefined;
        'flex-row': boolean;
        'flex-row-reverse': boolean;
    }>;
    bodyClasses: import("vue").ComputedRef<{
        [x: string]: boolean | ColorVariant | undefined;
        'card-body': boolean;
        'card-img-overlay': boolean;
    }>;
    footerClasses: import("vue").ComputedRef<{
        [x: string]: ColorVariant | undefined;
    }>;
    headerClasses: import("vue").ComputedRef<{
        [x: string]: ColorVariant | undefined;
    }>;
    imgClasses: import("vue").ComputedRef<{
        'card-img': boolean;
        'card-img-right': boolean;
        'card-img-left': boolean;
        'card-img-top': boolean;
        'card-img-bottom': boolean;
    }>;
    imgAttr: import("vue").ComputedRef<{
        src: string | undefined;
        alt: string | undefined;
        height: string | number | undefined;
        width: string | number | undefined;
    }>;
    subTitleClasses: import("vue").ComputedRef<{
        [x: string]: TextColorVariant;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: null;
        required: false;
    };
    bgVariant: {
        type: null;
        required: false;
    };
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
    borderVariant: {
        type: null;
        required: false;
    };
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
        default: string;
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
        default: string;
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
    imgAlt: {
        type: StringConstructor;
        required: false;
    };
    imgBottom: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgEnd: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgHeight: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    imgLeft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgRight: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgSrc: {
        type: StringConstructor;
        required: false;
    };
    imgStart: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgTop: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    noBody: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    textVariant: {
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
    tag: string;
    overlay: boolean;
    bodyTag: string;
    footerHtml: string;
    footerTag: string;
    headerHtml: string;
    headerTag: string;
    imgBottom: boolean;
    imgEnd: boolean;
    imgLeft: boolean;
    imgRight: boolean;
    imgStart: boolean;
    imgTop: boolean;
    noBody: boolean;
    subTitleTag: string;
    subTitleTextVariant: any;
    titleTag: string;
}>;
export default _sfc_main;
