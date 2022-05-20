/*
 * @Author: wei
 * @description: 
 * @LastEditTime: 2022-04-19 10:52:32
 */

//导出基础的get，post，baseurl等一系列方法   
// GETNOBASE没有路径，是项目根目录文件请求
export { GET, POST, baseUrl, GETNOBASE, PUT, DELETE, FILEPOST, FILE } from "./api"
// 导出通用的一些方法，增删改查 list,save,update,delete,select,selectlist,post,get
export {
    currentList,
    currentSave,
    currentUpdate,
    currentDelete,
    currentSelect,
    currentSelectList,
    currentExport,
    currentPOST,
    currentGET,
} from "./currency"
