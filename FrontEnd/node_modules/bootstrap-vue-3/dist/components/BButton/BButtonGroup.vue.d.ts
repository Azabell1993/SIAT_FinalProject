declare const _sfc_main: import("vue").DefineComponent<{
    ariaRole: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        ariaRole: string;
        size?: string | undefined;
        tag: string;
        vertical: boolean;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'btn-group': boolean;
        'btn-group-vertical': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaRole: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    tag: string;
    vertical: boolean;
    ariaRole: string;
}>;
export default _sfc_main;
