import React from 'react';

import MainDash from './MainDash/MainDash.jsx';
import Sidebar from './Sidebar/Sidebar.jsx'
import RightSide from './RightSide/RightSide.jsx';

import styles from '../ProfileFoundation/ProfileFoundation.module.css';



export default function ProfileFoundation() {
    return (
        <div className={styles.profileFoundation} >

            <div className={styles.containerGlass} >
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>

        </div >
    )
}


