import {Copy} from "yhht-plus/utils"
import {ElMessage} from "element-plus"

export const  copyVar =(text:string)=>{
    let str = `var(${text})`
    Copy( str).then(res=>{
        console.log(res);
        ElMessage.success(`复制成功[  ${str}  ]`)
      }).catch(err=>{
        ElMessage.error("复制失败，请手动复制！")
      })
}