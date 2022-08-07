import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import styles from './NewsCard.module.css';

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

  return (
      <div className={styles.container}>
            <Card sx={{ maxWidth: 400, height: 450, backgroundColor: "rgba(99, 59, 218, 0.485)"}}>
                        <CardHeader
                            avatar={<div><img className={styles.avatar} src={news.foundationsImage} alt=""/></div>}
                            title={<div className={styles.title}>{news.title}</div>}
                            subheader={<div className={styles.date}>{news.post_date}</div>}
                            sx={{ color: "white"}}
                            />
                            <CardMedia
                                component="img"
                                height="250"
                                image={news.images}
                                alt="newsImage"
                            />
                            <CardContent>
                                <Typography>
                                {news.description}
                                </Typography>
                            </CardContent>
                    </Card>
            </div>
    );
}

