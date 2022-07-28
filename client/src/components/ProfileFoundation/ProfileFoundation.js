import React, { useState } from 'react';

import Sidebar from './Sidebar/Sidebar.jsx'
import MainDash from './MainDash/MainDash.jsx';
import RightSide from './RightSide/RightSide.jsx';
import EditProfile from './EditProfile/EditProfile.jsx';
import InfoPets from './InfoPets/InfoPets.jsx';
import AdoptionRequests from './AdoptionRequests/AdoptionRequests.jsx';
import Inbox from './Inbox/Inbox.jsx';

import styles from '../ProfileFoundation/ProfileFoundation.module.css';




export default function ProfileFoundation() {

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
                            <RightSide />
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
                            <InfoPets />
                        </>
                    )
                }
                {
                    optionSelection === 3 && (
                        <>
                            <AdoptionRequests />
                        </>
                    )
                }
                {
                    optionSelection === 4 && (
                        <>
                            <Inbox />
                        </>
                    )
                }
                {/* <MainDash />
                <RightSide /> */}

            </div>

        </div >
    )
}


