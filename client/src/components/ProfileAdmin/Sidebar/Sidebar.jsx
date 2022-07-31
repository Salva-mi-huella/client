import React from 'react';
import '../Sidebar/Sidebar.css'

import { SidebarData } from '../Data/Data.js';
import { MdLogout } from 'react-icons/md';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';




const Sidebar = ({ optionSelection, setOptionSelection }) => {

    const [selected, setSelected] = useState(0);

    const changeOption = (index) => {
        setSelected(index);
        setOptionSelection(index);
    }

    const {user, logout} = useAuth0();
    return (
        <div className="Sidebar">

            {/* LOGO */}
            <div className="logo">
                <img src={user.picture} alt='Foundation logo' />
                    Hola {user.name}
            </div>

            {/* MENU */}
            <div className="menu">
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

                <div className="menuItem" onClick={()=>logout({returnTo:'http://localhost:3000/home'})}>
                         <MdLogout />
                         <span> Cerrar Sesion </span>
                </div>


            </div>
        </div>
    )
}

export default Sidebar;