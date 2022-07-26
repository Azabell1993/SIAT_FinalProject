import { PropType } from 'vue';
import type { Alignment } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    alignSelf: {
        type: PropType<"auto" | Alignment.Vertical>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    col: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        col: boolean;
    }>;
    classList: string[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alignSelf: {
        type: PropType<"auto" | Alignment.Vertical>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    col: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>>, {
    tag: string;
    alignSelf: "auto" | Alignment.Vertical;
    order: string | number;
    offset: string | number;
    col: boolean;
    cols: string | number;
}>;
export default _sfc_main;
