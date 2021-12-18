document.oncontextmenu=new Function("return false")
document.ondragstart =new Function("return false")
function ImpEcrOff() { SetInterval("window.clipboardData.setData('text','')",20); }