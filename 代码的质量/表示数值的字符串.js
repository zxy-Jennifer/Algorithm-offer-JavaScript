function isNumberic(str){
    if(str===''){
        return false;
    }
    let s=str.split("")
    console.log(s)
    let sym=false;
    let hasDot=false;
    let hasE=false;
    for(let i in s){
        i=parseInt(i)
        if(s[i]==='+'||s[i]==='-'){
            if(i>0 && !sym && s[i-1]!='e' && s[i-1] != 'E'||s[i+1]==='.'){
                return false;
            }else if( sym &&s[i-1]!='e'&&s[i-1]!='E'){
                return false;
            }
            sym=true;
        }
        else if(s[i] === 'e'||s[i] === 'E'){
            if(i===s.length-1){
                return false;
            }
            if(hasE){
                return false;
            }
            hasE=true
        }
        else if(s[i]==='.'){
            if(hasE||hasDot){
                return false
            }
            hasDot=true;
        }
        else if(s[i] < '0'||s[i] > '9'){
            return false
        }
    }
    return true
}
console.log(isNumberic(" "))