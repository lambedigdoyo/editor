/* == use: onmouseover='show("Tolltip Text")'; */
/* a href=".." onmouseover="ttip('...', 'gray', 250)";]Yahoo[a] */
document.write('<div id=dd_tooltip></div>');
document.write('<style>#dd_tooltip {position: absolute;max-width: 160px; border: 2px solid #aaa; padding: 4px 5px; visibility: hidden; z-index: 10000; background-color: rgba(25,26,80,.8); color: white; text-align: center; font: normal 14px Arial; border-radius: 5px;}</style>');
var offsetxpoint=-60 //Customize x offset of tooltip
var offsetypoint=20 //Customize y offset of tooltip
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["tooltip"] : document.getElementById? document.getElementById("dd_tooltip") : ""
document.body.appendChild(tipobj)

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
/* t=text, c=color, w=width */
function show(t, c, w){
if (ns6||ie){
if (typeof w!="undefined") tipobj.style.width=w+"px"
if (typeof c!="undefined" && c!="") tipobj.style.backgroundColor=c
tipobj.innerHTML=t
enabletip=true
return false
}
}

function positiontip(e){
if (enabletip){
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
//Find out how close the mouse is to the corner of the window
var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20

var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000

//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<tipobj.offsetWidth)
//move the horizontal position of the menu to the left by it's width
tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if (curX<leftedge)
tipobj.style.left="5px"
else
//position the horizontal position of the menu where the mouse is positioned
tipobj.style.left=curX+offsetxpoint+"px"

//same concept with the vertical position
if (bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"
}
}

function hide(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
}
}

document.onmousemove=positiontip

//window.onload = 

const ttip = document.querySelectorAll("span, button, a, input");
for (i = 0; i < ttip.length; i++) {
  ttip[i].classList.add("dd_tooltip");
}
function allTT() {
  var ddtt = document.querySelectorAll(".dd_tooltip");
  for (var i=0; i<ddtt.length; i++) {
  ddtt[i].onmouseout = hide;
//  ddtt[i].onclick = hide;
  ddtt[i].onfocus = hide;
  }
} 
allTT();