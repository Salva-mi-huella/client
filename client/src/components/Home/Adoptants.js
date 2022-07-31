import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import adoptant_a from '../../assets/adoptant_a.jpg';
import adoptant_d from '../../assets/adoptant_d.png';
import adoptant_c from '../../assets/adoptant_c.png';

export default function Adoptants() {
  return (
    <div>
   <Card sx={{ maxWidth: 345, backgroundColor:'transparent', color: 'white', border: 'none', borderRadius: "10px 10px 0 0 " }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {adoptant_c}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mariano, Laura y Rocco
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, backgroundColor:'transparent', color: 'white', border: 'none', borderRadius: "10px 10px 0 0 " }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {adoptant_a}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mariela y Frida
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, backgroundColor:'transparent', color: 'white', border: 'none', borderRadius: "10px 10px 0 0 " }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {adoptant_d}
            alt="adoptant d"
          />
          <CardContent s={{ display: 'flex', flexDirection: 'row'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingRight: '13px'}}>
              Mariano y Manchas
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>


    </div>
  );
}