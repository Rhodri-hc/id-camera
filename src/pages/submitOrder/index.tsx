import { View, Text, Image, Block } from '@tarojs/components'
import { useState } from 'react'
import styles from '@/pages/submitOrder/index.module.scss'
import arrowIcon from '@/assets/icons/arrow.png'
import girlPhotoImg from '@/assets/images/girl_photo.png'

export default function SubmitOrder() {
  return (
    <View className={`${styles['submit']} tw-flex tw-flex-col tw-h-[100vh]`}>
      <View
        className={`${styles['submit-preview']}  tw-bg-[#e7e3ff] tw-rounded-md tw-px-4 tw-py-2.5 tw-pb-10 tw-flex tw-justify-between`}
      >
        <Text className=' tw-text-lg tw-font-bold'>一寸照预览</Text>

        <Image src={arrowIcon} className=' tw-w-6 tw-h-6'></Image>
      </View>

      <View className='tw-p-3 tw-rounded-md tw-bg-white'>
        <View className='tw-shadow-sm'>
          <Image src={girlPhotoImg} className=' tw-w-23 tw-h-33'></Image>

          <View className='tw-flex tw-flex-wrap'>
            {new Array(6).fill(girlPhotoImg).map((photo, index) => (
              <View key={index}>
                <Image src={photo} className=' tw-w-10 tw-h-15'></Image>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}
