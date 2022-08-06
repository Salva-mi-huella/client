import React, { useEffect } from 'react'
import Card from './Card.js'
import banner from '../../assets/adopt-banner.png'
import steps from '../../assets/adoptSteps.png'
import { useSelector } from 'react-redux';
import style from './Adopt.module.css'
import Paginate from './Filters/Paginate.js';
import Filters from './Filters/Filters.js';
import Loading from '../Loading/Loading'
import Aside from './Aside/Aside.js';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function Adopt(){
    
    const {filtered,pages} = useSelector(state => state.petsFiltered)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let renderPerPage = [] 
    if(pages) renderPerPage = pages
    else if (filtered) renderPerPage = filtered.slice(0,12)
    
    return (
        <>
            <div className={style.banner}>
                <div>
                <h1 className={style.sectionTitle}>Adoptá</h1>
                <p >En este espacio va un eslogan para captar<br></br> la atención del usuario</p>
                </div>
                <img src={banner} alt="Banner of animals"/>
            </div>

            <div className={style.containerFunctionality}>
                <h2 className={style.innerTittles}>¿Cómo funciona?</h2>
                <div className={style.containerSteps} >
                    <div>
                        <div className={style.functionalitySteps}
                            data-aos="fade-right"
                            data-aos-duration="500">
                            <span>- Paso 1 -</span>
                            <p>Lo primero que debes hacer buscar en nuestra red de refugios a tu huella favorita.
                                Para ello tendras distintos filtros disponibles que te ayudarán a tomar la decision.
                            </p>
                        </div>
                        <div className={style.functionalitySteps}
                            data-aos="fade-left"
                            data-aos-duration="1000">
                            <span>- Paso 2 -</span>
                            <p> Una vez que hayas encontrado a tu compañero ideal tendrás que presionar sobre el botón "Salva mi huella",
                              para ponerte en contacto con la fundación y empezar el proceso de adopción.
                            </p>
                        </div>
                    </div>
                    <img id={style.steps} src={steps} alt="steps"/>
                </div>
            </div>
            <div className={style.allAnimals}>
                <Filters/>
            </div>
            {renderPerPage  ?
                <div className={style.containerAnimals}>
                    <div>
                        <div className={style.cardContainer}>
                                {renderPerPage.map(pet => (
                                    <Card 
                                    id={pet.id}
                                    key= {pet.id}
                                    age ={pet.age}
                                    name={pet.name}
                                    img={pet.images} 
                                    />
                                ))}

                        </div>
                            <Paginate/>
                    </div>
                    <div>
                        <Aside/>
                    </div>
                </div>
            :
                <Loading/>
            }
            <Footer/>
        </>
    )
}