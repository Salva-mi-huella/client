import React, {useState}  from 'react'
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/images/gato2.png'
import img2 from '../../assets/images/perro2.png'
import img3 from '../../assets/images/fundaciones.png'
import img4 from '../../assets/images/donaciones.png'
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'


export default function ControlledCarousel({foundations}) {
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
                <p className={styles.paragraph}>¿Estás listo para encontrar a tu mejor amigo?<br/>Busca a tu compañero en nuestra red de refugios.</p>
                <Link className={styles.link} to={'/adoptar'}>
                    <Button />
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
            <div className={styles.foundations}>
            {foundations.length>0 && foundations.map(f => (
                <img src={f.images[0]} alt='foundation'></img>
            ))}
            </div>
            <div className={styles.containertext2}>
                <h1 className={styles.titles}>Fundaciones</h1>
                <p className={styles.paragraph}>¿Te gustaría ser parte de nuestra familia? <br/>Contactate con nosotros <br></br> y empezá ya el proceso de inscripción.</p>
                <Link className={styles.link} to={'/contacto'}>
                    <Button2></Button2>
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
            <div className={styles.containertext2}>
                <h1 className={styles.titles}>Donaciones</h1>
                <p className={styles.paragraph}>Tu aporte de hoy puede salvar una huella.</p>
                <Link className={styles.link} to={'/donar'}>
                <Button3></Button3>
                </Link>
            </div>
        </div>
        </Carousel.Item>   
        </Carousel>
        );

    }