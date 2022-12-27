import React, {FC} from 'react'
import styles from '../styles/Price.module.scss'

interface PriceProps {
    price: number
}

const Price: React.FC<PriceProps> = ({price}) => {
  return (
    <div className={styles.price}>{Math.ceil(price * 70)} ₽<span className={styles.perItem}>/шт.</span></div>
  )
}

export default Price