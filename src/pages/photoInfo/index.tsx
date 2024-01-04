import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Field, Button } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState } from 'react'
import styles from '@/pages/photoInfo/index.module.scss'
import testImg from '@/assets/icons/test.png'

export default function PhotoInfo() {
  return (
    <View className={`${styles['photo-info']} tw-px-4 tw-bg-white`}>
      <Image src={testImg} className='tw-w-full tw-mt-2' />
      <View className={`${styles['photo-info__summary']}`}>
        {/* {[{key: '',value: ''}].map((item, index) => (
          <View key={index}>
            <Text>295x413px</Text>
            <Text>像素大小</Text>
          </View>
        ))} */}
        <View className={styles['summary-item']}>
          <Text className={styles['summary-item__value']}>295x413px</Text>
          <Text className={styles['summary-item__key']}>像素大小</Text>
        </View>
        <View className={styles['summary-item']}>
          <Text className={styles['summary-item__value']}>25x35mm</Text>
          <Text className={styles['summary-item__key']}>冲印尺寸</Text>
        </View>
        <View className={styles['summary-item']}>
          <Text className={styles['summary-item__value']}>300DPI</Text>
          <Text className={styles['summary-item__key']}>分辨率</Text>
        </View>
      </View>
      <View className={`${styles['photo-info__details']}`}>
        <View className={`${styles['details-item']}`}>
          <Text className={`${styles['details-item__key']}`}>背景颜色</Text>
          <View className={`${styles['details-item__value']}`}></View>
        </View>
        <View className={`${styles['details-item']}`}>
          <Text className={`${styles['details-item__key']}`}>文件大小</Text>
          <View className={`${styles['details-item__value']}`}>100-200k</View>
        </View>
        <View className={`${styles['details-item']}`}>
          <Text className={`${styles['details-item__key']}`}>图片要求</Text>
          <View className={`${styles['details-item__value']}`}>
            请勿上传带水印照片和预览截图,以及翻拍照片
          </View>
        </View>
      </View>
      <View className={styles['photo-info__notice']}>
        <View className={`${styles['notice-subtitle']} tw-flex tw-items-center tw-mb-2`}>
          <Image src={testImg} className=' tw-w-5 tw-h-5 tw-mr-1' />
          <Text className='tw-text-xl tw-font-medium'>回执拍摄注意事项</Text>
        </View>
        <View></View>
      </View>
      <View
        className={`${styles['btn-group']} tw-fixed tw-bottom-0 tw-left-0 tw-right-0 tw-flex tw-justify-between tw-py-3 tw-px-4`}
        style={{ boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.06)' }}
      >
        <View
          className={`${styles['btn']} tw-text-primary`}
          style={{ backgroundColor: 'rgba(126, 106, 255, 0.12)' }}
        >
          相册导入
        </View>
        <View
          className={`${styles['btn']} tw-bg-[rgba(126, 106, 255, 0.12)] tw-text-white tw-bg-primary`}
        >
          立即拍摄
        </View>
      </View>
    </View>
  )
}
