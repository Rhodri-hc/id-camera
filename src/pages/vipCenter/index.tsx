import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { RadioGroup, Radio, Icon } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState } from 'react'
import styles from '@/pages/vipCenter/index.module.scss'
import { VipCard } from '@/components'
import { getOssPath } from '@/utils/oss'

export default function VipCenter() {
  const [isFold, setIsFold] = useState<boolean>(true)
  const [value, setValue] = useState('1')
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const listOne = [
    { title: '证件照', icon: getOssPath('icons/id.png') },
    { title: '形象照', icon: getOssPath('icons/modeling.png') },
    { title: '画质增强', icon: getOssPath('icons/hd.png') },
    { title: '智能美颜', icon: getOssPath('icons/beauty.png') }
  ]
  const listTwo = [
    { title: '免费服装', icon: getOssPath('icons/cloth.png') },
    { title: '免费底色', icon: getOssPath('icons/bg.png') },
    { title: '免费尺寸', icon: getOssPath('icons/size.png') },
    { title: 'VIP客服', icon: getOssPath('icons/custom_service.png') }
  ]
  const handleClickVipCard = () => {}

  return (
    <View className={`${styles['vip-center']} tw-min-h-[100vh] tw-pb-[68px]`}>
      <View className={`${styles['vip-center__header']} tw-px-4 tw-relative tw-bg-[#1F1F21]`}>
        <VipCard isVip />
        <View className='tw-mt-3 tw-py-3 tw-px-2'>
          <View className='tw-flex tw-flex-wrap tw-justify-between tw-mb-3'>
            {listOne.map((item, index) => (
              <View
                key={index}
                className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-min-w-[48px]'
              >
                <Image src={item.icon} className='tw-w-[42px] tw-h-[42px]' />
                <Text className='tw-text-white tw-text-sm tw-pt-1'>{item.title}</Text>
              </View>
            ))}
          </View>
          {!isFold && (
            <View className='tw-flex tw-flex-wrap tw-justify-between'>
              {listTwo.map((item, index) => (
                <View
                  key={index}
                  className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-min-w-[48px]'
                >
                  <Image src={item.icon} className='tw-w-[42px] tw-h-[42px]' />
                  <Text className='tw-text-white tw-text-sm tw-pt-1'>{item.title}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View
          style={{
            background:
              'url("https://a.manchengkj.com/id-camera-miniprogram/images/img_lingxing_bg.png") center no-repeat',
            backgroundSize: 'cover',
            transform: 'translate(-50%, 46%)'
          }}
          className='tw-absolute tw-left-1/2 tw-bottom-0 tw-w-12 tw-h-8 tw-flex tw-justify-center tw-items-center'
        >
          <Icon
            name='arrow-down'
            size='16px'
            color='#fff'
            className={`${isFold && 'tw-rotate-180'}`}
            style={{ transition: 'all .3s' }}
            onClick={() => setIsFold(!isFold)}
          />
        </View>
      </View>
      <View className='tw-bg-[#1F1F21]'>
        <View
          className={`${styles['vip-center__container']} tw-bg-white tw-rounded-[16px_16px_0px_0px] tw-p-4`}
        >
          <View className='tw-mb-4'>
            <View className='tw-text-xl tw-font-medium'>证件照畅享会员</View>
            <View className='tw-flex tw-overflow-x-scroll tw-py-3'>
              {[
                { title: '微糖周会员', money: '15', cycle: '2.14' },
                { title: '微糖月会员', money: '15', cycle: '2.14' },
                { title: '微糖年会员', money: '15', cycle: '2.14' },
                { title: '微糖日会员', money: '15', cycle: '2.14' },
                { title: '微糖天会员', money: '15', cycle: '2.14' },
                { title: '微糖星期会员', money: '15', cycle: '2.14' },
                { title: '微糖A会员', money: '15', cycle: '2.14' },
                { title: '微糖B会员', money: '15', cycle: '2.14' },
                { title: '微糖C会员', money: '15', cycle: '2.14' },
                { title: '微糖D会员', money: '15', cycle: '2.14' }
              ].map((item, index) => (
                <View
                  key={index}
                  className={`${
                    currentIndex === index && styles['active']
                  } tw-relative tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-lg tw-border-1 tw-border-solid tw-border-[#F1F1F5] tw-p-[12px_12px_10px_12px] tw-min-w-fit tw-mr-2.5 tw-box-border`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {currentIndex === index && (
                    <View
                      className={` tw-absolute tw-left-0 tw-text-white tw-text-xs tw-px-3 tw-py-0.5 tw-top-0 -tw-translate-y-1/2 tw-z-10`}
                      style={{
                        borderRadius: '12px 12px 12px 0px',
                        background: 'linear-gradient(95deg, #FFBE40 0%, #EF456D 100%)'
                      }}
                    >
                      新用户专属
                    </View>
                  )}
                  <Text className='' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                    {item.title}
                  </Text>
                  <View className='tw-py-0.5'>
                    <Text className='tw-text-sm'>¥</Text>
                    <Text className='tw-text-3xl-pure tw-font-semibold'>{item.money}</Text>
                  </View>
                  <Text className='tw-text-primary tw-text-xs'>¥{item.money}元/天</Text>
                </View>
              ))}
            </View>
            <View className='tw-text-[8px]' style={{ color: 'rgba(19, 20, 21, 0.36)' }}>
              开通会员立享免费制作证件照，多项权益等你来拿。之后XXX元/周续费，可关闭
            </View>
          </View>

          <View>
            <View className='tw-text-xl tw-font-medium tw-pb-3'>会员尊享服务</View>
            <RadioGroup value={value} onChange={e => setValue(e.detail)}>
              {/* 卡片一 */}
              <View
                style={{
                  background:
                    'url("https://a.manchengkj.com/id-camera-miniprogram/images/img_receipt_card_bg.png") center no-repeat',
                  backgroundSize: 'cover'
                }}
                className='tw-py-3 tw-px-4 tw-mb-3'
              >
                <View className='tw-flex tw-items-center tw-mb-2 tw-rounded-xl'>
                  <Text className='tw-text-xl tw-font-medium tw-mr-1'>证件照回执</Text>
                  <View
                    className=' tw-rounded-base tw-text-[#723614] tw-text-xs tw-py-0.5 tw-px-1.5 tw-min-h-[22px]'
                    style={{ background: 'linear-gradient(92deg, #FBE9CF 1.07%, #F5B289 98.05%)' }}
                  >
                    官方认证
                  </View>
                </View>
                <View className='tw-flex tw-justify-between tw-items-center'>
                  <Text className='tw-text-[#7E4619] tw-text-sm'>单次卡</Text>
                  <View className='tw-flex tw-items-baseline'>
                    <Text
                      className='tw-text-xs tw-mr-0.5'
                      style={{ color: 'rgba(19, 20, 21, 0.36)' }}
                    >
                      ¥15.0
                    </Text>
                    <View className='tw-mr-1 tw-flex tw-items-center'>
                      <View>
                        <Text className='tw-text-sm'>¥</Text>
                        <Text className='tw-text-xl'>12.00</Text>
                      </View>
                      <Radio
                        name='1'
                        renderIcon={
                          <Image
                            className='tw-h-4 tw-w-4'
                            src={
                              value === '1'
                                ? getOssPath('icons/check_fill_sel.png')
                                : getOssPath('icons/check_cir_nor.png')
                            }
                          />
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              {/* 卡片二 */}
              <View
                style={{
                  background:
                    'url("https://a.manchengkj.com/id-camera-miniprogram/images/img_receipt_card_bg.png") center no-repeat',
                  backgroundSize: 'cover'
                }}
                className=' tw-py-3 tw-px-4'
              >
                <View className='tw-flex tw-items-center tw-mb-2 tw-rounded-xl'>
                  <Text className='tw-text-xl tw-font-medium tw-mr-1'>证件照回执</Text>
                  <View
                    className=' tw-rounded-base tw-text-[#723614] tw-text-xs tw-py-0.5 tw-px-1.5 tw-min-h-[22px]'
                    style={{ background: 'linear-gradient(92deg, #FBE9CF 1.07%, #F5B289 98.05%)' }}
                  >
                    官方认证
                  </View>
                </View>
                <View className='tw-flex tw-justify-between tw-items-center'>
                  <Text className='tw-text-[#7E4619] tw-text-sm'>3次卡</Text>
                  <View className='tw-flex tw-items-baseline'>
                    <Text
                      className='tw-text-xs tw-mr-0.5'
                      style={{ color: 'rgba(19, 20, 21, 0.36)' }}
                    >
                      ¥15.0
                    </Text>
                    <View className='tw-mr-1 tw-flex tw-items-center'>
                      <View>
                        <Text className='tw-text-sm'>¥</Text>
                        <Text className='tw-text-xl'>12.00</Text>
                      </View>
                      <Radio
                        name='2'
                        renderIcon={
                          <Image
                            className='tw-h-4 tw-w-4'
                            src={
                              value === '2'
                                ? getOssPath('icons/check_fill_sel.png')
                                : getOssPath('icons/check_cir_nor.png')
                            }
                          />
                        }
                      />
                      {/* check_fill_sel.png */}
                    </View>
                  </View>
                </View>
              </View>
            </RadioGroup>
          </View>
          <View
            className='tw-text-[8px] tw-py-4 tw-flex tw-justify-center'
            style={{ color: 'rgba(19, 20, 21, 0.36)' }}
          >
            <Text>会员协议 ｜ 隐私条款 ｜ 联系客服</Text>
          </View>
        </View>
      </View>
      <View
        className={`${styles['vip-center__footer']} tw-fixed tw-left-0 tw-bottom-0 tw-right-0 tw-bg-white tw-flex tw-justify-between tw-px-4 tw-py-2`}
        style={{
          boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.06)'
        }}
      >
        <View className='tw-flex tw-flex-col'>
          <View className='tw-text-primary'>
            <Text className='tw-text-sm-pure'>¥</Text>
            <Text className='tw-text-3xl-pure tw-font-semibold'>15</Text>
          </View>
          <Text className='tw-text-xs' style={{ color: 'rgba(19, 20, 21, 0.36)' }}>
            低至2.14元/天
          </Text>
        </View>
        <View
          className='tw-min-w-[160px] tw-px-4 tw-py-3 tw-rounded-[30px] tw-flex tw-justify-center tw-items-center'
          style={{
            background: 'linear-gradient(96deg, #F9D4FD 5.94%, #EEF2FF 61.4%, #D0CAFF 96.19%)'
          }}
        >
          <Text className='tw-text-xl tw-font-medium'>立即购买</Text>
        </View>
      </View>
    </View>
  )
}
