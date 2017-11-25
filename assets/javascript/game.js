$(document).ready(function(){

//Global Variables \
//var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
//var wins = 0;
//var losses = 0;
var Random=Math.floor(Math.random()*101+19)
console.log(Random)
$('#number').text(Random);
//var randomComputerNumber;
// Use total is ongoing sum of gem values user has picked.
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		

function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		GeneratedNumbers.push(num);
	}
	console.log(GeneratedNumbers) 
}

fourRandomNumbers();
//resets the game
function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#Combined').text(total);
        } 

//adds the wins to the total
function yay(){
	alert("You won!!!");
		wins++;	
		$('#numberWins').text(wins);
		reset();
}

//adds the losses to the total
function loser(){
	alert ("You lose!!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
}



//sets up click for jewels
		$('#one').on ('click', function(){
			total = total + GeneratedNumbers[0];
			console.log("New total= " + total);
			$('#Combined').text(total);	

						//sets win/lose conditions
					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}		
		})	

		$('#two').on ('click', function(){
			total = total + GeneratedNumbers[1];
			console.log("New total= " + total);
			$('#Combined').text(total);	

					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#three').on ('click', function(){
			total = total + GeneratedNumbers[2];
			console.log("New total= " + total);
			$('#Combined').text(total);

	//sets win/lose conditions
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#four').on ('click', function(){
			total = total + GeneratedNumbers[3];
			console.log("New total= " + total);
			$('#Combined').text(total);	

				
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		});  	

});	
	
//var userTallyScore;
//var total = 0; Not sure if this field should remain. Review later.
// function that intializes the variable for each round of the game

//Set up functions
//function initializeVariables() {

	//randomComputerNumber = 19 + Math.floor(Math.random()*100);
	//Pick a random gem value between 1-12
	//var gemOneValue = 1 + Math.floor(Math.random()*12);
	//var gemTwoValue = 1 + Math.floor(Math.random()*12);
	//var gemThreeValue = 1 + Math.floor(Math.random()*12);
	//var gemFourValue = 1 + Math.floor(Math.random()*12);
	//Set initial value of user ongoing gem selection to 0
	//userTallyScore = 0;
	//Update the html for the game board - use of .append or .html
	//$('#wins').html("wins: " + wins);
	//$('#losses').html("losses: " + losses);
	//$('#randomNumber').html(randomComputerNumber);
	//$('#userScore').html(userTallyScore);
	//consoleLogVariables();

//function to check if user has won or lost

	//function hasUserWonOrLost() {
		//checks if playes has lost.
		//if(userTallyScore > randomComputerNumber){
		//	losses++;
		//	console.log("user lost");
		//	initializeVariables();
		//}

// Check if player has won game
		//if (userTallyScore == randomComputerNumber) {
		//	wins++;
		//	console.log("user won");
		//	initializeVariables();
		//}
	//}

	//function consoleLogVariables() {
		//console.log("wins: " + wins + " losses: " + losses);
		//console.log ("gemOneValue: " + gemOneValue +"gemTwoValue: "+ gemTwoValue +  "gemThreeValue: "+gemThreeValue+"gemFourValue: " +gemFourValue);
		//console.log ("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
		//console.log ("----------------------------------");
	//}
// Game functionality or actions below
//initializeVariables();	

// system will listen for onclick events.

	//$(".gem").on("click", function() {
		// each gem has a value attribute of gem1, gem2, gem3, or gem 4
		// use this attribute to identify which gem the user actually clicked
		//var pressed = $(this).attr("value");
       // console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
       // if (pressed == "gem1") {
       // 	userTallyScore += gemOneValue;
       // } else if (pressed == "gem2") {
       // 	userTallyScore += gemTwoValue;
      //  } else if (pressed == "gem3") {
      //  	userTallyScore += gemThreeValue;
      //  } else if (pressed == "gem4") {
      //  	userTallyScore += gemFourValue;
      //  } else {
      //  	console.log("error");
      //  }
        // then update the html for the user score
      //  $("#userScore").html(userTallyScore);
      //  consoleLogVariables();
        // call the function to see if user has won or lost
       // hasUserWonOrLost();
       // });