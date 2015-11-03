function Store(nameOfStore, minCust, maxCust, avCookie) {
  this.nameOfStore = nameOfStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookie = avCookie;
  this.dailyHr = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
  this.cookiesPerHr = [];
  this.dailyCookies = 0;

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.cookieCalc = function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.custCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  };

  this.displayData = function () {
    var table = document.createElement('table');
    document.body.appendChild(table);

    var heading = document.createElement('tr');
    var blank = document.createElement('td');
    blank.textContent = "";
    heading.appendChild(blank);

    for (var i = 0; i < this.dailyHr.length; i++) {
      var hours = document.createElement('th');
      hours.textContent = this.dailyHr[i];
      heading.appendChild(hours);
    };
    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = "Total Cookies: ";
    heading.appendChild(dailyTotal);

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.nameOfStore;
    row.appendChild(location);

    // var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      // var hours = document.createElement('th');
      // hours.textContent = this.dailyHr[i];
      // heading.appendChild(hours);

      var numCookie = document.createElement('td');
      numCookie.textContent = this.cookiesPerHr[i];
      row.appendChild(numCookie);
    }
    var displayTotal = document.createElement('td');
    displayTotal.textContent = this.dailyCookies;
    row.appendChild(displayTotal);

    table.appendChild(heading);
    table.appendChild(row);
  };

}

var pikePlace = new Store("Pike Place Market", 17, 88, 5.2);
var seaTac = new Store("SeaTac Airport", 6, 44, 1.2);
var southCenter = new Store("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new Store("Bellevue Square Mall", 20, 48, 3.3);
var alki = new Store("Alki Beach", 3, 24, 2.6);

pikePlace.cookieCalc();
pikePlace.displayData();

seaTac.cookieCalc();
seaTac.displayData();

southCenter.cookieCalc();
southCenter.displayData();

bellevueSquare.cookieCalc();
bellevueSquare.displayData();

alki.cookieCalc();
alki.displayData();





