function getCarMakeModel(inventory,carId){
   let carDetails = inventory.filter((car)=>{
    return car.id === carId;
   }) 
   console.log(`Car ${carId} is a ${carDetails[0].car_year} ${carDetails[0].car_make} ${carDetails[0].car_model}`);
}

module.exports = getCarMakeModel;