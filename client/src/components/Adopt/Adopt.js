import React, { useEffect } from 'react'
import Card from './Card.js'
import banner from '../../assets/banner-adopt1.png'
import banner2 from '../../assets/banner-cat2.png'
import step1 from '../../assets/step-1.png'
import step2 from '../../assets/step-2.png'
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
        <div className={style.container}>

            <div className={style.banner}>
                <div>
                    <h1 className={style.sectionTitle}>Adoptá un amigo,</h1>
                    <p>¡No lo compres!</p>
                </div>
                <img className={style.dogBanner}src={banner} alt="Banner of animals"/>
            </div>

            <div className={style.userInfo}>
                    <div className={style.subInfoA} 
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        >
                        <div>
                            <h1>- Paso 1 -</h1>
                            <p>Lo primero que debes hacer buscar en nuestra red de refugios a tu huella favorita.
                                Para ello tendras distintos filtros disponibles que te ayudarán a tomar la decision.
                            </p>
                        </div>
                            <img  src={step1} alt='register'></img>
                    </div>

                    <div className={style.subInfoC} 
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        >
                            <img  src={step2} alt='gift'></img>
                        <div className={style.subInfoB}>
                            <h1>- Paso 2 -</h1>
                            <p>Una vez que hayas encontrado a tu compañero ideal tendrás que presionar sobre el botón "Salva mi huella",
                              para ponerte en contacto con la fundación y empezar el proceso de adopción.</p>
                        </div>
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
        </div>
        </>
    )
}