//use:
// var taID = "textareaID";
var ta_ID = document.getElementById(taID);
function iT(tg1,tg2) {
  var a = arguments.length > 1;
if (document.selection) {
  ta_ID.focus();
  var sel = document.selection.createRange();
  sel.text = tg1 + sel.text + tg2; 
  } else { 
  s = ta_ID.selectionStart;
  e = ta_ID.selectionEnd;
  o = ta_ID.value;
  ta_ID.value = o.substring(0, s) + (a ? tg1 + o.substring(s, e) + tg2 : tg1) + o.substring(e),
  ta_ID.setSelectionRange(a || s === e ? s + tg1.length : s, (a ? e : s) + tg1.length),
    ta_ID.focus();
  }
}