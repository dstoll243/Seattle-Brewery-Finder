'strict';

//global array
var storedBrews = [];



//constructor
function Brewery(name, hood, kids, pets, food, events, days) {
  this.name = name;
  this.hood = hood;
  this.kids = kids;
  this.pets = pets;
  this.food = food;
  this.events = events;
  this.days = days;
  storedBrews.push(this);
}



function create() {
  new Brewery('CloudBurst', 'downtown', 'no', 'no', 'no', 'no', 'no');
  new Brewery('Freemont', 'Fremont', 'yes', 'yes', 'no', 'no', 'yes');
  new Brewery('HellBent', 'Lake City', 'no', 'no', 'yes', 'yes', 'yes');
  new Brewery('Holy Mountain Brewing', 'Interbay', 'no', 'no', 'no', 'no', 'yes');
  new Brewery('Optimism Brewing', 'Capital Hill', 'no', 'no', 'no', 'no', 'yes');
  new Brewery('Outlander Brewing Company', 'Fremont', 'no', 'no', 'no', 'no', 'no');
  new Brewery('Peddler', 'Ballard', 'no', 'yes', 'no', 'yes', 'no');
  new Brewery('Populuxe Brewing', 'Ballard', 'yes', 'yes', 'yes', 'yes', 'yes');
  new Brewery('Ravenna Brewing Company', 'University District', 'no', 'no', 'yes', 'yes', 'no');
  new Brewery('Reuben\'s Brews', 'Ballard', 'yes', 'yes', 'yes', 'yes', 'yes');
  new Brewery('Standard Brewing', 'Central District', 'no', 'no', 'yes', 'no', 'no');
  new Brewery('Two Beers Brewing', 'SoDo', 'no', 'no', 'yes', 'no', 'no');
  new Brewery('Urban Family Brewing', 'Magnolia', 'yes', 'yes', 'yes', 'no', 'yes');
}

create();
console.log('new brewery created');