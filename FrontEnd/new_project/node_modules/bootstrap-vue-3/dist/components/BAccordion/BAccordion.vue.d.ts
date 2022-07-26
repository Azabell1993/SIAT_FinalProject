export declare const injectionKey: InjectionKey<string>;
import { InjectionKey } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    flush: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    free: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
}, {
    injectionKey: InjectionKey<string>;
    props: {
        flush: boolean;
        free: boolean;
        id: string;
    };
    computedId: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<{
        'accordion-flush': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    free: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
}>>, {
    flush: boolean;
    free: boolean;
    id: string;
}>;
export default _sfc_main;
