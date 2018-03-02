'use strict';

var rerun = document.getElementById('rerun');
var arrayData = [];
var storedData = localStorage.getItem('Random Breweries');
if (storedData) {
  arrayData.push(JSON.parse(storedData));
  rerun.style.display='block';
} else {
  rerun.style.display='none';
}

function openOne() {
  if(arrayData.length > 0) {
    var choose = Math.floor(Math.random() * arrayData.length);
    arrayData = arrayData[choose];
    window.open(arrayData.page);
  }else {alert('Sorry, no brew match your description');
    return;
  }
}

var btn2 = document.getElementById('btn2');
if(btn2) {
  btn2.addEventListener('click', openOne);
}