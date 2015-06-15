var Send = require("./send.js");
var Validar = require("./validate.js");

var errorModal = require("../views/error.eco");
var errorModalHTML = document.getElementById('errorModal')

var successModal = require("../views/success.eco");
var successModalHTML = document.getElementById('successModal')

function init(){
	animateScroll();
	navColapse();
	startDatepicker();
	sameInpustValues()
	Validar();
	sendInformation()
}

// Init Date Pickers
function startDatepicker(){
  $('.datepicker').pickadate();
}

// Animate Scroll
function animateScroll() {
  $('.nav a, #btn-header').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 100
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

// Function to collapse nav on mobile
function navColapse(){
	$('.navbar-collapse a').click(function(){
    	$(".navbar-collapse").collapse('hide');
	});
}

// inputs dates equal values
function sameInpustValues(){
	$('.in').change(function() {
		$('.in').val(this.value)
	});
	$('.out').change(function() {
		$('.out').val(this.value)
	});
}

// Send information using send.js
function sendInformation(){
	$('#send-request').click(function(){
		var values = getvalues();
		if(validateValues()){
			successSend()
			Send(values);
		}
	})
}

// Get values of request
function getvalues(){
	var checkin = $('#checkin').val();
	var checkout = $('#checkout').val();
	var name = $('#name').val();
	var email = $('#email').val();
	var commet = $('#commet').val();
	var guests = $('#guests').val();


	var mensaje = { 
		checkin: checkin,
		checkout: checkout,
		name: name, 
		email: email,
		commet: commet,
		guests: guests
	};
	return mensaje
}

function validateValues(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var guests = document.getElementById('guests');

	var mensaje = {};

	if (hasClass(name, "valid")) {
		if (hasClass(email, "valid")) {
			if (hasClass(guests, "valid")) {
				return true
			} else {
				mensaje = { text:"The guests field is required" }
				errorModalHTML.innerHTML = errorModal(mensaje);
				$('#errorModal').modal('show');
				guests.focus();
				return false
			}
		} else {
			mensaje = { text:"The email field is required" }
			errorModalHTML.innerHTML = errorModal(mensaje);
			$('#errorModal').modal('show');
			email.focus();
			return false
		}
	}else{
		mensaje = { text:"The name field is required" }
		errorModalHTML.innerHTML = errorModal(mensaje);
		$('#errorModal').modal('show');
		name.focus();
		return false
	}
}

function successSend(){

	var mensaje = { text:"We have received your information !! \n We will contact you to provide more information." }
	successModalHTML.innerHTML = successModal(mensaje);
	$('#successModal').modal('show');

	$('#checkin').val("");
	$('#checkout').val("");
	$('#name').val("");
	$('#email').val("");
	$('#commet').val("");
	$('#guests').val("");
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


module.exports = init;