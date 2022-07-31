import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion/dist/framer-motion";

import { SidebarData } from '../Data/Data.js';
import logoDemo from '../../../assets/logos/Ellipse1.png'
import { MdLogout, MdList, MdReorder } from 'react-icons/md';
import '../Sidebar/Sidebar.css'

const Sidebar = ({ optionSelection, setOptionSelection }) => {

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);

    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }

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
                <div className="profileFoundationLogo">
                    <img src={foundation?.images[0]} alt='Foundation logo' />
                    <span>
                        H<span>o</span>me
                    </span>
                </div>

                {/* MENU */}
                <div className="sideBar-Menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={selected === index ? 'menuItem active' : 'menuItem'}
                                key={index}
                                onClick={() => changeOption(index)}
                            >
                                <item.icon />
                                <span className='itemText'>{item.heading}</span>
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