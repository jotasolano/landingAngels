var key = "-RVFUqB8JC5rnNa_toItiQ";
// var key = "l4omttYABGLr0dZ6wmprEA"; //Test Api Key
var url = "https://mandrillapp.com/api/1.0/messages/send-template.json";

function init(message){
	// var comentario = document.getElementById('coment').value;
	var messageRequest = {
		"key": key,
		"template_name": "reservationrequest",
		"template_content": [],
		"message": {
			"to": [
	            {
	                "email": "info@angelsecolodge.com",
	                "type": "to"
	            }
	        ],
	        "subject": "Reservation Request",
	        "from_name": "Sitio Web",
	        "merge": true,
			"merge_language": "handlebars",
			"merge_vars": [
	            {
	                "rcpt": "info@angelsecolodge.com",
	                "vars": [
	                    {
	                    	"name": "Name",
	                    	"content": message.name
				        },
				        {
	                    	"name": "Email",
	                    	"content": message.email
				        },
				        {
	                    	"name": "Checkin",
	                    	"content": message.checkin
				        },
				        {
	                    	"name": "Checkout",
	                    	"content": message.checkout
				        },
				        {
	                    	"name": "Guests",
	                    	"content": message.guests
				        },
				        {
	                    	"name": "Comments",
	                    	"content": message.commet
				        },
	                ]
	            }
	        ],
		},
		
	};


	var paramsRequest = JSON.stringify(messageRequest);
	sendEmailRequest(paramsRequest);
}


function sendEmailRequest(messages){
	// var modalSpinner = document.getElementById("spinner");
	// var modalConfirmation = document.getElementById('confirmation');
	var http = new XMLHttpRequest();
	http.open("POST", url, true);

	http.onreadystatechange = function() {
    	if(http.readyState == 4 && http.status == 200) {
    		console.log("Todo bien")
        	// modalSpinner.classList.remove("able");
        	// modalConfirmation.classList.add("able");
        	// cleanfields()
    	}
    }
    http.send(messages);
}



module.exports = init;
