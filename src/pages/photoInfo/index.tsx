import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { Field, Button } from '@antmjs/vantui'
import { chooseImage, takePhoto } from '@/utils/camera'
import { useState } from 'react'
import styles from '@/pages/photoInfo/index.module.scss'
import receiptIcon from '@/assets/icons/receipt.png'
import bannerImg from '@/assets/images/img_banner_size_show.png'
import noticeImg from '@/assets/images/receipt_notice.png'
import tickImg from '@/assets/images/tick.png'
import { backGroundColorConfigList } from './config'

export default function PhotoInfo() {
  // 前往拍摄页
  const goCameraPage = () => {
    Taro.navigateTo({
      url: `/pages/camera/index`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }

  return (
    <View className={`${styles['photo-info']} tw-px-4 tw-bg-white`}>
      <View className='tw-w-full tw-mt-2 tw-relative'>
        <View className=' tw-absolute tw-left-4 tw-top-0 tw-bottom-0 tw-my-auto tw-flex tw-flex-col tw-justify-center '>
          <Text className=' tw-text-2xl tw-mb-2.5'>一寸照</Text>
          <View className=' tw-flex tw-items-center tw-mb-2.5'>
            <Image src={tickImg} className='tw-w-4 tw-h-4 tw-mr-1' />
            <Text className='tw-text-sm tw-text-[#817b87]'>支持申请回执</Text>
          </View>
          <View className=' tw-flex tw-items-center tw-mb-2.5'>
            <Image src={tickImg} className='tw-w-4 tw-h-4 tw-mr-1' />
            <Text className='tw-text-sm tw-text-[#817b87]'>支持保存为电子版</Text>
          </View>
        </View>
        <Image src={bannerImg} className='tw-w-full tw-h-40' />
      </View>
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
        <View className={`${styles['details-item']} tw-items-center tw-justify-between`}>
          <Text className={`${styles['details-item__key']}`}>背景颜色</Text>
          <View className={`${styles['details-item__value']} tw-flex tw-justify-end`}>
            {backGroundColorConfigList.map(item => (
              <View
                key={item.value}
                style={{ background: item.color }}
                className='tw-rounded-full tw-w-3 tw-h-3 tw-ml-3'
              ></View>
            ))}
          </View>
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
          <Image src={receiptIcon} className=' tw-w-5 tw-h-5 tw-mr-1' />
          <Text className='tw-text-xl tw-font-medium'>回执拍摄注意事项</Text>
        </View>
        <View>
          <Image src={noticeImg} className='tw-w-full tw-h-52 tw-mb-20' />
        </View>
      </View>
      <View
        className={`${styles['btn-group']} tw-bg-white tw-fixed tw-bottom-0 tw-left-0 tw-right-0 tw-flex tw-justify-between tw-py-3 tw-px-4`}
        style={{ boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.06)' }}
      >
        <View
          className={`${styles['btn']} tw-text-primary`}
          style={{ backgroundColor: 'rgba(126, 106, 255, 0.12)' }}
          onClick={chooseImage}
        >
          相册导入
        </View>
        <View
          className={`${styles['btn']} tw-bg-[rgba(126, 106, 255, 0.12)] tw-text-white tw-bg-primary`}
          onClick={goCameraPage}
        >
          立即拍摄
        </View>
      </View>
    </View>
  )
}
