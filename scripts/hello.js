let name = localStorage.getItem('name0');

function f() {
    localStorage.setItem('name', document.getElementById("Uname").value);
    let name = document.getElementById("Uname").value;
    if (name==null || name==="" || name === " ") {
    alert("Привет, аноним!");
    setTimeout(function(){
    window.location.href = 'index.html';
}, 300);
}
    else
{
    let message = `Привет, ${name}!`;
    alert(message);
    setTimeout(function(){
    window.location.href = 'index.html';
}, 300);
}
}