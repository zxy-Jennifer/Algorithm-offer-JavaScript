function recoderOddEven1(arr){
    if(arr.length<=0){
        return arr;
    }
    let i=0;
    let j=arr.length-1
    while(i<j){
        while(i<j&&((arr[i]&0x1)!=0)){
            i++;
        }
        while(j>i&&((arr[j]&0x1)===0)){
            j--
        }
        if(i<j){
            let tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
        }
    }
    return arr
}
function recoderOddEven(arr){
    let odd=arr.filter(ele => (ele&0x1)===1);
    console.log(odd)
    let even=arr.filter(ele=>(ele&0x1)===0);
    console.log(even)
    return odd.concat(even);
}
let arr=[1,2,3,4,5]
console.log(recoderOddEven1(arr))