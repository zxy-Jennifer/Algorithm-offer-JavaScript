/**
 * 将输入的测试用例 每一行赋值到inputStr 数组里面
 *
 * readLine 和readInt不可以同时调用
 * 最好是只调用readLine() 获取到每一行输入之后 然后再进行处理
 * @type {string[]}
 */
var inputStr = ["2 3", "8 4 1", "6 5 4"];
var __lineIndex = 0;

var __inputIntStr = null;
var __inputIntArray = [];
var __inputIntIndex = 0;

function readline() {
    if (__lineIndex >= inputStr.length) {
        return null
    }
    let res = inputStr[__lineIndex];
    __lineIndex += 1;
    return res
}

function readInt() {
    if (__inputIntStr == null) {
        __inputIntStr = inputStr.join(' ');
        let arr = __inputIntStr.split(' ');
        for (let i = 0; i < arr.length; i++) {
            __inputIntArray.push(parseInt(arr[i]))
        }
    }
    if (__inputIntIndex > __inputIntArray.length) {
        return null
    }

    let res = __inputIntArray[__inputIntIndex];
    __inputIntIndex += 1;
    return res
}

function print(...obj) {
    console.log(...obj)
}

//case 1
// print(readline());
// print(readline());
// print(readline());

// case 2

for (let i = 0; i < 4; i++) {
    // print(readInt())
}

//case 3
let line;
while (line = readline()) {
    print(line)
    console.log(line)
    let lines = line.split(' ')
    let m = parseInt(lines[0])
    let n = parseInt(lines[1])
    let arr = []
    for (let i = 0; i < m; i++) {
        let rows = readline().split(' ')
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(parseInt(rows[j]))
        }
        arr.push(temp.slice())
    }
    // console.log(m, n, arr)
    console.log(getMaxArea(m, n, arr))
}