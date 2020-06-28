/**
 * 反转一半
 * @param {*} x 
 */
function isPalindrome(x) {
    if(x<0)return false
    if(x%10 === 0 && x!= 0)return false
    let reverse = 0
    while(reverse < x) {
        reverse = reverse*10 + x%10
        x = Math.floor(x/10)
    }
    return reverse === x || Math.floor(reverse/10) === x
}

let x = 121
console.log(isPalindrome(x))