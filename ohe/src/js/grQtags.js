/* 
can use element onclick, like this:
<button onclick='iTid("textareaID", "text1", "text2")'>XXX</button>
<button onclick='iT("text1", "text2")'>XXX</button> = for this: add: var taID = document.getElementById("textareaID"); - before this js
for toolbar, use: <script>edOHE("textareaID");<\/script>
toolbar style #edOHE, #edOHE span, #edOHE span input 
*/
var x_aTs = new Array(); // x_aT = complete addTag, xAT = addTag, x_rT = remove Tag
var xLinks = new Array(); // x_cekOT = cek open tags
var x_oT = new Array(); // oT = openTags

function x_aT(id, display, oTag, cTag, access, open) {
  this.id = id;
  this.display = display;
  this.oTag = oTag;
  this.cTag = cTag;
  this.access = access;
  this.open = open;
}
x_aTs.push(new x_aT('x_html', '!DOC-html', '<!DOCTYPE html>\n<html>\n<head>\n  <title>Title</title>\n  <meta charset="UTF-8">\n  ​<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n\n\n</head>\n<body>\n\n\n\n</body>\n</html>',''));
x_aTs.push(new x_aT('x_js', 'js', '<script>\n', '\n<\/script>', 'js'));
x_aTs.push(new x_aT('x_js', 'script', '<script>\n', '\n<\/script>', 'js'));
x_aTs.push(new x_aT('x_@js', '@js', '<script src=', '><\/script>', '@js'));
x_aTs.push(new x_aT('x_css', 'style', '<style>\n', '\n</style>', 'css'));
x_aTs.push(new x_aT('x_@css', '@css', '<link href=', ' rel=stylesheet />', '@css'));
x_aTs.push(new x_aT('x_h3', '&lt;!--', '<!-- ', ' -->', '3'));
x_aTs.push(new x_aT('x_h4', '/*--*/ ', '/* ', ' */', '4'));
x_aTs.push(new x_aT('x_h1', 'h1', '<h1>', '</h1>', '1'));
x_aTs.push(new x_aT('x_h2', 'h2', '<h2>', '</h2>', '2'));
x_aTs.push(new x_aT('x_p', 'p', '<p>', '</p>', 'p'));
x_aTs.push(new x_aT('x_bold', 'b', '<strong>', '</strong>', 'b'));
x_aTs.push(new x_aT('x_link', 'a', '<a href="javascript:void()" class=x id=x>', '</a>', 'a'));
x_aTs.push(new x_aT('x_ta', 'tArea', '<textarea id=tA class=tA cols=65 rows=12 spellcheck=false wrap=logical placeholder="Text here...!!!">', '</textarea>', 'ta'));
x_aTs.push(new x_aT('x_ifr', 'iframe', '<iframe id=prev class=prev>', '</iframe>', 'ifr'));
x_aTs.push(new x_aT('x_inp', 'input', '<input type=button id=x class=x onclick=\'x()\' value=CLICK!>', ''));
x_aTs.push(new x_aT('x_btn', 'button', '<button id=x class=x onclick=\'x()\'>CLICK', '</button>', 'btn'));
x_aTs.push(new x_aT('x_sp', 'span', '<span>', '</span>', 'sp'));
x_aTs.push(new x_aT('x_div', 'div', '<div>', '</div>', 'div'));
x_aTs.push(new x_aT('x_reset_css', 'reset.css', '<link href="https://cdn.jsdelivr.net/gh/lambedigdoyo/editor@master/src/css/gr-reset.css" rel="stylesheet" />',''));
x_aTs.push(new x_aT('x_setTa', 'set_tArea.js', '<script src="https://cdn.jsdelivr.net/gh/lambedigdoyo/editor@master/src/js/textarea-attr.js"><\/script>',''));
x_aTs.push(new x_aT('x_jq1', 'jq_1.9.1.js', '<script src="https://cdn.jsdelivr.net/gh/lambedigdoyo/lib@master/jquery/jquery_1.9.1.min.js"><\/script>',''));
x_aTs.push(new x_aT('x_cm_doc_css', 'CM-doc.css', '<link href="https://cdn.jsdelivr.net/gh/lambedigdoyo/editor@master/codemirror/doc/docs.css" rel="stylesheet" />',''));
x_aTs.push(new x_aT('x_cm_demo_css', 'CM-demo.css', '<link href="https://cdn.jsdelivr.net/gh/lambedigdoyo/editor@master/codemirror/combined/simple-preview.css" rel="stylesheet" />',''));
x_aTs.push(new x_aT('x_cm_js', 'CM-all.js', '<script src="https://cdn.jsdelivr.net/gh/lambedigdoyo/editor@master/codemirror/combined/codemirror-all.js"><\/script>',''));
x_aTs.push(new x_aT('x_cm_ed_js', 'CM-editor', '<textarea id=code><!DOCTYPE html>\n<html>\n<head>\n  <meta charset=utf-8>\n  <title>HTML5 canvas demo</title>\n<style>p {font-family: monospace;}</style>\n\n</head>\n<body>\n\n<p>Canvas pane goes here:</p>\n<canvas id=pane width=295 height=290></canvas>\n\n<script>\n  var canvas = document.getElementById("pane");\n  var context = canvas.getContext("2d");\n\n  context.fillStyle = "rgb(250,0,0)";\n  context.fillRect(10, 10, 255, 250);\n\n  context.fillStyle = "rgba(0, 0, 250, 0.5)";\n  context.fillRect(30, 30, 255, 250);\n<\/script>\n\n</body>\n</html></textarea>\n<iframe id=preview></iframe>\n\n<script>\nvar delay;\nvar editor = CodeMirror.fromTextArea(document.getElementById("code"), {\n  mode: "text/html"\n});\neditor.on("change", function() {\n  clearTimeout(delay);\n    delay = setTimeout(updatePreview, 300);\n});\nfunction updatePreview() {\n  var previewFrame = document.getElementById("preview");\n  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;\n  preview.open();\n  preview.write(editor.getValue());\n  preview.close();\n}\nsetTimeout(updatePreview, 300);\n<\/script>',''));
var extendedStart = x_aTs.length;
x_aTs.push(new x_aT('x_jq2', 'jq_3.6.0.min.js', '<script src=https://cdn.jsdelivr.net/gh/lambedigdoyo/lib@main/jquery/jquery.3.6.0.min.js><\/script>',''));
x_aTs.push(new x_aT('x_h3', ' h3 ', '<h3>', '</h3>', '3'));
x_aTs.push(new x_aT('x_h4', 'h4 ', '<h4>', '</h4>', '4'));
x_aTs.push(new x_aT('x_img', 'img', '<img src="" width=400 height=200 style="padding: 4px; margin: 5px; border: 1px solid #555;" />', ''));
x_aTs.push(new x_aT('x_aTalic', ' i ', '<em>', '</em>', 'i'));
x_aTs.push(new x_aT('x_ul', 'UL', '<ul>\n', '</ul>', 'u'));
x_aTs.push(new x_aT('x_ol', 'OL', '<ol>\n', '</ol>', 'o'));
x_aTs.push(new x_aT('x_li', 'LI', '\t<li>', '</li>\n', 'l'));
x_aTs.push(new x_aT('x_code', 'CODE', '<code>', '</code>', 'c'));
x_aTs.push(new x_aT('x_pre', 'PRE', '<pre>', '</pre>'));
x_aTs.push(new x_aT('x_block', 'B-QUOTE', '<blockquote>', '</blockquote>', 'q'));
x_aTs.push(new x_aT('x_dl', 'DL', '<dl>\n', '</dl>'));
x_aTs.push(new x_aT('x_dt', 'DT', '\t<dt>', '</dt>'));
x_aTs.push(new x_aT('x_dd', 'DD', '\t<dd>', '</dd>'));
x_aTs.push(new x_aT('x_table', 'TABLE', '<table>\n<tbody>', '</tbody>\n</table>'));
x_aTs.push(new x_aT('x_tr', 'TR', '\t<tr>\n', '\n\t</tr>'));
x_aTs.push(new x_aT('x_td', 'TD', '\t\t<td>', '</td>'));
x_aTs.push(new x_aT('x_via', '@button', '', '', 'v'));

