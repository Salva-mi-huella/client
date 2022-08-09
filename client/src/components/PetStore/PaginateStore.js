import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFiltered } from "../../redux/actions";
import style from './Store.module.css'



export default function PaginateStore(){
    
    const dispatch = useDispatch()
    
    const products = useSelector((state) => state.allProductsFiltered);
    const {price} = useSelector((state) => state.productsConfig);

    // const {filtered} = useSelector(state => state.petsFiltered)
    let [actualPage, setActualPage] = useState(1)
    const [active , setActive] = useState('')
    
    useEffect(()=>{
        if(products){
            let firstIndex = (actualPage * 6) - 6
            let lastIndex = (actualPage * 6)
            let renderPage = products.slice(firstIndex, lastIndex)
            setActive(actualPage)
            dispatch(productsFiltered(products,renderPage))
        }
    },[actualPage,products,price])

    useEffect(()=>{
        setActualPage(1)
    },[products,price])


    // Setup number of rendering pages
    let pagesUI = []
    if(products){
        let totalPages = Math.ceil(products.length / 6 )
        for (let i = 1; i <= totalPages; i++) {
            pagesUI.push(i)
          }
    }
    function handleSelect(e){
        setActualPage(e.target.value)
    }
    function handleArrow(direction){
        if(direction === "left")  setActualPage(actualPage -1)
        else setActualPage(actualPage +1)
    }

    return(
        <>
            {pagesUI.length > 1 && 
            <ul className={style.containerPages}>
                {
                    actualPage !== 1 && 
                        <li onClick={() => handleArrow("left")} className={style.arrow}>
                            <i className="fa-solid fa-circle-left" ></i>
                        </li>
                }
                {
                    pagesUI.map(n=>(
                        <li key={n} className={`${style.pages} ${active === n ? style.activePage : null}`} onClick={e => handleSelect(e)} value={n} >{n}</li>
                    ))
                }
                {
                    pagesUI.length !== actualPage && 
                    <li onClick={() => handleArrow("right")} className={style.arrow}>
                        <i className="fa-solid fa-circle-right"></i>
                    </li>

                }
            </ul>
            }
        </>
    )
}