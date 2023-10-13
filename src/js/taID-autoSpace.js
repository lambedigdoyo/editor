/* =============  Create auto tab =================== */
// use : var taID = "textareaID" === put before this script
document.getElementById(taID).addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        var cursorPos = this.selectionStart;
        var curentLine = this.value.substr(0, this.selectionStart).split("\n").pop();
        var indent = curentLine.match(/^\s*/)[0];
        var value = this.value;
        var textBefore = value.substring(0,  cursorPos );
        var textAfter  = value.substring(cursorPos, value.length );

        this.value = textBefore + "\n" + indent + textAfter;
        console.log(textBefore);
        e.preventDefault();
        setCaretPosition(this, cursorPos + indent.length + 1); // +1 is for the \n
    }
});
function setCaretPosition(ctrl, pos) {
    if(ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos,pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}