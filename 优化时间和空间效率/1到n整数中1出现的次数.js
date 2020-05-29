/** 
  *  
  *  @param { * } n 
  */
function countDigitOne1(n) {
    if(n<=0){
        return 0
    }
    let cur = n % 10
    let height = Math.floor(n/10)
    let low = 0
    let digit = 1 //个位开始
    let res = 0
    while(cur !== 0 || height !== 0) {
        if(cur === 0) { res += height * digit }
        else if(cur === 1) { res += height * digit+low+1 }
        else { res += (height+1) * digit }
        low += cur * digit
        cur = height % 10
        height = Math.floor(height/10)
        digit  *= 10
    }
    return res
}
/** 
  *  
  *  @param { * } n 
  */
function countOne(n) {
    if(n<=0){
        return 0
    }
    let s = String(n)
    let height = parseInt(s.charAt(0))  //n最高位的数字
    let pow = parseInt(Math.pow(10,s.length-1))  //n的位数
    let low = n - height * pow  // n去掉最高位之后的数
    if(height === 1){
        // 1234 => f(999)  +234+1+  f(234)
        return countOne(pow - 1) + countOne(low) + low + 1
    }else {
        return countOne(pow-1) * height + countOne(low) + pow
    }
}
function countDigitOne(n){
    return countOne(n)
}
console.log(countDigitOne(13))