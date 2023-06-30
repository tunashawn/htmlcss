
// Function to count remaining time
function timeLeft(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());

    var seconds = Math.floor( (t/1000) % 60 )
    var minutes = Math.floor( (t/1000/60) % 60 )
    var hours = Math.floor( (t/(1000*60*60)) % 24 )
    var days = Math.floor( t/(1000*60*60*24) )

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

// Run function() when is ready
$(document).ready(function() {
    // Get today date
    var today = new Date()
    // Get the end of year
    var endOfYear = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00"

    // Set the clock
    var setClock = function(endOfYear) {
        // Update time each second
        var timeinterval = setInterval(function(){
            var t = timeLeft(endOfYear)
            $('#year').text(today.getFullYear() + 1)
            $('#day').text(t.days)
            $('#hour').text(t.hours)
            $('#minute').text(('0' + t.minutes).slice(-2))
            $('#second').text(('0' + t.seconds).slice(-2))
            console.log(t.seconds)
          }, 1000)
    }

    setClock(endOfYear)
})