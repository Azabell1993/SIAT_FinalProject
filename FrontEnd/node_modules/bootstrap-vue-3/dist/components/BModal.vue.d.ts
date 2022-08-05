import Modal from 'bootstrap/js/dist/modal';
import type { ColorVariant, InputSize } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    props: {
        bodyBgVariant?: ColorVariant | undefined;
        bodyClass?: string | undefined;
        bodyTextVariant?: ColorVariant | undefined;
        busy: boolean;
        buttonSize: InputSize;
        cancelDisabled: boolean;
        cancelTitle: string;
        cancelVariant: ColorVariant;
        centered: boolean;
        contentClass?: string | undefined;
        dialogClass?: string | undefined;
        footerBgVariant?: ColorVariant | undefined;
        footerBorderVariant?: ColorVariant | undefined;
        footerClass?: string | undefined;
        footerTextVariant?: ColorVariant | undefined;
        fullscreen: boolean | string;
        headerBgVariant?: ColorVariant | undefined;
        headerBorderVariant?: ColorVariant | undefined;
        headerClass?: string | undefined;
        headerCloseLabel: string;
        headerCloseWhite: boolean;
        headerTextVariant?: ColorVariant | undefined;
        hideBackdrop: boolean;
        hideFooter: boolean;
        hideHeader: boolean;
        hideHeaderClose: boolean;
        id?: string | undefined;
        modalClass?: string | undefined;
        modelValue: boolean;
        noCloseOnBackdrop: boolean;
        noCloseOnEsc: boolean;
        noFade: boolean;
        noFocus: boolean;
        okDisabled: boolean;
        okOnly: boolean;
        okTitle: string;
        okVariant: ColorVariant;
        scrollable: boolean;
        show: boolean;
        size?: string | undefined;
        title?: string | undefined;
        titleClass?: string | undefined;
        titleSrOnly: boolean;
        titleTag: string;
    };
    emit: {
        (e: 'update:modelValue', value: boolean): void;
        (e: 'show', value: Event): void;
        (e: 'shown', value: Event): void;
        (e: 'hide', value: Event): void;
        (e: 'hidden', value: Event): void;
        (e: 'hide-prevented', value: Event): void;
        (e: 'ok'): void;
        (e: 'cancel'): void;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    element: import("vue").Ref<HTMLElement | undefined>;
    instance: import("vue").Ref<Modal | undefined>;
    modalClasses: import("vue").ComputedRef<(string | {
        fade: boolean;
        show: boolean;
    } | undefined)[]>;
    modalDialogClasses: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean | undefined;
        'modal-fullscreen': boolean;
        'modal-dialog-centered': boolean;
        'modal-dialog-scrollable': boolean;
    } | undefined)[]>;
    computedBodyClasses: import("vue").ComputedRef<(string | {
        [x: string]: ColorVariant | undefined;
    } | undefined)[]>;
    computedHeaderClasses: import("vue").ComputedRef<(string | {
        [x: string]: ColorVariant | undefined;
    } | undefined)[]>;
    computedFooterClasses: import("vue").ComputedRef<(string | {
        [x: string]: ColorVariant | undefined;
    } | undefined)[]>;
    computedTitleClasses: import("vue").ComputedRef<(string | {
        "visually-hidden": boolean;
    } | undefined)[]>;
    hasHeaderCloseSlot: import("vue").ComputedRef<boolean>;
    computedCloseButtonClasses: import("vue").ComputedRef<{
        "btn-close-content": boolean;
        "d-flex": boolean;
        "btn-close-white": boolean;
    }[]>;
    disableCancel: import("vue").ComputedRef<boolean>;
    disableOk: import("vue").ComputedRef<boolean>;
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
            type: import("vue").PropType<InputSize>;
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
            type: import("vue").PropType<import("../types/LinkTarget").default>;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../types/ButtonVariant").default>;
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
            [x: string]: boolean | InputSize | import("../types/ButtonVariant").default | undefined;
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
            target: import("../types/LinkTarget").default | null;
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
            type: import("vue").PropType<InputSize>;
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
            type: import("vue").PropType<import("../types/LinkTarget").default>;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../types/ButtonVariant").default>;
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
        variant: import("../types/ButtonVariant").default;
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
        target: import("../types/LinkTarget").default;
        activeClass: string;
        append: boolean;
        exactActiveClass: string;
        routerComponentName: string;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "ok" | "cancel")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "ok" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
