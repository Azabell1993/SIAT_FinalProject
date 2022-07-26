declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    deck: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        columns: boolean;
        deck: boolean;
        tag: string;
    };
    classes: import("vue").ComputedRef<"card-deck" | "card-columns" | "card-group">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    deck: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    tag: string;
    columns: boolean;
    deck: boolean;
}>;
export default _sfc_main;
