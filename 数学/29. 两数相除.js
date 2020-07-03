
/**
 * 使用位运算
 * @param {*} dividend 
 * @param {*} divisor 
 */
function divide1(dividend, divisor) {
    if(divisor === 0)return null
    if(dividend === 0) return 0
    if(divisor === 1)return dividend
    
    let d1 = Math.abs(dividend)
    let d2 = Math.abs(divisor)
    let flag = dividend<0 ? false : true
    flag = divisor<0 ? !flag : flag

    let res = getRes(d1, d2, 0)

    res = flag ? res : 0-res
    if (res > 2147483647) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res

    function getRes(dend, odsor, res) {
        if(dend < odsor)return res
        let count = 1
        let tdsor = odsor
        while(dend >= tdsor) {
            let ddsor = tdsor + tdsor
            if(dend === ddsor)return count + count + res
            if(dend < ddsor)return getRes(dend - tdsor, odsor, res + count)
            tdsor = ddsor
            count += count
        }
    }
}

var divide = function(dividend, divisor) {
    if(dividend==-2147483648&&divisor==-1)return 2147483647;
    var sum=0,t=0;//第一层累加数
    var sums=0,ts=0;//第二层累加数
    var sumss=0,tss=0;//第三层累加数
    var res=0;//结果
    var flat=(dividend^divisor); //结果正负标志位
    dividend=(dividend<0)?dividend:-dividend; //被除数取负值
    divisor=(divisor<0)?divisor:-divisor; //除数取负值
    while(dividend<=divisor){ //暴力累加法
        sum+=divisor;
        t--;
        sums+=sum;
        ts+=t;
        sumss+=sums;
        tss+=ts;
        if(dividend-sumss<0&&sumss<0){ //判断三层累加是否超出
            res+=tss;
            dividend-=sumss;
        }else{//超出则普通累加
            res--;
            dividend-=divisor;
            sum=0;
            t=0;
            sums=0;
            ts=0;
            sumss=0;
            tss=0;
        }
    }
    return(flat<0)?res:-res;
}

var divide3 = function(dividend, divisor, count = 1) {
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    const isMinus = (dividend === absDividend ? 1 : -1) ^ (divisor === absDivisor ? 1 : -1);
    console.log('222', absDividend, absDivisor)
    let res = divideDichotomy(absDividend, absDivisor, 0);
    console.log('222', res)
  
    if (isMinus) res = -res;
    if (res > 2147483647) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res;
  };
  
  /**
   * @param {number} absDividend 被除数(非负数)
   * @param {number} originAbsDivisor 最初的除数(非负数)
   * @param {number} res 上一个部分得到的结果
   */
  function divideDichotomy(absDividend, originAbsDivisor, res) {
    if (absDividend < originAbsDivisor) return res;
    let count = 1;
    let absDivisor = originAbsDivisor;
    while (absDividend >= absDivisor) {
      const nextAbsDivisor = absDivisor + absDivisor;
      console.log('nextAbsDivisor', nextAbsDivisor)
      if (absDividend === nextAbsDivisor) return count + count + res;
      if (absDividend < nextAbsDivisor) return divideDichotomy(absDividend - absDivisor, originAbsDivisor, res + count);
      absDivisor = nextAbsDivisor;
      count += count;
    }
  }

console.log(divide1(1100540749, -1090366779))
console.log(divide3(1100540749, -1090366779))
// console.log(divide(1100540749, -1090366779))
// console.log(divide(10, -3))
// console.log(divide1(10, 3))
