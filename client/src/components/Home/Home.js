import React from 'react';
import styles from './Home.module.css';
import Carousel from '../Carousel/Carousel';

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
                <h1>Nuestras Fundaciones</h1>
            </section>
        
        
        
        </div>      
        )
    }