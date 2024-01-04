import { Image, View, Text } from '@tarojs/components'
import { ReactNode } from 'react'
import Taro from '@tarojs/taro'
import styles from '@/components/vipCard/vipCard.module.scss'
import { Icon } from '@antmjs/vantui'
import testImg from '@/assets/icons/test.png'
import { getOssPath } from '@/utils/oss'

export interface IHeaderProps {
  className?: string
  title?: string
  isVip: boolean
  onClick?: () => void
}

export default function Header(props: IHeaderProps) {
  const { className } = props
  const handleClick = () => {}
  return (
    <View className={`${className} ${styles['vip-card']}`}>
      <Image className={styles['bg']} mode='widthFix' src={getOssPath('images/img_vip_card.png')} />
      <View className={`${styles['vip-card__container']}`}>
        <View className={styles['info']}>
          <Image src={getOssPath('images/img_text_weitang.png')} className={`${styles['title']}`} />
          <Text className={styles['desc']}>畅享微糖证件照、形象照制作等更多权益</Text>
        </View>
        {props.isVip ? (
          <View
            className={`${styles['renew-btn']}`}
            onClick={() => (props.onClick ? props.onClick() : handleClick())}
          >
            续费会员
          </View>
        ) : (
          <View
            className={`${styles['activate-btn']}`}
            onClick={() => (props.onClick ? props.onClick() : handleClick())}
          >
            立即开通
          </View>
        )}
      </View>
    </View>
  )
}
