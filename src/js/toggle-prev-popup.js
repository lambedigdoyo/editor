/* ================== PREVIEW IN WINDOW show/hide ============ */
//use: var taId = "textareaID"; button onclick='togglePrev(); updatePrev()'>PopUp Preview</but
var previ = false;
var prevOpen;
function grPreviu(){
  var height = 500;
  var width = 950;
  var top = window.outerHeight/2.3+window.screenY-height/2.3;
  var left = window.outerWidth/2+window.screenX-width/2;
prevOpen = window.open("HTML Editor", "prevOpen", "location=yes, height="+height+",width="+width+",top="+top+", left="+left+",scrollbars=yes,status=yes");
  prevOpen.focus();	        
    let outpPrev = prevOpen.document;				                         
    outpPrev.open();
    let dataInp = document.getElementById(taID).value;				   
    outpPrev.write(dataInp);	
    outpPrev.close();
previ = true;
  }
function closPreviu() {
  prevOpen.close();
previ = false; 
}

function togglePrev() {
  previ ? closPreviu() : grPreviu();
}
//setTimeout(togglePrevi, 400);