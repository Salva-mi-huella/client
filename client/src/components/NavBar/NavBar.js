import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css';
import logo from '../../assets/logo.png';

export default function NavBar() {

    return (
            <nav className={s.nav}>
                 <div>
                    <Link to='/home'><img className={s.logo} src={logo} alt='logo'></img></Link> 
                 </div>

                 <div className={s.navCenter}>
                    <Link className={s.link} to='/salvaUnaHuella'><h4>Adoptar</h4></Link>
                    <Link className={s.link} to='/donaciones'><h4>Donar</h4></Link>
                    <Link className={s.link} to='/noticias'> <h4>Noticias</h4></Link>
                    <Link className={s.link} to='/nosotros'><h4>Sobre Nosotros</h4></Link>
                </div>

                <div className={s.navCenter}>
                    <h4>Iniciar Sesion</h4>
                    <h4>Registrarse</h4>
                </div>
            </nav>
       )
 }