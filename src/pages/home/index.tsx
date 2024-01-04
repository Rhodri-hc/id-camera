import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad, useReady } from '@tarojs/taro'
import { Swiper, SwiperItem, InfiniteScroll, InfiniteScrollInstance } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState, useRef } from 'react'
import styles from '@/pages/home/index.module.scss'
import { ReceiptNotification, PhotoCard } from '@/components'
import useList from '@/hooks/useList'
import * as OrderAction from '@/services/modules/order'
import * as PhotoAction from '@/services/modules/photo'
import type { IPhotoSizeTypeItem } from '@/types/photo'
import type { IPaymentConfig } from '@/types/order'

export default function Home() {
  const [photoSizeTypeList, setPhotoSizeTypeList] = useState<IPhotoSizeTypeItem[]>([])
  const [currentPhotoSizeType, setCurrentPhotoSizeType] = useState<IPhotoSizeTypeItem>()
  const [paymentConfig, setPaymentConfig] = useState<IPaymentConfig>()
  const InfiniteScrollInstance = useRef<InfiniteScrollInstance>()
  const {
    hasMore,
    loadMore,
    search,
    list: photoSizeList
  } = useList({
    fetchList: PhotoAction.getPhotoSizeList,
    initRequest: false,
    queryParams: { productId: '' }
  })

  useLoad(async () => {
    const { data: paymentConfig } = await OrderAction.getPaymentConfig({
      groupKey: '1',
      type: 'photo_size'
    })
    setPaymentConfig(paymentConfig)
    // const { data } = await PhotoAction.getPhotoSizeList(String(paymentConfig.productId))
    const { data: photoSizeTypeListData } = await PhotoAction.getPhotoSizeTypeList('index_tab')
    setCurrentPhotoSizeType(photoSizeTypeListData[0])
    setPhotoSizeTypeList(photoSizeTypeListData)
    search({ productId: paymentConfig.productId, type: photoSizeTypeListData[0]?.name })
  })

  const handleSelectPhotoSizeType = (item: IPhotoSizeTypeItem) => {
    setCurrentPhotoSizeType(item)
    search({ productId: paymentConfig?.productId, type: item.name })
  }

  return (
    <View className={`${styles['home']}`}>
      <Swiper
        className={styles['home-swiper']}
        height='210'
        paginationColor='#426543'
        autoPlay='3000'
        initPage='1'
        paginationVisible
      >
        <SwiperItem>A</SwiperItem>
        <SwiperItem>B</SwiperItem>
        <SwiperItem>C</SwiperItem>
      </Swiper>
      <View
        className={`tw-p-4 tw-bg-[#F7F8FC] -tw-mt-4 tw-rounded-tl-2xl tw-rounded-tr-2xl ${styles['home-container']}`}
      >
        <ReceiptNotification
          title='广东深圳市居民身份证回执申请'
          desc='审核通过，请前往下载电子版回执'
        />
        <View
          className={`${styles['home-scroll']} tw-pt-3 tw-bg-[#F7F8FC] tw-flex tw-overflow-x-scroll tw-sticky tw-top-0 tw-z-10`}
        >
          {photoSizeTypeList.map((item, index) => (
            <View
              key={index}
              className={`${styles['scroll-item']} tw-flex tw-flex-col tw-justify-center tw-items-center tw-mr-4`}
              onClick={() => handleSelectPhotoSizeType(item)}
            >
              <View
                className={` tw-py-1.5 tw-px-4.5 tw-box-border ${
                  index === 0 ? styles['active'] : ''
                }`}
              >
                <Image src={item.picBase64} className=' tw-w-6 tw-h-6' />
              </View>
              <Text className='tw-text-sm tw-py-1'>{item.name}</Text>
            </View>
          ))}
        </View>
        <View className={`${styles['home-card']}`}>
          {photoSizeList &&
            photoSizeList.map((item, index) => (
              <PhotoCard
                className={`${styles['home-card__item']}`}
                key={index}
                title={item.title}
                tag={item.tag}
                desc={`${item.spec} | ${item.sizeName} | ${item.fileSize.replace(',', '-')}K`}
              />
            ))}
          <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} />
        </View>
        {/* </View> */}
      </View>
    </View>
  )
}
