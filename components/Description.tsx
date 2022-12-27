import React, {FC} from 'react'
import styles from '../styles/Description.module.scss'

interface DescriptionProps {
    description: string
}

const Description: React.FC<DescriptionProps> = ({description}) => {
  return (
    <div className={styles.description}>{description.length > 120 ? description.slice(0, 120) + '...' : description}</div>
  )
}

export default Description