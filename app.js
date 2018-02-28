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
  new Brewery('Standard Brewing', 'no', 'no', 'on-site', 'no', 'pages/standard.html');
  new Brewery('Reuben\'s Brews', 'no', 'yes', 'food truck', 'yes', 'pages/reubens.html');
  new Brewery('Two Beers Brewing', 'no', 'yes', 'on-site', 'no', 'pages/twobeers.html');
  new Brewery('Peddler Brewing', 'yes', 'yes', 'food truck', 'yes', 'pages/peddler.html');
  new Brewery('CloudBurst Brewing', 'no', 'yes', 'no', 'no', 'pages/cloudburst.html');
  new Brewery('Fremont Brewing', 'yes', 'yes', 'no', 'yes', 'pages/fremont.html');
  new Brewery('Holy Mountain Brewing', 'no', 'no', 'no', 'no', 'pages/holymt.html');
  new Brewery('Optimism Brewing', 'yes', 'yes', 'food truck', 'yes', 'pages/optimism.html');
  new Brewery('Ravenna Brewing Company', 'yes', 'yes', 'food truck', 'yes', 'pages/ravenna.html');
  new Brewery('Urban Family Brewing', 'yes', 'yes', 'food truck', 'no', 'pages/urbanfam.html');
  new Brewery('Hellbent Brewing', 'no', 'yes', 'food truck', 'yes', 'pages/hellbent.html');
  new Brewery('Populuxe Brewing', 'yes', 'yes', 'food truck', 'yes', 'pages/populuxe.html');
  new Brewery('Outlander Brewing Company', 'no', 'no', 'on-site', 'no', 'pages/outlander.html');
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
  // yes, yes, foodn, no - fremont
  if(document.getElementById('kidsy').checked && document.getElementById('petsy').checked && document.getElementById('foodn').checked && document.getElementById('eventsn').checked) {
    rBrewArray.push(allBrews[5]);
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

  // local storage
  var strBrew = JSON.stringify(rBrewArray);
  localStorage.setItem('Random Breweries', strBrew);
  var breweries = JSON.parse(strBrew);
  console.log(breweries);
}
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

//hide popup if 21 and older
function showPop() {
  ageCheck = true;
  if(ageCheck === true) {
    popUp.style.display = 'none';
  }
}

//take elsewhere is too young
function tooYoung() {
  window.open('https://disneyland.disney.go.com/');
}

older.addEventListener('click', showPop);
younger.addEventListener('click', tooYoung);

