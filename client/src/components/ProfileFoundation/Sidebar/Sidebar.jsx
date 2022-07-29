import React, { useState } from 'react';

import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion/dist/framer-motion";


import { SidebarData } from '../Data/Data.js';
import { MdLogout, MdList, MdReorder } from 'react-icons/md';

import logoDemo from '../../../assets/logos/Ellipse1.png'
import '../Sidebar/Sidebar.css'

const Sidebar = ({ optionSelection, setOptionSelection }) => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    const changeOption = (index) => {
        setSelected(index);
        setOptionSelection(index);
    }

    return (
        <>
            <div className="bars" style={expanded ? { left: '25%', top: '8%' } : { left: '5%', top: '8%' }} onClick={() => setExpaned(!expanded)}>
                <MdList />
            </div>

            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >

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
                                onClick={() => changeOption(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}

                    <div className="menuItem">
                        <MdLogout />
                        <span>
                            Cerrar Sesion
                        </span>
                    </div>


                </div>


            </motion.div>
        </>
    )
}

export default Sidebar;