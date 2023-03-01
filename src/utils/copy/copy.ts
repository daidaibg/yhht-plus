/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：function类型 || 
 */

function Copy(copyData: string|number) {
    //谷歌把非安全地址这个方法给禁止了
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard 向剪贴板写文本
        return navigator.clipboard.writeText(copyData.toLocaleString());
    }
    let input = document.createElement('input') as HTMLInputElement;
    input.value = copyData.toLocaleString()
    input.style.position = "absolute";
    input.style.left = "-9999px";
    input.style.top = "-9999px";
    input.style.opacity = '0';
    document.body.appendChild(input)
    input.select()
    return new Promise<void>((res, rej) => {
        // 执行复制命令并移除文本框
        document.execCommand('copy') ? res() : rej();
        input.remove();
    });
}

export default Copy