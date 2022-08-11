import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styles from './NewsCard.module.css';

export default function News({ news }) {

    return (
        <div className={styles.container}>

            <Card sx={{ width: '25vw', height: '32vw', backgroundColor: "#fff", borderRadius: '25px' }}>

                <CardHeader
                    title={
                        <div className={styles.titleContainer}>
                            <span>{news.title}</span>
                        </div>}
                    avatar={
                        <div className={styles.imgContainer}>
                            <img className={styles.avatar} src={news.foundationsImage} alt="" />
                            <div className={styles.dateContainer}>
                                <span>{news.post_date}</span>
                            </div>
                        </div>
                    }

                    // subheader={<div className={styles.date}>{news.post_date}</div>}
                    sx={{ color: "white" }}
                />

                <CardMedia>
                    <img className={styles.image} src={news.images} alt='newImage'></img>
                </CardMedia>

                {/* component="img"
                                height="250"
                                image={news.images}
                                alt="newsImage"
                            /> */}
                <CardContent>
                    <p className={styles.description}>{news.description}</p>
                </CardContent>
            </Card>
        </div>
    );
}

