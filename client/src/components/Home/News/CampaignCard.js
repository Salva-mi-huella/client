import * as React from 'react';
import styles from './CampaignCard.module.css';
import {Link} from 'react-router-dom';


export default function News({news}) {


  return (
      <div className={styles.container}>
        <img className={styles.campaignImage} src={news.images[0]} alt='campaignImage'></img>
        <div className={styles.subContainer}>
            <div className={styles.titleSection} >
                <h1>{news.title}</h1>
                <img  className={styles.foundationImage} src={news.foundationsImage} alt='foundation'></img>
            </div>
            <span>{news.post_date}</span>
            <p>{news.description}</p>
            <Link to='/donar'><button>QUIERO AYUDAR</button></Link>
        </div>
     </div>
    );
}
