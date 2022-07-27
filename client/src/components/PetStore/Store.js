import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions'
import ItemCard from './ItemCard';
import styles from './Store.module.css'


export default function Store() {

const dispatch = useDispatch();    

useEffect(() => {
    dispatch(getAllProducts())
}, [dispatch])

const products = useSelector((state) => state.allProducts)    

console.log(products)


  return (
    <div className={styles.main}>
        <div className={styles.sidebar}>

        </div>

        <div className={styles.items}>
            {products && products.map(product =>{
                return(
                    <ItemCard 
                        key={product.id}
                        id={product.id}
                        images={product.images}
                        name={product.name}
                        points= {new Intl.NumberFormat().format(product.points)}
                    />
                )
            })}

        </div>

    </div>
  )
}
