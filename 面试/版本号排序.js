/**
 * 利用sort函数
 * @param {*} arr 
 */
function getSortedVersion1(arr) {
    return arr.sort(getVer)
    function getVer(a,b) {
        let arr1 = a.split('.')
        let arr2 = b.split('.')
        let i=0
        while(i<arr1.length && i<arr2.length) {
            // console.log(parseInt(arr1[i]), parseInt(arr2[i]))
            if(parseInt(arr1[i]) === parseInt(arr2[i])) {
                i++
            }else if(parseInt(arr1[i]) < parseInt(arr2[i])) {
                return -1
            }else {
                return 1
            }
        }
        if(i<=arr1.length) {
            return 1
        }else {
            return -1
        }
    }
}
/**
 * 利用选择排序
 * @param {*} arr 
 */
function getSortedVersion(arr) {
    let temp = arr.map(item=>item.split('.'))
    let len = arr.length
    for(let i=0; i<len-1; i++) {
        let minIndex = i
        for(let j=i+1; j<len; j++) {
            for(let k=0; k<temp[j].length; k++) {
                let cur = +temp[j][k]
                let min = +temp[minIndex][k]
                if(cur<min) {
                    minIndex = j
                }
                if(cur !== min)break
            }
            [temp[minIndex], temp[i]] = [temp[i], temp[minIndex]]
        }
    }
    return temp.map(item=>item.join('.'))
}

let arr = ["1.45", "1.5.1", "1.5", "6", "3.3.3"]
console.log(getSortedVersion(arr))