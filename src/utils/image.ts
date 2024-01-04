import Taro from '@tarojs/taro'

export async function getImagesSize(imageUrls) {
  const imageSizePromises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      Taro.getImageInfo({
        src: url,
        success: res => {
          resolve(res.width / res.height)
        },
        fail: _error => {
          reject(new Error(`无法获取图像信息：${url}`))
        }
      })
    })
  })

  try {
    const imageSizes = await Promise.all(imageSizePromises)
    return imageSizes
  } catch (error) {
    console.error('获取图像尺寸时出错：', error)
    throw error
  }
}
