declare const _sfc_main: import("vue").DefineComponent<{
    alt: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    bottom: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    end: {
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
    src: {
        type: StringConstructor;
        required: false;
    };
    start: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    top: {
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
        bottom: boolean;
        end: boolean;
        height?: string | number | undefined;
        left: boolean;
        right: boolean;
        src?: string | undefined;
        start: boolean;
        top: boolean;
        width?: string | number | undefined;
    };
    attrs: import("vue").ComputedRef<{
        src: string | undefined;
        alt: string;
        width: number | undefined;
        height: number | undefined;
    }>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alt: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    bottom: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    end: {
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
    src: {
        type: StringConstructor;
        required: false;
    };
    start: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    top: {
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
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
    end: boolean;
    start: boolean;
}>;
export default _sfc_main;
