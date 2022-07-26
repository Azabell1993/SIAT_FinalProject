import type { SkeletonAnimation } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    animation: {
        type: null;
        required: false;
        default: string;
    };
    columns: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    hideHeader: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    showFooter: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tableProps: {
        type: ObjectConstructor;
        required: false;
    };
}, {
    BTableSimple: import("vue").DefineComponent<{
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderless: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderVariant: {
            type: import("vue").PropType<import("../../types/ColorVariant").default>;
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
            type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
            default: boolean;
        };
        stacked: {
            type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
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
                type: import("vue").PropType<import("../../types/ColorVariant").default>;
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
                type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
                default: boolean;
            };
            stacked: {
                type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
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
            type: import("vue").PropType<import("../../types/ColorVariant").default>;
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
            type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
            default: boolean;
        };
        stacked: {
            type: import("vue").PropType<boolean | import("../../types/Breakpoint").default>;
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
        stacked: boolean | import("../../types/Breakpoint").default;
        striped: boolean;
        bordered: boolean;
        borderless: boolean;
        captionTop: boolean;
        hover: boolean;
        responsive: boolean | import("../../types/Breakpoint").default;
    }>;
    BSkeleton: import("vue").DefineComponent<{
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
            type: import("../../types/SkeletonType").default;
            variant?: import("../../types/ColorVariant").default | undefined;
        };
        classes: import("vue").ComputedRef<(string | {
            [x: string]: "fade" | import("../../types/ColorVariant").default | "wave" | "throb" | undefined;
        })[]>;
        style: import("vue").ComputedRef<import("vue").StyleValue>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    animation: {
        type: null;
        required: false;
        default: string;
    };
    columns: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    hideHeader: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    showFooter: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tableProps: {
        type: ObjectConstructor;
        required: false;
    };
}>>, {
    animation: any;
    columns: number;
    rows: number;
    hideHeader: boolean;
    showFooter: boolean;
}>;
export default _sfc_main;
