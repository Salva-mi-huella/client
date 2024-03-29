import React, {useState}  from 'react'
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/dog-carrousel.png'
import img2 from '../../assets/cat-carrousel3.jpg'
import shelter from '../../assets/icon-shelter1.png'


export default function ControlledCarousel({foundations}) {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item className={styles.caru25}> 
        <div className={styles.container}>
            <div className={styles.containerimg}>               
                <img  
                    className={styles.imgadoption}                  
                    src={img1}
                    alt="First img - Slide one"
                />                       
        </div>
            
            <div className={styles.containertext}>
                <h1 className={styles.titles}>Adopciones</h1>
                <p className={styles.paragraph}>¿Todavía seguís buscando a tu compañero?<br/> ¡No lo busques más! Encontralo en nuestra red de refugios.</p>
                    <Link className={styles.link} to='/adoptar'><button>QUIERO ADOPTAR</button></Link>
            </div>
       
        </div>
        </Carousel.Item>

        <Carousel.Item className={styles.caru25}>
        <div className={styles.container}>
            <div className={styles.shelter}>
                <img src={shelter} alt='foundation'></img>
            </div>
            <div className={styles.containertext2}>
                <h1 className={styles.titles}>Fundaciones</h1>
                <p className={styles.paragraph}>¿Te gustaría ser parte de nuestra familia? <br/>Contactate con nosotros y empezá ya <br></br>  el proceso de inscripción.</p>
                    <Link className={styles.link} to='/contacto'><button>QUIERO SER PARTE</button></Link>
            </div>
        </div>
        </Carousel.Item>

        <Carousel.Item className={styles.caru25}>
        <div className={styles.containerDonate}>
            <div className={styles.containertext2}>
                <h1 className={styles.titles}>Donaciones</h1>
                <p className={styles.paragraph}>Tu aporte de hoy puede ser <br></br>mi comida de mañana.</p>
                <Link className={styles.link} to='/donar'><button>QUIERO DONAR</button></Link>
            </div>
            <div>
                <img   
                className={styles.imgdonation}             
                src={img2}
                alt="Foundations"
                />
            </div>
        </div>
        </Carousel.Item>   
        </Carousel>
        );

    }