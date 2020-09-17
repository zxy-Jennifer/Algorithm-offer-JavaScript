function drink(s, x, y) {
    // write code here
    let min = Infinity
    let len = s.length
    let res = -1
    for (let i = 0; i < len; i++) {
        let sum = 0,
            j = i
        while (j < len && sum < x) {
            sum += Math.min(s[j], y)
            j++
        }
        if (j - i < min && j - i <= len && sum >= x) {
            min = j - i
            res = i
        }
    }
    return res
}
let s = [3, 2, 0, 3, 4],
    x = 5,
    y = 2
console.log(drink(s, x, y))