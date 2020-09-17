const shortestPalindrome = (s) => {
    const rev_s = s.split('').reverse().join('');
    const str = s + "#" + rev_s;
    // next 记录一个字符串的每个位置上，最长公共前后缀的长度
    const next = new Array(str.length).fill(0);
    console.log(str, next)
    const kmp = (next, str) => {
        next[0] = 0;
        // 最长公共前后缀的长度
        let len = 0;
        // 结尾的字符
        let i = 1;
        while (i < str.length) {
            if (str[i] == str[len]) {
                len++;
                next[i] = len;
                i++;
            } else {
                // 无相同后缀
                if (len == 0) {
                    next[i] = 0;
                    i++;
                } else {
                    // 新的后缀比原来的小，一直减到0或者前后缀相同
                    len = next[len - 1];
                }
            }
        }
    };
    kmp(next, str);
    console.log('next', next)
    const maxLen = next[str.length - 1]; // 最长回文前缀的长度
    console.log('maxLen：', maxLen)
    const add = s.substring(maxLen).split('').reverse().join('');
    return add + s;
};
let s = "abcd"
console.log(shortestPalindrome(s))