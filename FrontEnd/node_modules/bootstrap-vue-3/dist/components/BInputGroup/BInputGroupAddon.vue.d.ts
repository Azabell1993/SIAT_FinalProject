declare const _sfc_main: import("vue").DefineComponent<{
    append: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    isText: {
        type: BooleanConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        append: boolean;
        id?: string | undefined;
        isText?: boolean | undefined;
        tag: string;
    };
    computedClasses: import("vue").ComputedRef<{
        'input-group-append': boolean;
        'input-group-prepend': boolean;
    }>;
    BInputGroupText: import("vue").DefineComponent<{
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>>, {
        tag: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    append: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    isText: {
        type: BooleanConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    tag: string;
    append: boolean;
    isText: boolean;
}>;
export default _sfc_main;
