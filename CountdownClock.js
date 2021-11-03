const dayInMs = 1000 * 60 * 60 * 24;
const hourInMs = 1000 * 60 * 60;
const minuteInMs = 1000 * 60;
const secondInMs = 1000;

function timeToDays(time) {
    return Math.floor(time / dayInMs);
}

function timeToHours(time) {
    return Math.floor((time % dayInMs) / hourInMs);
}

function timeToMinutes(time) {
    return Math.floor((time % hourInMs) / minuteInMs);
}

function timeToSeconds(time) {
    return Math.floor((time % minuteInMs) / secondInMs);
}

function secondsToMilliseconds(seconds) {
    return seconds * 1000;
}

// Set date to countdown to
let targetTime = new Date("2022-01-01T00:00:00").getTime();

// Set date to countdown to X seconds
// let targetTime = new Date().getTime() + secondsToMilliseconds(10);

let interval = setInterval(function () {

    // Get today Date/Time
    let currentTime = new Date().getTime();

    let distance = targetTime - currentTime;

    let days = timeToDays(distance);
    let hours = timeToHours(distance);
    let minutes = timeToMinutes(distance);
    let seconds = timeToSeconds(distance);

    if (distance < 0) {

        // End countdown
        clearInterval(interval);

        // Print to Console
        // console.log("END");

        // Print to HTML
        document.getElementById("countdown").innerHTML = "END";

    } else {

        // Print to Console
        // console.log("Time left: %s days %s:%s:%s",
        //     days.toString().padStart(2, '0'),
        //     hours.toString().padStart(2, "0"),
        //     minutes.toString().padStart(2, "0"),
        //     seconds.toString().padStart(2, "0"));

        // Print to HTML
        // document.close();
        // document.write ("Time left: " +  
        //                     days.toString().padStart(2, "0") + " days " + 
        //                     hours.toString().padStart(2, "0") + ":" + 
        //                     minutes.toString().padStart(2, "0") + ":" + 
        //                     seconds.toString().padStart(2, "0"));

        // Print to HTML
        document.getElementById("countdown").innerHTML =  days.toString().padStart(2, "0") + " days " + 
                                                          hours.toString().padStart(2, "0") + ":" + 
                                                          minutes.toString().padStart(2, "0") + ":" + 
                                                          seconds.toString().padStart(2, "0");

    }
}, 1000);