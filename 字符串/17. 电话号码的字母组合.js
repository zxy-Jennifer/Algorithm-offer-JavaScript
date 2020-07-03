

function letterCombinations(digits) {
    let map = new Map([
        [2, 'abc'],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkl'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz']
    ])
    let res = []
    if(digits.length<=0)return res
    let path = ''
    recur(path, 0, digits)
    return res

    function recur(path, index, digits) {
        if(index === digits.length) {
            // 找到了一个结果
            res.push(path)
            return 
        }
        let c = parseInt(digits[index])
        let chs = map.get(c)
        for(let i=0; i<chs.length; i++) {
            recur(path+chs[i], index+1, digits)
        }
        return 
    }
}

console.log(letterCombinations('23'))