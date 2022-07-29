import { BTabsParentData } from '../../types/components';
export declare const injectionKey: InjectionKey<BTabsParentData>;
import { InjectionKey } from 'vue';
import type { Alignment } from '../../types';
import { BvEvent } from '../../utils/bvEvent';
declare const _sfc_main: import("vue").DefineComponent<{
    activeNavItemClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    activeTabClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    align: {
        type: null;
        required: false;
        default: undefined;
    };
    card: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    contentClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    end: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    justified: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    navClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    navWrapperClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    noFade: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noNavStyle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    injectionKey: InjectionKey<BTabsParentData>;
    props: {
        activeNavItemClass: Array<unknown> | Record<string, unknown> | string;
        activeTabClass: Array<unknown> | Record<string, unknown> | string;
        align: Alignment;
        card: boolean;
        contentClass: Array<unknown> | Record<string, unknown> | string;
        end: boolean;
        fill: boolean;
        id: string;
        justified: boolean;
        lazy: boolean;
        navClass: Array<unknown> | Record<string, unknown> | string;
        navWrapperClass: Array<unknown> | Record<string, unknown> | string;
        noFade: boolean;
        noNavStyle: boolean;
        pills: boolean;
        small: boolean;
        tag: string;
        vertical: boolean;
        modelValue: number;
    };
    emit: {
        (e: 'update:modelValue', value: number): void;
        (e: 'activate-tab', v1: number, v2: number, v3: BvEvent): void;
        (e: 'click'): void;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    _tabIndex: import("vue").Ref<number>;
    _currentTabButton: import("vue").Ref<string>;
    tabIndex: import("vue").WritableComputedRef<number>;
    tabs: import("vue").ComputedRef<any[]>;
    showEmpty: import("vue").ComputedRef<boolean>;
    classes: import("vue").ComputedRef<{
        'd-flex align-items-start': boolean;
    }>;
    navTabsClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nav-pills': boolean;
        'flex-column me-3': boolean;
        'nav-fill': boolean;
        'card-header-tabs': boolean;
        'nav-justified': boolean;
        'nav-tabs': boolean;
        small: boolean;
    }>;
    activateTab: (index: number) => boolean;
    handleClick: (event: MouseEvent, index: number) => void;
    getTabs: (slots: any) => any[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click" | "activate-tab")[], "update:modelValue" | "click" | "activate-tab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeNavItemClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    activeTabClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    align: {
        type: null;
        required: false;
        default: undefined;
    };
    card: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    contentClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    end: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    fill: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    justified: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    navClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    navWrapperClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    noFade: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noNavStyle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    pills: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onActivate-tab"?: ((...args: any[]) => any) | undefined;
}, {
    small: boolean;
    fill: boolean;
    id: string;
    modelValue: number;
    tag: string;
    end: boolean;
    vertical: boolean;
    align: any;
    lazy: boolean;
    contentClass: string | unknown[] | Record<string, any>;
    noFade: boolean;
    justified: boolean;
    pills: boolean;
    activeNavItemClass: string | unknown[] | Record<string, any>;
    activeTabClass: string | unknown[] | Record<string, any>;
    card: boolean;
    navClass: string | unknown[] | Record<string, any>;
    navWrapperClass: string | unknown[] | Record<string, any>;
    noNavStyle: boolean;
}>;
export default _sfc_main;
