import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Updates.module.css';

const Updates = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    // const { user } = useAuth0();
    // const dispatch = useDispatch();
    let foundation = useSelector(state => state.foundations);

    if (user) {
        // console.log(user, 'user info');
        foundation = foundation.find(f => f.email === user.email);
        // console.log(foundation, 'foundation info');
    }

    // React.useEffect(() => {
    //     dispatch(getFoundations());
    // }, [dispatch])

    return (
        <div className={styles.updatedNewsContainer}>

            {foundation?.news.map((update) => {
                return (

                    <div className={styles.singleUpdateContainer}>

                        <div className={styles.singleNew}>
                            <img className={styles.singleUpdateImg} src={update.images[0]} alt='User not available' />
                            <span className={styles.singleUpdateDate} >
                                {update.campaign ? <div className={styles.campaign}> </div> : null}
                                {update.post_date}
                            </span>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span className={styles.description} > {update.description}</span>
                            </div>

                        </div>
                    </div>

                )
            })}

            {foundation?.news.map((update) => {
                return (

                    <div className={styles.singleUpdateContainer}>

                        <div className={styles.singleNew}>
                            <img className={styles.singleUpdateImg} src={update.images[0]} alt='User not available' />
                            <span className={styles.singleUpdateDate} >
                                {!update.campaign ? <div className={styles.campaign}> </div> : null}
                                {update.post_date}
                            </span>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span className={styles.description} > {update.description}</span>
                            </div>

                        </div>
                    </div>

                )
            })}


            {foundation?.news.map((update) => {
                return (

                    <div className={styles.singleUpdateContainer}>

                        <div className={styles.singleNew}>
                            <img className={styles.singleUpdateImg} src={update.images[0]} alt='User not available' />
                            <span className={styles.singleUpdateDate} >
                                {!update.campaign ? <div className={styles.campaign}> </div> : null}
                                {update.post_date}
                            </span>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span className={styles.description} > {update.description}</span>
                            </div>

                        </div>
                    </div>

                )
            })}

            {foundation?.news.map((update) => {
                return (

                    <div className={styles.singleUpdateContainer}>

                        <div className={styles.singleNew}>
                            <img className={styles.singleUpdateImg} src={update.images[0]} alt='User not available' />
                            <span className={styles.singleUpdateDate} >
                                {!update.campaign ? <div className={styles.campaign}> </div> : null}
                                {update.post_date}
                            </span>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p>{update.title}</p>
                                <span className={styles.description} > {update.description}</span>
                            </div>

                        </div>
                    </div>

                )
            })}




        </div>
    )
}

export default Updates;