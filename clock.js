 var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
   function showCurrentTime()
{
 
     var clock = document.getElementById("clock");
    var currentTime = new Date();
    var milli = currentTime.getMilliseconds();
    var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    var x = "Hello";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var oneSecond = 1000;
    setInterval( oneSecond);

    // put together the string that displays the time
    var clockTime =   hours + ':' + minutes + ':' + seconds + " " + meridian  +  "!";
    console.log(clockTime);
    };
     showCurrentTime();


