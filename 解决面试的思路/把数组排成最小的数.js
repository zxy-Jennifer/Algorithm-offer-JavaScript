/**
 * 比较两个数每一位的大小
 * @param {*} a 
 * @param {*} b 
 */
function compareOnNum1(a,b) {
    let s1 = String(a)
    let s2 = String(b)
    let i=0,j=0
    while(i < s1.length || j < s2.length) {
        console.log(i,j)
        console.log('parseInt(s1.charAt(i)),parseInt(s2.charAt(j))',parseInt(s1.charAt(i)),parseInt(s2.charAt(j)))
        if(parseInt(s1.charAt(i))>parseInt(s2.charAt(j))){
            return 1     // a>b
        }else if(parseInt(s1.charAt(i)) < parseInt(s2.charAt(j))){
            return -1    // a<b
        }else {
            i++
            j++
            if(i===s1.length&&j===s2.length) {
                return 0
            }
            if(i===s1.length) {
                i=0
            }
            if(j===s2.length) {
                j=0
            }
        }
    }
}
/**
 * 比较两个数每一位的大小：  比较a+b和b+a
 * @param {*} a 
 * @param {*} b 
 */
function compareOnNum(a,b) {
    return parseInt(String(a)+String(b)) - parseInt(String(b)+String(a)) 
}
/**
 * 对数组排序后拼接字符串
 * @param {*} nums 
 */
function minNumber(nums) {
    return nums.sort(compareOnNum).join("")
}