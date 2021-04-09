// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
                return "Not a number";
            }
            else if(isNaN(testInput) === false)
                {
                    return "Is a number";
                }
      }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    window.addEventListener("load", function(){
        let form = document.getElementbyId("testForm");
        form.addEventListener("submit", function(event){
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            fuelLevelName = document.querySelector("input[name=fuelLevel]");
            cargoLevelName = document.querySelector("input[name=cargoMass]");

            if(pilotName.value === "" || copilotName.value === "" || fuelLevelName.value === "" || cargoLevelName.value === ""){
                window.alert("All fields are required!");
                event.preventDefault();            
            }
            else if(validateInput(pilotName.value) !== "Not a number" || validateInput(copilotName.value) !== "Not a number" || validateInput(fuelLevelName.value) !== "Is a number" || validateInput(cargoLevelName.value) !== "Is a number")
                {
                    window.alert("The information provided is invalid");
                    event.preventDefault();
                }
        });
    });
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
