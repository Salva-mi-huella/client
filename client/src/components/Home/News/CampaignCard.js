import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './CampaignCard.module.css';
import {Link} from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function News({news}) {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(news)



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