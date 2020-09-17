function kmp(str) {
    let next = new Array(str.length).fill(0)
    next[0] = 0;
    // len：公共前后缀的长度
    let len = 0;
    // i：结尾的字符
    let i = 1;
    while (i < str.length) {
        if (str[i] == str[len]) {
            len++;
            next[i] = len;
            i++;
        } else {
            if (len == 0) {
                next[i] = 0;
                i++;
            } else {
                len = next[len - 1];
            }
        }
    }
    return next
}
let str = 'abcdabab'
console.log(kmp(str))