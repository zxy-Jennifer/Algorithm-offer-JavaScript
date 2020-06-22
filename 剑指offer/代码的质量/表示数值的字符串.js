function isNumberic1(s) {
    s=s.trim()
    if(!s) return false
    return !isNaN(s)
}


function isNumberic(s){
    if(s.trim()===''){
        return false;
    }
    let sc=s.trim().split("")
    let hasDot=false;
    let hasE=false;
    for(let i=0;i<sc.length;i++){
        if(sc[i]==='+'||sc[i]==='-'){
            /**
             * '+/-'
             * 要么在字符串首，要么在 'e/E' 后面
             * 不能在字符串末尾
             * 后面子串同样表示数值
             */
            if((i>0 && sc[i-1]!='e' && sc[i-1] != 'E') || i === sc.length-1 || sc[i+1] === 'e' || sc[i+1] === 'E'){
                return false;
            }
            if(i === sc.length-2 && sc[i+1] === '.') return false
            sym=true;
        }
        else if(sc[i] === 'e'||sc[i] === 'E'){
            /**
             * 'e/E'
             * 不能出现在首尾
             * 只能出现一次
             * 前面的子串同样表示数值
             */
            if(i===sc.length-1 || i ===0) return false;
            if(hasE) return false;
            if(hasDot && (i<=1 || i>0 && s[i-1] === '.')) return false
            hasE=true
        }
        else if(sc[i]==='.'){
            /**
             * 只能出现一次
             * 不可以脱离数字单独存在
             */
            if(hasE || hasDot || (i===sc.length-1 && i ===0)) return false;
            hasDot=true;
        }else if(sc[i] < '0' || sc[i] > '9') return false;
    }
    return true
}

// let s = "+.8" "+E3" " -." ".E4"  +.E4
let s = "+.E4"
console.log(isNumberic1(s))
console.log(isNumberic(s))