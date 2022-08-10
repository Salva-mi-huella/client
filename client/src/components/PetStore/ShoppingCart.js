import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delFromCart, clearCart, addToCart, updateUser} from '../../redux/actions'
import styles from './ShoppingCart.module.css'
import Swal from 'sweetalert2';

export default function ShoppingCart() {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    // const products = useSelector((state) => state.allProductsFiltered);
    const data = useSelector(state => state.cart)
    const productsId = data.map(product => product.id);

    const [lS, setLocalStorage] = useState(false)
    const [lsData, setLsData] = useState({
        info: JSON.parse(localStorage.getItem("cart")) 
    })

    useEffect(()=>{
        // El reducer se vacia al reiniciar la pagina, por ende la linea 18,
        // guarda solo el primero que se agrega al carito post reiniciar la pagina
        if(data.length)localStorage.setItem("cart", JSON.stringify(data))
        else localStorage.setItem("cart", JSON.stringify([]))

        if(lS) setLocalStorage(false)
        else setLocalStorage(true)
    },[data])
    
    useEffect(()=>{
        setLsData({info: JSON.parse(localStorage.getItem("cart"))})
    },[lS])

    
  function updatePoints() {
    let actualPoints = user.points;
    let totalCompra = ShoppingCart.total;
    let totalItems = ShoppingCart.data;

    let newBalance = actualPoints - totalCompra

    if (totalItems < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que aun no has añadido nada a tu carrito!',
      })
    }
    else if (newBalance > 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Seguro quieres canjear estos productos?',
        text: "Despues de esto no hay marcha atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Canjear productos!',
        cancelButtonText: 'Cancelar canje!',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Canje exitoso!',
            `Tus productos fueron canjeados, te avisaremos para coordinar el envio. Tu nuevo saldo de huellitas es ${newBalance}`,
            'success',
            dispatch(updateUser({ points: newBalance, products: productsId }, user.email)),
            setTimeout(() => window.location.reload(), 5000)

          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Canje cancelado :)',
            'error'
          )
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que no tienes huellitas suficientes para este canje! :(',
      })
    }

  }

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
                        <button className={styles.takeOut} onClick={()=>dispatch(delFromCart(d.id, true))}>X</button>
                        <img src={d.images}/>
                    </div>
                    <div className={styles.priceitem}>
                        <p>{d.name}{" "}</p> 
                        <p className={styles.points}>{d.points} Ptos x {d.quantity} Udad. = {d.points * d.quantity} Ptos</p>                       
                    </div>
                    <div className={styles.containerBtn}>
                        <button className={styles.quantityBtn} onClick={()=>dispatch(delFromCart(d.id))}>-</button>
                        <button className={styles.quantityBtn} onClick={()=>dispatch(addToCart(d.id))}>+</button>
                    </div>
                    <hr/>
            </div>
            ))}
            <button className={`${styles.btnClear} `} id={styles.clear} onClick={()=>dispatch(clearCart())}>Vaciar Carrito</button>
    </div>
        <div className={styles.total}>            
            <h5>Total de puntos: {total}</h5>
        </div>  
        
        <div className={styles.btnClearContainer}>
            <button className={`${styles.btnClear} `} id={styles.end} onClick={updatePoints}>Finalizar Compra</button>
        </div>
        
    </div>
  )
}
