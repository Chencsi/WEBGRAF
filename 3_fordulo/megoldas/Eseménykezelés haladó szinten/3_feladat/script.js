let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

//  0 - 50 mici 
//  50 - 1550 (30 * 50) kövek 
//  1550 - 1600  kanga
//  px

let kovek = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,
    650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150,
    1200, 1250, 1300, 1350, 1400, 1450, 1500];

let miciW = 0

mennyi = Math.floor((Math.random() * 20) + 20);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let ko = new Image();
ko.src = 'kepek/ko.png';

let mez = new Image();
mez.src = 'kepek/mez.png';

let mici = new Image();
mici.src = 'kepek/micimacko.png';

let kanga = new Image();
kanga.src = 'kepek/kanga.png';


szamok = [];

ko.onload = function () {

    for (let i = 0; i < mennyi; i++) {
        let index = Math.floor((Math.random() * kovek.length));
        szamok.push(index);
    }
    for (let i = 0; i < mennyi; i++) {
        ctx.drawImage(ko, kovek[szamok[i]], 250, 50, 50);
    }
}
mez.onload = function () {

    szamok = szamok.filter(onlyUnique); // kitörli a sokszorosokat
    for (let i = 0; i < Math.floor(szamok.length / 3); i++) {
        ctx.drawImage(mez, (szamok[i] * 50) + 65, 240, 20, 20);
    }

    szamok.sort(function (a, b) { return a - b });
    ctx.beginPath();
    ctx.arc((szamok[Math.floor(szamok.length / 2)] * 50) + 75, 220, 10, 0, 2 * Math.PI);
    ctx.stroke();
}

mici.onload = function () {
    ctx.drawImage(mici, miciW, 230, 50, 50)
}

kanga.onload = function () {
    ctx.drawImage(kanga, 1550, 210, 50, 70)
}
function miciLep(num) {
    ctx.clearRect(miciW, 230, miciW + 50, 280)
    miciW = kovek[szamok[num]]
    ctx.drawImage(mici, miciW, 230, 50, 50)
}
