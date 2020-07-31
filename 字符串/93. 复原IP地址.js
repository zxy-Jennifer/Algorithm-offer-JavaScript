
/**
 * 
 * @param {*} s 
 */
function restoreIpAddresses(s) {
    let res = []
    let path = []
    recur(0, 0, s, path, res)
    return res

    /**
     * 
     * @param {*} index 当前遍历到s的索引
     * @param {*} k ip地址的第k位(共四位)
     * @param {*} s 
     * @param {*} path ip地址的第k位为 path[k]
     * @param {*} res 
     */
    function recur(index, k, s, path, res) {
        // 可以
        if(k === 4 && index === s.length) {
            // console.log('pathpppppppppppath', path)
            res.push(path.join('.'))
            return
        }

        // 剪枝
        if(index + (4-k)*3 <s.length) {
            // console.log(index, k, '被减')
            return
        }

        // 加入当前可以加入的
        let num = 0
        for(let i=1; i<=3; i++) {
            num = s.substr(index, i)
            // console.log(num)
            // 非0数字不能以0开头
            if(num[0] == '0' && num.length>1)break
            path.push(num)
            // console.log('可以', index, i, num, path)
            if(parseInt(num)<=255) {
                recur(index+i, k+1, s, path, res)
            }
            path.pop()
        }
    }
}

let s="010010"
console.log(restoreIpAddresses(s))

// ["0.10.0.10","0.100.1.0"]