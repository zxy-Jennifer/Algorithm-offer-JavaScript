/**
 * 
 * @param {*} num 
 */
function translateNum(num) {
    let arr = String(num)
    let res = 0
    translate(arr,0)
    return res

    /**
     * 
     * @param {*} arr 
     * @param {*} index 当前的索引号
     * @param {*} flag 判断当前位是否要和前一位一起
     * @param {*} res 结果
     */
    function translate(arr,index) {
        if(index>=arr.length){
            res++
            return
        }
        translate(arr,index+1)
        let rnext = arr.substring(index,index+2)
        if(parseInt(rnext) <= 25 && parseInt(rnext) >= 10) {
            /** 和后一位组成 */
            translate(arr,index+2)
        }
    }
}


console.log(translateNum(12258))