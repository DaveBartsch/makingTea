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

    module.exports = { 
        checkForEnoughWater,
        boilWater
    }