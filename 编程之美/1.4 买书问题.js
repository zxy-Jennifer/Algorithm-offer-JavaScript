/**
 * 动态规划：
 * F(Y1,Y2,Y3,Y4,Y5) = min{
 *  5*8*0.75 + F(Y1-1,Y2-1,Y3-1,Y4-1,Y5-1), Y5>=1
 *  4*8*0.8 + F(Y1,Y2-1,Y3-1,Y4-1,Y5-1), Y4>=1
 *  3*8*0.9 + F(Y1,Y2,Y3-1,Y4-1,Y5-1), Y3>=1
 *  2*8*0.95 + F(Y1,Y2,Y3,Y4-1,Y5-1), Y2>=1
 *  8 + F(Y1,Y2,Y3,Y4,Y5-1), Y1>=1
 * }
 * @param {*} arr 
 */
function getMinMoney1(arr) {}

/**
 * 贪心算法：
 * 
 * @param {*} arr 
 */
function getMinMoney2(arr) {}