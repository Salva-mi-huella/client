import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from './Sidebar/Sidebar.jsx'
import MainDash from './MainDash/MainDash.jsx';
import RightSide from './RightSide/RightSide.jsx';
import EditProfile from './EditProfile/EditProfile.jsx';
import InfoPets from './InfoPets/InfoPets.jsx';
import AdoptionRequests from './AdoptionRequests/AdoptionRequests.jsx';
import Inbox from './Inbox/Inbox.jsx';
import Donations from './Donations/Donations.jsx';
import PostNews from './PostNews/PostNews';
import PostPet from '../PostPet/PostPet.js';


import styles from '../ProfileFoundation/ProfileFoundation.module.css';
import { getFoundations, getRequestsAdopt } from '../../redux/actions/index.js';

export default function ProfileFoundation() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getFoundations());
        dispatch(getRequestsAdopt())
    }, [dispatch])



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
                            <PostNews />
                        </>
                    )
                }
                {
                    optionSelection === 5 && (
                        <>
                            <PostPet />
                        </>
                    )
                }
                {
                    optionSelection === 6 && (
                        <>
                            <Donations />
                        </>
                    )
                }
                {/* {
                    optionSelection === 7 && (
                        <>
                            <Inbox />
                        </>
                    )
                } */}
            </div>

        </div >
    )
}


