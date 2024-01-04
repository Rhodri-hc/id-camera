import Taro, { ENV_TYPE } from '@tarojs/taro'
import { toLowerCase, toUpperFirstCase } from '@/utils/string'

let envModule: any = {}

let envType = [ENV_TYPE.WEAPP, ENV_TYPE.ALIPAY, ENV_TYPE.TT]

// 判断小程序环境
for (let i = 0; i < envType.length; i++) {
  let name = envType[i]
  let functionName = `is${toUpperFirstCase(toLowerCase(name))}`
  envModule[`${functionName}`] = () => Taro.getEnv() === name
}
export default envModule
