var tableHasHeading = false;
var storeList = [];
var update = document.getElementById("update");

function Store(nameOfStore, minCust, maxCust, avCookie) {
  this.nameOfStore = nameOfStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookie = avCookie;
  this.dailyHr = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  this.cookiesPerHr = [];
  this.dailyCookies = 0;
  storeList.push(this);

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.cookieCalc = function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.custCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  };

  this.initializeTable = function() {
    var table = document.createElement('table');
    document.getElementById('storeData').appendChild(table);
    table.setAttribute('id', 'cookieTable');

    var heading = document.createElement('tr');
    var blank = heading.insertCell(0);

    for (var i = 0; i < this.dailyHr.length; i++) {
      var hours = document.createElement('th');
      hours.textContent = this.dailyHr[i];
      heading.appendChild(hours);
    }

    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = "Total Cookies: ";
    heading.appendChild(dailyTotal);
    table.appendChild(heading);
  };

  this.displayData = function () {
    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.nameOfStore;
    row.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.cookiesPerHr[i];
      row.appendChild(numCookie);
    }

    var displayTotal = document.createElement('td');
    displayTotal.textContent = this.dailyCookies;
    row.appendChild(displayTotal);

    var table = document.getElementById('cookieTable');
    table.appendChild(row);
  };

  this.calcAndDisplay = function() {
    if(!tableHasHeading) {
      this.initializeTable();
      tableHasHeading = true;
    }
    this.cookieCalc();
    this.displayData();
  };

}


function displayAllStores() {
  for(var i = 0; i < storeList.length; i++) {
    storeList[i].calcAndDisplay();
  }
}


function updateStoreList(event) {
  event.preventDefault();

  if (!event.target.nameOfStore.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avCookie.value) {
    return alert("fields cannot be empty");
  }

  var nameOfStore = event.target.nameOfStore.value;
  var minCust = event.target.minCust.value;
  minCust = parseInt(minCust);
  var maxCust = event.target.maxCust.value;
  maxCust = parseInt(maxCust);
  var avCookie = event.target.avCookie.value;
  avCookie = parseFloat(avCookie);

  var newStore = new Store(nameOfStore, minCust, maxCust, avCookie);
  newStore.calcAndDisplay();

  event.target.nameOfStore.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avCookie.value = null;
}

var pikePlace = new Store("Pike Place Market", 17, 88, 5.2);
var seaTac = new Store("SeaTac Airport", 6, 44, 1.2);
var southCenter = new Store("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new Store("Bellevue Square Mall", 20, 48, 3.3);
var alki = new Store("Alki Beach", 3, 24, 2.6);


displayAllStores();
update.addEventListener("submit", updateStoreList);



