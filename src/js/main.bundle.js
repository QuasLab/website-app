/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// import $ from 'jquery' 
var target_time = new Date("2024/04/17");
var day_ele = document.getElementById("day");
var hour_ele = document.getElementById("hour");
var min_ele = document.getElementById("min");
var sec_ele = document.getElementById("sec");
function countDown() {
  var reduce_ms = target_time.getTime() - Date.now();
  if (reduce_ms <= 0) {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0
    };
  }
  return {
    day: parseInt(reduce_ms / 1000 / 3600 / 24),
    hour: parseInt(reduce_ms / 1000 / 3600 % 24),
    min: parseInt(reduce_ms / 1000 / 60 % 60),
    sec: Math.round(reduce_ms / 1000 % 60)
  };
}
function toZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
function renderCountDown() {
  var res = countDown();
  day_ele.innerHTML = toZero(res.day);
  hour_ele.innerHTML = toZero(res.hour);
  min_ele.innerHTML = toZero(res.min);
  sec_ele.innerHTML = toZero(res.sec);
}
setInterval(renderCountDown, 1000);
renderCountDown();
/******/ })()
;