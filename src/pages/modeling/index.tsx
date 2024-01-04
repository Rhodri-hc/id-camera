import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Swiper, SwiperItem, Button } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState } from 'react'
import styles from '@/pages/modeling/index.module.scss'
import testImg from '@/assets/icons/test.png'

export default function Index() {
  const [currScrollItemIndex, setCurrScrollItemIndex] = useState<number>(0)
  const handleClickScrollItem = (index: number) => {
    setCurrScrollItemIndex(index)
  }

  return (
    <View className={`${styles['modeling']}`}>
      <Swiper
        className={styles['modeling-swiper']}
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
        className={`tw-p-4 tw-bg-[#F7F8FC] -tw-mt-4 tw-rounded-tl-2xl tw-rounded-tr-2xl ${styles['modeling-container']}`}
      >
        <View
          className={`${styles['modeling-scroll']} tw-pt-3 tw-pb-4 tw-bg-[#F7F8FC] tw-flex tw-items-baseline tw-overflow-x-scroll tw-sticky tw-top-0 tw-z-10`}
        >
          {[
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' },
            { title: '普通寸照', icon: '' }
          ].map((item, index) => (
            <View
              key={index}
              className={`${styles['scroll-item']} tw-flex tw-flex-col tw-justify-center tw-items-center tw-mr-4`}
              onClick={() => handleClickScrollItem(index)}
            >
              <Text
                className={`${styles['scroll-item__text']} ${
                  index === currScrollItemIndex && styles['active']
                } tw-text-sm tw-py-1`}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>
        <View className={`${styles['modeling-card']} tw-flex tw-flex-wrap tw-justify-between`}>
          {[
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' },
            { title: '氧气职场', desc: '温柔高级职场形象' }
          ].map((item, index) => (
            <View
              className={`${styles['modeling-card__item']} tw-rounded-lg tw-flex-1 tw-relative`}
              key={index}
            >
              <Image src={testImg} className='tw-w-[164px]' />
              <View
                className={` tw-absolute tw-left-3 tw-bottom-2.5 tw-flex tw-flex-col tw-text-white`}
              >
                <Text className='tw-font-medium tw-text-xl tw-pb-0.5'>{item.title}</Text>
                <Text className='tw-text-sm'>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
