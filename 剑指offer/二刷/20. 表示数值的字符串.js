/**
 * 有限自动机
 * @param {*} s 
 */
function isNumberic(s) {

    // 创建map：数组中第一个元素为双元素（否则报错：Iterator value bar is not an entry object）
    let states = [
        new Map([
            [' ', 0],
            ['s', 1],
            ['d', 2],
            ['.', 4]
        ]),
        new Map([
            ['d', 2],
            ['.', 4]
        ]),
        new Map([
            ['d', 2],
            ['.', 3],
            ['e', 5],
            [' ', 8]
        ]),
        new Map([
            ['d', 3],
            ['e', 5],
            [' ', 8]
        ]),
        new Map([
            ['d', 3]
        ]),
        new Map([
            ['s', 6],
            ['d', 7]
        ]),
        new Map([
            ['d', 7]
        ]),
        new Map([
            ['d', 7],
            [' ', 8]
        ]),
        new Map([
            [' ', 8]
        ])
    ]

    let p = 0
    let t = ' '
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c >= '0' && c <= '9') t = 'd'
        else if (c === '-' || c === '+') t = 's'
        else t = c
        if (!states[p].has(t)) return false
        p = parseInt(states[p].get(t))
    }
    return p === 2 || p === 3 || p == 7 || p === 8
}


let s = "+.8"
console.log(isNumberic(s))