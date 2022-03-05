const teaChoices = ['Chai.', 'Peppermint.', 'Rooibos.', 'Chamomile']


function chooseRandomTea (){
console.log("Today's tea is:", teaChoices[Math.floor(Math.random() * teaChoices.length)])
}


function waitForWater(chosenTea) {
    console.log('Wait for the water to heat up.') }


function addTea() {
    console.log('Add the tea.') }

function pourWater() {
    console.log('Pour the water.') }


function waitForTea() {
    console.log('Wait for the tea to steep.') }

function drinkTea() {
    console.log('Enjoy!') }


    module.exports = {
        teaChoices,
        chooseRandomTea,
        waitForWater,
        pourWater,
        addTea,
        waitForTea,
        drinkTea
    }