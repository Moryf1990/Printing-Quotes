'use strict';

var button = $('#button');
var button1 = $('#button1');

button.on('click', function(e) {
	e.preventDefault();
	button = prompt('What is the quote?', 'Enter Your Quote Here');
	button1 = prompt('Who said it?');

	if(button !==null) {
		console.log(button1 + ' says, ' +  button);
	}
});