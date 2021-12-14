let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let cmaxh = ctx.canvas.height;
let cmaxw = ctx.canvas.width;


let xmax = ymax = 20 // csúszka 10 - 20 (100 - 200 tízesével) értéktartomány
let xmin = ymin = -xmax

let ox = cmaxh / 2;
let oy = cmaxw / 2;

let vanRacs = vanRajz = false;

let a = 1 // input a csak szám!
let b = 0 // input b csak szám!
let c = 0 // input c csak szám!

function fv(x, a, b) {
    let y = a * x + b;
    return y;
}

function masod(x, a, b, c) {
    let y = a * (x ** 2) + b * x + c;
    return y
}

function tengely() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.moveTo(0, ox);
    ctx.lineTo(cmaxw, ox);
    ctx.moveTo(oy, 0);
    ctx.lineTo(oy, cmaxh);
    ctx.stroke();
    ctx.closePath();
}


function racsok() {
    ctx.beginPath();
    ctx.lineWidth = 0.2;
    for (let x = 0; x < cmaxw; x += cmaxw / (2 * xmax)) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, cmaxh);
    }
    for (let y = 0; y < cmaxh; y += cmaxh / (2 * ymax)) {
        ctx.moveTo(0, y);
        ctx.lineTo(cmaxw, y);
    }
    ctx.stroke();
    ctx.closePath();
}

function rajz(a, b, c = 0) {
    ctx.beginPath();
    ctx.fillStyle = '#4169e1';
    for (let x = -(xmax * 10); x < (xmax * 10); x += 0.01) {
        let xx = ox + x / ((xmax * 10) - (xmin * 10)) * cmaxw;
        let y = c == 0 ? fv(x, a, b) : masod(x, a, b, c);
        let yy = oy - y / ((ymax * 10) - (ymin * 10)) * cmaxh;

        ctx.fillRect(xx, yy, 1.5, 1.5);
    }

    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = '#000';
}

function racsokTest() { // checkbox a rács megjelenéséhez
    vanRacs = !vanRacs

    if (vanRacs) {
        racsok();
    } else {
        ctx.clearRect(0, 0, cmaxh, cmaxw)
        tengely();
        if (vanRajz) {
            rajz(a, b, c);
        }
    }
}

function rajzTest() { // checkbox a függvény megjelenéséhez
    vanRajz = !vanRajz
    if (vanRajz) {
        ctx.fillStyle = '#4169e1';
        rajz(a, b, c);
    } else {
        ctx.clearRect(0, 0, cmaxh, cmaxw)
        tengely();
        if (vanRacs) {
            racsok();
        }
    }
}
tengely();      // onload
racsokTest();   // onload
rajzTest();     // onload