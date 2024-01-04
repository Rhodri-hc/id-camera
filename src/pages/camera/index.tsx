import { View, Text, Camera, Image } from '@tarojs/components'
import Taro, { useLoad, CameraContext, useReady, ENV_TYPE } from '@tarojs/taro'
import { Icon, Button } from '@antmjs/vantui'
import { useState } from 'react'
import styles from '@/pages/camera/index.module.scss'
import * as FileAction from '@/services/modules/file'
import FormData from '@/utils/formData/formData'
import { getOssPath, takePhoto } from '@/utils'
import testImg from '@/assets/icons/test.png'
import envUtils from '@/utils/env'

export default function PageCamera() {
  const [isFlash, setIsFlash] = useState<boolean>(false)
  const [isFront, setIsFront] = useState<boolean>(false)
  const [cameraCtx, setCameraCtx] = useState<CameraContext>()
  const chooseImage = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sourceType: ['album']
    })
  }

  useReady(() => {})

  const handleTakePhoto = () => {
    takePhoto({ ctx: cameraCtx as CameraContext, options: { quality: 'high' } })
    // if (cameraCtx?.takePhoto) {
    //   let formData = new FormData()
    //   let extension = void 0
    //   cameraCtx.takePhoto({
    //     quality: 'high',
    //     success: res => {
    //       console.log('拍照成功！', res)

    //       if (Taro.getEnv() === ENV_TYPE.ALIPAY) {
    //         my.detectFileType({
    //           filePath: res.tempImagePath,
    //           success: resD => {
    //             extension = resD.extension
    //             // res.tempImagePath += resD.extension
    //             // console.log('fileType', res.tempImagePath)
    //             formData.append('file', 'file')
    //             formData.appendFile('file', res.tempImagePath, `r${extension ?? ''}`)
    //             let data = formData.getData()
    //             FileAction.fileUpload({ file: data.buffer, contentType: data.contentType })
    //           },
    //           fail: resE => {
    //             console.log('fileType', resE)
    //           }
    //         })
    //       }
    //       // const file = Taro.getFileSystemManager().readFileSync(res.tempImagePath).data
    //       // console.log('file', file)
    //       // formData.append('file', 'file')
    //       // formData.appendFile('file', res.tempImagePath, `r${extension ?? ''}`)
    //       // let data = formData.getData()
    //       // console.log('data', data)
    //       // console.log('file', file)

    //       // FileAction.fileUpload({ file: data.buffer, contentType: data.contentType })
    //       // FileAction.fileUpload({ file: file.data })
    //       // 保存图片到相册
    //       // Taro.saveImageToPhotosAlbum({
    //       //   filePath: res.tempImagePath,
    //       //   success: saveRes => {
    //       //     console.log('保存成功！', saveRes)
    //       //   }
    //       // })
    //     },
    //     fail(e) {
    //       console.log(e)
    //     }
    //   })
    // }
  }
  return (
    <View className={`${styles['camera']} tw-flex tw-flex-col tw-h-[100vh]`}>
      <View className='tw-bg-[#1F1F21] tw-py-4 tw-px-3 tw-flex tw-justify-between tw-items-center'>
        <View>
          <Icon name='cross' size='24px' color='#fff' />
        </View>
        <View className='tw-text-white tw-text-xl'>一寸照</View>
        <View>
          <Image
            className='tw-w-6 tw-h-6'
            src={getOssPath(`icons/${isFlash ? '' : 'no_'}flash.png`)}
            onClick={() => setIsFlash(!isFlash)}
          />
        </View>
      </View>
      <View className='tw-flex-1 tw-relative'>
        {envUtils.isAlipay() && (
          <Image
            src={getOssPath('images/img_photograph_guide.png')}
            className='tw-absolute tw-w-[374px] tw-h-90 tw-z-10 tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2'
          />
        )}
        <Camera
          id='camera'
          flash={isFlash ? 'on' : 'off'}
          devicePosition={isFront ? 'front' : 'back'}
          className='tw-h-full'
          // 只有支付宝小程序支持 onReady
          onReady={() => setCameraCtx(Taro.createCameraContext('camera'))}
          onInitDone={() => setCameraCtx(Taro.createCameraContext())}
        />
      </View>
      <View className='tw-flex tw-items-center tw-justify-between tw-py-8 tw-px-16 tw-bg-[#1F1F21]'>
        <Image
          src={getOssPath('icons/photos.png')}
          className='tw-w-8 tw-h-8'
          onClick={chooseImage}
        />
        <Image
          src={getOssPath('icons/photograph_fill.png')}
          className='tw-w-[70px] tw-h-[70px]'
          onClick={handleTakePhoto}
        />
        <Image
          src={getOssPath('icons/camera_switch.png')}
          className='tw-w-8 tw-h-8'
          onClick={() => setIsFront(!isFront)}
        />
      </View>
    </View>
  )
}
