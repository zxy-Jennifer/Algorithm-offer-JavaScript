let data = [20, 'hello', {name: 'jack'}, {name: 'jack'}, {'age': 12}, {'age':12}];
let map = new Map()
data = data.reduce((pre, cur) => {
  if(typeof cur === 'object') {
    let key = Object.keys(cur)[0]
    if(!(map.has(key) && map.get(key).includes(cur[key]))) {
      map.set(key, map.has(key)?[...map.get(key), cur[key]]:[cur[key]]);
  	  pre.push(cur)
    }
  }else if(!map.has(cur)){
    map.set(cur, 1)
  	pre.push(cur)
  }
  return pre
}, [])
console.log(data)