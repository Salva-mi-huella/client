import * as React from 'react';
import styles from './CampaignCard.module.css';
import {Link} from 'react-router-dom';


export default function News({news}) {


  return (
      <div className={styles.container}>
        <img className={styles.campaignImage} src={news.images[0]} alt='campaignImage'></img>
        <div>
            <div className={styles.titleSection} >
                <h1>{news.title}</h1>
                <img  className={styles.foundationImage} src={news.foundationsImage} alt='foundation'></img>
            </div>
            <span>{news.post_date}</span>
            <p>{news.description}</p>
            <Link to='/donar'><button>QUIERO AYUDAR</button></Link>
        </div>
            {/* <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                            avatar={
                            news.foundation?.images?.map((image)=>{
                                return(
                                    <div>
                                        <img className={styles.avatar} src={image} alt=""/>
                                    </div>
                                )
                            })
                            }
                            title={<div className={styles.title}>{news.title}</div>}
                            subheader={<div className={styles.date}>{news.post_date}</div>}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={news.images}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {news.little_description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {news.description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                    </Card> */}
            </div>
    );
}
