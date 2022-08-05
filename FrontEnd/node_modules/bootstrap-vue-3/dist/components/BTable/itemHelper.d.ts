import type { TableField, TableFieldObject, TableItem } from '../../types';
declare const useItemHelper: () => {
    normaliseFields: (origFields: TableField[], items: TableItem[]) => TableFieldObject[];
};
export default useItemHelper;
