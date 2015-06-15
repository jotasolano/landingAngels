function init(){
	$('#name').on('input', function() {
	    var input=$(this);
	    var re = /^[a-zA-Z]+/;
	    var is_email=re.test(input.val());
	    if(is_email){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});

	$('#email').on('input', function() {
	    var input=$(this);
	    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	    var is_email=re.test(input.val());
	    if(is_email){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});

	$('#guests').on('input', function() {
	    var input=$(this);
	    var re = /^[0-9]+/;
	    var is_email=re.test(input.val());
	    if(is_email){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
}



module.exports = init;