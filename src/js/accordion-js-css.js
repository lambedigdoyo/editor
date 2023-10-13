document.write('<style>.hideBox { position: absolute; top: 100px; z-index: -5; opacity: 0; height: 0; margin: 0; border: none; padding: 0; overflow: hidden; background: transparent; visibility: hidden; transition: 0.2s; } .hideBox.show{ top: 120%; left: 0; background: rgba(233,233,233,.7); z-index: 99; padding: 4px; height: auto; opacity: 1.0; transition: 0.2s 0.1s; visibility: visible; overflow: auto; border: 1px solid #888; border-radius: 6px; box-shadow: 1px 1px 8px #444; } .hideBox span.accordion { display: inline-block; position: absolute; top: 3px; right: 3px; font: bold 16px Arial!important; padding: 0 5px 2px; border: 1px solid #000; border-radius: 20%; background: #777; cursor: pointer; color: #ddd;transition: 0.2s;}.hideBox:hover span.accordion { background: brown;color: #fff;transition: 0.5s;} .hideBox span.accordion:active { transform: scale(0.8);}</style>');
// create element span-close (x) for ACCORDION MENU
var as = document.createElement("span");
as.innerHTML = "x";
as.setAttribute("class", "accordion");
if (document.body.hasChildNodes()) {
  let ch = document.body.querySelectorAll('.hideBox');
  for (let i = 0; i < ch.length; i++) {
      var as = document.createElement("span");
      as.innerHTML = "&#x2715;"
      as.setAttribute("class", "accordion");
      ch[i].appendChild(as);
  }
}
// ACCORDION MENU
function setClass(s,e,t){
for(var a=0;a<s.length;a++)s[a].classList[t](e)
}
for(
var abc=document.getElementsByClassName("accordion"),
hideBox=document.getElementsByClassName("hideBox"),
i=0;i<abc.length;i++)abc[i].onclick=function(){
var s=!this.classList.contains("active");
setClass(abc,"active","remove"),
setClass(hideBox,"show","remove"),
s&&(this.classList.toggle("active"),
this.nextElementSibling.classList.toggle("show"))
};