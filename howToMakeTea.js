const {checkIfInKitchen} = require("./inKitchenFunc")

const {
    checkForEnoughWater,
    boilWater
} = require("./WaterFuncs")

const {
    teaChoices,
    chooseRandomTea,
    waitForWater,
    pourWater,
    addTea,
    waitForTea,
    drinkTea
} = require("./teaFuncs")

function makeTea(inKitchen, notEnoughWater) {
  console.log('Start.');
  checkIfInKitchen(inKitchen);
  checkForEnoughWater(notEnoughWater);
   boilWater();
   chooseRandomTea();
   addTea();
   waitForWater();
   pourWater();
   waitForTea();
   drinkTea();
  console.log('End.');
}


  console.log('\n');
  console.log('Starting IN kitchen, with NOT ENOUGH water.');
  makeTea(true, true);

  console.log('\n');
  console.log('Starting IN kitchen, with ENOUGH water.');
  makeTea(true, false);

  console.log('\n');
  console.log('Starting OUTSIDE kitchen, with NOT ENOUGH water.');
  makeTea(false, true);

  console.log('\n');
  console.log('Starting OUTSIDE kitchen, with ENOUGH water.');
  makeTea(false, false);


