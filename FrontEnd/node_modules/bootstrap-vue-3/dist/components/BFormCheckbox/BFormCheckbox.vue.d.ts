import type { ButtonVariant, InputSize } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
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
        size: InputSize;
        state: boolean;
        uncheckedValue: Array<unknown> | Set<unknown> | boolean | string | Record<string, unknown> | number;
        value: Array<unknown> | Set<unknown> | boolean | string | Record<string, unknown> | number;
        modelValue: Array<unknown> | Set<unknown> | boolean | string | Record<string, unknown> | number;
    };
    emit: {
        (e: 'update:modelValue', value: unknown): void;
        (e: 'input', value: unknown): void;
        (e: 'change', value: unknown): void;
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
export default _sfc_main;
