const div = document.querySelector(".container")
for (let x = 0; x < 16 * 16; x++) {
    var item = document.createElement('div');
    item.className = "item";
    div.appendChild(item);
}


function changeColor(e) {
    this.style.background = "pink";
}

const button = document.querySelector("button");
button.addEventListener("click", clear);
function clear() {
    document.querySelectorAll('.item').forEach((elem) => elem.remove());

    var size = prompt('Choose the size your new Etch-a-Sketch (smaller then 100*100)', '10');
if(size<100){
    let root = document.documentElement;
        root.style.setProperty('--a', size);
        for (let x = 0; x < size * size; x++) {
        var item = document.createElement('div');
        item.className = "item";
        div.appendChild(item);
        const items = document.querySelectorAll('.item');
        items.forEach(itemX => itemX.addEventListener("mouseover", changeColor));
    }
}
else var size = prompt('Please choose a size smaller then 100', '10');
}
const items = document.querySelectorAll('.item');
items.forEach(itemX => itemX.addEventListener("mouseover", changeColor));