const getCarYears = require('./problem4');

function getOlderCars(inventory,year){
    let carYearsArr = getCarYears(inventory);
    let resultArr = carYearsArr.filter((carYear)=>{
     return carYear<2000;
    })
    console.log(resultArr.length);
  }
  
  module.exports = getOlderCars;