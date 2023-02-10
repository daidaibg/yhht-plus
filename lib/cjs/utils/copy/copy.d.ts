/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：function类型 ||
 */
declare function Copy(copyData: string | number): Promise<void>;
export default Copy;
