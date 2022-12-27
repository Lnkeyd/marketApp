import React from 'react'
import BannerBottom from '../components/BannerBottom'
import BannerTop from '../components/BannerTop'
import CardItem from '../components/CardItem'
import { ICartItem } from '../redux/slices/cart/cartSlice'
import { useGetProductsQuery } from '../redux/api/fakestore.api'
import styles from '../styles/Home.module.scss'
import { ArrowIcon } from '../styles/icons'

const Home = () => {

    const { data } = useGetProductsQuery('')

  return (
    <div className={styles.container}>
        <div className={styles.sideInfo}>
            <h1 className={styles.h1}>Всё для комфортной работы</h1>
            <div className={styles.arrow}>
                <ArrowIcon/>
            </div>
            <div className={styles.banners}>
                <BannerTop/>
                <BannerBottom/>
            </div>
        </div>
        {
            data?.map((item: ICartItem) => <CardItem key={item.id} {...item}/>)
        }
    </div>
  )
}

export default Home