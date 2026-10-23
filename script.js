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

let topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
