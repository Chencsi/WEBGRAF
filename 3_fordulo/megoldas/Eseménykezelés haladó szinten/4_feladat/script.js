let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let kovek = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,
    650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150,
    1200, 1250, 1300, 1350, 1400, 1450, 1500];

let miciX = 0;
let miciPont = 0;

let kangaX = 1550;
let kangaPont = 0;

let arg1 = false
let arg2 = false

let mennyi = Math.floor((Math.random() * 20) + 20);
let uniq = [];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function koRajz() {
    for (let i = 0; i < mennyi; i++) {
        ctx.drawImage(ko, kovek[szamok[i]], 250, 50, 50);
    }
}

function mezRajz() {
    for (let i = 0; i < Math.floor(szamok.length / 3); i++) {
        ctx.drawImage(mez, (szamok[i] * 50) + 65, 230, 20, 20);
    }
}
canvas.addEventListener('click', function () { click(event) })

let ko = new Image();
ko.src = 'kepek/ko.png';

let mez = new Image();
mez.src = 'kepek/mez.png';

let mici = new Image();
mici.src = 'kepek/micimacko.png';

let kanga = new Image();
kanga.src = 'kepek/kanga.png';

szamok = [];

function click(event) {
    let x = Math.floor(event.clientX)
    let y = Math.floor(event.clientY)

    if (y > 250 && y < 300) {
        console.log("szi")
    } else {
        console.log("nem szi")
    }
}

ko.onload = function () {

    for (let i = 0; i < mennyi; i++) {
        let index = Math.floor((Math.random() * kovek.length));
        szamok.push(index);
    }
    koRajz();
}

mez.onload = function () {

    szamok = szamok.filter(onlyUnique); // kitörli a sokszorosokat
    uniq = [...szamok];
    mezRajz();

    uniq.sort(function (a, b) { return a - b });

    ctx.beginPath();
    ctx.arc(uniq[Math.floor(uniq.length / 2)] * 50 + 75, 220, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
}

mici.onload = function () { ctx.drawImage(mici, miciX, 230, 50, 50); }

kanga.onload = function () { ctx.drawImage(kanga, 1550, 210, 50, 70); }
function miciLep() {
    ugrasSzama += Math.floor((Math.random() * 2) + 1);
    ctx.clearRect(miciX, 230, 50, 50);
    if (miciX != 0) {
        ctx.drawImage(ko, miciX, 250, 50, 50);
    }
    miciX = kovek[uniq[ugrasSzama]];
    ctx.drawImage(mici, miciX, 230, 50, 50);
    for (let i = 0; i < Math.floor(szamok.length / 3); i++) {
        if (kovek[szamok[i]] == miciX) {
            miciPont++;
            document.getElementById('miciPontjai').innerHTML = `Micimackó pontjai: ${miciPont}`;
        }
    }
    if (miciX >= uniq[Math.floor(uniq.length / 2)] * 50 + 50) {

    }
}

function kangaLep() {
    kangaUgrasSzama += Math.floor((Math.random() * 2) + 1);
    ctx.clearRect(kangaX, 210, 50, 70);
    if (kangaX != 1550) {
        ctx.drawImage(ko, kangaX, 250, 50, 50);
    }
    kangaX = kovek[uniq[uniq.length - kangaUgrasSzama]];
    ctx.drawImage(kanga, kangaX, 210, 50, 70);
    for (let i = 0; i < Math.floor(szamok.length / 3); i++) {
        if (kovek[szamok[i]] == kangaX) {
            kangaPont++;
            document.getElementById('kangaPontjai').innerHTML = `Kanga pontjai: ${kangaPont}`;
        }
    }
    if (kangaX <= uniq[Math.floor(uniq.length / 2)] * 50 + 50) {

    }
}