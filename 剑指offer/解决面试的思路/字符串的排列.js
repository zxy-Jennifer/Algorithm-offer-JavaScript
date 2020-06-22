function permutation(s) {
    let res = new Set()
    let path = []
    let visited = []
    permutate([...s],path,res,visited)
    return Array.from(res)
}
function permutate(arr,path,res,visited){
    if(arr.length === path.length){
        res.add(path.join(''))
        return ;
    }else {
        for(let i=0;i<arr.length;i++) {
            if(visited[i]){
                continue;
            }else {
                visited[i]=true
                path.push(arr[i])
                permutate(arr,path,res,visited)
                path.pop()
                visited[i]=false
            }
        }
    }
}