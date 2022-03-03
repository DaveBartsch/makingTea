function checkIfInKitchen(inKitchen) {
  console.log('Am I in the kitchen?', inKitchen)
  if (inKitchen) {
      console.log('In the kitchen.')
  } else {
      console.log('Not in kitchen.')
      console.log('Go to kitchen.')
  }
}

function checkForEnoughWater(notEnoughWater) {
  console.log('Did I run out of water?', notEnoughWater)
  if (notEnoughWater) {
      console.log('Not enough water.')
      console.log('Fill up the kettle with water.')
  } else {
      console.log('There is enough water.')
  }
}

function boilWater() {
  console.log('Boil the water.') }

  const teaChoices = ['Chai.', 'Peppermint.', 'Rooibos.', 'Chamomile']


function chooseRandomTea (){
console.log("Today's tea is:", teaChoices[Math.floor(Math.random() * teaChoices.length)])
}


function waitForWater() {
    console.log('Wait for the water to heat up.') }


function addTea() {
    console.log('Add the tea.') }

function pourWater() {
    console.log('Pour the water.') }


function waitForTea() {
    console.log('Wait for the tea to steep.') }

function drinkTea() {
    console.log('Enjoy!') }


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


