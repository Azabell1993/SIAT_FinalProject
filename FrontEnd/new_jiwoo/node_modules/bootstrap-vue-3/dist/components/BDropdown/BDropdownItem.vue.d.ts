import type { ColorVariant, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    props: {
        href?: string | undefined;
        linkClass?: string | unknown[] | Record<string, unknown> | undefined;
        active: boolean;
        disabled: boolean;
        rel: string;
        target: LinkTarget;
        variant: ColorVariant;
    };
    emit: (e: 'click', value: MouseEvent) => void;
    attrs: {
        [x: string]: unknown;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | ColorVariant;
        active: boolean;
        disabled: boolean;
    }>;
    tag: import("vue").ComputedRef<"button" | "b-link" | "a">;
    componentAttrs: import("vue").ComputedRef<{
        activeClass?: string | undefined;
        'aria-current': string | null;
        href: string | null | undefined;
        rel: string;
        type: string | null;
        target: LinkTarget;
    }>;
    clicked: (e: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
