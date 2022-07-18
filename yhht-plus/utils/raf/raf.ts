

import now from "../now/performance-now"

// declare global {
//   interface Window {
//     requestAnimationFrame:any,

//   }
// }

let root: any = window
let vendors = ['moz', 'webkit']
let suffix = 'AnimationFrame'
let raf = root['request' + suffix]
let caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
    || root[vendors[i] + 'CancelRequest' + suffix]
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0
  var id = 0
  var queue: any = []
  var frameDuration = 1000 / 60

  raf = function (callback: any) {
    if (queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function () {
        var cp = queue.slice(0)
        queue.length = 0
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last)
            } catch (e) {
              setTimeout(function () { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function (handle: any) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}


// const raf: any = (fn: any) => {
//   return raf.call(root, fn)
// }

export  function cancel(){
  caf.apply(root, arguments)
}
export const polyfill:any=(object:any)=>{
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}
export default (fn: any) => {
  return raf.call(root, fn)
}