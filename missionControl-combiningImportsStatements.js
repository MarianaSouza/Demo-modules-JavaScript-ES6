import {availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane-combiningExportsStatements';
import meetsSpeedRangeRequirements from './airplane-combiningExportsStatements';

function displayFuelCapacity() {
   availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
   availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
   availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();

/*combining import statements*/
