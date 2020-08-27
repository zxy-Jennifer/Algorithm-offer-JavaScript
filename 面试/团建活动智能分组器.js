/**
 * 
 * @param {*} m 
 * @param {*} n 
 */
function getArr(m, n) {
    if(m<=0 || n<=0)return []
    let count = 0
    let res = []
    let start = 0
    let rows = m, cols = n
    while(rows>start*2 && cols>start*2) {
        let endX = cols-1-start
        let endY = rows-1-start
        // 左到右
        for(var i=start; i<=endX; i++) {
            count++
            if((count%10 === 7) && (Math.floor((count%100)/10)%2 === 1)) {
                res.push([start,i])
            }
        }
        // 上到下
        if(start<endY) {
            for(var i=start+1; i<=endY; i++) {
                count++
                if((count%10 === 7) && (Math.floor((count%100)/10)%2 === 1)) {
                    res.push([i,endX])
                }
            }
        }
        // 右到左
        if(start<endX && start<endY) {
            for(var i=endX-1; i>=start; i--) {
                count++
                if((count%10 === 7) && (Math.floor((count%100)/10)%2 === 1)) {
                    res.push([endY,i])
                }
            }
        }
        // 下到上
        if(start<endX && start<endY-1) {
            for(var i=endY-1; i>=start+1; i--) {
                count++
                if((count%10 === 7) && (Math.floor((count%100)/10)%2 === 1)) {
                    res.push([i,start])
                }
            }
        }
        start++
    }
    return res
}
let m=7, n=5
console.log(getArr(m, n))