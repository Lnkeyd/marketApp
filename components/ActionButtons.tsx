import React from 'react'
import { ICartItem } from '../redux/slices/cart/cartSlice'
import styles from '../styles/ActionButtons.module.scss'
import ToCart from './ToCart'
import ToFavourites from './ToFavourites'

const ActionButtons = (props: ICartItem) => {

  return (
    <div className={styles.actionButtons}>
        <ToCart {...props}/>
        <ToFavourites {...props}/>
    </div>
  )
}

export default ActionButtons