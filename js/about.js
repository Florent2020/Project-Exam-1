// API About SpaceX

const container = document.querySelector(".right_text");

const companyInfo = "https://api.spacexdata.com/v3/info";

async function getCompanyInfoAPI() {

    try {
        const response = await fetch(companyInfo);
        const results = await response.json();

        console.log(results);

        newHtml(results);

    } catch (error) {
        console.log(error);
    }

}

getCompanyInfoAPI();


function newHtml(results) {

    container.innerHTML = `<div class="company_info">
                                <p class="founder">${results.founder}</p>
                                <p class="founded">${results.founded}</p>
                                <p class="employees">${results.employees}</p>
                                <p class="launch_sites">${results.launch_sites}</p>
                                <p class="address">${results.headquarters.address}</p>
                                <p class="city">${results.headquarters.city}</p>
                                <p class="state">${results.headquarters.state}</p>
                                <p class="summary">${results.summary}</p>
                            </div>`;
}






// LOADING ICON JS

var containerLoading = document.getElementById("container_loading");

function loading() {
    containerLoading.style.display = "none";
    var contentBody = document.getElementById("contentBody");
    contentBody.style.display = "";
}

setTimeout(() => loading(), 1000);