const getCarYears = require('./problem4');

function getOlderCars(inventory,year){
    let carYearsArr = getCarYears(inventory);
    let count =0;
    carYearsArr.map((carYear)=>{
      if(carYear<year){
        count++;
      }
    })
    console.log(count);
  }
  
  module.exports = getOlderCars;