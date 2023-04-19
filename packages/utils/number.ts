/**
 * 将给定的实数保留一定的小数
 *
 * @param number 需要处理的实数
 * @param decimal 需要保留的小数
 */
export function toFixed(number: number, decimal: number) {
    if (decimal === 0) return Math.round(number)
  
    let snum = String(number)
    const pointPos = snum.indexOf('.')
  
    if (pointPos === -1) return number
  
    const nums = snum.replace('.', '').split('')
    const targetPos = pointPos + decimal
    const datum = nums[targetPos]
  
    if (!datum) return number
  
    if (snum.charAt(targetPos + 1) === '5') {
      snum = snum.substring(0, targetPos + 1) + '6'
    } else {
      snum = snum.substring(0, targetPos + 2)
    }
  
    return parseFloat(Number(snum).toFixed(decimal))
  }
  