import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, ICartItem } from '../redux/slices/cart/cartSlice'
import { MinusIcon, PlusIcon } from '../styles/icons'
import styles from '../styles/ToCart.module.scss'

const ToCart = (props: ICartItem) => {

    const dispatch = useDispatch()

    const [isAddedToCard, setIsAddedToCart] = useState(false)
    const [amount, setAmount] = useState(1)

    const toCartHandler = (item: ICartItem) => {
        if (item.amount > 0) {
            dispatch(addToCart(item))
            setIsAddedToCart(true)
        }
    }

  return (
    <div>
        {
            isAddedToCard ? 
            <div className={styles.added}>В корзине</div> :
            <div className={styles.inProcess}>

                <button className={styles.addToCart} onClick={() => toCartHandler({...props, amount: amount})}>В корзину</button>

                <div className={styles.counter}>
                    <div className={styles.flexWrap}>

                        <button className={styles.decrease} onClick={() => amount > 0 && setAmount(amount - 1)}>
                            <MinusIcon/>
                        </button>

                        <div className={styles.amount}>{amount}</div>

                        <button className={styles.increase} onClick={() => setAmount(amount + 1)}>
                            <PlusIcon/>
                        </button>
                        
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default ToCart