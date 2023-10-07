function sortAlphabetically(inventory){
  let carModelSet = new Set();
  inventory.map((car)=>{
    carModelSet.add(car.car_model);
  });
  let sortedCarArr = [];
  for (let element of carModelSet) {
    sortedCarArr.push(element);
  }
  sortedCarArr.sort((a,b)=>{return a.toUpperCase()<b.toUpperCase() ? -1 : 1});

  for(let i=0; i<sortedCarArr.length; i++){
    console.log(sortedCarArr[i]);
  }
}

module.exports = sortAlphabetically;