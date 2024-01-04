import { Image, View, Text } from '@tarojs/components'
import { ReactNode } from 'react'
import Taro from '@tarojs/taro'
import styles from '@/components/userInfo/userInfo.module.scss'
import { Icon } from '@antmjs/vantui'
import { getOssPath } from '@/utils/oss'

export interface IUserInfoProps {
  className?: string
  username: string
  userId: string
}

export default function UserInfo(props: IUserInfoProps) {
  const { className } = props
  return (
    // <View className={`header ${className}`} onClick={() => props.onClick && props.onClick()}>

    // </View>
    <View className={`${className} ${styles['user-info']}`}>
      <Image className={styles['user-info__avatar']} src={getOssPath('icons/avatar.png')}></Image>
      <View className={styles['user-info__container']}>
        <Text className={styles['username']}>{props.username}</Text>
        <Text className={styles['user-id']}>{props.userId}</Text>
      </View>
    </View>
  )
}
