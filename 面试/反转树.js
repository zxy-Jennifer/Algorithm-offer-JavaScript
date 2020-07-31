
function invert_tree( node_data_list) {
    let len = node_data_list.length
    if(len<=0)return node_data_list
    let map = new Map()
    for(let i=0; i<len; i++) {
        if(map.has(node_data_list[i][1])) {
            map.set( node_data_list[i][1], [...map.get(node_data_list[i][1]),(node_data_list[i][0])] )
        }else {
            map.set(node_data_list[i][1], [node_data_list[i][0]])
        }
    }
    for(let key of map.keys()){
        let arr = map.get(key)
        arr = arr.reverse()
        map.set(key, arr.slice())
    }
    // console.log(map) //{ 0 => [ 1 ], 1 => [ 4, 3, 2 ], 2 => [ 5 ], 5 => [ 7, 6 ] }

    let res = []
    function recur(map, key) {
        if(!map.has(key)) return
        for(let value of map.get(key)) {
            res.push([value, key])
            recur(map, value)
        }
    }
    recur(map, 0)
    return res
}

let node_data_list = [[1,0],[2,1],[3,1]]
console.log(invert_tree( node_data_list))