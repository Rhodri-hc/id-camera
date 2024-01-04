import type { IDictItem } from '@/types/dict'
import request, { RequestReturns } from '@/services'

/** 根据类型获取 */
export const getDictByType = (type: string): RequestReturns<IDictItem[]> => {
  return request.get(`/api/fortunetelling/common/dictionary/type/${type}`)
}
/** 根据id获取 */
export const getDictById = (dictId: string): RequestReturns<IDictItem> => {
  return request.get(`/api/fortunetelling/common/dictionary/${dictId}`)
}
/** 根据id列表获取 */
export const getDictByIdList = (dictIdList: string[]): RequestReturns<IDictItem[]> => {
  return request.get(`/api/fortunetelling/common/dictionary/list`, dictIdList.join(','))
}
/** 根据类型随机获取一条数据 */
export const getRandomDictByType = (type: string): RequestReturns<IDictItem> => {
  return request.get(`/api/fortunetelling/common/dictionary/random/${type}`)
}
