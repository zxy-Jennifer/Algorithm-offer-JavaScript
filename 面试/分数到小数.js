function fractionToDecimal(numerator, denominator) {
    // write code here
    let dev = (numerator / denominator).toString()
    console.log(dev)
    if (isLoop(numerator, denominator)) {
        let str = dev.split('.')
        let res = str[0] + '.' + getBase(str[1])
        return res
    } else {
        return dev
    }

    function gcd(a, b) {
        let c = 0
        while (true) {
            c = a % b
            a = b
            b = c
            if (b === 0) {
                return a
            }
        }
    }

    function isLoop(a, b) {
        let cd = gcd(a, b)
        b = b / cd
        while (b % 2 === 0) {
            b = b / 2
        }
        while (b % 5 === 0) {
            b = b / 5
        }
        if (b === 1) {
            return false
        } else {
            return true
        }
    }

    function getBase(str) {
        // console.log('str:', str)
        let len = str.length - 1
        let rep = ''
        let norep = ''
        let i = 0
        let map = new Map()
        for (let i = 0; i < len; i++) {
            if (map.has(str[i])) {
                map.set(str[i], map.get(str[i]) + 1)
            } else {
                map.set(str[i], 1)
            }
        }
        // console.log('map:', map)
        let keys = [...map.keys()]
        for (let i = 0; i < keys.length; i++) {
            if (map.get(keys[i]) > 1) {
                rep += keys[i]
            } else {
                norep += keys[i]
            }
        }
        // console.log('oooo', norep, rep)
        return norep + (rep.length > 0 ? '(' + rep + ')' : '')
    }
}
let numerator = 1,
    denominator = 6
console.log(fractionToDecimal(numerator, denominator))
// "0.(6)"