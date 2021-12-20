let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let FPS = 60

let hossz = 880
let ero = 10
let szin = 'red'

function sub() {
    hossz = document.getElementById('hossz')
    ero = document.getElementById('ero')
    szin = document.getElementById('szin')
}

function gameloop(){
    ctx.beginPath();
    ctx.moveTo(100, 250)
    ctx.lineTo(hossz, 250);
    ctx.lineWidth = ero;
    ctx.strokeStyle = szin;
    ctx.stroke();
}
setInterval(gameloop, 100)