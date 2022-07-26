export declare const injectionKey: InjectionKey<BCarouselParentData>;
import type { BCarouselParentData } from '../../types/components';
import { InjectionKey, VNode } from 'vue';
import Carousel from 'bootstrap/js/dist/carousel';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
    };
    imgHeight: {
        type: StringConstructor;
        required: false;
    };
    imgWidth: {
        type: StringConstructor;
        required: false;
    };
    background: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    controls: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    indicators: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    noTouch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    injectionKey: InjectionKey<BCarouselParentData>;
    props: {
        id?: string | undefined;
        imgHeight?: string | undefined;
        imgWidth?: string | undefined;
        background?: string | undefined;
        modelValue: number;
        controls: boolean;
        indicators: boolean;
        interval: number;
        noTouch: boolean;
        noWrap: boolean;
    };
    emit: {
        (e: 'sliding-start', value: Event): void;
        (e: 'sliding-end', value: Event): void;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    element: import("vue").Ref<HTMLElement | undefined>;
    instance: import("vue").Ref<Carousel | undefined>;
    computedId: import("vue").ComputedRef<string>;
    slides: import("vue").Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sliding-start" | "sliding-end")[], "sliding-start" | "sliding-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
    };
    imgHeight: {
        type: StringConstructor;
        required: false;
    };
    imgWidth: {
        type: StringConstructor;
        required: false;
    };
    background: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    controls: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    indicators: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    noTouch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onSliding-start"?: ((...args: any[]) => any) | undefined;
    "onSliding-end"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    controls: boolean;
    indicators: boolean;
    interval: number;
    noTouch: boolean;
    noWrap: boolean;
}>;
export default _sfc_main;
