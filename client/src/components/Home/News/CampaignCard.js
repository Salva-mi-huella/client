import * as React from 'react';
import styles from './CampaignCard.module.css';
import { Link } from 'react-router-dom';


export default function News({ news }) {


    return (
        <div className={styles.container}>


            <div className={styles.campaignImageContainer}>
                <img className={styles.campaignImage} src={news.images[0]} alt='campaignImage'></img>
            </div>

            <div className={styles.subContainer}>

                <div className={styles.titleSection} >

                    <div className={styles.titleContainer} >
                        <h1>{news.title}</h1>
                    </div>

                    <div className={styles.foundationImageContainer}>
                        <img className={styles.foundationImage} src={news.foundationsImage} alt='foundation'></img>
                        <span>{news.post_date}</span>
                    </div>
                </div>

                <p>{news.description}</p>

                <div className={styles.btnContainer}>
                    <Link to='/donar'><button>QUIERO AYUDAR</button></Link>
                </div>
            </div>


        </div>
    );
}
