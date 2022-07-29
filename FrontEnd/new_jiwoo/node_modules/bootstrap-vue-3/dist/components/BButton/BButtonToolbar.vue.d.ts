declare const _sfc_main: import("vue").DefineComponent<{
    ariaRole: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    justify: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        ariaRole: string;
        justify: boolean;
    };
    classes: import("vue").ComputedRef<{
        'justify-content-between': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaRole: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    justify: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    justify: boolean;
    ariaRole: string;
}>;
export default _sfc_main;
