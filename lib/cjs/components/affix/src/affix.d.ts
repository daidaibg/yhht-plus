declare const _default: {
    /** 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
    container: {
        type: StringConstructor;
        default: string;
    };
    /**  位置 */
    position: {
        type: StringConstructor;
        default: string;
    };
    /**  偏移距离 */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /** 固钉定位层级，样式默认为 500 */
    zIndex: {
        type: NumberConstructor;
    };
};
export default _default;
