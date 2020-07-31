
function split_package( filenames ,  relations ){
    let len = relations.length
    if(len<=0)return 0
    let arr = []
    let set = new Set()
    set.add(relations[0][0])
    set.add(relations[0][1])
    arr.push(set)
    let res = 0
    for(let i=1; i<len; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[j].has(relations[i][0]) || arr[j].has(relations[i][1])) {
                arr[j].add(relations[i][0])
                arr[j].add(relations[i][1])
            }else {
                let sset = new Set()
                sset.add(relations[i][0])
                sset.add(relations[i][1])
                arr.push(sset)
            }
        }
    }
    for(let i=0; i<arr.length; i++) {
        res+=arr[i].size
    }
    return arr.length + filenames.length - res
}

let filenames = ["fileA", "fileB", "fileC", "fileD", "fileE","fileF","fileG"],relations = [ ["fileA", "fileB"], ["fileB", "fileD"], ["fileD", "fileE"],["fileF", "fileG"]]
console.log(split_package( filenames ,  relations ))