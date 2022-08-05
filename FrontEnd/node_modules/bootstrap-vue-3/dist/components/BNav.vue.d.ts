declare const _sfc_main: import("vue").DefineComponent<{
    align: {
        type: StringConstructor;
        required: false;
    };
    fill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    justified: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        align?: string | undefined;
        fill: boolean;
        justified: boolean;
        pills: boolean;
        tabs: boolean;
        vertical: boolean;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'flex-column': boolean;
        'nav-tabs': boolean;
        'nav-pills': boolean;
        'nav-fill': boolean;
        'nav-justified': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: StringConstructor;
        required: false;
    };
    fill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    justified: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    fill: boolean;
    vertical: boolean;
    justified: boolean;
    pills: boolean;
    tabs: boolean;
}>;
export default _sfc_main;
