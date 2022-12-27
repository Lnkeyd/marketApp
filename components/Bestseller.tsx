import React, {FC} from 'react'
import styles from '../styles/Bestseller.module.scss'

interface BestsellerProps {
    count: number
}

const Bestseller: React.FC<BestsellerProps> = ({count}) => {
  return (
    <div className={styles.bestseller} style={{display: `${count <= 300 && 'none'}`}}>Хит</div>
  )
}

export default Bestseller