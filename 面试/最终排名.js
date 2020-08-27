
function getNum(num, s1, s2) {
    let arr1 = s1.split(' ')
    let arr2 = s2.split(' ')
    let set1 = new Set()
    let set2 = new Set()
    let flag = true
    for(let i=0; i<num; i++) {
        if(flag && arr1[i]!='X') {
            set1.add(arr1[i])
        }
        if(!flag) {
            set2.add(arr1[i])
        }
        if(arr1[i] == 'X') {
            flag = false
        }
    }
    flag = true
    let fast=0,last=0
    for(let i=0; i<num; i++) {
        if(flag && set1.has(arr2[i])) {
            fast++
        }
        if(!flag && set2.has(arr2[i])) {
            last++
        }
        if(arr2[i] == 'X') {
            flag = false
        }
    }
    return [fast+1, num-last]
}

let s1="A B C D E F H I J X", s2="A C I E F J H D B X"
console.log(getNum(10, s1, s2))