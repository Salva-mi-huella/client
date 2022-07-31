import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart, getAllProducts } from '../../redux/actions'
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import styles from './Store.module.css'
import ReactPaginate from 'react-paginate';
import ShoppingCart from './ShoppingCart';


export default function Store() {
    const dispatch = useDispatch();    
    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    
    const products = useSelector((state) => state.allProducts) 
    const shoppingCart = useSelector(state => state.cart)   

//Paginado
const [pageNumber, setPageNumber] = useState(0)
const productsPerPage = 6
const pagesVisited = pageNumber * productsPerPage

const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map((product)=>{return(
    <ItemCard 
                        key={product.id}
                        id={product.id}
                        images={product.images}
                        name={product.name}
                        points= {new Intl.NumberFormat().format(product.points)}
                    />
)})

const pageCount = Math.ceil(products.length / productsPerPage)

const changePage = ({selected}) =>{
    setPageNumber(selected)
}
    return (
    <div className={styles.main}>
        <div className={styles.sidebar}>
            <div>
                <SearchBar/>
            </div>

        </div>

        <div className={styles.containeritems}>  
            <h5>TIENDA DE HUELLITAS</h5>          
            <div className={styles.items}>{displayProducts}</div>
            <div className={styles.pagination}>
            <ReactPaginate 
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginate}
                pageClassName={styles.pagbuttons}
                previousLinkClassName={styles.prevnext}
                nextLinkClassName={styles.prevnext}
                disabledClassName={"paginationDisabled"}
                activeLinkClassName={styles.activebuttons}
            >
            </ReactPaginate>
        </div>        
        </div>

        <div>
            <ShoppingCart />
        </div>
    

    </div>
  )
}
