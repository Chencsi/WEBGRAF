let canvas = document.getElementById('myCanvas');
let rtx = canvas.getContext('2d');

let cmaxh = rtx.canvas.height;
let cmaxw = rtx.canvas.width;
//lépték
let xmax = 10;
let ymax = 10;
let xmin = -10;
let ymin = -10;
let ox = cmaxh / 2;
let oy = cmaxw / 2;

function fv(x, a, b) {
    let y = a * x + b;
    return y;
}

rtx.beginPath();
rtx.lineWidth = 3;
rtx.strokeStyle = "#000000"; //tengelyek rajzolás
rtx.moveTo(0, ox);
rtx.lineTo(cmaxw, ox);
rtx.moveTo(oy, 0);
rtx.lineTo(oy, cmaxh);
rtx.stroke();
rtx.beginPath();
rtx.strokeStyle = 'lightgray';
rtx.lineWidth = 1;
//Függőleges rácsvonalak
for (let x = 0; x < cmaxw; x += cmaxw / (2 * xmax)) {
    rtx.moveTo(x, 0);
    rtx.lineTo(x, cmaxh);
}
// Vizszintes rácsvonalak
for (let y = 0; y < cmaxh; y += cmaxh / (2 * ymax)) {
    rtx.moveTo(0, y);
    rtx.lineTo(cmaxw, y);
}
rtx.stroke();
rtx.fillStyle = 'red'; //az y=2x+3 függvény rajzolása
for (let x = -xmax; x < xmax; x += 0.01) {
    let xx = ox + x / (xmax - xmin) * cmaxw;
    let y = fv(x, 2, 3);
    let yy = oy - y / (ymax - ymin) * cmaxh;;
    // Pont rajzolása
    rtx.fillRect(xx, yy, 1, 1);
}
rtx.stroke();
function submit(){
    if (document.getElementById("racs").checked) {
        console.log('pipa')
    }else{
        console.log('nem pipa')
    }
    
}