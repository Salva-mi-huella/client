
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar.jsx'
// import MainDash from './MainDash/MainDash.jsx';
import EditProfile from './EditProfile/EditProfile.jsx';
import Users from './Users/Users.jsx';
import Foundations from './Foundations/Foundations.jsx';
import styles from '../ProfileAdmin/ProfileAdmin.module.css';
import Request from './Request/Request.jsx';
import Products from './Products/Products.jsx';
import Donations from './Donations/Donations.jsx';
import AddProducts from './AddProducts/AddProducts.jsx';
import AddFoundations from './AddFoundations/AddFoundations.jsx';
import { getRequestsFoundations } from '../../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar.js';




export default function ProfileAdmin() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestsFoundations())
    }, [dispatch]);

    const requests_foundations = useSelector(state => state.requests_foundations);

    const [optionSelection, setOptionSelection] = useState(0)

    return (
        <>
            <NavBar />
            
        <div className={styles.profileFoundation} >

            <div className={styles.containerGlass} >
                <Sidebar
                    optionSelection={optionSelection}
                    setOptionSelection={setOptionSelection}
                />
                {
                    optionSelection === 0 && (
                        <>
                            <EditProfile />
                        </>
                    )
                }
                {
                    optionSelection === 1 && (
                        <>
                            <Users />
                        </>
                    )
                }
                                {
                    optionSelection === 2 && (
                        <>
                            <AddFoundations/>
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
                            <Request requests_foundations={requests_foundations} />
                        </>
                    )
                }
                {
                    optionSelection === 5 && (
                        <>
                            <AddProducts />
                        </>
                    )
                }
                {
                    optionSelection === 6 && (
                        <>
                            <Products />
                        </>
                    )
                }
                {
                    optionSelection === 7 && (
                        <>
                            <Donations />
                        </>
                    )
                }

            </div>

        </div >
        </>
    )
}

