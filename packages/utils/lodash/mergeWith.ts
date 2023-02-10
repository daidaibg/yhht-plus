function _mergeWith<T, U>(obj1: T, obj2: U, customizer: (objValue: any, srcValue: any) => any): T & U {
    const result: any = {};
    for (const key in obj1) {
        result[key] = obj1[key];
    }
    for (const key in obj2) {
        if ((obj2 as any).hasOwnProperty(key)) {
            const value = obj2[key];
            if (customizer) {
                result[key] = customizer(result[key], value);
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}

export default _mergeWith