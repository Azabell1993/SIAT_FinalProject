import type { ButtonVariant, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
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
    name: {
        type: StringConstructor;
        required: false;
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
    size: {
        type: null;
        required: false;
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
    switches: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
        id?: string | undefined;
        form?: string | undefined;
        modelValue: Array<unknown>;
        ariaInvalid: boolean | string;
        autofocus: boolean;
        buttonVariant: ButtonVariant;
        buttons: boolean;
        disabled: boolean;
        disabledField: string;
        htmlField: string;
        name?: string | undefined;
        options: Array<unknown>;
        plain: boolean;
        required: boolean;
        size?: Size;
        stacked: boolean;
        state: boolean;
        switches: boolean;
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
    localValue: import("vue").WritableComputedRef<unknown[]>;
    checkboxList: import("vue").ComputedRef<any[]>;
    attrs: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<any>;
    BFormCheckbox: import("vue").DefineComponent<{}, {
        props: {
            ariaLabel?: string | undefined;
            ariaLabelledBy?: string | undefined;
            form?: string | undefined;
            indeterminate?: boolean | undefined;
            name?: string | undefined;
            id: string;
            autofocus: boolean;
            plain: boolean;
            button: boolean;
            switch: boolean;
            disabled: boolean;
            buttonVariant: ButtonVariant;
            inline: boolean;
            required: boolean;
            size: import("../../types/InputSize").default;
            state: boolean;
            uncheckedValue: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>;
            value: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>;
            modelValue: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>;
        };
        emit: {
            (e: "update:modelValue", value: unknown): void;
            (e: "input", value: unknown): void;
            (e: "change", value: unknown): void;
        };
        computedId: import("vue").ComputedRef<string>;
        input: import("vue").Ref<HTMLElement>;
        isFocused: import("vue").Ref<boolean>;
        localValue: import("vue").WritableComputedRef<boolean | unknown[] | Set<unknown> | undefined>;
        isChecked: import("vue").ComputedRef<boolean>;
        classes: import("vue").ComputedRef<any>;
        inputClasses: import("vue").ComputedRef<any>;
        labelClasses: import("vue").ComputedRef<any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onInput?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
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
    name: {
        type: StringConstructor;
        required: false;
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
    size: {
        type: null;
        required: false;
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
    switches: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    modelValue: unknown[];
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
    switches: boolean;
    textField: string;
    valueField: string;
}>;
export default _sfc_main;
