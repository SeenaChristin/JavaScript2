function getBMWAudiCars(inventory){
    let BMWAndAudi = [];
    inventory.map((car)=>{
        if(car.car_make==="BMW" || car.car_make==="Audi" ){
            BMWAndAudi.push(car);
        }
    })
    console.log(JSON.stringify(BMWAndAudi));
  }
  
  module.exports = getBMWAudiCars;