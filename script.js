// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function() {

    let document = window.document;
    
    let faultyItems = document.querySelector("#launchForm");
    faultyItems.style.visibility = "hidden";

    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevelName = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevelName.value, cargoMass.value);
    });

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