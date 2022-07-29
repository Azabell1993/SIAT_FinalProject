import type { RouteLocationRaw } from 'vue-router';
import type { ColorVariant, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    action: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    button: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    target: {
        type: null;
        required: false;
        default: string;
    };
    to: {
        type: null;
        required: false;
    };
    variant: {
        type: null;
        required: false;
    };
}, {
    props: {
        action: boolean;
        active: boolean;
        button: boolean;
        disabled: boolean;
        href?: string | undefined;
        tag: string;
        target: LinkTarget;
        to?: RouteLocationRaw | undefined;
        variant?: ColorVariant | undefined;
    };
    attrs: {
        [x: string]: unknown;
    };
    parentData: import("../../types/components").BListGroupParentData | null;
    link: import("vue").ComputedRef<boolean>;
    tagComputed: import("vue").ComputedRef<string | import("vue").DefineComponent<{
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
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
        href: {
            type: StringConstructor;
        };
        rel: {
            type: StringConstructor;
            default: null;
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
        target: {
            type: import("vue").PropType<LinkTarget>;
            default: string;
        };
        to: {
            type: import("vue").PropType<RouteLocationRaw>;
            default: null;
        };
    }, {
        tag: import("vue").ComputedRef<string>;
        routerAttr: import("vue").ComputedRef<{
            to: RouteLocationRaw;
            href: string;
            target: LinkTarget;
            rel: string | null;
            tabindex: unknown;
            'aria-disabled': string | null;
        }>;
        link: import("vue").Ref<HTMLElement>;
        clicked: (e: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
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
        href: {
            type: StringConstructor;
        };
        rel: {
            type: StringConstructor;
            default: null;
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
        target: {
            type: import("vue").PropType<LinkTarget>;
            default: string;
        };
        to: {
            type: import("vue").PropType<RouteLocationRaw>;
            default: null;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    }, {
        replace: boolean;
        disabled: boolean;
        exact: boolean;
        active: boolean;
        to: RouteLocationRaw;
        event: string | unknown[];
        routerTag: string;
        rel: string;
        target: LinkTarget;
        activeClass: string;
        append: boolean;
        exactActiveClass: string;
        routerComponentName: string;
    }>>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | ColorVariant | undefined;
        'list-group-item-action': boolean;
        active: boolean;
        disabled: boolean;
    }>;
    computedAttrs: import("vue").ComputedRef<{
        type?: string | undefined;
        disabled?: boolean | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    action: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    button: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    target: {
        type: null;
        required: false;
        default: string;
    };
    to: {
        type: null;
        required: false;
    };
    variant: {
        type: null;
        required: false;
    };
}>>, {
    tag: string;
    button: boolean;
    disabled: boolean;
    active: boolean;
    target: any;
    action: boolean;
}>;
export default _sfc_main;
