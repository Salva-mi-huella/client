import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UpdatesData } from '../Data/Data';
import styles from './Updates.module.css';

const Updates = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    // const { user } = useAuth0();
    // const dispatch = useDispatch();
    let foundation = useSelector(state => state.foundations);

    if (user) {
        // console.log(user, 'user info');
        foundation = foundation.find(f => f.email === user.email);
        console.log(foundation, 'foundation info');
    }

    // React.useEffect(() => {
    //     dispatch(getFoundations());
    // }, [dispatch])

    return (
        <div className={styles.updatedNewsContainer}>
            {foundation?.news.map((update) => {
                return (
                    <div className={styles.singleUpdateContainer}>
                        <img src={update.images[0]} alt='User not available' />
                        <div className={styles.singleNew}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span> {update.little_description}</span>
                            </div>
                            <span>{update.post_date}</span>
                        </div>


                    </div>
                )
            })}

            {foundation?.news.map((update) => {
                return (
                    <div className={styles.singleUpdateContainer}>
                        <img src={update.images[0]} alt='User not available' />
                        <div className={styles.singleNew}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span> {update.little_description}</span>
                            </div>
                            <span>{update.post_date}</span>
                        </div>


                    </div>
                )
            })}

            {foundation?.news.map((update) => {
                return (
                    <div className={styles.singleUpdateContainer}>
                        <img src={update.images[0]} alt='User not available' />
                        <div className={styles.singleNew}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span> {update.little_description}</span>
                            </div>
                            <span>{update.post_date}</span>
                        </div>


                    </div>
                )
            })}

            {foundation?.news.map((update) => {
                return (
                    <div className={styles.singleUpdateContainer}>
                        <img src={update.images[0]} alt='User not available' />
                        <div className={styles.singleNew}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span> {update.little_description}</span>
                            </div>
                            <span>{update.post_date}</span>
                        </div>


                    </div>
                )
            })}

            {foundation?.news.map((update) => {
                return (
                    <div className={styles.singleUpdateContainer}>
                        <img src={update.images[0]} alt='User not available' />
                        <div className={styles.singleNew}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span> {update.little_description}</span>
                            </div>
                            <span>{update.post_date}</span>
                        </div>


                    </div>
                )
            })}

        </div>
    )
}

export default Updates;