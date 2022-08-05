declare const _sfc_main: import("vue").DefineComponent<{
    ariaLive: {
        type: StringConstructor;
        required: false;
    };
    forceShow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    role: {
        type: StringConstructor;
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tooltip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        ariaLive?: string | undefined;
        forceShow: boolean;
        id?: string | undefined;
        role?: string | undefined;
        state: boolean;
        tag: string;
        tooltip: boolean;
    };
    computedShow: import("vue").ComputedRef<boolean>;
    classes: import("vue").ComputedRef<{
        'd-block': boolean;
        'valid-feedback': boolean;
        'valid-tooltip': boolean;
    }>;
    attrs: import("vue").ComputedRef<{
        id: string | null;
        role: string | null;
        'aria-live': string | null;
        'aria-atomic': string | null;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaLive: {
        type: StringConstructor;
        required: false;
    };
    forceShow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    role: {
        type: StringConstructor;
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tooltip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    tag: string;
    tooltip: boolean;
    state: boolean;
    forceShow: boolean;
}>;
export default _sfc_main;
