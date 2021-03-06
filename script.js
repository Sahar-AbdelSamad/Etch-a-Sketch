function changeColor(c) {
    const items = document.querySelectorAll('.item');
    items.forEach(item=>item.addEventListener("mouseover",()=> item.style.backgroundColor = c ))
}

function choice(){
    var choix= prompt("Choose your color","pink");
    const items = document.querySelectorAll('.item');
    items.forEach(item=>item.addEventListener("mouseover",()=>
    {
    changeColor(choix);
    }))
}

function col(){
    const items = document.querySelectorAll('.item');
    items.forEach(item=>item.addEventListener("mouseover",()=>
    {
    var red= Math.floor(Math.random()*256);
    var green= Math.floor(Math.random()*256);
    var blue= Math.floor(Math.random()*256);
    var c="RGB("+red+","+green+","+blue+")";
    changeColor(c);
    }))
}

function clear() {
    var size = prompt('Choose the size your new Etch-a-Sketch (smaller then 100*100)', '10');
    if(size>=100) var size = prompt('Please choose a size smaller then 100', '10');
    if (size){
    document.querySelectorAll('.item').forEach(item => div.removeChild(item));
    root.style.setProperty('--a', size);
    for (let x = 0; x < size * size; x++) {
        var item = document.createElement('div');
        item.className = "item";
        div.appendChild(item); 
        const items = document.querySelectorAll('.item');
        items.forEach(itemX => itemX.addEventListener("mouseover", changeColor));
    }}
}

function black(){
    var alpha=10;
    var c="rgba("+0+","+0+","+0+","+alpha+"%)";
    const items = document.querySelectorAll('.item');
    items.forEach(item=>item.addEventListener("mouseover",()=>
    {
        alpha+=5;
        console.log(alpha);
        c="rgba("+0+","+0+","+0+","+alpha+"%)";
    changeColor(c);
    }))
    // items.forEach(item=>item.addEventListener("transitionend",()=>
    // {
        
    //     items.forEach(item=>item.addEventListener("mouseover",()=> item.style.backgroundColor=c));
    // }))
}

const root = document.documentElement;

const div = document.querySelector(".container")
for (let x = 0; x < 16 * 16; x++) {
    var item = document.createElement('div');
    item.className = "item";
    div.appendChild(item);
}


var choix=choice;

const items = document.querySelectorAll('.item');
items.forEach(itemX => itemX.addEventListener("mouseover", changeColor));

const buttonColor=document.querySelector('.choice')
buttonColor.addEventListener("click",choice);

const buttonRandom=document.querySelector('.random')
buttonRandom.addEventListener("click",col);

const buttonBlack=document.querySelector('.black')
buttonBlack.addEventListener("click", black);

const button = document.querySelector("button");
button.addEventListener("click", clear);