const text = document.querySelector(".txt");
const cnt = text.textContent;
const char = cnt.split("");
text.textContent = "";

for (let i = 0; i < char.length; i++) {
    text.innerHTML += "<span>" + char[i] + "</span>";
    
}

/* add class fade pas a pas */ 

let c = 0;
let timer = setInterval(pas,300);

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