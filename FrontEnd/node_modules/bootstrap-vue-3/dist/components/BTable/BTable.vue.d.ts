import { PropType } from 'vue';
import { Breakpoint, ColorVariant, TableField, TableItem, VerticalAlign } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    align: {
        type: PropType<VerticalAlign>;
    };
    caption: {
        type: StringConstructor;
    };
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderVariant: {
        type: PropType<ColorVariant>;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    fields: {
        type: PropType<TableField<Record<string, unknown>>[]>;
        default: () => never[];
    };
    footClone: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: PropType<TableItem<Record<string, unknown>>[]>;
        default: () => never[];
    };
    responsive: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<VerticalAlign>;
        };
        caption: {
            type: StringConstructor;
        };
        captionTop: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderless: {
            type: BooleanConstructor;
            default: boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderVariant: {
            type: PropType<ColorVariant>;
        };
        dark: {
            type: BooleanConstructor;
            default: boolean;
        };
        fields: {
            type: PropType<TableField<Record<string, unknown>>[]>;
            default: () => never[];
        };
        footClone: {
            type: BooleanConstructor;
            default: boolean;
        };
        hover: {
            type: BooleanConstructor;
            default: boolean;
        };
        items: {
            type: PropType<TableItem<Record<string, unknown>>[]>;
            default: () => never[];
        };
        responsive: {
            type: PropType<boolean | Breakpoint>;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: PropType<ColorVariant>;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariant | VerticalAlign | undefined;
        'table-striped': boolean;
        'table-hover': boolean;
        'table-dark': boolean;
        'table-bordered': boolean;
        'table-borderless': boolean;
        'table-sm': boolean;
        'caption-top': boolean;
    })[]>;
    itemHelper: {
        normaliseFields: (origFields: TableField<Record<string, unknown>>[], items: TableItem<Record<string, unknown>>[]) => import("../../types").TableFieldObject<Record<string, unknown>>[];
    };
    computedFields: import("vue").ComputedRef<import("../../types").TableFieldObject<Record<string, unknown>>[]>;
    responsiveClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        'table-responsive': boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<VerticalAlign>;
    };
    caption: {
        type: StringConstructor;
    };
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderVariant: {
        type: PropType<ColorVariant>;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    fields: {
        type: PropType<TableField<Record<string, unknown>>[]>;
        default: () => never[];
    };
    footClone: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: PropType<TableItem<Record<string, unknown>>[]>;
        default: () => never[];
    };
    responsive: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
}>>, {
    small: boolean;
    dark: boolean;
    items: TableItem<Record<string, unknown>>[];
    striped: boolean;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    hover: boolean;
    responsive: boolean | Breakpoint;
    fields: TableField<Record<string, unknown>>[];
    footClone: boolean;
}>;
export default _sfc_main;
