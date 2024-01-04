export let SUNNY_URI: string
export let YGZJ_URI: string
export let MCKJ_URI: string
export let SUNNY_ADMIN_URI: string

/**
 *
 * https://sunny-test.careduka.com/stat-api
 * https://sunny-test.careduka.com
 * https://sunny-test.careduka.com/user-api
 * https://ttt.yangguangzhujia.com/api
 */
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'production':
  case 'prod':
    SUNNY_URI = 'https://sunny.careduka.com'
    YGZJ_URI = 'https://tta.yangguangzhujia.com'
    MCKJ_URI = 'https://manchengkj.com/tta'
    SUNNY_ADMIN_URI = 'https://test.thousand-sunny.cn'
    break
  case 'development':
  case 'test':
    SUNNY_URI = 'https://sunny-test.careduka.com'
    YGZJ_URI = 'https://ttt.yangguangzhujia.com'
    MCKJ_URI = 'https://manchengkj.com/ttt'
    SUNNY_ADMIN_URI = 'https://test.thousand-sunny.cn'

    // https://test.thousand-sunny.cn/api/v1/id-photo
    break
}
