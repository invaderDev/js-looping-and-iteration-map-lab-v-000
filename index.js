// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const nameArray = driver.split(" ");
    const driverObject = Object.assign({}, {firstName : nameArray[0]}, {lastName : nameArray[1]});

    return driverObject;
  })
}

