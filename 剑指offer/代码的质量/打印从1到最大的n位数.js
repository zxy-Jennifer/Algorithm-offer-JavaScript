function printToN(n){
    var num=new Array();
    var i=0
    var res=new Array()
    while(i<10){
        num[0]=i
        printToNRec(num,n,0,res)
        i++
    }
    res.splice(0,1)
    // console.log(res)
    return res
}
function printToNRec(num,length,index,res){
    if(length===index+1){
        res.push(print(num))
    }else {
        var i=0
        while(i<10){
            num[index+1]=i
            printToNRec(num,length,index+1,res)
            i++
        }
    }
}
function print(arr){
    let flag=true
    let res=new Array()
    let index=0;
    // arr.splice(2,1)
    for(let i in arr){
        if(arr[i]==0&&flag){
            // console.log(1111111)
            flag=true
        }else if(arr[i]!=0||!flag){
            flag=false
            // console.log(arr[i],'  ',i)
            res[index]=arr[i]
        }
        index++
    }
    return parseInt(res.join(''))
}
console.log(printToN(2))