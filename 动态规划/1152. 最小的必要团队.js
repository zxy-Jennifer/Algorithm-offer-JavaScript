/**
 * 
 * @param {*} req_skills 
 * @param {*} people 
 */
function smallestSufficientTeam(req_skills, people) {
    let set = new Set(req_skills)
    let len = people.length
    let length = Math.pow(2, len)
    let dp = new Array(length)
    let map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(req_skills[i], i)
    }
    dp[0] = []
    for (let i = 0; i < people.size(); i++) {
        let skills = people.get(i)
        let list = []
        for (let j = 0; j < skills.length; j++) {
            list.push(map.get(skills.get(j)))
        }
        for (let j = length - 1; j >= 0; j--) {
            if (dp[j] !== null) {
                let num = j
                for (let k = 0; k < list.length; k++) {
                    num |= 1 << list[k]
                }
                if (dp[num] === null || dp[num].length > dp.length + 1) {
                    dp[num] = dp[j].splice()
                    dp[num].push(i)
                }
            }
        }
        let last = dp[length - 1].splice()
        let res = new Array(last.length)
        for (let i = 0; i < last.length; i++) {
            res[i] = last[i]
        }
        return res
    }
}

let req_skills = ["java", "nodejs", "reactjs"],
    people = [
        ["java"],
        ["nodejs"]
    ]
console.log(smallestSufficientTeam(req_skills, people))