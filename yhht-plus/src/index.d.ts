
declare const installer: {
  version: string;
  install: (app: import("vue").App<any>, options?: any) => void;
};

export default installer;
export declare const version: string;