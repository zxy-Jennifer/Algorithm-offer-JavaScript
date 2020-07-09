
/**
 * 
 * @param {*} nums 
 */
function permute(nums) {
    let res = []
    let path = nums.slice(0)
    let len = nums.length
    recur(res, path, len, 0)
    return res

    function recur(res, path, len, index) {
        if(index === len) {
            res.push(path)
            return 
        }

        for(let i=index; i<len;i++) {
            [path[i], path[index]] = [path[index], path[i]];
            recur(res, path.slice(0), len, index+1);
            [path[i], path[index]] = [path[index], path[i]];
        }
    }
}

console.log(permute([1,2,3]))