function x_show(elm, button, i) {
  if (button.access) {
    var accesskey = ' accesskey = "' + button.access + '"'
  } else {
    var accesskey = '';
  }
  switch (button.id) {
    default:
      document.write('<input type="button" id="' + button.id + '_' + elm + '" ' + accesskey + ' class="x_button" onclick="xInsertTag(\'' + elm + '\', ' + i + ');" value="' + ' ' + button.display + '"  />');
      break;
  }
}

function xAT(elm, button) {
  if (x_aTs[button].cTag != '') {
    x_oT[elm][x_oT[elm].length] = button;
    document.getElementById(x_aTs[button].id + '_' + elm).value = '/' + document.getElementById(x_aTs[button].id + '_' + elm).value.replace(' ','');
  }
}

function x_rT(elm, button) {
  for (i = 0; i < x_oT[elm].length; i++) {
    if (x_oT[elm][i] == button) {
      x_oT[elm].splice(i, 1);
      document.getElementById(x_aTs[button].id + '_' + elm).value = document.getElementById(x_aTs[button].id + '_' + elm).value.replace('/', ' ');
    }
  }
}

function x_cekOT(elm, button) {
  var tag = 0;
  for (i = 0; i < x_oT[elm].length; i++) {
    if (x_oT[elm][i] == button) {
      tag++;
    }
  }
  if (tag > 0) {
    return true;
  } else {
    return false;
  }
}

