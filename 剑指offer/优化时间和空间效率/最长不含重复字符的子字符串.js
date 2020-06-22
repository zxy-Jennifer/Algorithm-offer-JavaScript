/**
 * 
 * @param {*} s 
 */
function lengthOfLongestSubstring(s) {
    let res = 0
    let temp = ""
    for(let i= 0; i<s.length;i++) {
        let index = temp.indexOf(s.charAt(i))
        if(index === -1) {
            temp+=s.charAt(i)
            res = Math.max(res, temp.length)
        }else {
            temp = temp.slice(index+1)
            temp += s.charAt(i)
        }
    }
    return res
}

console.log(lengthOfLongestSubstring("bbbbbb"))