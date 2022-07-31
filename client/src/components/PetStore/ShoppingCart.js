import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delFromCart, clearCart} from '../../redux/actions'
import styles from './ShoppingCart.module.css'

export default function ShoppingCart() {
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart)

    let total = 0;
    data.map(d => total+= (d.points*d.quantity))

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <h1>Carrito</h1>
        </div>
        <div className={styles.bttnclear}>
            <button className="btn btn-dark" onClick={()=>dispatch(clearCart())}>Vaciar Carrito</button>
        </div>

            <div className={styles.itemContainer}>
            {data.map(d=>(
                <div className={styles.itemCard}>
                    <p>Item: {d.name}</p>
                    <p>{d.points} x {d.quantity} = {d.points * d.quantity}</p>
                    <div>
                        <button className="btn btn-dark" onClick={()=>dispatch(delFromCart(d.id))}>-</button>
                        <button className="btn btn-dark" onClick={()=>dispatch(delFromCart(d.id, true))}>X</button>
                    </div>
                </div>
            ))}
            </div>

        <div className={styles.total}>            
            <h5>Total compra: {total}</h5>
        </div>    
        
    </div>
  )
}
