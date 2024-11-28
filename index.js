// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//first 2 drivers
const returnFirstTwoDrivers=(drivers) =>{
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers))


//last 2 drivers
const returnLastTwoDrivers=(drivers) =>{
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers))
//selecting drivers
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

//fareMultiplier
const createFareMultiplier = (factor) => {
    return (fare) => fare * factor;
  }

//fareDoubler
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10))


//fareTripler
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12))


//fareQuintupler
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5))


//selectingdiffdrivers
const selectDifferentDrivers=( drivers, selectorFunction) => {
    return selectorFunction(drivers);
  };


