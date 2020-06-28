
function myAtoi(str) {
    let res = parseInt(str)
    if(isNaN(res)) {
        return 0
    }else if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
        return res < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return res
    }
}

let str = "-91283472332"
console.log(myAtoi(str))