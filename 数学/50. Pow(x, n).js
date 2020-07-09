
function myPow(x, n) {
    if(n === 0 || x === 1)return 1
    if(n<0 && x === 0)return null
    if(n<0) {
        return 1/myPow(x, -n)
    }else if(n%2 === 0) {
        return myPow(x*x, n/2)
    }else {
        return x*myPow(x, n-1)
    }
}
var myPow1 = function(x, n) {
    if(n===0)return 1 // n=0直接返回1
    if(n<0){   				//n<0时 x的n次方等于1除以x的-n次方分
        return 1/myPow(x,-n)
    }
    if(n%2){    //n是奇数时 x的n次方 = x*x的n-1次方
        return x*myPow(x,n-1)
    }
    return myPow(x*x,n/2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
 }

 var myPow2 = (num, power) => {
    if (power < 0) return 1 / (num * myPow(num, -(power + 1)))
    if (power === 0) return 1
    if (power === 1) return num
    return power % 2 === 1 ?
      num * myPow(num, power - 1) :
      myPow(num * num, power / 2)
  }

let x=0.00001, n=2147483647

console.log(myPow2(x, n))