import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
// import logo from '../../assets/yellow-paw.png';
//import paw from '../../assets/paw-print.png';
import paw from '../../assets/yellow-paw.png';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../Profile/ProfileMenu';
import {getFoundations, getUserByEmail} from '../../redux/actions';
import { getUserSession } from '../../utils';

export default function NavBar({userInfo}) {

  const { isAuthenticated, loginWithRedirect, user  } = useAuth0();

  const dispatch = useDispatch();
  const [active, setActive] = useState(false)

  const foundations = useSelector(state => state.foundations);

  const checkFoundation = () => {
    return foundations?.find(f => f.email === user?.email)
  }
  const handleLogin =() =>{
    loginWithRedirect()
    localStorage.clear()
  }
  const handleMenu = ()=>{
    if(active) setActive(false)
    else setActive(true)
  }

 useEffect(()=>{
    dispatch(getFoundations());
    const isFoundation = checkFoundation();
    if(isAuthenticated && !isFoundation){
      dispatch(getUserByEmail(user.email));
    }
}, [isAuthenticated, dispatch]);


const userDetail = useSelector(state => state.user);
   
    return (
            <nav className={styles.nav}>
                 <div>
                    <Link to='/home'><img className={styles.logo} src={logo} alt='logo'></img></Link> 
                 </div>
                 <div className={styles.containerNav}>
                  <div>
                    <i onClick={handleMenu} className={`${styles.hamburger} fa-solid fa-bars `}></i>
                  </div>
                  <div className={`${styles.navCenter} ${active ? styles.block : ""}`}>
                      <Link className={styles.link} to='/adoptar'><p>Adoptar</p></Link>
                      <Link className={styles.link} to='/donar'><p>Donar</p></Link>
                      <Link className={styles.link} to='/nosotros'><p>Nosotros</p></Link>
                      <Link className={styles.link} to='/huellitas'><p>Huellitas</p></Link>
                      <Link className={styles.link} to='/tienda'><p>Tienda</p></Link>
                  </div>
                  <div>
                  { isAuthenticated && user ? 
                    <div className={styles.profile}>
                      {userDetail.points && !checkFoundation() && !userDetail.admin && <div><span>
                        {new Intl.NumberFormat().format(userDetail.points)}</span><img className={styles.paw} src={paw} alt='paw'></img></div>}
                      <ProfileMenu></ProfileMenu>
                    </div>
                    : 
                    <div className={styles.signUp}>
                      <button onClick={handleLogin} >Ingresar</button> 
                    </div>
                  </div>
                 </div>
            </nav>
            
       )
 }

 