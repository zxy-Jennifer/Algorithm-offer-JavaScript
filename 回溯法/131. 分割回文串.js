
function partition(s) {
    let len = s.length
    let res = []
    if(len<=0)return res
    for(let i=1; i<=len; i++) {
        let str = s.substr(0,i)
        if(!isPalindrome(str))continue
        let path = [str]// substr(i,j): 下标为i开始取，取j个元素
        dfs(i, path)
    }
    return res

    function dfs(index, path) {
        if(index === s.length) {
            res.push(path.slice())
            return
        }

        for(let i=1; i <= len-index; i++) {
            let str = s.substr(index,i)
            if(!isPalindrome(str))continue
            path.push(str)
            dfs(index+i, path)
            path.pop()
        }
    }
    // 判断是否是回文
    function isPalindrome(s) {
        let len = s.length
        if(len<=1)return true
        let i=0, j=len-1
        while(i<j) {
            if(s[i]!==s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}
let s = "wwqww"
console.log(partition(s))