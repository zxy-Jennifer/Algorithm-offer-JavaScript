function getValid(str) {
    let reg1 = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/i
    if(reg1.test(str)){
        return 'valid'
    }else {
        return 'invalid'
    }
}

let str="#ffe"
console.log(getValid(str))