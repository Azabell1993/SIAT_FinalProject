import Offcanvas from 'bootstrap/js/dist/offcanvas';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    bodyScrolling: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    backdrop: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        modelValue: boolean;
        bodyScrolling: boolean;
        backdrop: boolean;
        placement: string;
        title?: string | undefined;
    };
    emit: {
        (e: 'update:modelValue', value: boolean): void;
        (e: 'show'): void;
        (e: 'shown'): void;
        (e: 'hide'): void;
        (e: 'hidden'): void;
    };
    element: import("vue").Ref<HTMLElement | undefined>;
    instance: import("vue").Ref<Offcanvas | undefined>;
    classes: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    bodyScrolling: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    backdrop: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    bodyScrolling: boolean;
    backdrop: boolean;
    placement: string;
}>;
export default _sfc_main;
