import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsFiltered } from "../../../redux/actions";
import style from '../Adopt.module.css'



export default function Paginate(){
    
    const dispatch = useDispatch()
    
    const {filtered} = useSelector(state => state.petsFiltered)
    let [actualPage, setActualPage] = useState(1)
    const [active , setActive] = useState('')
    
    useEffect(()=>{
        if(filtered){
            let firstIndex = (actualPage * 12) - 12
            let lastIndex = (actualPage * 12)
            let renderPage = filtered.slice(firstIndex, lastIndex)
            setActive(actualPage)
            dispatch(petsFiltered(filtered,renderPage))
        }
    },[actualPage,dispatch,filtered])

    const filters = useSelector(state=> state.filtersConfig )
    useEffect(()=>{
        setActualPage(1)
    },[filters])


    // Setup number of rendering pages
    let pagesUI = []
    if(filtered){
        let totalPages = Math.ceil(filtered.length / 12 )
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
            <ul>
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