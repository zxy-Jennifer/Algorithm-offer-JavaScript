/**
 * names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], 
 * synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
 * @param {*} names 
 * @param {*} synonyms 
 */
var trulyMostPopular = function (names, synonyms) {
    let nameNum = names.map(item => getName(item))
    let nameMap = new Map(nameNum)
    let arr = nameNum.map(item => item[0])
    let len = names.length
    let parent = new Array(len)
    for (let i = 0; i < len; i++) {
        parent[i] = i
    }
    let lenR = synonyms.length
    for (let i = 0; i < lenR; i++) {
        let str = synonyms[i].split(',')
        let one = arr.indexOf(str[0].substr(1, str[0].length - 1))
        let two = arr.indexOf(str[1].substr(0, str[1].length - 1))
        if (one >= 0 && two >= 0) {
            union(one, two)
        }
    }

    let mapPar = new Map()
    let mapNum = new Map()
    for (let i = 0; i < parent.length; i++) {
        let par = findParent(parent[i])
        if ((mapPar.has(par) && mapPar.get(par) > arr[i]) || !mapPar.has(par)) {
            mapPar.set(par, arr[i])
        }
        if (mapNum.has(par)) {
            mapNum.set(par, mapNum.get(par) + nameMap.get(arr[i]))
        } else {
            mapNum.set(par, nameMap.get(arr[i]))
        }
    }
    let res = []
    for (let index of [...mapPar.keys()]) {
        let item = mapPar.get(index)
        let num = mapNum.get(index)
        res.push(item + '(' + num + ')')
    }
    return res

    function findParent(i) {
        if (parent[i] === i) {
            return i
        } else {
            return findParent(parent[i])
        }
    }

    function union(i, j) {
        let pari = findParent(i)
        let parj = findParent(j)
        if (pari !== parj) {
            parent[pari] = parj
        }
    }


    function getName(str) {
        let s = str.split('(')
        return [s[0], parseInt(s[1].substr(0, s[1].length - 1))]
    }
};
let names = ["John(15)", "Jon(12)", "Chris(13)", "Kris(4)", "Christopher(19)"],
    synonyms = ["(Jon,John)", "(John,Johnny)", "(Chris,Kris)", "(Chris,Christopher)"]
console.log(trulyMostPopular(names, synonyms))