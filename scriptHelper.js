// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   let template =
    `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
            <img src="${imageUrl}">
    `

    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = template;
}

function validateInput(testInput) {

    if(testInput === "")
    {
      return "Empty";
    }
    else
      {
        testInput = parseInt(testInput);

        if(isNaN(testInput) === true)
            {
                return "Not a Number";
            }
            else if(isNaN(testInput) === false)
                {
                    return "Is a Number";
                }
      }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


        let form = document.querySelector("#launchForm");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevelName = document.querySelector("input[name=fuelLevel]");
            let cargoLevelName = document.querySelector("input[name=cargoMass]");

            if(validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevelName.value) === "Empty" || validateInput(cargoLevelName.value) === "Empty"){
                window.alert("All fields are required!");
                return;           
            }
            else if(validateInput(pilotName.value) !== "Not a Number" || validateInput(copilotName.value) !== "Not a Number" || validateInput(fuelLevelName.value) !== "Is a Number" || validateInput(cargoLevelName.value) !== "Is a Number"){
                    window.alert("The information provided is invalid");
                    return;
                }

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    if(parseInt(fuelStatus.value) >= 10000 && parseInt(cargoStatus.value) <= 10000)
        {
            faultyItems.style.visibility = "visible";

            launchStatus.innerHTML = "Shuttle Is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            pilotStatus.innerHTML = "Pilot Chris is ready for launch";
            copilotStatus.innerHTML = "Co-pilot Bob is ready for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo Mass low enough for launch";
        }
        else if(parseInt(fuelStatus.value) >= 10000 && parseInt(cargoStatus.value) > 10000)
            {
                faultyItems.style.visibility = "visible";

                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
                pilotStatus.innerHTML = "Pilot Chris is ready for launch";
                copilotStatus.innerHTML = "Co-pilot Bob is ready for launch";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo Mass too heavy for launch";
            }
            else if(parseInt(fuelStatus.value) < 10000 && parseInt(cargoStatus.value) <= 10000)
                {
                    faultyItems.style.visibility = "visible";

                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "rgb(199, 37, 78)";
                    pilotStatus.innerHTML = "Pilot Chris is ready for launch";
                    copilotStatus.innerHTML = "Co-pilot Bob is ready for launch";
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    cargoStatus.innerHTML = "Cargo Mass low enough for launch";
                }
                else
                    {
                        faultyItems.style.visibility = "visible";

                        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                        launchStatus.style.color = "rgb(199, 37, 78)";
                        pilotStatus.innerHTML = "Pilot Chris is ready for launch";
                        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch";
                        fuelStatus.innerHTML = "Fuel level too low for launch";
                        cargoStatus.innerHTML = "Cargo Mass too high for launch";
                    }
    

});
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
        .then(response => response.json());

    return planetsReturned;
}

function pickPlanet(planets) {
    
    let random = Math.floor(Math.random() * 6);

    return planets[random];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
