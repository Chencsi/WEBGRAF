let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let FPS = 60;

let kint = true
let mark = new Image()
mark.src = 'img/markolat.png'

let hossz = document.getElementById('hossz').value;
let ero = document.getElementById('ero').value;
let szin = document.getElementById('szin').value;

function sub() {
    hossz = document.getElementById('hossz').value;
    ero = document.getElementById('ero').value;
    szin = document.getElementById('szin').value;
}

function kimegy() {
    kint = !kint
    if (kint) {
        animation('ki')
    } else {
        animation('be')
    }
}

function gameloop() {
    if (kint) {
        rajz(hossz);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mark, 0, 150, 360, 200);
    }

    // document.getElementById('szin').style.backgroundColor = szin
}

function animation(merre) {
    if (merre == 'be') {
        for (let i = hossz; i > 350; i--) {
            setTimeout(() => { rajz(i) }, 10);

        }
    } else if (merre == 'ki') {
        for (let i = 350; i < hossz; i++) {
            setTimeout(() => { rajz(i) }, 10);
        }
    }
}
setInterval(gameloop, 1000 / FPS);

function rajz(hossz) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(340, 250);
    ctx.lineTo(hossz, 250);
    ctx.lineWidth = ero;
    ctx.strokeStyle = szin;
    ctx.lineCap = 'round';
    ctx.shadowBlur = '30';
    ctx.shadowColor = szin;
    ctx.stroke();
    ctx.shadowBlur = '0';
    ctx.drawImage(mark, 0, 150, 360, 200);
}
