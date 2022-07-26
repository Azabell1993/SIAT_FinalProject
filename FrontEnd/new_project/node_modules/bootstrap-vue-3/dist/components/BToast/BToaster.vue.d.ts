import type { ContainerPosition } from '../../types';
import type { ToastInstance } from '../BToast/plugin';
declare const _sfc_main: import("vue").DefineComponent<{
    position: {
        type: null;
        required: false;
        default: string;
    };
    instance: {
        type: null;
        required: false;
    };
}, {
    props: {
        position: ContainerPosition;
        instance?: ToastInstance | undefined;
    };
    toastPositions: {
        'top-left': string;
        'top-center': string;
        'top-right': string;
        'middle-left': string;
        'middle-center': string;
        'middle-right': string;
        'bottom-left': string;
        'bottom-center': string;
        'bottom-right': string;
    };
    positionClass: import("vue").ComputedRef<string>;
    handleDestroy: (id: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: null;
        required: false;
        default: string;
    };
    instance: {
        type: null;
        required: false;
    };
}>>, {
    position: any;
}>;
export default _sfc_main;
