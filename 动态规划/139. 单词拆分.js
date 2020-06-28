

function wordBreak1(s, wordDict) {
    return recur(s,wordDict,0)

    function recur(s, wordDict,index) {
        if(s.trim().length === 0){
            return true
        }else if(wordDict.length === index) {
            return false
        }

        let temp = s
        let flag = false
        while(temp.indexOf(wordDict[index])!==-1) {
            console.log(111, temp)
            let inx = temp.indexOf(wordDict[index])
            temp = temp.substring(0, inx).concat(" ".concat(temp.substring(inx+wordDict[index].length)))
            flag = (flag || recur(temp, wordDict, index+1))
        }
        console.log(temp)
        return (flag || recur(s, wordDict, index+1))
    }
}

/**
 * 动态规划
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for(let i=0;i<=s.length;i++) {
        for(let j=0;j<i;j++) {
            if(dp[j] && wordDict.includes(s.substring(j,i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
}

// let s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
let s = "ccbb", wordDict = ["bc","cb"]
// let s = "applepenapple", wordDict = ["apple", "pen"]
// let s = "leetcode", wordDict = ["leet", "code"]
// let s = "accc", wordDict = ["cc","ac"]
console.log(wordBreak(s, wordDict))