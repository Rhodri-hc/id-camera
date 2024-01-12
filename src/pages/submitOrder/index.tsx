import { View, Text, Image, Block } from '@tarojs/components'
import { useState } from 'react'
import styles from '@/pages/submitOrder/index.module.scss'
import arrowIcon from '@/assets/icons/arrow.png'
import shoppingCartIcon from '@/assets/icons/shopping_cart.png'
import girlPhotoImg from '@/assets/images/girl_photo.png'
import crossdressingGirlImg from '@/assets/images/crossdressing_girl.png'
import checkIcon from '@/assets/icons/check.png'

export default function SubmitOrder() {
  const crossdressingList = [
    crossdressingGirlImg,
    crossdressingGirlImg,
    crossdressingGirlImg,
    crossdressingGirlImg,
    crossdressingGirlImg,
    crossdressingGirlImg
  ]

  return (
    <View className={`${styles['submit']} tw-flex tw-flex-col tw-h-[100vh]`}>
      <View
        className={`${styles['submit-preview']}  tw-bg-[#e7e3ff] tw-rounded-md tw-px-4 tw-py-2.5 tw-pb-10 tw-flex tw-justify-between`}
      >
        <Text className=' tw-text-lg tw-font-bold'>一寸照预览</Text>

        <Image src={arrowIcon} className=' tw-w-6 tw-h-6'></Image>
      </View>

      <View className={`${styles['photo']} tw-p-3 tw-mb-3 tw-rounded-md tw-bg-white`}>
        <View className='tw-flex tw-items-center'>
          <View className='tw-shadow-xl tw-pr-2 tw-py-1'>
            <Image src={girlPhotoImg} className=' tw-w-24 tw-h-33'></Image>
          </View>

          <View className='tw-flex-1 tw-flex tw-px-2.5 tw-py-2 tw-shadow-xl tw-flex-wrap'>
            {new Array(8).fill(girlPhotoImg).map((photo, index) => (
              <View
                key={index}
                className={`${styles['photo-small']} ${
                  index < 4 ? styles['photo-small-mb'] : ''
                } tw-h-15`}
              >
                <Image src={photo} className='tw-w-full tw-h-full'></Image>
              </View>
            ))}
          </View>
        </View>

        <View className='tw-mt-2'>
          <Text className='tw-text-sm tw-text-[#aaaaab]'>*付费后自动去除水印保存为电子版</Text>
        </View>
      </View>

      <View
        className={`${styles['submit-preview']}  tw-bg-[#e7e3ff] tw-rounded-md  tw-pt-2.5  tw-flex tw-flex-col`}
      >
        <View className='tw-px-4 tw-pb-2.5'>
          <Text className=' tw-text-lg tw-font-bold'>换装服务</Text>
        </View>

        <View className=' tw-relative tw-bg-[#f5f3ff] tw-rounded-md tw-px-4 tw-py-2.5 tw-pb-6 tw-flex tw-items-center'>
          <View className='tw-flex tw-items-center tw-justify-center tw-px-3 tw-py-4  tw-mr-1.5 tw-bg-[#e9e5ff] tw-rounded-md '>
            <Image src={shoppingCartIcon} className=' tw-w-5 tw-h-5'></Image>
          </View>

          <View className={`${styles['photo-list']} tw-flex-1 tw-flex tw-items-center tw-pr-12`}>
            {crossdressingList.map((item, index) => (
              <View key={index} className={` tw-mr-1.5 tw-relative`}>
                <Image
                  src={item}
                  className={`${
                    index === 0 && styles['photo-item--choose']
                  } tw-w-10 tw-h-12 tw-border tw-border-white tw-border-solid tw-rounded-md tw-object-cover`}
                ></Image>
                {index === 0 ? (
                  <View className=' tw-absolute tw-bottom-1 tw-right-1'>
                    <Image src={checkIcon} className=' tw-w-3 tw-h-3'></Image>
                  </View>
                ) : (
                  <View className=' tw-absolute tw-bottom-2 tw-right-1 tw-w-3 tw-h-3 tw-rounded-full tw-border tw-border-white tw-border-solid'></View>
                )}
              </View>
            ))}
          </View>
          <View className=' tw-absolute tw-right-0'></View>
        </View>

        <View className=' tw-z-10 tw-bg-white tw-mt-[-12px] tw-rounded-md tw-px-4 tw-py-2.5 tw-pb-10 tw-flex tw-flex-col'>
          <View className=' tw-pb-2.5'>
            <Text className=' tw-text-xl tw-font-bold'>电子版及电子排版照</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
