
function getRes(arr) {
    let price = 0, worth = 0
    for(let item of arr) {
        if(item[0] >= item[1]) {
            worth+=item[0]
            price+=item[0]-item[1]
        }else {
            worth+=item[1]
        }
    }
    return [worth, price]
}
let arr = [[5, 3],[10, 5],[1, 2]]
console.log(getRes(arr))
    
    