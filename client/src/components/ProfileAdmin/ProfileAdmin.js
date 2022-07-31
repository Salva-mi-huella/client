import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar.jsx'
import MainDash from './MainDash/MainDash.jsx';
import EditProfile from './EditProfile/EditProfile.jsx';
import Users from './Users/Users.jsx';
import Foundations from './Foundations/Foundations.jsx';
import styles from '../ProfileAdmin/ProfileAdmin.module.css';
import Request from './Request/Request.jsx';




export default function ProfileAdmin() {

    const [optionSelection, setOptionSelection] = useState(0)

    return (
        <div className={styles.profileFoundation} >

            <div className={styles.containerGlass} >
                <Sidebar
                    optionSelection={optionSelection}
                    setOptionSelection={setOptionSelection}
                />
                {
                    optionSelection === 0 && (
                        <>
                            <MainDash />
                        </>
                    )
                }
                {
                    optionSelection === 1 && (
                        <>
                            <EditProfile />
                        </>
                    )
                }
                {
                    optionSelection === 2 && (
                        <>
                            <Users />
                        </>
                    )
                }
                {
                    optionSelection === 3 && (
                        <>
                            <Foundations />
                        </>
                    )
                }
                {
                    optionSelection === 4 && (
                        <>
                            <Request />
                        </>
                    )
                }

            </div>

        </div >
    )
}


