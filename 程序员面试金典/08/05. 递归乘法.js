
/**
 * 
 * @param {*} A 
 * @param {*} B 
 */
function multiply1(A,B) {
    if(!A||!B)return 0
    let res = 0
    while(B>0) {
        res+=A
        B--
    }
    return res
}

/**
 * 位运算
 *  
 * @param {*} A 
 * @param {*} B 
 */
function multiply(A,B) {
    if(!A||!B)return 0
    let res = 0
    let max = A>B?A:B
    let min = A<=B?A:B
    while(min>=2) {
        res+=(max<<1)
        min-=2
    }
    if(min>0)res+=max
    return res
}

/**
 *  双位运算：
 * 
 *  A*2：A << 1
 *  B//2：B整除2，即 B>>1
 *  B%2：B&1
 *  A∗B=(A∗2)(B/2)=(A∗2)(B//2)+A∗(B%2)
 * 
 * @param {*} A 
 * @param {*} B 
 */
function multiply(A,B) {
    if(A===0)return 0
    if(A===1)return B
    if(B&1) {
        return multiply(A<<1, B>>1) + A
    }else {
        return multiply(A<<1, B>>1)
    }
}

console.log(multiply(4,3))