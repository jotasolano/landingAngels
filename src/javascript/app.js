var Events = require("./controllers/events.js");
var Parse = require('parse').Parse;
Parse.initialize("AqfhPmzIXtC0Zy9Ycpb5LCyAqNqxsiZmS1v3DOTN", "HbZOu18jSgskhNwsIgF2jEQhtI2aD0SO77QZlDgR");
// var Send = require("./controllers/send.js");

function init(){
	getRates()
	getTexts()
	Events();
}

function getRates(){
	var lowSingle = document.getElementById('lowSingle')
	var lowDouble = document.getElementById('lowDouble')
	var lowExtra = document.getElementById('lowExtra')
	var highSingle = document.getElementById('highSingle')
	var highDouble = document.getElementById('highDouble')
	var highExtra = document.getElementById('highExtra')
	var Rates = Parse.Object.extend("rates");
	var query = new Parse.Query(Rates);
	query.find({
	  success: function(results) {
	    for (var i = 0; i < results.length; i++) {
	    	if (results[i].get('price') == "low") {
	    		lowSingle.innerHTML = results[i].get('single')
	    		lowDouble.innerHTML = results[i].get('double')
	    		lowExtra.innerHTML = results[i].get('extra')
	    	}
	    	if (results[i].get('price') == "high") {
	    		highSingle.innerHTML = results[i].get('single')
	    		highDouble.innerHTML = results[i].get('double')
	    		highExtra.innerHTML = results[i].get('extra')
	    	}
	    }
	  },
	  error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	  }
	});
}

function getTexts(){
	var Texts = Parse.Object.extend("content");
	var query = new Parse.Query(Texts);
	query.find({
	  success: function(results) {
	    for (var i = 0; i < results.length; i++) {
	    	var currentText = document.getElementById(results[i].get('position'));
	    	currentText.innerHTML = results[i].get('text');
	    }
	  },
	  error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	  }
	});
}


init();