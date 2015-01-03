

$(document).ready(function () {

	var getInput = function(userInput) {
	var userInput = prompt("enter a number");
	console.log(userInput);
	var userNumber = +userInput;
	console.log(userNumber);
	
		if (isNaN(userInput)) {
			alert("you must enter a number")
			getInput();
		} 

		else if (userInput % 1 != 0) {
			alert("It must be a whole number")
			getInput();
		}

		else {
			alert("Press enter to start robot FizzBuzz!")
		} 


	var fizzBuzz = function(userNumber) {
	
	var count = 1;
	
	while (count <= userNumber) {

		if (count % 3 === 0 && count % 5 === 0) {
					console.log("Fizzbuzz")
					$('<li class="number"</li>').appendTo(".list")
					.html("<p>" + "Fizzbuzz" + "</p>")
					count ++
				}


		else if (count % 3 === 0) {
					console.log("Fizz")
					$('<li class="number"</li>').appendTo(".list")
					.html("<p>" + "Fizz" + "</p>")
					count ++ 
				}

		else if (count % 5 === 0) {
					console.log("Buzz")
					$('<li class="number"</li>').appendTo(".list")
					.html("<p>" + "Buzz" + "</p>")
					count ++ 
				}


		else {
					console.log(count)
					$('<li class="number"</li>').appendTo(".list")
					.html("<p>" + count + "</p>")
					count ++ 
				}
		} // end of while loop 	
	} //end of fizzbuzz function

	fizzBuzz(userNumber);
}
	getInput();

}); // end of doc ready 

