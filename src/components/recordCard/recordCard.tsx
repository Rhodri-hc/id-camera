import { Image, View, Text } from '@tarojs/components'
import { ReactNode } from 'react'
import Taro from '@tarojs/taro'
import styles from '@/components/recordCard/recordCard.module.scss'
import { Icon } from '@antmjs/vantui'

export interface IRecordCardProps {
  className?: string
  title: string
  icon?: ReactNode
  children?: ReactNode
  noData: boolean
  noDataText?: string
  noDataPic?: ReactNode
  onClickMore?: () => void
}

export default function RecordCard(props: IRecordCardProps) {
  const { className } = props
  return (
    <View className={`${className} ${styles['record-card']}`}>
      <View className={styles['record-card__header']}>
        <View className={styles['header-left']}>
          <View>{props.icon}</View>
          <Text className={styles['title']}>{props.title}</Text>
        </View>
        <View className={styles['header-right']}>
          <Text className={styles['more']}>更多</Text>
          <Icon name='arrow' size='16px' />
        </View>
      </View>
      <View className={styles['record-card__container']}>
        {props.noData ? (
          <View className={styles['no-data']}>
            <Image src={props.noDataPic} className={styles['no-data__img']} />
            <Text className={styles['no-data__text']}>{props.noDataText}</Text>
          </View>
        ) : (
          props.children
        )}
      </View>
    </View>
  )
}
