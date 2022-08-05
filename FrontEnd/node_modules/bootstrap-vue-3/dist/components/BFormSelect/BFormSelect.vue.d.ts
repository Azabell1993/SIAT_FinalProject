import type { Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ariaInvalid: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabledField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    labelField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => never[];
    };
    optionsField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    size: {
        type: null;
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
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
    modelValue: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
}, {
    props: {
        ariaInvalid: boolean | 'grammar' | 'spelling';
        autofocus: boolean;
        disabled: boolean;
        disabledField: string;
        form?: string | undefined;
        htmlField: string;
        id?: string | undefined;
        labelField: string;
        multiple: boolean;
        name?: string | undefined;
        options: Array<unknown> | Record<string, unknown>;
        optionsField: string;
        plain: boolean;
        required: boolean;
        selectSize: number;
        size?: Size;
        state: boolean;
        textField: string;
        valueField: string;
        modelValue: string | Array<unknown> | Record<string, unknown> | number;
    };
    emit: {
        (e: 'input', value: unknown): void;
        (e: 'update:modelValue', value: unknown): void;
        (e: 'change', value: unknown): void;
    };
    input: import("vue").Ref<HTMLElement | undefined>;
    computedId: import("vue").ComputedRef<string>;
    handleAutofocus: () => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | undefined;
        'form-control': boolean;
        'form-select': boolean;
        'is-valid': boolean;
        'is-invalid': boolean;
    }>;
    computedSelectSize: import("vue").ComputedRef<number | undefined>;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "grammar" | "spelling" | undefined>;
    formOptions: import("vue").ComputedRef<any>;
    localValue: import("vue").WritableComputedRef<any>;
    focus: () => void;
    blur: () => void;
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
    BFormSelectOptionGroup: import("vue").DefineComponent<{
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
            options: unknown[] | Record<string, unknown>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaInvalid: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabledField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    labelField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => never[];
    };
    optionsField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    size: {
        type: null;
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
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
    modelValue: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    modelValue: string | number | unknown[] | Record<string, any>;
    disabled: boolean;
    multiple: boolean;
    autofocus: boolean;
    plain: boolean;
    state: boolean;
    ariaInvalid: string | boolean;
    disabledField: string;
    htmlField: string;
    options: unknown[] | Record<string, any>;
    textField: string;
    valueField: string;
    labelField: string;
    optionsField: string;
    selectSize: number;
}>;
export default _sfc_main;
