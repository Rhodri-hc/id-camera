export interface IPhotoSizeTypeItem {
  name: string
  picBase64: string
}

export interface IPhotoSizeItem {
  /**
   * 颜色
   */
  color: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 文件大小
   */
  fileSize: string
  id: number
  /**
   * 排序
   */
  range: string
  /**
   * 尺寸
   */
  size: string
  /**
   * 尺寸id
   */
  sizeId: number
  /**
   * 尺寸名称
   */
  sizeName: string
  /**
   * 大小
   */
  spec: string
  /**
   * 标题
   */
  title: string
  /**
   * 类型
   */
  type: string
  /**
   * 更新时间
   */
  updateTime: string
  [property: string]: any
}
