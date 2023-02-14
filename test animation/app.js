const text = document.querySelector('.txt');
const cnt = text.textContent;
const char = cnt.split('');
text.textContent = "";

for (var i = 0; i < char.length; i++) {
	text.innerHTML += "<span>" + char[i] + "</span>";
}


let c = 0;
let timer = setInterval(pas,100);


function pas() {
    const span = text.querySelectorAll('span')[c];
    span.classList.add("fade");
    c++;
    if (c === char.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}


