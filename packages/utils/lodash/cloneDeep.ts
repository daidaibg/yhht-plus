function cloneDeep<T>(obj: T): T {
    if (typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(item => cloneDeep(item)) as any;
    }
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = cloneDeep(obj[key]);
      }
    }
    return result;
  }
export default   cloneDeep