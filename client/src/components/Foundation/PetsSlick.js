import React, { Component } from "react";
import Slider from "react-slick";
import styles from './Foundation.module.css'
import { Link } from 'react-router-dom';
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


export default function PetSlick ({foundation}) {

 const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30vw",
      slidesToShow: 3,
      speed: 400,
      autoplay: true
    };

    return (
      <div className={styles.pets}>
        <Slider {...settings}>
          {foundation.pets.map(pet => (
            <Card sx={{ maxWidth: 300, backgroundColor: 'purple', color: 'rgb(255, 230, 0);', border: '1px solid white'}}>
                <CardHeader sx={{ color: 'white', padding: '0.7vw', fontWeight: 'bold'}}
                    action={
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: 'yellow'}}/>
                    </IconButton>
                    }
                    title={pet.name}
                    />
                    <h5 className={styles.age}>{pet.age}</h5>
                <Link className={styles.link} to={`/huella/${pet.id}`}>
                    <CardMedia
                        component="img"
                        height="250vw"
                        image={pet.images[0]}
                        alt="pet picture"
                        />
                </Link>
            </Card>
        ))}
        </Slider>
      </div>
    );
  }
