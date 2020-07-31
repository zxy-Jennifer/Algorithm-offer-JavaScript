/**
 * 10 11 0
 * @param {*} bits 
 */
function isOneBitCharacter(bits) {
    return bits[bits.length-1]===0 && recur(bits.length-2)

    function recur(index) {
        let res = false
        if(index<0)return true
        let c = bits[index]
        if(index===0) {
            return c === 0
        }
        if(c === 1) {
            if(bits[index-1] === 0)return false
            res = res || recur(index-2)
        }
        if(c === 0) {
            res = res || recur(index-1) || recur(index-2)
        }
        return res
    }
}
let bits = [1, 1, 1, 0]
console.log(isOneBitCharacter(bits))