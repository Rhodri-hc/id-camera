import Taro, { CameraContext, ENV_TYPE } from '@tarojs/taro'
import * as FileAction from '@/services/modules/file'
import FormData from '@/utils/formData/formData'
import envUtils from '@/utils/env'
import { generateRandomFileName } from '@/utils/string'

/**
 * @desc  从相册选择图片
 * @param  function parameter
 */
export const chooseImage = () => {
  Taro.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
    success: function (res) {
      console.log('获取成功')
    }
  })
}
/**
 * @desc  拍照
 * @param  function parameter
 */
export const takePhoto = (params: {
  ctx: CameraContext
  options: CameraContext.TakePhotoOption
}) => {
  const { ctx, options } = params
  if (ctx?.takePhoto) {
    ctx.takePhoto({
      ...options,
      success: res => {
        const _fileUpload = (name, path, fileName?) => {
          formData.appendFile(name, path, fileName)
          let data = formData.getData()
          FileAction.fileUpload({ file: data.buffer, contentType: data.contentType })
        }
        console.log('拍照成功！', res)
        let formData = new FormData()

        // 支付宝环境 生成的图片是临时格式，需要获取真实的文件格式
        console.log('is 支付宝环境', envUtils.isAlipay())
        if (envUtils.isAlipay()) {
          // 获取文件名，不包括文件格式
          let fileName =
            res?.tempImagePath.replace(/(.*\/)*([^.]+).*/gi, '$2') || generateRandomFileName()
          my.detectFileType({
            filePath: res.tempImagePath,
            success: fileTypeRes => {
              _fileUpload('file', res.tempImagePath, `${fileName}${fileTypeRes.extension ?? ''}`)
            },
            fail: failRes => {
              console.log('fileType', failRes)
            }
          })
        } else {
          _fileUpload('file', res.tempImagePath)
        }
      }
    })
  }
}

/**
 * @desc  从相册选择图片
 * @param  function parameter
 */
export const saveImageToPhotosAlbum = () => {
  // 保存图片到相册
  // Taro.saveImageToPhotosAlbum({
  //   filePath: res.tempImagePath,
  //   success: saveRes => {
  //     console.log('保存成功！', saveRes)
  //   }
  // })
}
