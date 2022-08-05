/// <reference types="node" />
import type { ColorVariant } from '../types';
import Alert from 'bootstrap/js/dist/alert';
declare const _sfc_main: import("vue").DefineComponent<{
    dismissLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dismissible: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | NumberConstructor)[];
        required: false;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    variant: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: {
        dismissLabel: string;
        dismissible: boolean;
        fade: boolean;
        modelValue: boolean | number;
        show: boolean;
        variant: ColorVariant;
    };
    emit: {
        (e: 'dismissed'): void;
        (e: 'dismiss-count-down', value: number): void;
        (e: 'update:modelValue', value: boolean | number): void;
    };
    element: import("vue").Ref<HTMLElement | undefined>;
    instance: import("vue").Ref<Alert | undefined>;
    classes: import("vue").ComputedRef<{
        [x: string]: number | boolean | ColorVariant;
        show: number | boolean;
        'alert-dismissible': boolean;
        fade: number | boolean;
    }>;
    _countDownTimeout: NodeJS.Timeout | undefined;
    parseCountDown: (value: boolean | number) => number;
    clearCountDownInterval: () => void;
    countDown: import("vue").Ref<number>;
    isAlertVisible: import("vue").ComputedRef<boolean>;
    parsedModelValue: import("vue").ComputedRef<boolean>;
    handleShowAndModelChanged: () => void;
    dismissClicked: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dismissed" | "dismiss-count-down")[], "update:modelValue" | "dismissed" | "dismiss-count-down", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dismissLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dismissible: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | NumberConstructor)[];
        required: false;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    variant: {
        type: null;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDismissed?: ((...args: any[]) => any) | undefined;
    "onDismiss-count-down"?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    modelValue: number | boolean;
    dismissLabel: string;
    dismissible: boolean;
    fade: boolean;
    variant: any;
}>;
export default _sfc_main;
