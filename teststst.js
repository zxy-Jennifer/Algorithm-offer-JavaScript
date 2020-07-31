export const getActivityList = data => {
    let res = {
      code: 0,
      data: {
        msg: 'ok',
        result: {
          code: 0,
          data: {
            activityList: [
              {
                promotionId: '1234556789',
                activityName: '啦啦啦啦啦啦啦啦啦啦啦啦啦嘿嘿嘿嘿嘿和',
                startTime: '3627163872',
                endTime: '732793719',
                // 活动上下线状态 1:上线，-1:下线
                status: 1,
                // 活动状态
                activityStatus: 1,
                userName: '吼吼',
                exclusive: false
              },
              {
                promotionId: '2234556789',
                activityName: '咕咕咕咕咕咕咕古古古ugugugugug咕咕咕咕咕',
                startTime: '3627163872',
                endTime: '732793719',
                // 活动上下线状态 1:上线，-1:下线
                status: -1,
                // 活动状态  已结束为-1
                activityStatus: 1,
                userName: '呼呼',
                exclusive: true
              }
            ]
          }
        }
      }
    }
    return new Promise(resolve => {
      setTimeout(resolve(res), 100)
    })
  }
  
  export const getFallList = data => {
    let res = {
      code: 0,
      data: {
        msg: 'ok',
        result: {
          fallList: 8.00
        }
      }
    }
    return new Promise(resolve => {
      setTimeout(resolve(res), 100)
    })
  }
  