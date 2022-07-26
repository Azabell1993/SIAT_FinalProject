import { App } from 'vue';
import type { BreadcrumbItem } from '../types';
interface UseBreadcrumbI {
    items: BreadcrumbItem[];
    readonly reset: () => void;
}
export declare function createBreadcrumb(app: App): void;
export declare function useBreadcrumb(): UseBreadcrumbI;
export {};
