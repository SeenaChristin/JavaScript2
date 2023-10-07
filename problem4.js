function getCarYears(inventory){
   let carYearArr =[];
   inventory.map((car)=>{
    carYearArr.push(car.car_year);
   });
   console.log(carYearArr);
   return carYearArr;
  }
  
  module.exports = getCarYears;