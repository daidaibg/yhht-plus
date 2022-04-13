/*
 * @Author: daidai
 * @Date: 2021-07-12 09:26:26
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-22 15:41:29
 * @FilePath: \yhht-ui\yhht-ui\src\util\current.js
 */
/**
* 
* @param {event} e     鼠标事件返回方法
* @param {Object} dom  需要移动的元素 
*/
export const Drag = (e, dom, marginleft = 0) => {
  let odiv = dom
  let disX = e.clientX - odiv.offsetLeft
  let disY = e.clientY - odiv.offsetTop
  document.onmousemove = (e) => {
    let left = e.clientX - disX + marginleft;
    let top = e.clientY - disY;
    if (top < 0) {
      top = 0
    }
    odiv.style.left = left + 'px'
    odiv.style.top = top + 'px'
    return false
  }
  document.onmouseup = (e) => {
    document.onmousemove = null
    document.onmouseup = null
  }
  return false
}
/**
* 
* @param {event} e     鼠标事件返回方法
* @param {Object} dom  需要移动的元素 
* @param {Array} range [minX,maxX, minY,maxY]
*/
export const yhDrag = ({ e, dom, marginleft = 0, range, rangDom }) => {
  e = e || window.event;
  let odiv = dom
  let disX = 0;
  let disY = 0;
  if (rangDom && !range) {
    let maxX = rangDom.offsetWidth - odiv.offsetWidth;
    let maxY = rangDom.offsetHeight - odiv.offsetHeight;
    range = [0, maxX, 0, maxY]
  }
  if (e.type == "mousedown") {
    disX = e.clientX - odiv.offsetLeft
    disY = e.clientY - odiv.offsetTop
    document.onmousemove = (e) => {
      let left = e.clientX - disX + marginleft;
      let top = e.clientY - disY;
      setDomLeftTop(left, top)
      return false
    }
  } else {
    disX = e.changedTouches[0].clientX - odiv.offsetLeft
    disY = e.changedTouches[0].clientY - odiv.offsetTop
    document.ontouchmove = (e) => {
      let left = e.changedTouches[0].clientX - disX + marginleft;
      let top = e.changedTouches[0].clientY - disY;
      setDomLeftTop(left, top)
    }
  }
  document.ontouchend = document.onmouseup = (e) => {
    document.ontouchmove = document.onmousemove = null
    document.ontouchend = document.onmouseup = null
  }
  /**
   * @description:设置元素的left 与top 
   * @param {*} params
   * @return {*}
   */
  function setDomLeftTop(left, top) {
    if (range) {
      left = left < range[0] ? range[0] : left;
      left = left > range[1] ? range[1] : left;
      top = top < range[2] ? range[2] : top;
      top = top > range[3] ? range[3] : top;
    }
    odiv.style.left = left + 'px'
    odiv.style.top = top + 'px'
  }


  return false
}
/**
* 参数格式  * 号必填
* @param {*Array} arr  数据数组
* @param {*String} id  自己本身id
* @param {*String} pid  父级id
*  @param {String || Number} order  
*/
export function treeDataTranslate(data, id, pid, order) {
  // console.log(Array.isArray(data))
  if (data == null || !Array.isArray(data)) {
    return [];
  }
  if (order) {
    data.sort(function (a, b) {
      return a[order] - b[order];
    })
  }
  // console.log(data)
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {

    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['subs']) {
        temp[data[k][pid]]['subs'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['subs'].push(data[k])


    } else {
      res.push(data[k])
    }
  }
  // console.log(outurls)
  // console.log(res)
  return res
}


/**
 * 获取uuid
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}