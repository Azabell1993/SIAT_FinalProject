declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    floating: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    novalidate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    validated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        id?: string | undefined;
        floating: boolean;
        novalidate: boolean;
        validated: boolean;
    };
    emit: (e: 'submit', value: Event) => void;
    classes: import("vue").ComputedRef<{
        'form-floating': boolean;
        'was-validated': boolean;
    }>;
    submitted: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    floating: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    novalidate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    validated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    floating: boolean;
    novalidate: boolean;
    validated: boolean;
}>;
export default _sfc_main;
