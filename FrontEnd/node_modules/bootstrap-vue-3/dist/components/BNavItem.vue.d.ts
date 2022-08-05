declare const _sfc_main: import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        active: boolean;
        disabled: boolean;
        href?: string | undefined;
    };
    classes: import("vue").ComputedRef<{
        active: boolean;
        disabled: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    disabled: boolean;
    active: boolean;
}>;
export default _sfc_main;
