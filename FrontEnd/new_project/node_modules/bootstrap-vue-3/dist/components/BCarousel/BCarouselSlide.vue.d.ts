import type { BCarouselParentData } from '../../types/components';
declare const _sfc_main: import("vue").DefineComponent<{
    imgSrc: {
        type: StringConstructor;
        required: false;
    };
    imgHeight: {
        type: StringConstructor;
        required: false;
    };
    imgWidth: {
        type: StringConstructor;
        required: false;
    };
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        required: false;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    captionHtml: {
        type: StringConstructor;
        required: false;
    };
    captionTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentVisibleUp: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    imgAlt: {
        type: StringConstructor;
        required: false;
    };
    imgBlank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgBlankColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    textHtml: {
        type: StringConstructor;
        required: false;
    };
    textTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        imgSrc?: string | undefined;
        imgHeight?: string | undefined;
        imgWidth?: string | undefined;
        interval?: string | number | undefined;
        active: boolean;
        background?: string | undefined;
        caption?: string | undefined;
        captionHtml?: string | undefined;
        captionTag: string;
        contentTag: string;
        contentVisibleUp?: string | undefined;
        id?: string | undefined;
        imgAlt?: string | undefined;
        imgBlank: boolean;
        imgBlankColor: string;
        text?: string | undefined;
        textHtml?: string | undefined;
        textTag: string;
    };
    parentData: BCarouselParentData;
    computedId: import("vue").ComputedRef<string>;
    img: import("vue").ComputedRef<string | true | undefined>;
    computedAttr: import("vue").ComputedRef<{
        background: string;
    }>;
    computedContentClasses: import("vue").ComputedRef<{
        [x: string]: string | undefined;
        'd-none': string | undefined;
    }>;
    showText: import("vue").ComputedRef<boolean | "" | undefined>;
    showTextAsHtml: import("vue").ComputedRef<string | undefined>;
    showCaption: import("vue").ComputedRef<boolean | "" | undefined>;
    showCaptionAsHtml: import("vue").ComputedRef<string | undefined>;
    parentWidth: import("vue").ComputedRef<string | undefined>;
    parentHeight: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imgSrc: {
        type: StringConstructor;
        required: false;
    };
    imgHeight: {
        type: StringConstructor;
        required: false;
    };
    imgWidth: {
        type: StringConstructor;
        required: false;
    };
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        required: false;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    captionHtml: {
        type: StringConstructor;
        required: false;
    };
    captionTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentVisibleUp: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    imgAlt: {
        type: StringConstructor;
        required: false;
    };
    imgBlank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    imgBlankColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    textHtml: {
        type: StringConstructor;
        required: false;
    };
    textTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    active: boolean;
    captionTag: string;
    contentTag: string;
    imgBlank: boolean;
    imgBlankColor: string;
    textTag: string;
}>;
export default _sfc_main;
