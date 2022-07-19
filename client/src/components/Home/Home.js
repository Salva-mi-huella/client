import React from 'react';
import styles from './Home.module.css';
import Footer from '../Footer/Footer.js';
import Carousel from '../Carousel/Carousel';
import logo_1 from '../../logos/Ellipse1.png';
import logo_2 from '../../logos/Ellipse2.png';
import logo_3 from '../../logos/Ellipse3.png';
import logo_4 from '../../logos/Ellipse4.png';
import logo_5 from '../../logos/Ellipse5.png';

export default function Home() {
    return (
        <div className={styles.main}>               
            <div>
                <Carousel/>
            </div>
            <section>
                <div className={styles.containers}>
                    <h1> Fundaciones </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod </p>
                    <button className='btn btn-secondary'>INSCRIBIRME</button>
                </div>
                <div className={styles.containers}>
                    <h1>Donaciones</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    <button className='btn btn-secondary'>DONAR</button>
                </div>
                <div className={styles.containers}>
                    <h1>Adopciones</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    <button className='btn btn-secondary'>ADOPTAR</button>
                </div>
            </section>
            <section>
                <div>
                    <h1>Nuestras Fundaciones</h1>
                </div>
                <div className={styles.logos}>
                    <div>
                        <img src={logo_1} alt="logo_1"></img>
                        <p>Garritas a salvo</p>
                    </div>
                    <div>
                        <img src={logo_2} alt="logo_1"></img>
                        <p>Arriba las patitas</p>
                    </div>
                    <div>
                        <img src={logo_3} alt="logo_1"></img>
                        <p>Arriba las trompitas</p>
                    </div>
                    <div>
                    <img src={logo_4} alt="logo_1"></img>
                    <p>Rescataditos</p>
                    </div>
                    <div>
                    <img src={logo_5} alt="logo_1"></img>
                    <p>Patitas glew</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>Quienes Somos</h1>                
                </div>
                <div className={styles.info}>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod </p>
                    </div>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
            
        
        
        </div>      
        )
    }