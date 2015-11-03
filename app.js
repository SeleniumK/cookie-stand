var pikePlace = {
  nameOfStore: "Pike Place Market",
  minCust: 17,
  maxCust: 88,
  avCookie: 5.2,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  dailyCookies: 0,

  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  },

  displayData: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      list.appendChild(numCookie);
    }

    var displayTotal = document.createElement('li');
    displayTotal.innerHTML = "Daily Cookies: " +this.dailyCookies;
    list.appendChild(displayTotal);

    document.body.appendChild(list);
  }

};

var seaTac = {
  nameOfStore: "Sea-Tac Airport",
  minCust: 6,
  maxCust: 44,
  avCookie: 1.2,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  dailyCookies: 0,

  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  },

  displayData: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      list.appendChild(numCookie);
    }

    var displayTotal = document.createElement('li');
    displayTotal.innerHTML = "Daily Cookies: " +this.dailyCookies;
    list.appendChild(displayTotal);

    document.body.appendChild(list);
  }
};

var southCenter = {
  nameOfStore: "SouthCenter Mall",
  minCust: 11,
  maxCust: 38,
  avCookie: 1.9,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  dailyCookies: 0,

  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  },

  displayData: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      list.appendChild(numCookie);
    }

    var displayTotal = document.createElement('li');
    displayTotal.innerHTML = "Daily Cookies: " +this.dailyCookies;
    list.appendChild(displayTotal);

    document.body.appendChild(list);
  }

};

var bellevueSquare = {
  nameOfStore: "Bellevue Square",
  minCust: 20,
  maxCust: 48,
  avCookie: 3.3,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  dailyCookies: 0,

  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  },

  displayData: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      list.appendChild(numCookie);
    }

    var displayTotal = document.createElement('li');
    displayTotal.innerHTML = "Daily Cookies: " + this.dailyCookies;
    list.appendChild(displayTotal);

    document.body.appendChild(list);
  }

};

var alki = {
  nameOfStore: "Alki",
  minCust: 3,
  maxCust: 24,
  avCookie: 2.6,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  dailyCookies: 0,

  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
      this.dailyCookies += this.cookiesPerHr[i];
    }
  },

  displayData: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    var list = document.createElement('ul');

    for(var i = 0; i < this.dailyHr.length; i++) {
      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      list.appendChild(numCookie);
    }

    var displayTotal = document.createElement('li');
    displayTotal.innerHTML = "Daily Cookies: " +this.dailyCookies;
    list.appendChild(displayTotal);

    document.body.appendChild(list);
  }

};


pikePlace.ranCookCalc();
pikePlace.displayData();

seaTac.ranCookCalc();
seaTac.displayData();

southCenter.ranCookCalc();
southCenter.displayData();

bellevueSquare.ranCookCalc();
bellevueSquare.displayData();

alki.ranCookCalc();
alki.displayData();





