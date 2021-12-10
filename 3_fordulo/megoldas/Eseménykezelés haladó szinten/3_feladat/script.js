let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

//  0 - 50 mici 
//  50 - 1550 (30 * 50) kövek 
//  1550 - 1600  kanga
//  px

let kovek = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,
    650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150,
    1200, 1250, 1300, 1350, 1400, 1450, 1500,]


mennyi = Math.floor((Math.random() * 20) + 20)



function betolt() {
    let ko = new Image()
    ko.src = 'kepek/ko.png'

    let mez = new Image()
    mez.src = 'kepek/mez.png'

    szamok = []

    ko.onload = function () {

        // kövek
        for (let i = 0; i < mennyi; i++) {
            let index = Math.floor((Math.random() * kovek.length))
            szamok.push(index)
        }
        uniq = szamok.filter(function (item, pos) {
            return szamok.indexOf(item) == pos;
        })
        uniq.sort(function (a, b) { return a - b })

        for (let i = 0; i < mennyi; i++) {
            if (i % 2 == 0) {
                ctx.drawImage(ko, kovek[uniq[i]], 250, 75, 75)
            } else {
                ctx.drawImage(ko, kovek[uniq[i]], 300, 75, 75)
            }
        }

        // mézes csuprok
        mezek_szama = Math.floor(uniq.length / 3)
        console.log(uniq.length, mezek_szama)

        for (i = 0; i < uniq.length; i++) {
            for (_ = 0; _ < mezek_szama; _++) {
                mez_w = Math.floor((Math.random() * 50) + kovek[uniq[i]])

                if (i % 2 == 0) {
                    mez_h = Math.floor((Math.random() * 50) + 250)
                    ctx.drawImage(mez, mez_w, mez_h, 20, 20)

                } else {
                    mez_h = Math.floor((Math.random() * 50) + 300)
                    ctx.drawImage(mez, mez_w, mez_h, 20, 20)
                }
            }
        }
    }
}
