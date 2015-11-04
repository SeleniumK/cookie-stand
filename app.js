var dailyHr = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

var table = document.createElement('table');
document.body.appendChild(table);

function initializeTable() {
    var heading = document.createElement('tr');
    var blank = document.createElement('th');
    blank.textContent = "";
    heading.appendChild(blank);

    for (var i = 0; i < this.dailyHr.length; i++) {
      var hours = document.createElement('th');
      hours.textContent = dailyHr[i];
      heading.appendChild(hours);
    };

    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = "Total Cookies: ";
    heading.appendChild(dailyTotal);
    table.appendChild(heading);
  }

function Store(nameOfStore, minCust, maxCust, avCookie) {
  this.nameOfStore = nameOfStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookie = avCookie;
  this.cookiesPerHr = [];
  this.dailyCookies = 0;

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.cookieCalc = function() {
    for (var i = 0; i < dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.custCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  };


  this.displayData = function () {
    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.nameOfStore;
    row.appendChild(location);

    for(var i = 0; i < dailyHr.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.cookiesPerHr[i];
      row.appendChild(numCookie);
    }

    var displayTotal = document.createElement('td');
    displayTotal.textContent = this.dailyCookies;
    row.appendChild(displayTotal);

    table.appendChild(row);
  };

  this.calcAndDisplay = function() {
    this.cookieCalc();
    this.displayData();
  };

}

var pikePlace = new Store("Pike Place Market", 17, 88, 5.2);
var seaTac = new Store("SeaTac Airport", 6, 44, 1.2);
var southCenter = new Store("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new Store("Bellevue Square Mall", 20, 48, 3.3);
var alki = new Store("Alki Beach", 3, 24, 2.6);

initializeTable();
pikePlace.calcAndDisplay();
seaTac.calcAndDisplay();
southCenter.calcAndDisplay();
bellevueSquare.calcAndDisplay();
alki.calcAndDisplay();



