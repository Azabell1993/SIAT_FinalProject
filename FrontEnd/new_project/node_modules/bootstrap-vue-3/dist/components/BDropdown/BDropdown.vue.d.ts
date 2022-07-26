import type Popper from '@popperjs/core';
import Dropdown from 'bootstrap/js/dist/dropdown';
import { ComponentPublicInstance } from 'vue';
import type { ButtonType, ButtonVariant, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    menuClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    splitClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    splitVariant: {
        type: null;
        required: false;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    toggleClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    autoClose: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    boundary: {
        type: null;
        required: false;
        default: string;
    };
    dark: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropright: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropleft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noFlip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    popperOpts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    right: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    role: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    split: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    splitButtonType: {
        type: null;
        required: false;
        default: string;
    };
    splitHref: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    noCaret: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    toggleText: {
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
        menuClass?: string | unknown[] | Record<string, unknown> | undefined;
        size?: Size;
        splitClass?: string | unknown[] | Record<string, unknown> | undefined;
        splitVariant?: ButtonVariant | undefined;
        text?: string | undefined;
        toggleClass?: string | unknown[] | Record<string, unknown> | undefined;
        autoClose: boolean | 'inside' | 'outside';
        block: boolean;
        boundary: Popper.Boundary;
        dark: boolean;
        disabled: boolean;
        dropup: boolean;
        dropright: boolean;
        dropleft: boolean;
        noFlip: boolean;
        offset: number | string;
        popperOpts: Record<string, unknown>;
        right: boolean;
        role: string;
        split: boolean;
        splitButtonType: ButtonType;
        splitHref: string;
        noCaret: boolean;
        toggleText: string;
        variant: ButtonVariant;
    };
    emit: {
        (e: 'show'): void;
        (e: 'shown'): void;
        (e: 'hide'): void;
        (e: 'hidden'): void;
        (e: 'click', event: Event): void;
        (e: 'toggle'): void;
    };
    parent: import("vue").Ref<HTMLElement | undefined>;
    dropdown: import("vue").Ref<ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
    instance: import("vue").Ref<Dropdown | undefined>;
    computedId: import("vue").ComputedRef<string>;
    onSplitClick: (event: Event) => void;
    classes: import("vue").ComputedRef<{
        'd-grid': boolean;
        'd-flex': boolean;
    }>;
    buttonClasses: import("vue").ComputedRef<{
        'dropdown-toggle': boolean;
        'dropdown-toggle-no-caret': boolean;
        'w-100': boolean;
    }>;
    dropdownMenuClasses: import("vue").ComputedRef<{
        'dropdown-menu-dark': boolean;
        'dropdown-menu-right': boolean;
    }>;
    buttonAttr: import("vue").ComputedRef<{
        'data-bs-toggle': string | undefined;
        'aria-expanded': boolean | undefined;
        ref: import("vue").Ref<ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined> | undefined;
        href: string | undefined;
    }>;
    splitAttr: import("vue").ComputedRef<{
        ref: import("vue").Ref<ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined> | undefined;
    }>;
    hide: () => void;
    BButton: import("vue").DefineComponent<{
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        href: {
            type: StringConstructor;
            required: false;
        };
        pill: {
            type: BooleanConstructor;
            default: boolean;
        };
        pressed: {
            type: BooleanConstructor;
            default: null;
        };
        rel: {
            type: StringConstructor;
            default: null;
        };
        size: {
            type: import("vue").PropType<import("../../types/InputSize").default>;
        };
        squared: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        target: {
            type: import("vue").PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        variant: {
            type: import("vue").PropType<ButtonVariant>;
            default: string;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: BooleanConstructor;
            default: boolean;
        };
        event: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        exact: {
            type: BooleanConstructor;
            default: boolean;
        };
        exactActiveClass: {
            type: StringConstructor;
            default: string;
        };
        replace: {
            type: BooleanConstructor;
            default: boolean;
        };
        routerComponentName: {
            type: StringConstructor;
            default: string;
        };
        routerTag: {
            type: StringConstructor;
            default: string;
        };
        to: {
            type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
            default: null;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: boolean | import("../../types/InputSize").default | ButtonVariant | undefined;
            active: boolean;
            'rounded-pill': boolean;
            'rounded-0': boolean;
            disabled: boolean;
        }>;
        attrs: import("vue").ComputedRef<{
            'aria-disabled': string | null;
            'aria-pressed': string | null;
            autocomplete: string | null;
            disabled: boolean | null;
            href: string | undefined;
            rel: string | null;
            role: string | null;
            target: import("../../types/LinkTarget").default | null;
            type: string | null;
            to: import("vue-router").RouteLocationRaw | null;
            append: boolean | null;
            activeClass: string | null;
            event: string | unknown[] | null;
            exact: boolean | null;
            exactActiveClass: string | null;
            replace: boolean | null;
            routerComponentName: string | null;
            routerTag: string | null;
        }>;
        computedTag: import("vue").ComputedRef<string>;
        clicked: (e: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:pressed")[], "click" | "update:pressed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        href: {
            type: StringConstructor;
            required: false;
        };
        pill: {
            type: BooleanConstructor;
            default: boolean;
        };
        pressed: {
            type: BooleanConstructor;
            default: null;
        };
        rel: {
            type: StringConstructor;
            default: null;
        };
        size: {
            type: import("vue").PropType<import("../../types/InputSize").default>;
        };
        squared: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        target: {
            type: import("vue").PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        variant: {
            type: import("vue").PropType<ButtonVariant>;
            default: string;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: BooleanConstructor;
            default: boolean;
        };
        event: {
            type: (StringConstructor | ArrayConstructor)[];
            default: string;
        };
        exact: {
            type: BooleanConstructor;
            default: boolean;
        };
        exactActiveClass: {
            type: StringConstructor;
            default: string;
        };
        replace: {
            type: BooleanConstructor;
            default: boolean;
        };
        routerComponentName: {
            type: StringConstructor;
            default: string;
        };
        routerTag: {
            type: StringConstructor;
            default: string;
        };
        to: {
            type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
            default: null;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:pressed"?: ((...args: any[]) => any) | undefined;
    }, {
        replace: boolean;
        type: string;
        tag: string;
        variant: ButtonVariant;
        disabled: boolean;
        exact: boolean;
        active: boolean;
        pill: boolean;
        to: import("vue-router").RouteLocationRaw;
        event: string | unknown[];
        routerTag: string;
        pressed: boolean;
        rel: string;
        squared: boolean;
        target: import("../../types/LinkTarget").default;
        activeClass: string;
        append: boolean;
        exactActiveClass: string;
        routerComponentName: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("show" | "shown" | "hide" | "hidden" | "click" | "toggle")[], "show" | "shown" | "hide" | "hidden" | "toggle" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    menuClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    splitClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    splitVariant: {
        type: null;
        required: false;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    toggleClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    autoClose: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    boundary: {
        type: null;
        required: false;
        default: string;
    };
    dark: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropright: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dropleft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noFlip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    popperOpts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    right: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    role: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    split: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    splitButtonType: {
        type: null;
        required: false;
        default: string;
    };
    splitHref: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    noCaret: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    toggleText: {
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
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    split: boolean;
    variant: any;
    dark: boolean;
    disabled: boolean;
    right: boolean;
    block: boolean;
    offset: string | number;
    autoClose: string | boolean;
    boundary: any;
    dropup: boolean;
    dropright: boolean;
    dropleft: boolean;
    noFlip: boolean;
    popperOpts: Record<string, any>;
    role: string;
    splitButtonType: any;
    splitHref: string;
    noCaret: boolean;
    toggleText: string;
}>;
export default _sfc_main;
