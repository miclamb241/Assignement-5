
// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    faultyItems.style.visibility = "hidden";

    formSubmission();

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

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
       let planet = pickPlanet(listedPlanets);

       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   
});