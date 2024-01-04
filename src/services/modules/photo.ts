import request, { RequestReturns, API_PREFIX } from '@/services'
import type { IPhotoSizeTypeItem, IPhotoSizeItem } from '@/types/photo'

/** 照片尺寸列表 */
export const getPhotoSizeList = (data: {
  productId: string
  type: string
  pageNum: number
  pageSize: number
}) => {
  return request.post<IPhotoSizeItem[]>(
    `${API_PREFIX}/photo/size/page?productId=${data.productId}`,
    data
  )
}

/** 照片尺寸类型列表 */
export const getPhotoSizeTypeList = (positionKey: string) => {
  return request.get<IPhotoSizeTypeItem[]>(`${API_PREFIX}/photo/sizeType/list`, { positionKey })
}
