/*
 * @Author: daidai
 * @Date: 2021-12-23 11:18:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-19 11:37:33
 * @FilePath: \web-pc-svn\src\api\modules\index.js
 */

import * as API from "../api/api";

interface urlObj {
    [key:string| number]:string
}
export const urlObj:urlObj = {
  "-1": "",
  '1': "", //设备

};

type Keys=string | number
/******************      通用增删改查       ********************* */
export  const currentList = (key: Keys, param:any) => {
  return API.GET(urlObj[key] + "/list", param);
};
export const currentLists = (key: Keys, param: any) => {
  return API.GET(urlObj[key] + "/pageList", param);
};
export const currentPage = (key: Keys, param: any) => {
  return API.GET(urlObj[key] + "/page", param);
};
export const currentSelectList = (key:Keys, param: any) => {
  return API.GET(urlObj[key] + "/selectList", param);
};
 export const currentInfo = (key:Keys, param: any) => {
  return API.GET(urlObj[key] + "/info", param);
};
export const currentSave = (key:Keys, param: any) => {
  return API.POST(urlObj[key] + "/save", param);
};
export const currentUpdate = (key:Keys, param: any) => {
  return API.POST(urlObj[key] + "/update", param);
};
export const currentDelete = (key:Keys, param: any) => {
  return API.POST(urlObj[key] + "/delete", param);
};
export const currentSelect = (key:Keys, param: any) => {
  return API.GET(urlObj[key] + "/select", param);
};
export const currentExport = (key:Keys, param: any) => {
  return API.FILE(
    {
      url: urlObj[key] + "/export",
      ...param
    },
 
  );
};
export const currentGET = (key:Keys, param: any) => {
  return API.GET(urlObj[key], param);
};
export const currentPOST = (key:Keys, param: any) => {
  return API.POST(urlObj[key], param);
};
// 通用接口集合
export const currentApi = {
  currentList,
  currentSave,
  currentUpdate,
  currentDelete,
  currentSelect,
  currentSelectList,
  currentExport,
  currentPOST,
  currentGET,
};
