// API Launches from SpaceX

const allLaunchesAPI = "https://api.spacexdata.com/v3/launches";

async function getAllLaunchesAPI() {

    try {
        const response = await fetch(allLaunchesAPI);
        const allAPI = await response.json();
        const result = document.querySelector(".all_launches");

        var newHTML = "";

        for (let i = 0; i < allAPI.length; i++) {

            newHTML += `<div class="spaceX_launches">
                            <div class="details">
                                <p class="flight_number">${allAPI[i].flight_number}</p>
                                <p class="rocket_name">${allAPI[i].rocket.rocket_name}</p>
                                <p class="launch_date">${formatDate(allAPI[i].launch_date_utc)}</p>
                                <p class="mission_name">${allAPI[i].mission_name}</p>
                                <p class="detail">${allAPI[i].details}</p>
                                <a class="btn btn-link" href="${allAPI[i].links.video_link}">You Tube!</a>
                            </div>
                        </div>`;
        }

        result.innerHTML = newHTML;

    } catch (error) {
        console.log(error);

    }

}

getAllLaunchesAPI();



// FORMAT DATE

function formatDate(date) {
    const launchDate = new Date(date);
    return launchDate.toLocaleDateString();
}




// LOADING ICON JS

var containerLoading = document.getElementById("container_loading");

function loading() {
    containerLoading.style.display = "none";
    var contentBody = document.getElementById("contentBody");
    contentBody.style.display = "";
}

setTimeout(() => loading(), 1000);