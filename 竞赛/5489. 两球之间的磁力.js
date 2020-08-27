function maxDistance(position, m) {
    position.sort((a,b)=>a-b)
    let len = position.length
    if(m<=2)return position[len-1] - position[0]
    let temp = m-2
}
function recur(position, l,r) {
    if(l+1>=r)return 0
    let i=l+1
    let min = Math.abs(position[i] - position[l], position[r] - position[i])
    let minIndex = i
    for(i=i+1; i<r; i++) {
        let left = position[i]-position[l]
        let right = position[r]-position[i]
        if(Math.abs(left-right) < min) {
            min = Math.abs(left-right)
            minIndex = i
        }
    }
    return minIndex
}

