let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

let talalat = 0
let melle = 0
let oldImg = 0;
let stoptime = 0
let run = 0
let seconds = 0

canvas.addEventListener('click', function () { click(event) })

let kepek = ['sarkany.png', 'sarkany2.png', 'sarkany3.png', 'traktor.png', 'leg4.png']
let index = Math.floor((Math.random() * 3))
let index2 = Math.floor((Math.random() * kepek.length))

function ujkep() {
  let imageObj = new Image()
  imageObj.src = 'kepek/' + kepek[index]
  imageObj.onload = function () {
    ctx.drawImage(imageObj, canvas.width - 100, 0, 65, 65)
  }
}

function kepvaltas() {
  index2 = Math.floor((Math.random() * kepek.length))
  let imageObj = new Image()
  imageObj.src = 'kepek/' + kepek[index2]
  imageObj.onload = function () {
    ctx.clearRect(canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200)
    ctx.drawImage(imageObj, canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200)
  }
  if (index == index2) {
    stoptime = false;
    timerCycle();
  }
  run++
}

function click(event) {
  let x = Math.floor(event.clientX)
  let y = Math.floor(event.clientY)

  if (x <= 300 && y <= 300 && x >= 200 && y >= 200 && index == index2) {
    clearInterval(valto)
    // clearInterval(timer_)
    stoptime = true
    seconds = 0
    talalat++
    document.getElementById('talal').innerHTML = 'Találat: ' + talalat
    kepvaltas()
    window.valto = setInterval(kepvaltas, 4000)
  } else {

    melle++
    document.getElementById('melle').innerHTML = 'Mellé: ' + melle
    kepvaltas()
  }
}

function timerCycle() {
  if (stoptime == false) {
    seconds += 1;
    setTimeout("timerCycle()", 10);
    document.getElementById('time').innerHTML = "Reakció idő: " + seconds / 100 + 's'
  }
}

function test() {
  if (run == document.getElementById('num').value) {
    clearInterval(valto)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

function reaction() {
  ujkep()
  kepvaltas()
  window.valto = setInterval(kepvaltas, 4000)
  window.test = setInterval(test, 4100)
}