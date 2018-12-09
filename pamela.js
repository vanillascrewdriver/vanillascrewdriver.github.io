// Set the date we're counting down to
var countDownDate = new Date("Dec 16, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = '<span style="color:#ff0000;">' + days + '</span><span style="color:#ff4000;">d</span><span style="color:#ff7f00;"> </span><span style="color:#ffbf00;">' + hours + '</span><span style="color:#aaff00;">h</span><span style="color:#55ff00;"> </span><span style="color:#00ff00;">' + minutes + '</span><span style="color:#00ffff;">m</span><span style="color:#0080ff;"> </span><span style="color:#0000ff;"> ' + seconds + ' </span><span style="color:#8b00ff;">s</span>';
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("everything").innerHTML = '<span style="color:#ff0000;">H</span><span style="color:#ff2000;">A</span><span style="color:#ff4000;">P</span><span style="color:#ff5f00;">P</span><span style="color:#ff7f00;">Y</span><span style="color:#ff9f00;"> </span><span style="color:#ffbf00;">B</span><span style="color:#ffdf00;">I</span><span style="color:#ffff00;">R</span><span style="color:#bfff00;">T</span><span style="color:#80ff00;">H</span><span style="color:#40ff00;">D</span><span style="color:#00ff00;">A</span><span style="color:#00ff55;">Y</span><span style="color:#00ffaa;"> </span><span style="color:#00ffff;">P</span><span style="color:#00bfff;">A</span><span style="color:#0080ff;">M</span><span style="color:#0040ff;">E</span><span style="color:#0000ff;">L</span><span style="color:#2300ff;">A</span><span style="color:#4600ff;">!</span><span style="color:#6800ff;">!</span><span style="color:#8b00ff;">!</span>';
  }
}, 1000);

fitty('.fit');
