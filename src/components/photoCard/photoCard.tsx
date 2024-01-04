import { Image, View, Text } from '@tarojs/components'
import { Icon } from '@antmjs/vantui'
import styles from '@/components/photoCard/photoCard.module.scss'
import { getOssPath } from '@/utils'

export interface IPhotoCardProps {
  className?: string
  title: string
  desc: string
  tag: string
  onClick?: () => void
}

export default function PhotoCard(props: IPhotoCardProps) {
  const { className } = props
  return (
    <View
      className={`${styles['photo-card']} ${className}`}
      onClick={() => props.onClick && props.onClick()}
    >
      <View className={styles['photo-card__left']}>
        <Image src={getOssPath('icons/id-thumbnail.png')} className={styles.cover} />
        <View className={styles.details}>
          <View className={styles['details-top']}>
            <Text className={styles.title}>{props.title}</Text>
            {props.tag &&
              props.tag.split(',').map((tagName, index) => (
                <View
                  className={`${styles.tag} ${
                    tagName === '官方回执' ? styles['tag-receipt'] : styles['tag-hot']
                  }`}
                  key={index}
                >
                  <Text>{tagName}</Text>
                </View>
              ))}
          </View>
          <View className={styles.info}>{props.desc}</View>
        </View>
      </View>
      <View className={styles['photo-card__left']}>
        <Icon name='arrow' size='16px' />
      </View>
    </View>
  )
}
