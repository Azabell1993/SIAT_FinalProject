import { PropType } from 'vue';
import type { Breakpoint, ColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderVariant: {
        type: PropType<ColorVariant>;
    };
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    stacked: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    tableVariant: {
        type: StringConstructor;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderless: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderVariant: {
            type: PropType<ColorVariant>;
        };
        captionTop: {
            type: BooleanConstructor;
            default: boolean;
        };
        dark: {
            type: BooleanConstructor;
            default: boolean;
        };
        hover: {
            type: BooleanConstructor;
            default: boolean;
        };
        responsive: {
            type: PropType<boolean | Breakpoint>;
            default: boolean;
        };
        stacked: {
            type: PropType<boolean | Breakpoint>;
            default: boolean;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        tableClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        tableVariant: {
            type: StringConstructor;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    classes: import("vue").ComputedRef<(string | Record<string, any> | undefined)[]>;
    responsiveClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        'table-responsive': boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderVariant: {
        type: PropType<ColorVariant>;
    };
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    stacked: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    tableVariant: {
        type: StringConstructor;
    };
}>>, {
    small: boolean;
    dark: boolean;
    stacked: boolean | Breakpoint;
    striped: boolean;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    hover: boolean;
    responsive: boolean | Breakpoint;
}>;
export default _sfc_main;
