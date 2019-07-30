let start = 'Hello World';
console.log(start);
//define variables that hold the degrees of rotation
var degreesInSeconds = 0;
var degreesInMinutes = 0;
var degreesInHours = 0;
//define variables that access the html Id elements
var secondsHand = document.getElementById("second");
var minutesHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");


//Create intervals in the JavaScript file to make the clocks tick.


setInterval(function() {
	secondsHand.style.transform = "rotate(" + (degreesInSeconds/60)*360 + "deg)";
	degreesInSeconds ++;
    console.log("TICK!");
 }, 1000);

 setInterval(function() {
 	minutesHand.style.transform = "rotate(" + (degreesInMinutes/60)*360 + "deg)";
 	degreesInMinutes ++;
 	console.log('minutes');
 }, 30000);

 setInterval(function() {
 	hourHand.style.transform = "rotate(" + (degreesInHours/12)*360 + "deg)";
	degreesInHours ++;
 	console.log('Hours');
 }, 36000000);


//var updateClockToCurrent = () => {
	//secondsHand(now.getSeconds())
	//minutesHand(now.getMinutes())
	//hourHand(now.getHours())
//}
