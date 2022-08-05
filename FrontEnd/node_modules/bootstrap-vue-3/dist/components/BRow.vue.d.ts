import { PropType } from 'vue';
import type { Alignment } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutterX: {
        type: StringConstructor;
        default: null;
    };
    gutterY: {
        type: StringConstructor;
        default: null;
    };
    alignV: {
        type: PropType<Alignment.Vertical>;
        default: null;
    };
    alignH: {
        type: PropType<Alignment.Horizontal>;
        default: null;
    };
    alignContent: {
        type: PropType<Alignment.Content>;
        default: null;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | "fill" | "stretch" | "center" | "end" | "start" | "baseline" | "between" | "around";
    }>;
    rowColsClasses: string[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutterX: {
        type: StringConstructor;
        default: null;
    };
    gutterY: {
        type: StringConstructor;
        default: null;
    };
    alignV: {
        type: PropType<Alignment.Vertical>;
        default: null;
    };
    alignH: {
        type: PropType<Alignment.Horizontal>;
        default: null;
    };
    alignContent: {
        type: PropType<Alignment.Content>;
        default: null;
    };
}>>, {
    tag: string;
    alignContent: Alignment.Content;
    gutterX: string;
    gutterY: string;
    alignV: Alignment.Vertical;
    alignH: Alignment.Horizontal;
}>;
export default _sfc_main;
