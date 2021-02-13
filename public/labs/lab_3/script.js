/* Put your javascript in here */

let images = [
  'images/onigiri_1.png',
  'images/onigiri_2.png',
  'images/onigiri_3.png',
  'images/onigiri_4.png',
  'images/roll_1.png',
  'images/roll_2.png',
  'images/roll_3.png',
];

let displays = images.slice(0, 3);

document.getElementById('img1').setAttribute('src', displays[0]);
document.getElementById('img2').setAttribute('src', displays[1]);
document.getElementById('img3').setAttribute('src', displays[2]);

function shiftLeft() {
  const one = images.shift();
  images.push(one);
  displays = images.slice(0, 3);
  document.getElementById('img1').setAttribute('src', displays[0]);
  document.getElementById('img2').setAttribute('src', displays[1]);
  document.getElementById('img3').setAttribute('src', displays[2]);
}

function shiftRight() {
  const last = images.pop();
  images.unshift(last);
  displays = images.slice(0, 3);
  document.getElementById('img1').setAttribute('src', displays[0]);
  document.getElementById('img2').setAttribute('src', displays[1]);
  document.getElementById('img3').setAttribute('src', displays[2]);
}

function leftButtonClick() {
  document.getElementById('left').onclick = function () {
    shiftLeft();
  };
}

function rightButtonClick() {
  document.getElementById('right').onclick = function () {
    shiftRight();
  };
}

window.onLoad = leftButtonClick();
window.onLoad = rightButtonClick();
