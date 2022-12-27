import React from 'react'
import { ICartItem } from '../redux/slices/cart/cartSlice'
import styles from '../styles/CardItem.module.scss'
import Image from 'next/image'
import GeneralInfo from './GeneralInfo'
import ActionButtons from './ActionButtons'
import Description from './Description'
import Bestseller from './Bestseller'
import Price from './Price'

const CardItem = (props: ICartItem) => {

  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
                className={styles.image} 
                src={props.image} 
                alt={props.title}
                fill
                loading="lazy"/>
        </div>
        <GeneralInfo 
            category={props.category}
            rating={props.rating}
        />

        <Description description={props.description}/>
        <Price price={props.price}/>
        <ActionButtons {...props}/>
        <Bestseller count={props.rating.count}/>
    </div>
  )
}

export default CardItem