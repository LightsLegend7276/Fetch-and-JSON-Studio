function init() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let div = document.getElementById("container");
            let h1 = document.querySelector("h1");
            let sortedJson = sortAstronauts(json);
            h1.innerHTML += "  Count: " + json.length;
            for (let i = 0; i < sortedJson.length; i++) {
                div.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${sortedJson[i].firstName} ${sortedJson[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${sortedJson[i].hoursInSpace}</li>
                        ${sortedJson[i].active ? `<li id="active">Active: ${sortedJson[i].active}</li>` : `<li>Active: ${sortedJson[i].active}</li>`}
                        <li>Skills: ${sortedJson[i].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${sortedJson[i].picture}>
                </div>
                `;
            };
        });
    });

    function sortAstronauts(array) {
        let sortedArray = [];
        let sortedAstros = [];
        for (let i = 0; i < array.length; i++) {
            sortedArray.push(array[i].hoursInSpace);
        }
        sortedArray.sort(function(a, b) { return b - a; });
        for (let v = 0; v < sortedArray.length; v++) {
            for (let j = 0; j < array.length; j++) {
                if (sortedArray[v] === array[j].hoursInSpace) {
                    sortedAstros.push(array[j]);
                }
            }
        };
        return sortedAstros;
    }

};





window.onload = init;
