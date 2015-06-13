var Send = require("./send.js");

function init(){
	console.log("hi")
	scrollNav();
	navColapse();
	startDatepicker();
	sameInpustValues()
	sendInformation()
}

// Init Date Pickers
function startDatepicker(){
  $('.datepicker').pickadate();
}

// Animate Scroll
function scrollNav() {
  $('.nav a').click(function(){  
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

function sameInpustValues(){
	$('.in').change(function() {
		$('.in').val(this.value)
	});
	$('.out').change(function() {
		$('.out').val(this.value)
	});
}

function sendInformation(){
	$('#send-request').click(function(){
		var values = getvalue();
		Send(values);
	})
}

function getvalue(){
	var checkin = $('#checkin').val();
	var checkout = $('#checkout').val();
	var name = $('#name').val();
	var email = $('#email').val();
	var commet = $('#comment').val();
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







module.exports = init;