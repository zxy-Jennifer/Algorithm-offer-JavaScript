let arr = [[1, 2, 3], [8, 9], [6, 7], [[12, 20]], [[222, 3, 1, [2, 34, 0]]]]
function flatAndSort(arr){
    let tmp=flatArr(arr)
    // for (let i = 0; i < tmp.length-1; i++) {
    //     for (let j = 0; j < tmp.length; j++) {
    //         if (tmp[j] > tmp[j+1]) {
    //             const element = tmp[j];
    //             tmp[j] = tmp[j+1];
    //             tmp[j+1] = element
    //         }
    //     }
    // }
    tmp.sort(function(a,b){return a-b})
    return tmp
}
function flatArr(arr){
    let res=new Array()
    arr.forEach(element => {
        if(element instanceof Object){
            // console.log("object",element)
            res=res.concat(flatArr(element))
        }else {
            // console.log("number",element)
            res.push(element)
        }
    })
    return res
}
console.log(flatAndSort(arr))