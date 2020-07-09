

function multiply1(num1, num2) {
    let a = str2num(num1)
    let b = str2num(num2)
    console.log(a*b)
    return ''+(a*b)+''

    function str2num(str) {
        let len = str.length
        let res = 0
        for(let i=0; i<len; i++) {
            res = ((str[i] - '0') + res * 10)
        }
        return res
    }
}
function multiply(num1, num2) {}


/**
 * "123456789"
"987654321"
 */
let num1 = "123456789", num2 = "987654321"
console.log(multiply(num1, num2))