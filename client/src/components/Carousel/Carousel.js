import React, {useState}  from 'react'
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/images/gato2.png'
import img2 from '../../assets/images/perro2.png'
import img3 from '../../assets/images/fundaciones.png'
import img4 from '../../assets/images/donaciones.png'


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel variant="dark" className={styles.carousel} activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item> 
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
                <p className={styles.paragraph}>Encuentra a tu mejor amigo.<br/>Busca mascotas en nuestra red de refugios.</p>
                <Link to={'/adoptar'}>
                <button type="button" className="btn btn-dark btn-lg">Buscar</button>
                </Link>
            </div>

            <div  className={styles.containerimg}>               
                <img
                    className={styles.imgadoption}                    
                    src={img2}
                    alt="Second img - Slide one"
                />                  
            </div>            
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className={styles.container}>
            <div>
                <img
                className={styles.imgfoundation}
                src={img3}
                alt="First slide"
                />
            </div>
            <div className={styles.containertext}>
                <h1 className={styles.titles}>Fundaciones</h1>
                <p className={styles.paragraph}>¿Quieres ser parte de nuestra familia? <br/> Escribenos para realizar el proceso de registro.</p>
                <Link to={'/contacto'}>
                <button type="button" className="btn btn-dark btn-lg">Inscribirme</button>
                </Link>
            </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className={styles.container}>
            <div>
                <img   
                className={styles.imgdonation}             
                src={img4}
                alt="Foundations"
                />
            </div>
            <div className={styles.containertext}>
                <h1 className={styles.titles}>Donaciones</h1>
                <p className={styles.paragraph}>Tu aporte de hoy puede ser mi comida de mañana.</p>
                <Link to={'/donaciones'}>
                <button type="button" className="btn btn-dark btn-lg">Donar</button>
                </Link>
            </div>
        </div>
        </Carousel.Item>   
        </Carousel>
        );

    }