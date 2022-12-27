import React from 'react'
import Image from 'next/image'
import bannerImage from '../public/banner_bottom.jpg'
import styles from '../styles/BannerBottom.module.scss'

const BannerBottom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.saleDescription}>Скидка <span className={styles.saleAmount}>10%</span> на периферию для компьютера</div>
                <button className={styles.saleButton}>Выбрать</button>
                <div className={styles.circle}></div>
            </div>
            <Image className={styles.image} src={bannerImage} alt='Banner for Sales'/>
        </div>
    )
}

export default BannerBottom