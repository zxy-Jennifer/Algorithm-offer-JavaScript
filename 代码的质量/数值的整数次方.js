function exp(a,n){
    let flag=false;
    if(n<0){
        // 指数为负
        try{
            if(a===0) throw '零不能求负数次幂！！！'
        }catch(err){
            return 
        }
        flag=true
        n*=-1
    }
    let res=getRes(a,n);
    if(flag){
        res=1/res
    }
    return res
}
function getRes(a,n){
    console.log(n)
    if(n===1){
        return a
    }
    if(n===0){
        return 1
    }
    if((n&0x1)===1){
        // 奇数次幂
        let tmp1=getRes(a,n>>1)
        return tmp1*tmp1*a
    }else {
        // 偶数次幂
        let tmp2=getRes(a,n>>1)
        return tmp2*tmp2
    }
}
console.log(exp(0,-2))