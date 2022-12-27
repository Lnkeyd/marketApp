import React, {FC} from 'react'
import { StarIcon } from '../styles/icons'
import styles from '../styles/GeneralInfo.module.scss'
import { IRating } from '../models/models'

interface generalInfoProps {
    category: string,
    rating: IRating,
}

const GeneralInfo: React.FC<generalInfoProps> = ({category, rating}) => {

    const stars = []
    for (let i=0; i < 5; i++) {
        stars.push(i)
    }

  return (
    <div className={styles.generalInfo}>
            <div className={styles.category}>{category}</div>
            <div className={styles.rate}>
                <div className={styles.stars}>
                {
                    stars.map((item, index) => <StarIcon isFilled={index < Math.round(rating.rate) ? true : false} key={index}/>)
                }
                </div>
                <div className={styles.count}>{rating.count} отзывов</div>
            </div>
    </div>
  )
}

export default GeneralInfo