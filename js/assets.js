'use strict';

let clicks = {
  value: 0,
  increase: function () {
    this.value++;
    document.getElementById('myClicks').textContent = this.value;
  },
  decrease: function () {
    this.value--;
    document.getElementById('myClicks').textContent = this.value;
  },
  reset: function () {
    this.value = 0;
    document.getElementById('myClicks').textContent = this.value;
  }
};

let treasure = {
  position: [],
  newPosition: function (coordinates) {
    let newPos = [Math.floor(Math.random()*coordinates), Math.floor(Math.random()*coordinates)];
    return this.position = newPos;
  }
};

let trap = {
  position: [],
  newPosition: function (coordinates) {
    let newPos = [Math.floor(Math.random()*coordinates), Math.floor(Math.random()*coordinates)];
    return this.position = newPos;
  }
};

let bandit = {
  position: [],
  newPosition: function (coordinates) {
    let newPos = [Math.floor(Math.random()*coordinates), Math.floor(Math.random()*coordinates)];
    return this.position = newPos;
  }
};
