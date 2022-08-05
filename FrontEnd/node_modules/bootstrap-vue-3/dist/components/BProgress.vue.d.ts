import type { BProgressParentData } from '../types/components';
export declare const injectionKey: InjectionKey<BProgressParentData>;
import type { ColorVariant } from '../types';
import { InjectionKey } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    variant: {
        type: null;
        required: false;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    height: {
        type: StringConstructor;
        required: false;
    };
    animated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    showProgress: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}, {
    injectionKey: InjectionKey<BProgressParentData>;
    props: {
        variant?: ColorVariant | undefined;
        max?: string | number | undefined;
        height?: string | undefined;
        animated: boolean;
        precision: number | string;
        showProgress: boolean;
        showValue: boolean;
        striped: boolean;
        value: number | string;
    };
    BProgressBar: import("vue").DefineComponent<{
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
        };
        labelHtml: {
            type: StringConstructor;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        showProgress: {
            type: BooleanConstructor;
            default: boolean;
        };
        showValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        variant: {
            type: import("vue").PropType<ColorVariant>;
        };
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
        };
        labelHtml: {
            type: StringConstructor;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        showProgress: {
            type: BooleanConstructor;
            default: boolean;
        };
        showValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        variant: {
            type: import("vue").PropType<ColorVariant>;
        };
    }>>, {
        value: string | number;
        animated: boolean;
        precision: string | number;
        showProgress: boolean;
        showValue: boolean;
        striped: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: null;
        required: false;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    height: {
        type: StringConstructor;
        required: false;
    };
    animated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    showProgress: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}>>, {
    value: string | number;
    animated: boolean;
    precision: string | number;
    showProgress: boolean;
    showValue: boolean;
    striped: boolean;
}>;
export default _sfc_main;
