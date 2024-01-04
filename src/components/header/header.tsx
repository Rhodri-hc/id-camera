import { Image, View, Text } from '@tarojs/components'
import { ReactNode } from 'react'
import Taro from '@tarojs/taro'
import styles from '@/components/header/header.module.scss'
import { Icon } from '@antmjs/vantui'

export interface IHeaderProps {
  className?: string
  title?: string
  hasBack?: boolean
  children?: {
    title?: ReactNode
    btn?: ReactNode
  }
  onClick?: () => void
}

export default function Header(props: IHeaderProps) {
  const { className, hasBack = false } = props
  return (
    // <View className={`header ${className}`} onClick={() => props.onClick && props.onClick()}>

    // </View>
    <View
      className={`${className} ${styles['header']}`}
      style={{ paddingTop: `${Taro.$navBarMarginTop + 8}px` }}
    >
      <View className={styles['header__btn']}>
        {hasBack && (
          <Icon name='arrow' size='16px' />
          // <Image
          //   src={getOssPath(`miniprogram/images/icon/ic_back.png`)}
          //   className={styles['icon-back']}
          //   onClick={() => Taro.navigateBack()}
          // />
        )}
      </View>
      <View className={styles['header__title']}>{props?.children?.title ?? props.title}</View>
      {/* 右侧占位符 */}
      <View></View>
    </View>
  )
}
