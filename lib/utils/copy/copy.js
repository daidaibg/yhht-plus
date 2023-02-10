function Copy(copyData) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(copyData.toLocaleString());
  }
  let input = document.createElement("input");
  input.value = copyData.toLocaleString();
  input.style.position = "absolute";
  input.style.left = "-9999px";
  input.style.top = "-9999px";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  return new Promise((res, rej) => {
    document.execCommand("copy") ? res() : rej();
    input.remove();
  });
}
export {
  Copy as default
};
