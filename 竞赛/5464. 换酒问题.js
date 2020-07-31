/**
 * 
 * @param {*} numBottles 
 * @param {*} numExchange 
 */
function numWaterBottles(numBottles, numExchange) {
    let res = numBottles
    if(numBottles<=0)return 0
    let carry = 0
    let newB = 0
    while(numBottles >= numExchange) {
        newB = Math.floor(numBottles / numExchange)
        res += newB
        carry = numBottles - newB * numExchange
        numBottles = newB+carry
        // console.log(numBottles, res)
    }
    return res
}

let numBottles = 2, numExchange = 3
console.log(numWaterBottles(numBottles, numExchange))