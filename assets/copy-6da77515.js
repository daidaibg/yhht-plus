const i=t=>t;function l(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t.toLocaleString());let e=document.createElement("input");return e.value=t.toLocaleString(),e.style.position="absolute",e.style.left="-9999px",e.style.top="-9999px",e.style.opacity="0",document.body.appendChild(e),e.select(),new Promise((o,n)=>{document.execCommand("copy")?o():n(),e.remove()})}export{l as C,i as m};