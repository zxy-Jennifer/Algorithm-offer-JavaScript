

function maxProfit1(prices) {
    return getPrice(prices,0,prices.length-1)

    function getPrice(arr,left,right) {
        if(left>=right) {
            return 0
        }
        let mid = Math.floor((left+right)/2)
        let l = getPrice(arr,left,mid)
        let r = getPrice(arr,mid+1,right)
        let res = Math.max(getMax(arr,mid+1,right)-getMin(arr,left,mid), Math.max(l,r))
        return res<0?0:res
    }

    function getMax(arr,index,right) {
        if(index>right) {
            return -1
        }
        let max = arr[index]
        for(let i = index+1;i<=right;i++) {
            max=Math.max(max,arr[i])
        }
        return max
    }
    function getMin(arr,index,right) {
        if(index>right) {
            return -1
        }
        let min = arr[index]
        for(let i = index+1;i<=right;i++) {
            min=Math.min(min,arr[i])
        }
        return min
    }
}
/**
 * 动态规划：第n天的最大值 = Math.max(第n-1天的最大值，第n天的价格 - 前n-1填的最低价)
 * @param {*} prices 
 */
function maxProfit(prices) {
    let cost = Infinity
    let res=0
    for(let i=0;i<prices.length;i++) {
        res = Math.max(res, prices[i]-cost)
        if(prices[i]<cost) {
            cost = prices[i]
        }
    }
    return res
}
let arr = [7,6,4,10,1]
console.log(maxProfit(arr))