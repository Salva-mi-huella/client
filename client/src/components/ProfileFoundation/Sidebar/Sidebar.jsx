import React from 'react';
import logoDemo from '../../../assets/logos/Ellipse1.png'
import '../Sidebar/Sidebar.css'

import { SidebarData } from '../Data/Data.js';
import { MdLogout } from 'react-icons/md';
import { useState } from 'react';


const Sidebar = () => {

    const [selected, setSelected] = useState(0);


    return (
        <div className="Sidebar">

            {/* LOGO */}
            <div className="logo">
                <img src={logoDemo} alt='Foundation logo' />
                <span>
                    {/* Foundation Name */}
                    H<span>o</span>me
                </span>
            </div>

            {/* MENU */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <MdLogout />
                    <span>
                        Logout
                    </span>
                </div>


            </div>






        </div>
    )
}

export default Sidebar;