
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
}
increment();

function decrement(){
    count -= 1;
    countEl.innerText = count;
}
decrement();