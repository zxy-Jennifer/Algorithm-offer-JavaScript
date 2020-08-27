function reverseK(arr, k) {
    let len = arr.length
    k=k%len
    if(len<=0)return arr
    myReverse(0, (len-k-1)%len)
    myReverse((len-k)%len, len-1)
    myReverse(0, len-1)
    return arr

    function myReverse(i,j) {
        if(i>=j)return
        while(i<j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
}

let arr = [1,2,3,4,5,6,7], k=1
console.log(reverseK(arr, k))