function init() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            let div = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: Physician, Chemical Engineer</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
                `;
            }

        });


    });

};





window.onload = init;
