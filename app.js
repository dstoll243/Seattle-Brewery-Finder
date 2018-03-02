'use strict';

// global variables
var allBrews = [];

// object constructor for breweries
function Brewery(name, kids, pets, food, events, page) {
  this.name = name;
  this.kids = kids;
  this.pets = pets;
  this.events = events;
  this.page = page;
  allBrews.push(this);
}
function makeBrews() {
  new Brewery('Standard Brewing', 'no', 'no', 'on-site', 'no', 'standard.html');
  new Brewery('Reuben\'s Brews', 'no', 'yes', 'food truck', 'yes', 'reubens.html');
  new Brewery('Two Beers Brewing', 'no', 'yes', 'on-site', 'no', 'twobeers.html');
  new Brewery('Peddler Brewing', 'yes', 'yes', 'food truck', 'yes', 'peddler.html');
  new Brewery('CloudBurst Brewing', 'no', 'yes', 'no', 'no', 'cloudburst.html');
  new Brewery('Fremont Brewing', 'yes', 'yes', 'no', 'yes', 'fremont.html');
  new Brewery('Holy Mountain Brewing', 'no', 'no', 'no', 'no', 'holymt.html');
  new Brewery('Optimism Brewing', 'yes', 'yes', 'food truck', 'yes', 'optimism.html');
  new Brewery('Ravenna Brewing Company', 'yes', 'yes', 'food truck', 'yes', 'ravenna.html');
  new Brewery('Urban Family Brewing', 'yes', 'yes', 'food truck', 'no', 'urbanfam.html');
  new Brewery('Hellbent Brewing', 'no', 'yes', 'food truck', 'yes', 'hellbent.html');
  new Brewery('Populuxe Brewing', 'yes', 'yes', 'food truck', 'yes', 'populuxe.html');
  new Brewery('Outlander Brewing Company', 'no', 'no', 'on-site', 'no', 'outlander.html');
  new Brewery('Pike Brewing', 'yes', 'no', 'on-site', 'no', 'pike.html');
  new Brewery('Seapine Brewing', 'yes', 'yes', 'no', 'no', 'seapine.html');
  new Brewery('Outer Planet Brewing', 'yes', 'yes', 'on-site', 'no', 'outerplanet.html');
  new Brewery('Georgetown Brewery', 'yes', 'yes', 'no', 'no', 'georgetown.html');
}

makeBrews();
console.log(allBrews);

// var form = document.getElementById('form');
var rBrewArray = [];

function randomBrew() {
  // no, no, onsite, no - Standard & Outlander
  if(document.getElementById('kidsn').checked && document.getElementById('petsn').checked && document.getElementById('site').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[0]);
    rBrewArray.push(allBrews[12]);
    console.log(rBrewArray);
  }
  // no, no, foodn, no - Holy Mountain
  if(document.getElementById('kidsn').checked && document.getElementById('petsn').checked && document.getElementById('foodn').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[6]);
    console.log(rBrewArray);
  }
  // no, yes, onsite, no - 2 beers
  if(document.getElementById('kidsn').checked && document.getElementById('petsy').checked && document.getElementById('site').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[2]);
    console.log(rBrewArray);
  }
  // no yes, truck, yes - Hellbent
  if(document.getElementById('kidsn').checked && document.getElementById('petsy').checked && document.getElementById('truck').checked && document.getElementById('eventsy').checked) {
    rBrewArray.push(allBrews[10]);
    console.log(rBrewArray);
  }
  // yes, yes, foodn, no - fremont / seapine
  if(document.getElementById('kidsy').checked && document.getElementById('petsy').checked && document.getElementById('foodn').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[5]);
    rBrewArray.push(allBrews[14]);
    rBrewArray.push(allBrews[16]);
    console.log(rBrewArray);
  }
  // yes, yes, truck, no = Urban family
  if(document.getElementById('kidsy').checked && document.getElementById('petsy').checked && document.getElementById('truck').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[9]);
    console.log(rBrewArray);
  }
  // n, y, no, no = Cloudburst
  if(document.getElementById('kidsn').checked && document.getElementById('petsy').checked && document.getElementById('foodn').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[4]);
    console.log(rBrewArray);
  }
  // yes, yes, truck, yes = reuban, peddler, optimism, ravenna, populuxe
  if(document.getElementById('kidsy').checked && document.getElementById('petsy').checked && document.getElementById('truck').checked && document.getElementById('eventsy').checked) {
    rBrewArray.push(allBrews[1]);
    rBrewArray.push(allBrews[3]);
    rBrewArray.push(allBrews[7]);
    rBrewArray.push(allBrews[8]);
    rBrewArray.push(allBrews[11]);
    console.log(rBrewArray);
  }
  // yes, no, site, no - pike
  if(document.getElementById('kidsy').checked && document.getElementById('petsn').checked && document.getElementById('site').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[13]);
    console.log(rBrewArray);
  }

  // yes, yes, site, no - outerplanet
  if(document.getElementById('kidsy').checked && document.getElementById('petsy').checked && document.getElementById('site').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[15]);
    console.log(rBrewArray);
  }

  // local storage
  localStorage.setItem('Random Breweries', JSON.stringify(rBrewArray));
}

// // var rerun = document.getElementById('rerun');
// var arrayData = [];
// var storedData = localStorage.getItem('Random Breweries');
// if (storedData) {
//   arrayData.push(JSON.parse(storedData));
//   // rerun.style.display='block';
// } else {
//   // rerun.style.display='none';
// }

//button event listener
var button = document.getElementById('button');
if(button) {
  button.addEventListener('click', doAll);
}

//randomize one result within the array and open its page.
function openOne() {
  if(rBrewArray.length > 0) {
    var choose = Math.floor(Math.random() * rBrewArray.length);
    rBrewArray = rBrewArray[choose];
    window.open(rBrewArray.page);
  }else {alert('Sorry, no brew match your description');
    return;
  }
}

function doAll() {
  // making sure every form has a check
  if(!document.getElementById('kidsy').checked && !document.getElementById('kidsn').checked || !document.getElementById('petsy').checked && !document.getElementById('petsn').checked || !document.getElementById('truck').checked && !document.getElementById('site').checked && !document.getElementById('foodn').checked || !document.getElementById('eventsy').checked && !document.getElementById('eventsn').checked) {
    alert('Please make a choice for each option so we can find you a place to drink');
    return;
  }
  if(rBrewArray !== []) {
    rBrewArray = [];
  }
  randomBrew();
  openOne();
}

//Home menu popup
var ageCheck = false;
var older = document.getElementById('older');
var younger = document.getElementById('young');
var popUp = document.getElementById('popup');
var ofAge = localStorage.getItem("ageCheck");

//hide popup if 21 and older
function showPop() {
  ageCheck = true;
  // localStorage.setItem('age', true);
  if(ageCheck === true) {
    popUp.style.display = 'none';
    localStorage.setItem('popupWasShown', '1');
  }
}
if(localStorage.getItem('age') === 'true') {
  popUp.style.display = 'none';
}





if (localStorage.getItem('popupWasShown') === '1') {
  popUp.style.display = 'none';
}

// if (localStorage.getItem('popupWasShown') === '2') {
//   window.location.replace('https://disneyland.disney.go.com/');
// }

//take elsewhere is too young
function tooYoung() {
  window.location.replace('https://disneyland.disney.go.com/');
  // localStorage.setItem('popupWasShown', '2');
}

older.addEventListener('click', showPop);
younger.addEventListener('click', tooYoung);