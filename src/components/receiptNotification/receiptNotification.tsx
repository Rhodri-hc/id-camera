import { Image, View, Text } from '@tarojs/components'
import { Icon } from '@antmjs/vantui'
import styles from '@/components/receiptNotification/receiptNotification.module.scss'

export interface IReceiptNotificationProps {
  className?: string
  title: string
  desc: string
  onClick?: () => void
}

export default function ReceiptNotification(props: IReceiptNotificationProps) {
  const { className } = props
  return (
    <View
      className={`${styles['receipt-notification']} ${className}`}
      onClick={() => props.onClick && props.onClick()}
    >
      <View className={styles['receipt-notification__left']}>
        <Text className={styles.title}>{props.title}</Text>
        <Text className={styles.desc}>{props.desc}</Text>
      </View>
      <View className={styles['receipt-notification__right']}>
        <Icon name='arrow' size='16px' />
      </View>
    </View>
  )
}
