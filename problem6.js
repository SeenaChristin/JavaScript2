function getBMWAudiCars(inventory){
    let BMWAndAudi = [];
    BMWAndAudi = inventory.filter((car)=>{
        return (car.car_make==="BMW" || car.car_make==="Audi" );
    })
    console.log(JSON.stringify(BMWAndAudi));
  }
  
  module.exports = getBMWAudiCars;