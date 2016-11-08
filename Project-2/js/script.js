				
				var name = document.getElementById("name");
				var email = document.getElementById("email");
				var button1 = document.getElementById("subscribe1");

				button1.addEventListener('click', function subscribe(){

				var x = document.forms["myform"]["email"].value;
				var y = document.forms["myform"]["name"].value;

				
				if (x==null || x==""){

					alert("Please enter your email!")
					email.style.border="1pt solid red";
				}


				else {
					alert("Thank you for subscribing to Wanderlust!")
					document.getElementById("name").value = "";
					document.getElementById("email").value = "";

				}

				
				if (y==null || y==""){
						alert ("Please enter your name!");

						}
						else {

						}

				})


$(document).ready(function(){
	
	$('nav a,footer a.up').click(function(e){
		
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});

});