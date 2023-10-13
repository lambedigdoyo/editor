/* divTooltip() put inside body tag
   openTooltip() put inside function */
var dt, timer;
function divTooltip() {
  dt = document.createElement('div')
  dt.style.cssText =
    'position:absolute; background: #2D0000; color: #F6FF93; padding: 6px 10px;z-index: 10000;' + 'border-radius: 3px; font: normal 14px Arial;' +
    'transition: opacity 0.5s;' + 
    'opacity: 0; z-index: -1; transition: 0.3s 0.1s; transform: scale(1.2) translate(0, 3px)';
  dt.innerHTML = 'Successfully Copied!'
  document.body.appendChild(dt)
}

function clipboardTooltip(e) {
  var evt = e || event
  clearTimeout(timer)
  dt.style.left = evt.pageX + 1 + 'px'
  dt.style.top = evt.pageY + 22 + 'px'
  dt.style.opacity = 1
  dt.style.zIndex = 100000
  timer = setTimeout(function () {
    dt.style.opacity = 0.3;
    dt.style.zIndex = -1;
    dt.style.left = -9999 + "px";    
  }, 2800)
}