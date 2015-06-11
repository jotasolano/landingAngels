function init(){
	scrollNav();
	navColapse();
  startDatepicker();
}

// Init Date Pickers
function startDatepicker(){
   $('.datetimepicker').datetimepicker();
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
        scrollTop: $( $(this).attr('href') ).offset().top - 70
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

init();