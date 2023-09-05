let count = parseInt(0);
let timeCount = 10;
const timeElement = document.getElementById("time");

const interval = setInterval(function () {
    if (timeCount > 0){
        timeElement.innerHTML = timeCount;
        timeCount--;
    }else if (timeCount === 0){
        document.getElementById("pTimeTxt").innerHTML = "Game Over!";
       
        clearInterval();
    }
}, 1000);

document.getElementById("dec").onclick = function () {
    if (count > 0){
        document.getElementById("number").innerHTML = count -= 1;
    }else{
        document.getElementById("number").innerHTML = 0;
    }
}
document.getElementById("inc").onclick = function () {
    document.getElementById("number").innerHTML = count += 1;
}
