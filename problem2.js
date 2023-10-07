function getLastCar(inventory){
    let carDetails = inventory.filter((car,index)=>{
     return index==inventory.length-1;
    }) 
    console.log(`Last car is a ${carDetails[0].car_make} ${carDetails[0].car_model}`);
 }
 
 module.exports = getLastCar;