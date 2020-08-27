
function removeBoxes(boxes) {
    let dp = Array.from(new Array(100), ()=>Array.from(new Array(100), ()=>new Array(100).fill(0)))
    return calculatePoints(0, boxes.length-1, 0)
    // Array.from(new Array(num+1), ()=>new Array(bagSize+1).fill(0))
    function calculatePoints(l, r, k) {
        if(l>r) return 0
        if(dp[l][r][k]!==0)return dp[l][r][k]
        while(l<r && boxes[r] === boxes[r-1]) {
            r--
            k++
        }
        dp[l][r][k] = calculatePoints(l, r-1, 0) + (k+1) * (k+1)
        for(let i=l; i<r; i++) {
            if(boxes[i] === boxes[r]) {
                dp[l][r][k] = Math.max(dp[l][r][k], calculatePoints(l, i, k+1)+calculatePoints(i+1, r-1, 0))
            }
        }
        return dp[l][r][k]
    }
}

let boxs = [1,3,2,2,2,3,4,3,1]
console.log(removeBoxes(boxs))