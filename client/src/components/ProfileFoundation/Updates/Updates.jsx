import React from 'react';
import styles from './Updates.module.css';

const Updates = ({foundation}) => {


    return (
        <div className={styles.updatedNewsContainer}>

            {foundation?.news.map((update) => 
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
            )}

        </div>
    )
}

export default Updates;