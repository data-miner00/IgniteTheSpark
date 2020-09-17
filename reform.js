"use strict";

window.onscroll = function() {scrollFunction()};

const logo = document.getElementsByClassName('logo-img')[0];
const navbar = document.getElementsByClassName('main-nav')[0];
const menu = document.getElementById('menu');
const enquire = document.getElementById('enquire');

function scrollFunction() {

    if (document.documentElement.scrollTop >= 50) {
        logo.style.height = '65px';
        logo.style.marginLeft = '19px';
        navbar.style.background = 'rgba(0,0,0,0.4)';
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.margin = '0';
        menu.style.marginLeft = '8%';
        enquire.style.marginRight = '8%';
        
    } else {
		if (window.matchMedia("(max-width: 320px)").matches)
			logo.style.height = '80px';
		else
			logo.style.height = '100px';
        logo.style.marginLeft = '5px';
        navbar.style.background = 'none';
        navbar.style.backdropFilter = 'none';
        navbar.style.margin = 'var(--padding-initial)';
        menu.style.marginLeft = '0';
        enquire.style.marginRight = '0';
        
    }

}

// Countdown Timer
// Set the date we're counting down to
var countDownDate = new Date("Jun 14, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("countdown-timer").innerHTML = days + " days and " + hours + " hours until event.";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

(function(){
    var daysInWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    
    var today = new Date();
    
    document.getElementById("today").innerText = daysInWeek[today.getDay()];
})();
