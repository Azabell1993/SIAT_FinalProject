declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonId: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noBody: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    titleItemClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    titleLinkAttributes: {
        type: ObjectConstructor;
        required: false;
        default: undefined;
    };
    titleLinkClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
}, {
    props: {
        id?: string | undefined;
        title?: string | undefined;
        active: boolean;
        buttonId: string;
        disabled: boolean;
        lazy: boolean;
        noBody: boolean | string;
        tag: string;
        titleItemClass: Array<unknown> | Record<string, unknown> | string;
        titleLinkAttributes: Record<string, unknown>;
        titleLinkClass: Array<unknown> | Record<string, unknown> | string;
    };
    parentData: import("../../types/components").BTabsParentData | null;
    computedLazy: import("vue").ComputedRef<boolean>;
    computedActive: import("vue").ComputedRef<boolean>;
    showSlot: import("vue").ComputedRef<boolean>;
    classes: import("vue").ComputedRef<{
        active: boolean;
        show: boolean;
        'card-body': boolean | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonId: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noBody: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    titleItemClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
    titleLinkAttributes: {
        type: ObjectConstructor;
        required: false;
        default: undefined;
    };
    titleLinkClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
        default: undefined;
    };
}>>, {
    tag: string;
    disabled: boolean;
    active: boolean;
    noBody: string | boolean;
    lazy: boolean;
    buttonId: string;
    titleItemClass: string | unknown[] | Record<string, any>;
    titleLinkAttributes: Record<string, any>;
    titleLinkClass: string | unknown[] | Record<string, any>;
}>;
export default _sfc_main;
