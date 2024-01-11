import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { RadioGroup, Radio, Icon } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState } from 'react'
import styles from '@/pages/photoPreview/index.module.scss'
import { VipCard } from '@/components'
import { getOssPath } from '@/utils/oss'
import testImg from '@/assets/icons/test.png'

// type TNavigationItemType = 'layoutPhoto' | 'inchPhoto'
const NAVIGATION_ITEM_TYPE = {
  LAYOUT_PHOTO: 'layoutPhoto',
  INCH_PHOTO: 'inchPhoto'
}

export default function PhotoPreview() {
  const [isFold, setIsFold] = useState<boolean>(true)
  const [value, setValue] = useState('1')
  const [currentTab, setCurrentTab] = useState<string>('beauty')
  const [currentSubTab, setCurrentSubTab] = useState<string>('woman')
  const [currentNavigationItem, setCurrentNavigationItem] = useState<string>(
    NAVIGATION_ITEM_TYPE.LAYOUT_PHOTO
  )

  const isInchPhoto = () => currentNavigationItem === NAVIGATION_ITEM_TYPE.INCH_PHOTO

  return (
    <View className={`${styles['photo-preview']} tw-flex tw-flex-col tw-h-[100vh]`}>
      <View className='tw-flex-1 tw-mb-[240px] tw-flex tw-flex-col tw-items-center tw-relative'>
        {/* 导航栏 */}
        <View className='tw-p-1 tw-bg-[#E4E6F2] tw-rounded-2xl tw-flex tw-w-fit tw-mt-4'>
          {[
            { key: NAVIGATION_ITEM_TYPE.INCH_PHOTO, value: '寸照' },
            { key: NAVIGATION_ITEM_TYPE.LAYOUT_PHOTO, value: '排版照' }
          ].map((item, index) => (
            <View
              key={index}
              className={`${styles['navigation-item']} ${
                currentNavigationItem === item.key && styles['active']
              }`}
              onClick={() => setCurrentNavigationItem(item.key)}
            >
              {item.value}
            </View>
          ))}
        </View>
        {isInchPhoto() ? (
          <>
            {/* 照片预览 */}
            <View className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
              <View
                className='tw-bg-white tw-p-1 tw-mt-[30px] tw-relative'
                style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.12)' }}
              >
                <Text className='tw-font-medium tw-absolute tw-top-1/2 tw-left-0 -tw-translate-x-full -tw-translate-y-1/2 tw-rotate-90'>
                  25mm
                </Text>
                <Image
                  src='https://id-photo.tos-cn-beijing.volces.com/test/material/20231220/2312200000000021/e5bd551797ed7f723f7d789144cb5c7d3.jpg'
                  className='tw-w-[150px]'
                />
              </View>
              <Text className='tw-font-medium tw-pt-2'>35mm</Text>

              <View className='tw-flex tw-items-center tw-justify-center tw-mt-6'>
                <View className='tw-flex tw-items-center'>
                  <View className='tw-w-3 tw-h-3 tw-border-1 tw-border-solid tw-border-[#ddd] tw-box-border tw-rounded-full tw-bg-white' />
                  <Text className='tw-text-sm tw-pl-1' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                    白色
                  </Text>
                </View>
                <View className='tw-flex tw-items-center tw-ml-5'>
                  <Image
                    src={getOssPath('icons/tick_pink_fill.png')}
                    className='tw-w-3 tw-h-3 tw-box-border tw-rounded-full'
                  />
                  <Text className='tw-text-sm tw-pl-1' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                    智能变美
                  </Text>
                </View>
                <View className='tw-flex tw-items-center tw-ml-5'>
                  <Image
                    src={getOssPath('icons/tick_pink_fill.png')}
                    className='tw-w-3 tw-h-3 tw-box-border tw-rounded-full'
                  />
                  <Text className='tw-text-sm tw-pl-1' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                    画质增强
                  </Text>
                </View>
              </View>
            </View>
            {/* 文案提示 */}
            <View
              className='tw-py-1 tw-px-4 tw-rounded-3xl tw-absolute tw-bottom-6 tw-left-1/2 -tw-translate-x-1/2 tw-flex tw-items-center'
              style={{
                background: 'linear-gradient(96deg, #F9D4FD 5.94%, #EEF2FF 61.4%, #D0CAFF 96.19%)'
              }}
            >
              <Image src={getOssPath('icons/cloth_fill.png')} className='tw-w-4 tw-h-4' />
              <Text className='tw-pl-1 '>再买1件，送1件</Text>
            </View>
            {/* 购物车 */}
            <View className='tw-absolute tw-right-0 tw-top-9'>
              <View className='tw-bg-primary tw-rounded-tl-base tw-flex tw-items-center tw-justify-center'>
                <Image src={getOssPath('icons/shopping_cart.png')} className='tw-w-5 tw-h-5' />
              </View>
              <View
                className='tw-bg-white tw-py-4 tw-px-2.5 tw-rounded-bl-base'
                style={{ boxShadow: '-2px 2px 12px 0px rgba(0, 0, 0, 0.12)' }}
              >
                <View className=' tw-rounded-base tw-box-border tw-relative tw-border-1 tw-border-solid tw-border-primary'>
                  <Image
                    className='tw-w-[42px]'
                    mode='widthFix'
                    src='https://id-photo.tos-cn-beijing.volces.com/test/material/20231220/2312200000000021/e5bd551797ed7f723f7d789144cb5c7d3.jpg'
                  />
                  <Image
                    src={getOssPath('icons/tick_purple_fill.png')}
                    className='tw-w-3.5 tw-h-3.5 tw-absolute tw-bottom-1 tw-right-1'
                  />
                  <Image
                    src={getOssPath('icons/close_line.png')}
                    className='tw-w-2.5 tw-h-2.5 tw-absolute tw-top-0 tw-right-0 tw-translate-x-1/2 -tw-translate-y-1/2'
                  />
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* 排版照 */}
            <View className='tw-flex tw-flex-col tw-justify-center tw-items-end'>
              <View
                className='tw-bg-white tw-p-4 tw-mt-[30px] tw-relative'
                style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.12)' }}
              >
                <Image
                  src='https://id-photo.tos-cn-beijing.volces.com/test/material/20231220/2312200000000021/e5bd551797ed7f723f7d789144cb5c7d3.jpg'
                  className='tw-w-64'
                />
              </View>
              <Text className='tw-pt-3 tw-text-sm' style={{ color: 'rgba(19, 20, 21, 0.36)' }}>
                *请使用6寸相纸打印
              </Text>
            </View>
          </>
        )}
        {/* <View className='tw-absolute tw-right-8 tw-top-[158px] '>一键换装</View> */}
        {/* 对比按钮 */}
        <Image
          src={getOssPath('icons/compare.png')}
          className='tw-w-9 tw-h-9 tw-absolute tw-right-5 tw-bottom-6'
        />
      </View>
      {/* 底部栏 */}
      <View className='tw-fixed tw-left-0 tw-right-0 tw-bottom-0 tw-bg-white tw-rounded-[16px_16px_0px_0px]'>
        <View>
          <View className='tw-p-6 tw-pb-0'>
            {/* 导航栏 */}
            {false && (
              <View className='tw-flex tw-justify-between'>
                {[
                  { key: 'bgColor', value: '背景色' },
                  { key: 'beauty', value: '人像美化' },
                  { key: 'cloth', value: '换服装' }
                ].map((item, index) => (
                  <View
                    key={index}
                    className={`${styles['tabs']} ${styles['red-dot']} ${
                      currentTab === item.key && styles['active']
                    } tw-text-xl`}
                    style={{ color: 'rgba(19, 20, 21, 0.36)' }}
                    onClick={() => setCurrentTab(item.key)}
                  >
                    {item.value}
                  </View>
                ))}
              </View>
            )}
            <View className='tw-flex tw-justify-between'>
              {[
                { key: 'woman', value: '女装' },
                { key: 'man', value: '男装' },
                { key: 'child', value: '童装' }
              ].map((item, index) => (
                <View
                  key={index}
                  className={`${styles['sub-tabs']} ${
                    currentSubTab === item.key && styles['active']
                  } tw-text-xl tw-py-0.5 tw-px-3`}
                  style={{ color: 'rgba(19, 20, 21, 0.36)' }}
                  onClick={() => setCurrentSubTab(item.key)}
                >
                  {item.value}
                </View>
              ))}
            </View>
            {/* tab */}
            {currentTab === 'bgColor' && (
              <View className='tw-overflow-x-scroll tw-py-8'>
                <View className='tw-flex tw-w-fit'>
                  {[
                    'white',
                    'blue',
                    'black',
                    'red',
                    'white',
                    'blue',
                    'black',
                    'red',
                    'white',
                    'blue',
                    'black',
                    'red',
                    'blue',
                    'black',
                    'red',
                    'blue',
                    'black',
                    'red'
                  ].map((color, index) => (
                    <View
                      key={index}
                      className={`${
                        styles['color-selected']
                      } tw-w-[38px] tw-h-[38px] tw-rounded-full tw-box-border tw-mr-5 tw-flex tw-justify-center tw-items-center ${
                        color === 'white' && 'tw-border-[1px_solid_#ddd]'
                      }`}
                      style={{
                        backgroundColor: color
                      }}
                    >
                      <Image src={getOssPath('icons/tick.png')} className='tw-w-6 tw-h-6' />
                    </View>
                  ))}
                </View>
              </View>
            )}
            {currentTab === 'beauty' && (
              <View className='tw-py-5.5'>
                <View className='tw-flex tw-w-fit'>
                  {[
                    { title: '画质增强', icon: testImg },
                    { title: '画质增强', icon: testImg }
                  ].map((item, index) => (
                    <View
                      key={index}
                      className={`${styles['beauty-selected']} tw-flex tw-flex-col tw-justify-center tw-mr-9`}
                    >
                      <View className='tw-relative'>
                        <Image
                          className='tw-w-4 tw-h-4 tw-absolute tw-right-1 tw-bottom-2'
                          src={getOssPath('icons/tick_green_fill.png')}
                        />
                        <Image
                          src={item.icon}
                          className={`${styles['beauty-icon']} tw-w-12 tw-h-12 tw-rounded-lg`}
                        />
                      </View>
                      <Text
                        className={`${styles['beauty-text']} tw-mt-1.5 tw-text-sm`}
                        style={{ color: 'rgba(19, 20, 21, 0.50)' }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
        {/* 按钮组 */}
        <View
          className='tw-flex tw-justify-center tw-items-center tw-py-3'
          style={{ boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.06)' }}
        >
          <View className='tw-bg-primary tw-rounded-[24px] tw-py-3 tw-px-4 tw-min-w-[164px] tw-text-white tw-flex tw-items-center tw-justify-center'>
            立即生成
          </View>
        </View>
      </View>
    </View>
  )
}
