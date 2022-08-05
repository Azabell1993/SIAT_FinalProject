import type { ButtonVariant, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    size: {
        type: null;
        required: false;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    ariaInvalid: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: undefined;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: null;
        required: false;
        default: string;
    };
    buttons: {
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
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
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
    stacked: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    validated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    valueField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        size?: Size;
        form?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        modelValue: string | boolean | Array<unknown> | Record<string, unknown> | number;
        ariaInvalid: boolean | string;
        autofocus: boolean;
        buttonVariant: ButtonVariant;
        buttons: boolean;
        disabled: boolean;
        disabledField: string;
        htmlField: string;
        options: Array<unknown>;
        plain: boolean;
        required: boolean;
        stacked: boolean;
        state: boolean;
        textField: string;
        validated: boolean;
        valueField: string;
    };
    emit: {
        (e: 'input', value: unknown): void;
        (e: 'update:modelValue', value: unknown): void;
        (e: 'change', value: unknown): void;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    slotsName: string;
    computedId: import("vue").ComputedRef<string>;
    computedName: import("vue").ComputedRef<string>;
    localValue: import("vue").WritableComputedRef<string | number | boolean | unknown[] | Record<string, unknown>>;
    checkboxList: import("vue").ComputedRef<any[]>;
    attrs: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<any>;
    BFormRadio: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: null;
        required: false;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    ariaInvalid: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: undefined;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: null;
        required: false;
        default: string;
    };
    buttons: {
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
    htmlField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
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
    stacked: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    validated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    valueField: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    disabled: boolean;
    validated: boolean;
    autofocus: boolean;
    plain: boolean;
    buttonVariant: any;
    state: boolean;
    ariaInvalid: string | boolean;
    buttons: boolean;
    disabledField: string;
    htmlField: string;
    options: unknown[];
    stacked: boolean;
    textField: string;
    valueField: string;
}>;
export default _sfc_main;
