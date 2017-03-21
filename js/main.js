const CANVAS_NAME = 'treasureMap';
const CANVAS_IMAGE = 'images/map.png';
const APP_DIV = document.getElementById('app');
const SCREEN_SIZE = getScreenSize();


const versionInfo = document.getElementById('version');
const appName = document.getElementById('appName');
const APP_NAME = 'treasure hunt';
const VERSION = 'v0.0.1';

let CANVAS;

const init = () => {
  appName.textContent = APP_NAME;
  versionInfo.textContent = VERSION;
  generateCanvas(CANVAS_NAME, SCREEN_SIZE, CANVAS_IMAGE);
  resetGame();
  startGame();
};

const resetGame = () => {
  clicks.reset();
  document.getElementById('myClicks').textContent = 0;
  treasure.newPosition(SCREEN_SIZE);
  trap.newPosition(SCREEN_SIZE);
  bandit.newPosition(SCREEN_SIZE);
};

const startGame = () => {
  CANVAS.addEventListener('click', function (e) {

    let treasurePosition = compareDistance(treasure.position, [e.offsetX, e.offsetY]);
    let trapPosition = compareDistance(trap.position, [e.offsetX, e.offsetY]);
    let banditPosition = compareDistance(bandit.position, [e.offsetX, e.offsetY]);

    if (treasurePosition < 100) {
      document.getElementById('foundMessage').textContent = 'You found the treasure';
      document.getElementById('id01').style.display='block';
      resetGame();
    } else if (trapPosition < 100) {
      document.getElementById('foundMessage').textContent = 'Ohhhh, you fall in a trap';
      document.getElementById('id01').style.display='block';
      clicks.increase();
    } else if (banditPosition < 100) {
      document.getElementById('foundMessage').textContent = 'You got the bandit';
      document.getElementById('id01').style.display='block';
      clicks.increase();
    } else {
      clicks.increase();
    }

  } ,false);
};

const compareDistance = (input, goal) => {
  let diffX = input[0] - goal[0];
  let diffY = input[1] - goal[1];
  return Math.floor(Math.sqrt((diffX * diffX) + (diffY * diffY)));
};

function getScreenSize() {
  const w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  const h = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  if (h > w) {
    return w;
  } else {
    return h;
  }
};

const generateCanvas = (name,size,img) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', size);
  canvas.setAttribute('height', size);
  canvas.setAttribute('id', name);
  APP_DIV.appendChild(canvas);
  CANVAS = document.getElementById(name);
  const ctx = CANVAS.getContext('2d');
  let imageObj = new Image();
  imageObj.onload = function() {
    ctx.drawImage(imageObj,0,0,size,size);
  };
  imageObj.src = img;
};

init();
