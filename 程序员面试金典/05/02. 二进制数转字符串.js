
/**
 * 
 * @param {*} num 
 */
function printBin2(num) {
    if(!(num>0&&num<1))return 'ERROR'
    let res = ''
    while(res.length<=32) {
        num*=2
        let z = parseInt(num)
        num = num - z
        res += z
        if(num === 0){
            return '0.'+res
        }
    }
    return 'ERROR'
}
var printBin = function(num) {
    if(num>=1||num<=0) return 'ERROR';

    let t = 0;
    let res = [];
    while(t<=32){
        num=num*2;
        let z = parseInt(num);
        num = num - z;
        res.push(z);
        t = res.length;
        if(num === 0){
          let temp = res.join('')
    	  return '0.'.concat(temp)
        }
    }
    return "ERROR";
}

// let num = 0.2868311060592532
let num = 0.625
console.log(printBin1(num))
console.log(printBin2(num))
console.log(printBin(num))