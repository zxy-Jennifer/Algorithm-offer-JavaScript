

function maxArea(height) {
    let res = 0
    let i=0,j=height.length-1
    while(i<j) {
        let area = (j-i) * Math.min(height[j], height[i])
        res = Math.max(res, area)
        // console.log(res, i, j)
        height[i] > height[j] ? j-- :i++
    }
    return res
}

let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))