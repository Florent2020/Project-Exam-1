// SPACEX API - NEXT LAUNCH 

const nextLaunch = "https://api.spacexdata.com/v3/launches/next";

async function getNextLaunchAPI() {

    try {

        const response = await fetch(nextLaunch);
        const results = await response.json();
        var nextLaunchDate = new Date(results.launch_date_utc);

        var nextLaunchFunction = setInterval(function() {

            var rightNow = new Date().getTime();

            var time = nextLaunchDate - rightNow;

            var days = Math.floor(time / (1000 * 60 * 60 * 24));
            var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((time % (1000 * 60)) / 1000);

            document.querySelector(".days").innerHTML = days;
            document.querySelector(".hours").innerHTML = hours;
            document.querySelector(".mins").innerHTML = mins;
            document.querySelector(".secs").innerHTML = secs;


            if (time < 0) {
                clearInterval(nextLaunchFunction);
                document.querySelector(".countdown_next_launch").innerHTML = "Launch in progress";
            }
        }, 1000);


    } catch (error) {
        console.log(error);
    }

}

getNextLaunchAPI();




// LOADING ICON JS



var containerLoading = document.getElementById("container_loading");

function loading() {
    containerLoading.style.display = "none";
    var contentBody = document.getElementById("contentBody");
    contentBody.style.display = "";
}

setTimeout(() => loading(), 1000);