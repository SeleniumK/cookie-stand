var pikePlace = {
  nameOfStore: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avCookie: 5.2,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      console.log(Math.floor(this.avCookie * this.ranCustCalc() ));
      console.log("let's try this");
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
    }
  },

  displayCookiesPerHr: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var list = document.createElement('ol');
      document.body.appendChild(list);

      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      document.body.appendChild(numCookie);
    }

  }

};

var seaTac = {
  nameOfStore: "Sea-Tac Airport",
  minCust: 6,
  maxCust: 44,
  avCookie: 1.2,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      console.log(Math.floor(this.avCookie * this.ranCustCalc() ));
      console.log("let's try this");
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
    }
  },

  displayCookiesPerHr: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var list = document.createElement('ol');
      document.body.appendChild(list);

      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      document.body.appendChild(numCookie);
    }

  }

};

var southCenter = {
  nameOfStore: "SouthCenter Mall",
  minCust: 11,
  maxCust: 38,
  avCookie: 1.9,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      console.log(Math.floor(this.avCookie * this.ranCustCalc() ));
      console.log("let's try this");
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
    }
  },

  displayCookiesPerHr: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var list = document.createElement('ol');
      document.body.appendChild(list);

      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      document.body.appendChild(numCookie);
    }

  }

};

var bellevueSquare = {
  nameOfStore: "Bellevue Square",
  minCust: 20,
  maxCust: 48,
  avCookie: 3.3,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      console.log(Math.floor(this.avCookie * this.ranCustCalc() ));
      console.log("let's try this");
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
    }
  },

  displayCookiesPerHr: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var list = document.createElement('ol');
      document.body.appendChild(list);

      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      document.body.appendChild(numCookie);
    }

  }

};

var alki = {
  nameOfStore: "Alki",
  minCust: 3,
  maxCust: 24,
  avCookie: 2.6,
  dailyHr: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  cookiesPerHr: [],
  ranCustCalc: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  ranCookCalc: function() {
    for (var i = 0; i < this.dailyHr.length; i++){
      console.log(Math.floor(this.avCookie * this.ranCustCalc() ));
      console.log("let's try this");
      this.cookiesPerHr.push(Math.floor(this.avCookie * this.ranCustCalc() ));
    }
  },

  displayCookiesPerHr: function () {
    var location = document.createElement('h3');
    location.innerHTML = this.nameOfStore;
    document.body.appendChild(location);

    for(var i = 0; i < this.dailyHr.length; i++) {
      var list = document.createElement('ol');
      document.body.appendChild(list);

      var numCookie = document.createElement('li');
      numCookie.innerHTML = this.dailyHr[i] + ": " + this.cookiesPerHr[i];
      document.body.appendChild(numCookie);
    }

  }

};


pikePlace.ranCookCalc();
pikePlace.displayCookiesPerHr();

seaTac.ranCookCalc();
seaTac.displayCookiesPerHr();

southCenter.ranCookCalc();
southCenter.displayCookiesPerHr();

bellevueSquare.ranCookCalc();
bellevueSquare.displayCookiesPerHr();

alki.ranCookCalc();
alki.displayCookiesPerHr();





