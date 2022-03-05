function checkIfInKitchen(inKitchen) {
    console.log('Am I in the kitchen?', inKitchen)
    if (inKitchen) {
        console.log('In the kitchen.')
    } else {
        console.log('Not in kitchen.')
        console.log('Go to kitchen.')
    }
  }

  module.exports = {
      checkIfInKitchen
  }