function edOHE(elm) {
  document.write('<div id="edOHE" + " " + class="edOHE"><span>');
  for (i = 0; i < extendedStart; i++) {
    x_show(elm, x_aTs[i], i);
  }
  if (xShowButn()) {
    document.write('<input type="button" id="x_extra_show_' + elm + '" class="x_button" onclick="xShow(\'' + elm + '\')" value="»" style="visibility: hidden;" />' +
      '</span><!-- <br /> -->' + '<span id="x_extra_buttons_' + elm + '">' +
      '<input type="button" id="x_extra_hide_' + elm + '" class="x_button" onclick="xHide(\'' + elm + '\');" value="«" />');
  } else {
    document.write('<input type="button" id="x_extra_show_' + elm + '" class="x_button" onclick="xShow(\'' + elm + '\')" value="»" />' +
      '</span><!-- <br /> -->' + '<span id="x_extra_buttons_' + elm + '" style="display: none;">' +
      '<input type="button" id="x_extra_hide_' + elm + '" class="x_button" onclick="xHide(\'' + elm + '\');" value="«" />');
  }
  for (i = extendedStart; i < x_aTs.length; i++) {
    x_show(elm, x_aTs[i], i);
  }
  document.write('</span>');
  document.write('</div>');
  x_oT[elm] = new Array();
}

function xShow(elm) {
  document.getElementById('x_extra_show_' + elm).style.visibility = 'hidden';
  document.getElementById('x_extra_buttons_' + elm).style.display = 'block';
  xSetButn('js_oheTags_extra', 'show'/*, new Date("December 31, 2100")*/);
}

function xHide(elm) {
  document.getElementById('x_extra_buttons_' + elm).style.display = 'none';
  document.getElementById('x_extra_show_' + elm).style.visibility = 'visible';
  xSetButn('js_oheTags_extra', 'hide'/*, new Date("December 31, 2100")*/);
}

