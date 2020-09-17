/**
 * 
 * @param {*} req_skills 
 * @param {*} people 
 */
// 动态规划递推公式 dp[x|y]=Math.min(dp[x|y],dp[x]+dp[y])
var smallestSufficientTeam = function (req_skills, people) {
    const len = req_skills.length;
    // len个技能有biNum种状态
    let biNum = 1 << len;
    console.log('binum: ', biNum)
    const skills = new Map();
    // dp数组记录由[0,bNum]中每个数字
    const dp = new Array(biNum).fill(-1)
    const team = []
    // skills哈希表，键为技能字符串，值为该技能在req_skills的索引
    for (let i = 0; i < len; ++i) {
        skills[req_skills[i]] = i;
    }
    console.log('skills：', skills)
    dp[0] = 0;
    team[0] = [];
    for (let i = 0; i < people.length; ++i) {
        // 计算当前备选人员的技能，将技能数组转换为二进制数字
        let idx = 0;
        // 注意people[i]表示第i个人的技能数组，其数组中每个技能需要找到在req_skills对应位置
        // 如果人员i的技能不满足req_skills，则idx为0
        for (const s of people[i]) {
            if (skills[s] !== undefined) {
                idx = idx | (1 << skills[s]);
            }
        }
        console.log('idx: ', idx)
        // j用于辅助idx，j|idx可以判定由于idx的引入是否新增"1"
        // 当j|idx的数值新增1，则需要进一步已经加入备选集中是否存在人员技能冗余
        for (let j = 0; j < biNum; ++j) {
            if (dp[j] >= 0) {
                let x = j | idx;
                if ((dp[x] === -1) || (dp[x] > dp[j] + 1)) {
                    dp[x] = dp[j] + 1;
                    team[x] = team[j].slice(0);
                    team[x].push(i);
                }
            }
        }
    }
    console.log('dp: ', dp)
    console.log('team: ', team)
    return team[biNum - 1];
}

let req_skills = ["java", "nodejs", "reactjs"],
    people = [
        ["java"],
        ["nodejs"],
        ["nodejs", "reactjs"]
    ]
console.log(smallestSufficientTeam(req_skills, people))