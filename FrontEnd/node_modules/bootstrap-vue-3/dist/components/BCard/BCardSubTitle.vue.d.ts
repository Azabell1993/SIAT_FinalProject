import type { TextColorVariant } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    subTitle: {
        type: StringConstructor;
        required: false;
    };
    subTitleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    subTitleTextVariant: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: {
        subTitle?: string | undefined;
        subTitleTag: string;
        subTitleTextVariant: TextColorVariant;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: TextColorVariant;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    subTitle: {
        type: StringConstructor;
        required: false;
    };
    subTitleTag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    subTitleTextVariant: {
        type: null;
        required: false;
        default: string;
    };
}>>, {
    subTitleTag: string;
    subTitleTextVariant: any;
}>;
export default _sfc_main;
