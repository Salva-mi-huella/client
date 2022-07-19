import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';

export default function NavBar() {

    return (
            <nav className={styles.nav}>
                 <div>
                    <Link to='/home'><img className={styles.logo} src={logo} alt='logo'></img></Link> 
                 </div>
                 <div className={styles.navCenter}>
                    <Link className={styles.link} to='/adoptar'><h4>Adoptar</h4></Link>
                    <Link className={styles.link} to='/donaciones'><h4>Donar</h4></Link>
                    <Link className={styles.link} to='/noticias'> <h4>Noticias</h4></Link>
                    <Link className={styles.link} to='/nosotros'><h4>Sobre Nosotros</h4></Link>
                </div>

                <div className={styles.navCenter}>
                    <h4>Iniciar Sesion</h4>
                    <h4>Registrarse</h4>
                </div>
            </nav>
            
       )
 }