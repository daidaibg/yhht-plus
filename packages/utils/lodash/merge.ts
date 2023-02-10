function merge<T, U>(obj1: T, obj2: U): T & U {
    const result: any = {};
    for (const key in obj1) {
        result[key] = obj1[key];
    }
    for (const key in obj2) {
        if ((obj2 as any).hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }
    return result;
}
export default merge