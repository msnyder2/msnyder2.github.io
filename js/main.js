function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName+''+ lastName

	if (firstName === 'General' && lastName !== 'assembly'); {
		console.log('Hey Generalissimo');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else {
		console.log('User is a child');
	}

}

// when the page loads 
$(function() {
	$('img').on('click', askQuestions);

	// hide all the content
	$('h3').next().hide();

	// when the user clicks an h3 
	$('h3').on('click', function() {



	// toggle the next element
	$(this).next().slideToggle(1000);	
	})

});
