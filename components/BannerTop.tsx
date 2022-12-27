import React from 'react'
import Image from 'next/image'
import bannerImage from '../public/banner_top.jpg'
import styles from '../styles/BannerTop.module.scss'

const BannerTop = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src={bannerImage} alt='Banner for Sales'/>
            <div className={styles.text}>
                <div className={styles.saleAmount}>- 25%</div>
                <div className={styles.saleDescription}>на товары для кабинета</div>
                <button className={styles.saleButton}>Выбрать</button>
                <div className={styles.circle}></div>
            </div>
        </div>
    )
}

export default BannerTop