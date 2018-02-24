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
  new Brewery('Standard Brewing', 'no', 'no', 'on-site', 'no', 'http://standardbrew.com/');
  new Brewery('Reuben\'s Brews', 'no', 'yes', 'food truck', 'yes', 'http://www.reubensbrews.com/');
  new Brewery('Two Beers Brewing', 'no', 'yes', 'on-site', 'no', 'https://www.twobeersbrewery.com/');
  new Brewery('Peddler Brewing', 'yes', 'yes', 'food truck', 'yes', 'https://www.peddlerbrewing.com/');
  new Brewery('CloudBurst Brewing', 'no', 'yes', 'no', 'no', 'http://www.cloudburstbrew.com/');
  new Brewery('Fremont Brewing', 'yes', 'yes', 'no', 'yes', 'https://www.fremontbrewing.com/');
  new Brewery('Holy Mountain Brewing', 'no', 'no', 'no', 'no', 'https://holymountainbrewing.com/');
  new Brewery('Optimism Brewing', 'yes', 'yes', 'food truck', 'yes', 'http://optimismbrewing.com/');
  new Brewery('Ravenna Brewing Company', 'yes', 'yes', 'food truck', 'yes', 'http://www.ravennabrewing.com/');
  new Brewery('Urban Family Brewing', 'yes', 'yes', 'food truck', 'no', 'http://www.urbanfamilybrewing.com/');
  new Brewery('Hellbent Brewing', 'no', 'yes', 'food truck', 'yes', 'http://www.hellbentbrewingcompany.com/');
  new Brewery('Populuxe Brewing', 'yes', 'yes', 'food truck', 'yes', 'https://www.populuxebrewing.com/');
  new Brewery('Outlander Brewing Company', 'no', 'no', 'on-site', 'no', 'https://outlanderbrewing.com/');
}
makeBrews();
console.log(allBrews);