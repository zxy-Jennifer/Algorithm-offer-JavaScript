/**
 * 一个变量解决双重循环问题：
 * for( int i = 0; i < 5; i++ )
 *    for( int j = 0; j < 4; j++ )
 *      for( int k = 0; k < 3; k++ )
 * temp=9*9, 
 * i=temp/9, j=temp%9
 * 一个变量解决三重循环问题：
 *      temp=3*4*5,
 *      i=temp/(3*4), j=temp/3%4, k=temp%3
 * 一个变量解决四重循环问题：
 *  for( int i = 0; i < 5; i++ )
 *     for( int j = 0; j < 4; j++ )
 *        for( int k = 0; k < 3; k++ )
 *          for( int p = 0; p < 2; p++ )
 * temp=2*3*4*5
 * i=temp/(2*3*4), j=temp/(2*3)%4, k=temp/2%3, p=temp%2
 */
function getAll() {
    let res = []
    let i = 81
    while (i--) {
        if ((i / 9 | 0) % 3 === i % 9 % 3) {
            continue
        }
        res.push([(i / 9 | 0) + 1, i % 9 + 1])
    }
    return res
}
console.log(getAll())