import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delFromCart, clearCart, addToCart} from '../../redux/actions'
import styles from './ShoppingCart.module.css'

export default function ShoppingCart() {
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart)
    const [lS, setLocalStorage] = useState(false)
    const [lsData, setLsData] = useState({
        info: JSON.parse(localStorage.getItem("cart"))
    })

    // "cart " = 1234 12345 
    // 
    useEffect(()=>{
        if(data.length){
            localStorage.setItem("cart", JSON.stringify(data))
            if(lS) setLocalStorage(false)
            else setLocalStorage(true)
        }
        if(data.length === 1 ){
            console.log("as")
        }

        
    },[data])
    
    useEffect(()=>{
        setLsData({info: JSON.parse(localStorage.getItem("cart"))})
    },[lS])

    // useEffect(()=>{
    //     return ()=>{
    //         setLsData({info: JSON.parse(localStorage.getItem("cart"))})
    //     }
    // },[lS])

    
    let total = 0;
    lsData.info?.map(d => total+= (d.points*d.quantity))

    ShoppingCart.total = total;
    ShoppingCart.data = lsData.info ;

  return (
    <div className={styles.main}>
        <div className={styles.itemContainer}>
            {lsData.info?.map(d=>(
                <div key={d.name} className={styles.mainitems}>
                    <div className={styles.containerimagecart}>
                        <img src={d.images}/>
                    </div>
                    <div className={styles.priceitem}>
                        <p>{d.name}{" "}{d.points} x {d.quantity} = {d.points * d.quantity}</p>                        
                    <div>
                        <button className="" onClick={()=>dispatch(delFromCart(d.id))}>-</button>
                        <button className="" onClick={()=>dispatch(delFromCart(d.id, true))}>X</button>
                        <button className="" onClick={()=>dispatch(addToCart(d.id))}>+</button>
                    </div>
                    <hr/>
                </div>
            </div>
            ))}
    </div>

        <div className={styles.total}>            
            <h5>Total compra: {total}</h5>
        </div>  
        
        <div className={styles.bttnclear}>
            <button className="" onClick={()=>dispatch(clearCart())}>Vaciar Carrito</button>
        </div>
        
    </div>
  )
}
