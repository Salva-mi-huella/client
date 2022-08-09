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
import Transito from './Transito/Transito.jsx';

import NavBar from '../NavBar/NavBar.js';


import styles from '../ProfileFoundation/ProfileFoundation.module.css';
import { getFoundations, getRequestsAdopt } from '../../redux/actions/index.js';

export default function ProfileFoundation() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getFoundations());
        dispatch(getRequestsAdopt())
    }, [dispatch])

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);
    let requests = useSelector(state => state.requests_adopt);

    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }




    const [optionSelection, setOptionSelection] = useState(0)

    return (

        <>
            <NavBar />

            <div className={styles.profileFoundation} >

                <div className={styles.containerGlass} >

                    <Sidebar
                        foundation={foundation}
                        optionSelection={optionSelection}
                        setOptionSelection={setOptionSelection}
                    />

                    {
                        optionSelection === 0 && (
                            <>
                                <MainDash foundation={foundation} requests={requests} />
                                <RightSide foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 1 && (
                            <>
                                <EditProfile foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 2 && (
                            <>
                                <InfoPets foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 3 && (
                            <>
                                <AdoptionRequests foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 4 && (
                            <>
                                <PostNews foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 5 && (
                            <>
                                <PostPet foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 6 && (
                            <>
                                <Donations foundation={foundation} />
                            </>
                        )
                    }
                    {
                        optionSelection === 7 && (
                            <>
                                <Transito />
                            </>
                        )
                    }
                    {
                        optionSelection === 8 && (
                            <>
                                <Inbox foundation={foundation} />
                            </>
                        )
                    }
                </div>

            </div >
        </>
    )
}


