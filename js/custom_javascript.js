var string;
var interval = [];
var time_array;
var time = [];
var initialOffset = '440';
var i = [];
var flag = [];
var audio = new Audio('audio/BrotistFertigRemix.ogg');


function countdown ( name ) {
	string = document.getElementById("time_"+name).innerHTML;
	time_array = string.match(/[0-9]+/);
	time[name] = time_array[0]*60;
	i[name] = time[name];
	
	console.log("countdown function:" +name);
	if( flag[name] === true ) {
		stop( name );
		return;
	}
	flag[name] = true;
	start( name );
	return;
}

function start( name ) {
	interval[name] = setInterval(function() {
		var coun = i[name];
		console.log(interval);
		console.log(i);
		// click on running counter to stop it
		if( flag[name] === false ) {
			stop(name);
			return;
		}
		$('#timer_'+name).text( dig_time( coun ) );
		if ( coun == 0) {  	
			clearInterval(interval[name]);
			audio.play();
			return;
		}
		$('#circle_'+name).css('stroke-dashoffset', initialOffset-((coun-1)*(initialOffset/time[name])));
		i[name] = coun-1;
		console.log(i);		
	}, 1000);
}

function stop( name ) {
	clearInterval(interval[name]);
	flag[name] = false;
	interval.splice( name, 1 );
	
	audio.pause();
	i[name] = time[name];
	$('#timer_'+name).text("Start");
	$("#circle_"+name).css('stroke-dashoffset', 0);
	return;
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