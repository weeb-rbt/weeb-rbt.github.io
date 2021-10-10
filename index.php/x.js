var message="666";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
document.addEventListener('contextmenu', event => event.preventDefault());
$(document).keydown(function(event){
if(event.keyCode==123){
return false;
}
else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
return false;
}
else if(event.ctrlKey && event.shiftKey && event.keyCode==67){
return false;
}
else if(event.ctrlKey && event.keyCode==85){
return false;
}
});

function disableselect(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
document.oncontextmenu=new Function ("return false")
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}
document.onkeydown = function(e) {
if (e.ctrlKey || (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 116)) {
}
return false;
};
