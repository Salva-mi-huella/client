import React, { useEffect } from 'react';
import { SidebarData } from '../Data/Data.js';
import { MdLogout } from 'react-icons/md';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../Sidebar/Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByEmail } from '../../../redux/actions/index.js';
import { getUserSession, removeUserSession } from "../../../utils";




const Sidebar = ({ optionSelection, setOptionSelection }) => {

    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();

    const changeOption = (index) => {
        setSelected(index);
        setOptionSelection(index);
    }

    const handleLogout = () => {
        logout({returnTo: `${window.location.origin}/home`});
        localStorage.clear();
        removeUserSession();
      }

    const {user, logout} = useAuth0();
    const userDetail = useSelector(state => state.user);
    // const userName = user.name.split(" ")
    useEffect(() => {
        dispatch(getUserByEmail(user?.email));
    }, [dispatch])

    return (
        <div className={styles.sideBar}>

            {/* LOGO */}
            <div className={styles.logo}>
            <img className={styles.img} alt="logo" src={user.picture}  />
                <span>Hola, {userDetail?.name}</span>
            </div>

            {/* MENU */}
            <div className={styles.menu}>
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => changeOption(index)}
                        >
                            <item.icon />
                            <span className={styles.icons}>{item.heading}</span>
                        </div>
                    )
                })}

            </div>
            <div className={styles.menuItem} onClick={handleLogout}>
                         <MdLogout />
                         <span> Cerrar Sesion </span>
                </div>
        </div>
    )
}

export default Sidebar;