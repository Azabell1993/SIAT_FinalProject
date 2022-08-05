import type { ButtonType, ColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    props: {
        buttonClass?: string | unknown[] | Record<string, unknown> | undefined;
        active: boolean;
        activeClass: string;
        disabled: boolean;
        variant: ColorVariant;
    };
    emit: (e: 'click', value: MouseEvent) => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | ColorVariant;
        disabled: boolean;
    }>;
    attrs: import("vue").ComputedRef<{
        role: string;
        type: ButtonType;
        disabled: boolean;
    }>;
    clicked: (e: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
