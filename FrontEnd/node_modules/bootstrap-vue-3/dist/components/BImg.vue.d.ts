declare const _sfc_main: import("vue").DefineComponent<{
    alt: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    blank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    blankColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fluid: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fluidGrow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    left: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    right: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rounded: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    sizes: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    src: {
        type: StringConstructor;
        required: false;
    };
    srcset: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    thumbnail: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
}, {
    props: {
        alt: string;
        blank: boolean;
        blankColor: string;
        block: boolean;
        center: boolean;
        fluid: boolean;
        fluidGrow: boolean;
        height?: string | number | undefined;
        left: boolean;
        right: boolean;
        rounded: boolean | string;
        sizes?: string | string[] | undefined;
        src?: string | undefined;
        srcset?: string | string[] | undefined;
        thumbnail: boolean;
        width?: string | number | undefined;
    };
    BLANK_TEMPLATE: string;
    makeBlankImgSrc: (width: any, height: any, color: string) => string;
    attrs: import("vue").ComputedRef<{
        src: string | undefined;
        alt: string;
        width: number | undefined;
        height: number | undefined;
        srcset: string | undefined;
        sizes: string | undefined;
    }>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'img-thumbnail': boolean;
        'img-fluid': boolean;
        'w-100': boolean;
        rounded: boolean;
        'd-block': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alt: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    blank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    blankColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fluid: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fluidGrow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    left: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    right: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rounded: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    sizes: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    src: {
        type: StringConstructor;
        required: false;
    };
    srcset: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    thumbnail: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
}>>, {
    alt: string;
    rounded: string | boolean;
    left: boolean;
    right: boolean;
    center: boolean;
    block: boolean;
    fluid: boolean;
    blank: boolean;
    blankColor: string;
    fluidGrow: boolean;
    thumbnail: boolean;
}>;
export default _sfc_main;
