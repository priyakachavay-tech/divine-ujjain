let btn=document.getElementById("btn");

btn.addEventListener("click", function(){

	document.getElementById("Temples").scrollIntoView({

		behavior: "smooth"
	});

});

let form=document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();
	
	let message=document.getElementById("successMessage");

	message.textContent="Thank you for contacting Divine Ujjain";

	message.style.display="block";

	form.reset();

});