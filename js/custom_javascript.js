var string = document.getElementById("time_gray").innerHTML;
var time_array = string.match(/[0-9]+/);
var time = time_array[0]*60;
var initialOffset = '440';
var i = time;
var flag = false;
var audio = new Audio('audio/output.mp3');
audio.play();

function countdown () {
	
	console.log();
	if( flag === true ) {
		flag = false;
		return;
	}
	flag = true;
	start();
}

function start() {
	var interval = setInterval(function() {
		// click on running counter to stop it
		if( flag === false ) {
			console.log("hi");
			clearInterval(interval);
			i = time;
			$('#timer').text("Start");
			$("#circle_gray").css('stroke-dashoffset', 0);
			return;
		}
		$('#timer').text( dig_time(i) );
		if (i == 0) {  	
			clearInterval(interval);
			
			
			
			
			
			return;
			
		}
		$('#circle_gray').css('stroke-dashoffset', initialOffset-((i-1)*(initialOffset/time)));
		i--;  
	}, 1000);
}

function dig_time( sec ) {
	var minutes = parseInt( sec/60, 10 );
	var seconds = sec % 60;
	if( minutes < 10 && minutes >= 0 ) {
		minutes = "0"+minutes;
	}
	if( seconds < 10 && seconds >= 0 ) {
		seconds = "0"+seconds;
	}
	return minutes +":"+ seconds;
}