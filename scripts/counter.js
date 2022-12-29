let js = localStorage.getItem('js');
let html = localStorage.getItem('html');
let css = localStorage.getItem('css');

if (!js) {
    js = 0;
}
if (!html) {
    html = 0;
}
if (!css) {
    css = 0;
}

function jsAdder() {
    localStorage.setItem('js', ++js);
    document.getElementById("clickjs").innerHTML = js;
}
function htmlAdder() {
    localStorage.setItem('html', ++html);
    document.getElementById("clickhtml").innerHTML = html;
}
function cssAdder() {
    localStorage.setItem('css', ++css);
    document.getElementById("clickcss").innerHTML = css;
}