declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
    };
    disabledField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => never[];
    };
    textField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        label?: string | undefined;
        disabledField: string;
        htmlField: string;
        options: Array<unknown> | Record<string, unknown>;
        textField: string;
        valueField: string;
    };
    formOptions: import("vue").ComputedRef<any>;
    BFormSelectOption: import("vue").DefineComponent<{
        value: {
            type: null;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: null;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>>, {
        disabled: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
    };
    disabledField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => never[];
    };
    textField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    disabledField: string;
    htmlField: string;
    options: unknown[] | Record<string, any>;
    textField: string;
    valueField: string;
}>;
export default _sfc_main;
