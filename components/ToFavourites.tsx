import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ICartItem } from '../redux/slices/cart/cartSlice'
import { addToFavourites, removeFromFavourites } from '../redux/slices/favourites/favouritesSlice'
import { FavouriteIcon } from '../styles/icons'
import styles from '../styles/ToFavourites.module.scss'

const ToFavourites = (props: ICartItem) => {
    
    const dispatch = useDispatch()
    const [isFavourite, setIsFavourite] = useState(false)

    const toggleFavouritesHandler = (item: ICartItem) => {
        if (!isFavourite) {
            dispatch(addToFavourites(item))
            setIsFavourite(true)
        } else {
            dispatch(removeFromFavourites(item.id))
            setIsFavourite(false)
        }
    }

  return (
    <button className={styles.toFavourites} onClick={() => toggleFavouritesHandler(props)}>
                <FavouriteIcon isOutlined={isFavourite}/>
    </button>
  )
}

export default ToFavourites