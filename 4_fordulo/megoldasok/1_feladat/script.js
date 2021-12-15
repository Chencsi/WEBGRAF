let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let cmaxh = ctx.canvas.height;
let cmaxw = ctx.canvas.width;

let xmax = ymax = 20; // csúszka 5 - 20 (50 - 200 tízesével) értéktartomány
let xmin = ymin = -xmax;

let ox = cmaxh / 2;
let oy = cmaxw / 2;

let vanRacs = true;
let vanRajz = true;

let a = 1       // input a csak szám!
let b = 0       // input b csak szám!
let c = 0       // input c csak szám!
setInterval(sub, 10)
function sub(form) {
    a = document.getElementById('a').value
    b = parseFloat(document.getElementById('b').value)
    c = parseFloat(document.getElementById('c').value)
    xmax = document.getElementById('xmax').value
    ymax = document.getElementById('xmax').value
    vanRajz = document.getElementById('rajz').checked
    vanRacs = document.getElementById('racs').checked
    xmin = ymin = -xmax;
    tengely();
    racsokTest();
    rajzTest();
    document.getElementById('xmax').innerHTML = 'ads'
}

function fv(x, a, b) {
    let y = a * x + b;
    return y;
}

function masod(x, a, b, c) {
    let y = a * (x ** 2) + b * x + c;
    return y;
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
    if (c == 0) {
        // lineáris
        if (b == 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x`
        } else if (b < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x - ${Math.abs(b)}`
        } else if (b > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x + ${b}`
            // a = 1
        } else if (b == 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x`
        } else if (b < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x - ${Math.abs(b)}`
        } else if (b > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x + ${b}`
        }
    } else {
        // harmadfokú 
        if (b == 0 && c > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> + ${c}`
        } else if (b == 0 && c < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> - ${Math.abs(c)}`
        } else if (b == 1 && c > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> + x + ${c}`
        } else if (b == 1 && c < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> + x - ${Math.abs(c)}`
        } else if (b == -1 && c > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> - x + ${Math.abs(c)}`
        } else if (b == -1 && c < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> - x - ${Math.abs(c)}`
        } else if (b < 0 && c > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> - ${Math.abs(b)}x + ${c}`
        } else if (b < 0 && c < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> - ${Math.abs(b)}x - ${Math.abs(c)}`
        } else if (b > 0 && c > 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> + ${b}x + ${c}`
        } else if (b > 0 && c < 0 && a != 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = ${a}x<sup>2</sup> + ${b}x - ${Math.abs(c)}`
            // a = 1
        } else if (b == 0 && c > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> + ${c}`
        } else if (b == 0 && c < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> - ${Math.abs(c)}`
        } else if (b == 1 && c > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> + x + ${c}`
        } else if (b == 1 && c < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> + x - ${Math.abs(c)}`
        } else if (b == -1 && c > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> - x + ${Math.abs(c)}`
        } else if (b == -1 && c < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> - x - ${Math.abs(c)}`
        } else if (b < 0 && c > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> - ${Math.abs(b)}x + ${c}`
        } else if (b < 0 && c < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> - ${Math.abs(b)}x - ${Math.abs(c)}`
        } else if (b > 0 && c > 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> + ${b}x + ${c}`
        } else if (b > 0 && c < 0 && a == 1) {
            document.getElementById('fgv').innerHTML = `Jelenlegi függvény: f(x) = x<sup>2</sup> + ${b}x - ${Math.abs(c)}`


        }
    }

    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = '#000';
}

function racsokTest() { // checkbox a rács megjelenéséhez

    if (vanRacs) {
        ctx.clearRect(0, 0, cmaxh, cmaxw)
        tengely();
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

    if (vanRajz) {
        ctx.clearRect(0, 0, cmaxh, cmaxw)
        if (vanRacs) {
            racsok();
        }
        tengely();
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


