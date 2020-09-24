// API Historical Events from SpaceX

const historicalEvents = "https://api.spacexdata.com/v3/history";

const result = document.querySelector(".historical_events");

async function getSpacexAPI() {

    try {
        const response = await fetch(historicalEvents);
        const spacexAPI = await response.json();
        console.log(spacexAPI);


        // var newHTML = "";

        for (let i = 0; i < spacexAPI.length; i++) {

            if (!spacexAPI[i].title) {
                continue;
            }

            result.innerHTML += `<div class="spaceX_history">
                                <div class="details">
                                    <p class="id">${spacexAPI[i].id}</p>
                                    <p class="title_">${spacexAPI[i].title}</p>
                                    <p class="date">${formatDate(spacexAPI[i].event_date_utc)}</p>
                                    <p class="flight_number">${spacexAPI[i].flight_number}</p>
                                    <p class="detail">${spacexAPI[i].details}</p>
                                    <a class="btn btn-link" href="${spacexAPI[i].links.article}">Read more!</a>
                                </div>
                        </div>`;
        }

        // result.innerHTML = newHTML;

    } catch (error) {
        console.log(error);
        result.innerHTML = message("error", error);
    }

}

getSpacexAPI();



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