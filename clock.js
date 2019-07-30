let start = 'Hello World';
console.log(start);
//define variables that hold the degrees of rotation
var degreesInSeconds = 6;
var degreesInMinutes = 200;
var degreesInHours = 150;
//define variables that access the html Id elements
var secondsHand = document.getElementById("second");
var minutesHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");


//Create intervals in the JavaScript file to make the clocks tick.


setInterval(function() {
	secondsHand.style.transform = "rotate(" + degreesInSeconds + "deg)";
	degreesInSeconds ++;
    console.log("TICK!");
 }, 1000);

setInterval(function() {
	minutesHand.style.transform = "rotate(" + degreesInMinutes + "deg)";
	degreesInMinutes ++;
	console.log('minutes');
}, 1000);

setInterval(function() {
	hourHand.style.transform = "rotate(" + degreesInHours + "deg)";
	degreesInHours ++;
	console.log('Hours');
}, 1000);

	

//define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!
function secondsToMinutes(time){
	return Math.floor(time / 60)
}
secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360

//The first argument is a callback function - it gets triggered every 1000 milliseconds (1 second), which is the second argument.

setInterval(functionYouWantToRun, millisecondsDelay);

//function annoy() {
// // console.log('Are we there yet?');
//}

//setInterval(annoy, 1000);
