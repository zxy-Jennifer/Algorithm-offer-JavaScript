function match(s,p){
    if(s==null||p==null){
        return false
    }else {
        // var arrs=s.split('')
        // var arrp=p.split('')
        // console.log(arrs,arrp)
        return matchCore(s,p,0,0)
    }
}
function matchCore(str,pattern,i,j){
    if(i===str.length&&j===pattern.length){
        return true
    }
    if(i!==str.length&&j===pattern.length){
        return false
    }
    if(pattern[j+1]=='*'){
        if(str[i]===pattern[j]||(i<str.length&&pattern[j]==='.')){
            return matchCore(str,pattern,i+1,j+2) //*=1
            ||matchCore(str,pattern,i,j+2) // *=0，忽略 *
            ||matchCore(str,pattern,i+1,j) //*=2
        }else {
            // 忽略'*'
            return matchCore(str,pattern,i,j+2)
        }
    }
    // pattern中第二个字符不是*，而且str和pattern当前字符相匹配
    if(str[i]===pattern[j]||(i<str.length&&pattern[j]==='.')){
        return matchCore(str,pattern,i+1,j+1)
    }
    return false;
}

var str=''
var pattern='.'
console.log(match(str,pattern))