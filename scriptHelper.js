// Write your helper functions here!
//require('isomorphic-fetch');

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

    if(validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"){
            window.alert("All fields are required!");
            return;           
        }
        else if(validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) !== "Is a Number" || validateInput(cargoLevel.value) !== "Is a Number"){
            window.alert("The information provided is invalid");
            return;
        }

    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementByid("faultyItems");
    
    if(parseInt(fuelLevel.value) >= 10000 && parseInt(cargoLevel.value) <= 10000)
        {
            faultyItems.style.visibility = "hidden";

            launchStatus.innerHTML = "Shuttle Is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            pilotStatus.innerHTML = `Pilot ${PilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo Mass low enough for launch";
        }
        else if(parseInt(fuelLevel.value) >= 10000 && parseInt(cargoLevel.value) > 10000)
            {
                faultyItems.style.visibility = "visible";

                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
                pilotStatus.innerHTML = `Pilot ${PilotName.value} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo Mass too heavy for launch";
            }
            else if(parseInt(fuelLevel.value) < 10000 && parseInt(cargoLevel.value) <= 10000)
                {
                    faulty.style.visibility = "visible";

                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "rgb(199, 37, 78)";
                    pilotStatus.innerHTML = `Pilot ${PilotName.value} is ready for launch`;
                    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    cargoStatus.innerHTML = "Cargo Mass low enough for launch";
                }
                else
                    {
                        faultyItems.style.visibility = "visible";

                        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                        launchStatus.style.color = "rgb(199, 37, 78)";
                        pilotStatus.innerHTML = `Pilot ${PilotName.value} is ready for launch`;
                        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
                        fuelStatus.innerHTML = "Fuel level too low for launch";
                        cargoStatus.innerHTML = "Cargo Mass too high for launch";
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

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;