function xInsertTag(elm, i) {
  taID = document.getElementById(elm);
  if (document.selection) {
    taID.focus();
    sel = document.selection.createRange();
    if (sel.text.length > 0) {
      sel.text = x_aTs[i].oTag + sel.text + x_aTs[i].cTag;
    } else {
      if (!x_cekOT(elm, i) || x_aTs[i].cTag == '') {
        sel.text = x_aTs[i].oTag;
        xAT(elm, i);
      } else {
        sel.text = x_aTs[i].cTag;
        x_rT(elm, i);
      }
    }
    taID.focus();
  } else if (taID.selectionStart || taID.selectionStart == '0') {
    var s = taID.selectionStart;
    var e = taID.selectionEnd;
    var cursorPos = e;
    var scrollTop = taID.scrollTop;
    if (s != e) {
      taID.value = taID.value.substring(0, s) +
        x_aTs[i].oTag +
        taID.value.substring(s, e) +
        x_aTs[i].cTag +
        taID.value.substring(e, taID.value.length);
      cursorPos += x_aTs[i].oTag.length + x_aTs[i].cTag.length;
    } else {
      if (!x_cekOT(elm, i) || x_aTs[i].cTag == '') {
        taID.value = taID.value.substring(0, s) +
          x_aTs[i].oTag +
          taID.value.substring(e, taID.value.length);
        xAT(elm, i);
        cursorPos = s + x_aTs[i].oTag.length;
      } else {
        taID.value = taID.value.substring(0, s) +
          x_aTs[i].cTag +
          taID.value.substring(e, taID.value.length);
        x_rT(elm, i);
        cursorPos = s + x_aTs[i].cTag.length;
      }
    }
    taID.focus();
    taID.selectionStart = cursorPos;
    taID.selectionEnd = cursorPos;
    taID.scrollTop = scrollTop;
  } else {
    if (!x_cekOT(elm, i) || x_aTs[i].cTag == '') {
      taID.value += x_aTs[i].oTag;
      xAT(elm, i);
    } else {
      taID.value += x_aTs[i].cTag;
      x_rT(elm, i);
    }
    taID.focus();
  }
}

function iTid(elm, myValue1, myValue2) {
  var a = arguments.length > 1;
  taID = document.getElementById(elm);
  if (document.selection) {
    taID.focus();
    sel = document.selection.createRange();
  sel.text = myValue1 + sel.text + myValue2; 
    taID.focus();
  } else if (taID.selectionStart || taID.selectionStart == '0') {
    var s = taID.selectionStart;
    var e = taID.selectionEnd;
var o = taID.value;
    var scrollTop = taID.scrollTop;
taID.value = o.substring(0, s) + (a ? myValue1 + o.substring(s, e) + myValue2 : myValue1) + o.substring(e),
  taID.setSelectionRange(a || s === e ? s + myValue1.length : s, (a ? e : s) + myValue1.length),
    taID.focus();
    taID.scrollTop = scrollTop;
  } else {
    taID.value += myValue1;
    taID.focus();
  } 
}

function iT(t1, t2) {
  var a = arguments.length > 1;
  var ta_ID = document.getElementById(taID);
  if (document.selection) {
    ta_ID.focus();
    sel = document.selection.createRange();
  sel.text = t1 + sel.text + t2; 
    ta_ID.focus();
  } else if (ta_ID.selectionStart || ta_ID.selectionStart == '0') {
    var s = ta_ID.selectionStart;
    var e = ta_ID.selectionEnd;
var o = ta_ID.value;
    var scrollTop = ta_ID.scrollTop;
ta_ID.value = o.substring(0, s) + (a ? t1 + o.substring(s, e) + t2 : t1) + o.substring(e),
  ta_ID.setSelectionRange(a || s === e ? s + t1.length : s, (a ? e : s) + t1.length),
    ta_ID.focus();
    ta_ID.scrollTop = scrollTop;
  } else {
    ta_ID.value += t1;
    ta_ID.focus();
  } 
}

function xShowButn() {
  var btns = document.cookie.split(';');
  for (var i = 0; i < btns.length; i++) {
    var cookieData = btns[i];
    while (cookieData.charAt(0) == ' ') {
      cookieData = cookieData.substring(1, cookieData.length);
    }
    if (cookieData.indexOf('js_oheTags_extra') == 0) {
      if (cookieData.substring(19, cookieData.length) == 'show') {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
