function getCarYears(inventory){
   let carYearArr =[];
   carYearArr = inventory.map((car)=>{
     return car.car_year;
   });
   console.log(carYearArr);
   return carYearArr;
  }
  
  module.exports = getCarYears;