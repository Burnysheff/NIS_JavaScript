let counter = localStorage.getItem('counter');

let checker1 = localStorage.getItem('checker1');
let checker2 = localStorage.getItem('checker2');
let checker3 = localStorage.getItem('checker3');
let checker4 = localStorage.getItem('checker4');

if (!counter) {
    counter = 0;
}
if (!checker1) {
    checker1 = true;
}
if (!checker2) {
    checker2 = true;
}
if (!checker3) {
    checker3 = true;
}
if (!checker4) {
    checker4 = true;
}

let img = localStorage.getItem('img' + counter);
let text = localStorage.getItem('text' + counter);
let name = localStorage.getItem('name');

if (!text) {
    text = "";
}
if (!img) {
    img = 0;
}
if (!name) {
    name = "";
}

window.onload = function() {
    insert();
};

function addElement() {
    localStorage.setItem('counter', ++counter);

    localStorage.setItem('text' + counter, document.getElementById('Review_Text').value);
    localStorage.setItem('img' + counter, document.getElementById('Photo_url').value);
    setTimeout(function() {
        window.location.replace("reviews.html");
    }, 300);
}

function insert() {
    if (counter == 1) {
        if (checker1) {
            document.getElementById("img" + counter).src = img;
            document.getElementById("text" + counter).innerText = text;
            document.getElementById("name" + counter).innerText = name;
            if (img !== 0) {
                localStorage.setItem('checker1', false);
            }
        }
    }
    if (counter == 2) {
        if (checker2) {
            document.getElementById("img" + counter).src = img;
            document.getElementById("text" + counter).innerText = text;
            document.getElementById("name" + counter).innerText = name;
            if (img !== 0) {
                localStorage.setItem('checker2', false);
            }
        }
    }
    if (counter == 3) {
        if (checker3) {
            document.getElementById("img" + counter).src = img;
            document.getElementById("text" + counter).innerText = text;
            document.getElementById("name" + counter).innerText = name;
            if (img !== 0) {
                localStorage.setItem('checker3', false);
            }
        }
    }
    if (counter == 4) {
        if (checker4) {
            document.getElementById("img" + counter).src = img;
            document.getElementById("text" + counter).innerText = text;
            document.getElementById("name" + counter).innerText = name;
            if (img !== 0) {
                localStorage.setItem('checker4', false);
            }
        }
    }
}