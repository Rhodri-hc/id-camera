import { OSS_PATH } from '@/constants/common'
/**
 * @desc  获取 oss 地址
 */
export const getOssPath = (path: string) => {
  return `${OSS_PATH}id-camera-miniprogram/${path}`
}
/**
 * @desc  获取 oss 地址
 */
export const getBaseOssPath = (path: string) => {
  return OSS_PATH + path
}
