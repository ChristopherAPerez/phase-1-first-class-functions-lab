// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    let firstDrivers;
    return returnFirstTwoDrivers, firstDrivers = drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    let lastDrivers;
    return returnLastTwoDrivers, lastDrivers = drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num = 5) {
    const fareMultiplier = function () {
        return num * 5;
    }
    return fareMultiplier;
}

const fareDoubler = function(num2 = 10, doubledFare) {
    doubledFare =  num2 * 2;
    return doubledFare;
}

const fareTripler = function(num3 = 12, tripledFare) {
    tripledFare =  num3 * 3;
    return tripledFare;
}

const selectDifferentDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'], returnedDriver) {
    if (returnedDriver === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (returnedDriver === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}
