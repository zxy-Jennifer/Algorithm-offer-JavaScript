

function numberToWords(num) {
    let map = new Map([
        [0,'Zero'],
        [1,'One'],
        [2,'Two'],
        [3,'Three'],
        [4,'Four'],
        [5,'Five'],
        [6,'Six'],
        [7,'Seven'],
        [8,'Eight'],
        [9,'Nine'],
        [10,'Ten'],
        [11,'Eleven'],
        [12,'Twelve'],
        [13,'Thirteen'],
        [14,'Fourteen'],
        [15,'Fifteen'],
        [16,'Sixteen'],
        [17,'Seventeen'],
        [18,'Eighteen'],
        [19,'Nineteen'],
        [20,'Twenty'],
        [30,'Thirty'],
        [40,'Forty'],
        [50,'Fifty'],
        [60,'Sixty'],
        [70,'Seventy'],
        [80,'Eighty'],
        [90,'Ninety'],
        [100,'Hundred'],
        [1000,'Thousand'],
        [1000000,'Million'],
        [1000000000,'Billion']
    ])
    let res = []
    for(let i = 1000000000;i>1;i=Math.floor(i/1000)) {
        if(i<=num) {
            res.push(...threeDigit(Math.floor(num/i)))
            res.push(map.get(i))
            num %= i
        }
    }
    if(num>0 || res.length === 0) {
        res.push(...threeDigit(num))
    }
    console.log(res)
    return res.join(' ')

    function threeDigit(num) {
        let res = []
        if(num === 0) {
            res.push(map.get(0))
        } else {
            if(num > 99) {
                res.push(map.get(Math.floor(num/100)))
                res.push(map.get(100))
            }
            if(num % 100 > 0) {
                let td = num%100
                if(td <= 20) {
                    res.push(map.get(td))
                }else {
                    res.push(map.get(Math.floor(td/10)*10))
                    if(td % 10 > 0) {
                        res.push(map.get(td % 10))
                    }
                }
            }
        }
        return res
    }
}

console.log(numberToWords(0))