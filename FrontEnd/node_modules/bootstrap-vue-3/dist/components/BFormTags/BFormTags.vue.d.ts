import { VNodeNormalizedChildren } from 'vue';
import type { ButtonVariant, ColorVariant, InputSize, InputType } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    addButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    addButtonVariant: {
        type: null;
        required: false;
        default: string;
    };
    addOnChange: {
        type: BooleanConstructor;
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
    duplicateTagText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    inputAttrs: {
        type: ObjectConstructor;
        required: false;
    };
    inputClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    inputId: {
        type: StringConstructor;
        required: false;
    };
    inputType: {
        type: null;
        required: false;
        default: string;
    };
    invalidTagText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    limit: {
        type: NumberConstructor;
        required: false;
    };
    limitTagsText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    noAddOnEnter: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noOuterFocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noTagRemove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    removeOnDelete: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    separator: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    size: {
        type: null;
        required: false;
    };
    tagClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    tagPills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tagRemoveLabel: {
        type: StringConstructor;
        required: false;
    };
    tagRemovedLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tagValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    tagVariant: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: {
        addButtonText: string;
        addButtonVariant: ButtonVariant;
        addOnChange: boolean;
        autofocus: boolean;
        disabled: boolean;
        duplicateTagText: string;
        inputAttrs?: Record<string, unknown> | undefined;
        inputClass?: string | unknown[] | Record<string, unknown> | undefined;
        inputId?: string | undefined;
        inputType: InputType;
        invalidTagText: string;
        form?: string | undefined;
        limit?: number | undefined;
        limitTagsText: string;
        modelValue: Array<string>;
        name?: string | undefined;
        noAddOnEnter: boolean;
        noOuterFocus: boolean;
        noTagRemove: boolean;
        placeholder: string;
        removeOnDelete: boolean;
        required: boolean;
        separator?: string | unknown[] | undefined;
        state: boolean;
        size?: InputSize | undefined;
        tagClass?: string | unknown[] | Record<string, unknown> | undefined;
        tagPills: boolean;
        tagRemoveLabel?: string | undefined;
        tagRemovedLabel: string;
        tagValidator: (t: string) => boolean;
        tagVariant: ColorVariant;
    };
    emit: {
        (e: 'update:modelValue', value: Array<string>): void;
        (e: 'input', value: Array<string>): void;
        (e: 'tag-state', ...args: Array<Array<string>>): void;
        (e: 'focus', value: FocusEvent): void;
        (e: 'focusin', value: FocusEvent): void;
        (e: 'focusout', value: FocusEvent): void;
        (e: 'blur', value: FocusEvent): void;
    };
    input: import("vue").Ref<HTMLInputElement | null>;
    computedId: import("vue").ComputedRef<string>;
    _inputId: import("vue").ComputedRef<string>;
    tags: import("vue").Ref<string[]>;
    inputValue: import("vue").Ref<string>;
    shouldRemoveOnDelete: import("vue").Ref<boolean>;
    focus: import("vue").Ref<boolean>;
    lastRemovedTag: import("vue").Ref<string>;
    validTags: import("vue").Ref<string[]>;
    invalidTags: import("vue").Ref<string[]>;
    duplicateTags: import("vue").Ref<string[]>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | InputSize | undefined;
        disabled: boolean;
        focus: boolean;
        'is-invalid': boolean;
        'is-valid': boolean;
    }>;
    isDuplicate: import("vue").ComputedRef<boolean>;
    isInvalid: import("vue").ComputedRef<boolean>;
    isLimitReached: import("vue").ComputedRef<boolean>;
    disableAddButton: import("vue").ComputedRef<boolean>;
    checkAutofocus: () => void;
    onFocusin: (e: FocusEvent) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onInput: (e: Event | string) => void;
    onChange: (e: Event) => void;
    onKeydown: (e: KeyboardEvent) => void;
    addTag: (tag?: string | undefined) => void;
    removeTag: (tag?: VNodeNormalizedChildren | undefined) => void;
    slotAttrs: import("vue").ComputedRef<{
        addButtonText: string;
        addButtonVariant: ButtonVariant;
        addTag: (tag?: string | undefined) => void;
        disableAddButton: import("vue").ComputedRef<boolean>;
        disabled: boolean;
        duplicateTagText: string;
        duplicateTags: import("vue").Ref<string[]>;
        form: string | undefined;
        inputAttrs: {
            disabled: boolean;
            form: string | undefined;
            id: import("vue").ComputedRef<string>;
            value: import("vue").Ref<string>;
        };
        inputHandlers: {
            input: (e: Event | string) => void;
            keydown: (e: KeyboardEvent) => void;
            change: (e: Event) => void;
        };
        inputId: import("vue").ComputedRef<string>;
        inputType: InputType;
        invalidTagText: string;
        invalidTags: import("vue").Ref<string[]>;
        isDuplicate: import("vue").ComputedRef<boolean>;
        isInvalid: import("vue").ComputedRef<boolean>;
        isLimitReached: import("vue").ComputedRef<boolean>;
        limitTagsText: string;
        limit: number | undefined;
        noTagRemove: boolean;
        placeholder: string;
        removeTag: (tag?: VNodeNormalizedChildren | undefined) => void;
        required: boolean;
        separator: string | unknown[] | undefined;
        size: InputSize | undefined;
        state: boolean;
        tagClass: string | unknown[] | Record<string, unknown> | undefined;
        tagPills: boolean;
        tagRemoveLabel: string | undefined;
        tagVariant: ColorVariant;
        tags: import("vue").Ref<string[]>;
    }>;
    BFormTag: import("vue").DefineComponent<{
        id: {
            type: StringConstructor;
            required: false;
        };
        title: {
            type: StringConstructor;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        noRemove: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        pill: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        removeLabel: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        variant: {
            type: null;
            required: false;
            default: string;
        };
    }, {
        props: {
            id?: string | undefined;
            title?: string | undefined;
            disabled: boolean;
            noRemove: boolean;
            pill: boolean;
            removeLabel: string;
            tag: string;
            variant: ColorVariant;
        };
        emit: (e: "remove", value?: VNodeNormalizedChildren | undefined) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        tagText: import("vue").ComputedRef<string>;
        computedId: import("vue").ComputedRef<string>;
        taglabelId: import("vue").ComputedRef<string>;
        classes: import("vue").ComputedRef<(string | {
            'text-dark': boolean;
            'rounded-pill': boolean;
            disabled: boolean;
        })[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
            required: false;
        };
        title: {
            type: StringConstructor;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        noRemove: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        pill: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        removeLabel: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        variant: {
            type: null;
            required: false;
            default: string;
        };
    }>> & {
        onRemove?: ((...args: any[]) => any) | undefined;
    }, {
        tag: string;
        variant: any;
        disabled: boolean;
        pill: boolean;
        noRemove: boolean;
        removeLabel: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "blur" | "tag-state" | "focus" | "focusin" | "focusout")[], "update:modelValue" | "input" | "blur" | "focus" | "tag-state" | "focusin" | "focusout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    addButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    addButtonVariant: {
        type: null;
        required: false;
        default: string;
    };
    addOnChange: {
        type: BooleanConstructor;
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
    duplicateTagText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    inputAttrs: {
        type: ObjectConstructor;
        required: false;
    };
    inputClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    inputId: {
        type: StringConstructor;
        required: false;
    };
    inputType: {
        type: null;
        required: false;
        default: string;
    };
    invalidTagText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    limit: {
        type: NumberConstructor;
        required: false;
    };
    limitTagsText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    noAddOnEnter: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noOuterFocus: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noTagRemove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    removeOnDelete: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    separator: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    state: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    size: {
        type: null;
        required: false;
    };
    tagClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    tagPills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tagRemoveLabel: {
        type: StringConstructor;
        required: false;
    };
    tagRemovedLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tagValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    tagVariant: {
        type: null;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onTag-state"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onFocusin?: ((...args: any[]) => any) | undefined;
    onFocusout?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    modelValue: unknown[];
    disabled: boolean;
    autofocus: boolean;
    state: boolean;
    placeholder: string;
    addButtonText: string;
    addButtonVariant: any;
    addOnChange: boolean;
    duplicateTagText: string;
    inputType: any;
    invalidTagText: string;
    limitTagsText: string;
    noAddOnEnter: boolean;
    noOuterFocus: boolean;
    noTagRemove: boolean;
    removeOnDelete: boolean;
    tagPills: boolean;
    tagRemovedLabel: string;
    tagValidator: Function;
    tagVariant: any;
}>;
export default _sfc_main;
