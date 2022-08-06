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
import Users from '../ProfileAdmin/Users/Users.jsx';

export default function ProfileFoundation() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getFoundations());
        dispatch(getRequestsAdopt())
    }, [dispatch])

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);
    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }




    const [optionSelection, setOptionSelection] = useState(0)

    return (
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
                            <MainDash foundation={foundation} />
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
                            <Users />
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
    )
}


