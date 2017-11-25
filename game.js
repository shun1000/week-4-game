$( document ).ready(function(){

var Random=Math.floor(Math.random()*101+19)
//Global Variables \
var rNumgreen;
var rNumblue;
var rNumred;
var rNumpurple;

var userTotal = 0;
var total = 0;
var wins = 0;
var loss = 0;
$('#wins').append(wins);
$('#losses').append(loss);
$('#score').append(userTotal);


//functions

function initializeGame() {

	total = Math.floor(Math.random()*100)+19;
	console.log("Computer total " +total);

	rNumgreen = Math.ceil(Math.random()*12);
	rNumblue = Math.ceil(Math.random()*12);
	tNumred = Math.ceil(Math.random()*12);
	tNumpurple = Math.ceil(Math.random()*12);
}