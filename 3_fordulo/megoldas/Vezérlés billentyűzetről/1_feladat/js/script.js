const ammoID = document.getElementById('ammo');
const shipID = document.getElementById('ship');
let border = [15, 380];
let posX = 200;
let posY = 80;
let used = false;
let oldpos = 0;
let stoptime = false;
let ammoSpeed = 10//parseInt(prompt('Kérem a lövedék gyorsaságát 1 és 15 között:'));
let seconds = 0;
/*
if (ammoSpeed > 15 || ammoSpeed < 1) {
  location.reload();
} else {
  ammoSpeed = ammoSpeed * 2;
}*/
ammoID.style.display = 'none';

function doNothing(){}

function shoot() {
  if (ammoID.style.display == 'block') {
    posY += ammoSpeed;
    oldpos = posX;
    ammoID.style.bottom = posY + 'px';
  }
  if (ammoID.style.bottom == '620px') {
    ammoID.style.display = 'none';
    posY = 80;
    stoptime = true;
  }
  if (!stoptime) {
    seconds += 1;
    setTimeout("shoot()", 0);
  }
}

function move(event) {
  if (event.keyCode == 37) {
    if (posX > border[0]) {
      posX -= 10;
    }
  }
  if (event.keyCode == 39) {
    if (posX < border[1]) {
      posX += 10;
    }
  }
  if (event.keyCode == 32) {
    if (posX == oldpos) {
      doNothing();
    } else {
      if (ammoID.style.display == 'none') {
        ammoID.style.display = 'block';
        used = true;
        shoot();
      }
    }
  }
  shipID.style.left = `${posX}px`;
  if (ammoID.style.display == 'none') {
    ammoID.style.bottom = `${posY}px`;
    ammoID.style.left = `${posX}px`;
    stoptime = false;
  }
}

document.onkeydown = move;