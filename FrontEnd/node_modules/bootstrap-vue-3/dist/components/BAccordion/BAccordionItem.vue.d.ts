declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    visible: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        id?: string | undefined;
        title?: string | undefined;
        visible: boolean;
    };
    computedId: import("vue").ComputedRef<string>;
    parent: string;
    BCollapse: import("vue").DefineComponent<{
        accordion: {
            type: StringConstructor;
            required: false;
        };
        id: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        toggle: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {
        props: {
            accordion?: string | undefined;
            id: string;
            modelValue: boolean;
            tag: string;
            toggle: boolean;
            visible: boolean;
        };
        emit: {
            (e: "update:modelValue", value: boolean): void;
            (e: "show"): void;
            (e: "shown"): void;
            (e: "hide"): void;
            (e: "hidden"): void;
        };
        element: import("vue").Ref<HTMLElement | undefined>;
        instance: import("vue").Ref<import("bootstrap/js/dist/collapse").default | undefined>;
        classes: import("vue").ComputedRef<{
            show: boolean;
        }>;
        close: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        accordion: {
            type: StringConstructor;
            required: false;
        };
        id: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        modelValue: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        toggle: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        onShown?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
        onHidden?: ((...args: any[]) => any) | undefined;
    }, {
        id: string;
        visible: boolean;
        modelValue: boolean;
        tag: string;
        toggle: boolean;
    }>;
    vBToggle: import("vue").Directive<HTMLElement, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    visible: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    visible: boolean;
}>;
export default _sfc_main;
