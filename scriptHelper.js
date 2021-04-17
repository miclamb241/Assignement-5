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

    list.style.visibility;

    let button = document.querySelector("#formSubmit");
    button.addEventListener("submit", function(event) {

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
            window.alert("All fields are required!");
            event.preventDefault();         
        }
        else if(validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number"){
            window.alert("The information provided is invalid");
            event.preventDefault();
        }
    });

    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    if(fuelLevel < 10000 && cargoLevel <= 10000)
        {
            list.style.visibility = "visible";

            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        else if(fuelLevel >= 10000 && cargoLevel > 10000)
            {
                list.style.visibility = "visible";

                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
                pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            }
            else if(fuelLevel < 10000 && cargoLevel > 10000)
                {
                    list.style.visibility = "visible";

                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "rgb(199, 37, 78)";
                    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                }
                else{
                        list.style.visibility = "visible";
                        
                        launchStatus.innerHTML = "Shuttle is Ready for Launch";
                        launchStatus.style.color = "rgb(65, 159, 106)";
                        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                        fuelStatus.innerHTML = "Fuel level high enough for launch";
                        cargoStatus.innerHTML = "Cargo mass low enough for launch";
                    }   
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
