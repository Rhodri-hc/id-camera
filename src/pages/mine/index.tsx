import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Field, Button, Icon } from '@antmjs/vantui'
import { chooseImage } from '@/utils/camera'
import { useState } from 'react'
import { UserInfo, VipCard, RecordCard } from '@/components'
import styles from '@/pages/mine/index.module.scss'
import testImg from '@/assets/icons/test.png'
import { getOssPath } from '@/utils/oss'

export default function Index() {
  const noData = true
  const handleClick = () => {
    console.log('on click button')
    chooseImage()
  }

  return (
    <View className={`${styles['mine']} tw-px-4 tw-pb-3`}>
      <UserInfo username='用户名' userId='656566232323' />
      <VipCard isVip={false} className='tw-my-3' />
      <RecordCard
        className='tw-mb-3'
        icon={<Image src={testImg} className='tw-w-5 tw-h-5' />}
        title='回执申请中心'
        noData
        noDataText='暂无回执申请'
        noDataPic={getOssPath('images/img_empty_box.png')}
      >
        {[{}, {}, {}].map((_item, index) => (
          <View
            className='tw-flex tw-mt-3 tw-justify-between tw-items-center tw-py-1.5 tw-px-3'
            key={index}
          >
            <Text className='' style={{ color: 'rgba(19, 20, 21, 0.70)' }}>
              广东省深圳市居民身份证申请
            </Text>
            <Text className='tw-text-[#DF880B]'>申请中</Text>
            {/* <Text className='tw-text-[#1AA03E]'>申请成功</Text> */}
            {/* <Text className='tw-text-[#E82F2F]'>申请不通过</Text> */}
          </View>
        ))}
      </RecordCard>
      <RecordCard
        className='tw-mb-3'
        icon={<Image src={testImg} className='tw-w-5 tw-h-5' />}
        title='我的订单'
        noData
        noDataText='暂无订单'
        noDataPic={getOssPath('images/img_empty.png')}
      >
        {[{}, {}, {}].map((_item, index) => (
          <View className='tw-flex tw-justify-between tw-items-center tw-mt-3' key={index}>
            <View className='tw-flex'>
              <Image src={testImg} className='tw-w-10 tw-h-15 tw-mr-2' />
              <View className='tw-flex tw-flex-col tw-justify-between'>
                <Text className='tw-font-medium'>一寸照</Text>
                <Text className='tw-text-xs' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                  订单编号：22008_11450930413_215331
                </Text>
                <Text className='tw-text-xs' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
                  订单时间：2023-12-05 14:54:33
                </Text>
              </View>
            </View>
            <View className='tw-flex tw-justify-center tw-items-center tw-border-1 tw-border-solid tw-border-primary tw-rounded-[24px] tw-px-3 tw-py-1 tw-box-border'>
              <Text className='tw-text-primary tw-text-sm'>未支付</Text>
            </View>
            {/* <View className='tw-flex tw-justify-center tw-items-center tw-bg-[#EEE] tw-rounded-[24px] tw-px-3 tw-py-1 tw-box-border'>
            <Text className='tw-text-[rgba(19, 20, 21, 0.70)] tw-text-sm'>查看详情</Text>
          </View> */}
          </View>
        ))}
      </RecordCard>
      <View className='tw-bg-white tw-rounded-xl tw-p-4'>
        <View className='tw-flex tw-justify-between tw-items-center tw-mb-6'>
          <View className='tw-flex tw-items-center'>
            <Image src={testImg} className='tw-w-5 tw-h-5' />
            <Text className='tw-font-medium tw-text-xl tw-ml-1'>联系客服</Text>
          </View>
          <View className='tw-flex tw-items-center'>
            <Text className='tw-text-sm tw-mr-0.5' style={{ color: 'rgba(19, 20, 21, 0.50)' }}>
              工作日10:00~18:00
            </Text>
            <Icon name='arrow' size='16px' />
          </View>
        </View>
        <View className='tw-flex tw-justify-between tw-items-center tw-mb-6'>
          <View className='tw-flex tw-items-center'>
            <Image src={testImg} className='tw-w-5 tw-h-5' />
            <Text className='tw-font-medium tw-text-xl tw-ml-1'>用户协议</Text>
          </View>
          <View className='tw-flex tw-items-center'>
            <Icon name='arrow' size='16px' />
          </View>
        </View>
        <View className='tw-flex tw-justify-between tw-items-center tw-mb-6'>
          <View className='tw-flex tw-items-center'>
            <Image src={testImg} className='tw-w-5 tw-h-5' />
            <Text className='tw-font-medium tw-text-xl tw-ml-1'>隐私政策</Text>
          </View>
          <View className='tw-flex tw-items-center'>
            <Icon name='arrow' size='16px' />
          </View>
        </View>
      </View>
    </View>
  )
}
