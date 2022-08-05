import React from 'react';
import { SidebarData } from '../Data/Data.js';
import { MdLogout } from 'react-icons/md';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../Sidebar/Sidebar.module.css';



const Sidebar = ({ optionSelection, setOptionSelection }) => {

    const [selected, setSelected] = useState(0);

    const changeOption = (index) => {
        setSelected(index);
        setOptionSelection(index);
    }

    const {user, logout} = useAuth0();
    console.log(user)
    return (
        <div className={styles.sideBar}>

            {/* LOGO */}
            <div className={styles.logo}>
                <img className={styles.img} src={user.picture}  />
                Hola {user.name}
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
                            <span>{item.heading}</span>
                        </div>
                    )
                })}

                <div className={styles.menuItem} onClick={()=>logout({returnTo:`${window.location.origin}/home`})}>
                         <MdLogout />
                         <span> Cerrar Sesion </span>
                </div>


            </div>
        </div>
    )
}

export default Sidebar;