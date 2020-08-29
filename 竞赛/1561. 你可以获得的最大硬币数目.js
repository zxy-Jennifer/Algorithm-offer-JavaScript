/**
 * 
 * @param {*} piles 
 */
var maxCoins = function (piles) {
    let len = piles.length
    piles.sort((a, b) => b - a)
    let i = 0,
        j = len - 1
    let res = 0
    while (i < j) {
        res += piles[i + 1]
        i += 2
        j--
    }
    return res
};
let piles = [2, 4, 1, 2, 7, 8]
console.log(maxCoins(piles))