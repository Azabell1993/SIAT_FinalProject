import { StyleValue } from 'vue';
import type { ColorVariant, SkeletonAnimation, SkeletonType } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    animation: {
        type: null;
        required: false;
        default: string;
    };
    type: {
        type: null;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
    };
}, {
    props: {
        height?: string | undefined;
        width?: string | undefined;
        size?: string | undefined;
        animation: SkeletonAnimation;
        type: SkeletonType;
        variant?: ColorVariant | undefined;
    };
    classes: import("vue").ComputedRef<(string | {
        [x: string]: "fade" | ColorVariant | "wave" | "throb" | undefined;
    })[]>;
    style: import("vue").ComputedRef<StyleValue>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    animation: {
        type: null;
        required: false;
        default: string;
    };
    type: {
        type: null;
        required: false;
        default: string;
    };
    variant: {
        type: null;
        required: false;
    };
}>>, {
    type: any;
    animation: any;
}>;
export default _sfc_main;
