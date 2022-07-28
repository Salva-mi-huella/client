import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './ProfileUser.module.css';
// import Backdrop from '@mui/material/Backdrop';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import { set, useForm } from 'react-hook-form';
import paw from '../../assets/paw-print.png';
import HomeIcon from '@mui/icons-material/Home';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

import RequestTable from './Table/RequestTable';
import DonationTable from './Table/DonationTable';
import EditDataForm from './EditDataForm';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [myData, setMyData] = React.useState(true);
  const [favs, setFavs] = React.useState(false);
  const [datos, setDatos] = React.useState(false);
  const [userData, setUserData] = React.useState({
    dni: '',
    telefono: '',
    direccion: '',
    nacimiento: '',
  });
  const [solicitudes, setSolicitudes] = React.useState(false);
  const [donations, setDonations] = React.useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { user, isLoading } = useAuth0();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const goHome = () => {
    window.location.href = '/home';
  }
  const viewData = () => {
    setMyData(true);
    setDonations(false);
    setFavs(false);
    setSolicitudes(false);
  }
  const viewDonations = () => {
    setDonations(true);
    setMyData(false);
    setFavs(false);
    setSolicitudes(false);
  }
  
  const viewFavs = () => {
    setFavs(true);
    setMyData(false);
    setDonations(false);
    setSolicitudes(false);
  }
  const viewAdoptSolicitudes = () => {
    setFavs(false);
    setMyData(false);
    setDonations(false);
    setSolicitudes(true);
  }
  const onSubmit = (data) => {
    console.log(data);
    setDatos(false)
    setUserData({
      dni: data.dni,
      telefono: data.telefono,
      direccion: data.direccion,
      nacimiento: data.nacimiento,
    });
    alert('Datos actualizados');
  }

  const enviarDatos = () => {
    setDatos(true)
  }


  return (
    <div><Box sx={{ display: 'flex', color: 'black' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'purple'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mi Perfil
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'purple'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{color: 'white' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List 
                 style={{ color: 'azure', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        
        > 
            <ListItemButton onClick={goHome} sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><HomeIcon sx={{color: 'white'}}/></ListItemIcon>Home</ListItemButton>
            <ListItemButton onClick={viewData} sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><SettingsAccessibilityIcon sx={{color: 'white'}}/></ListItemIcon>Mis datos</ListItemButton>
            <ListItemButton onClick={viewDonations} sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><VolunteerActivismIcon sx={{color: 'white'}}/></ListItemIcon>Mis donaciones</ListItemButton>
            <ListItemButton onClick={viewFavs} sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><FavoriteIcon sx={{color: 'white'}}/></ListItemIcon>Favoritos</ListItemButton>
            <ListItemButton onClick={viewAdoptSolicitudes} sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><ContentPasteIcon sx={{color: 'white'}}/></ListItemIcon>Solicitudes de adopción</ListItemButton>
            <ListItemButton sx={{color: 'white', marginBottom:'20px'}}><ListItemIcon><img className={styles.paw} src={paw} alt='paw'></img></ListItemIcon>2300</ListItemButton>
        </List>    
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
    {myData && <EditDataForm datos={datos} setDatos={setDatos} /> }

    {donations && <DonationTable></DonationTable>}

    {favs && <div className={styles.favs}>
      <h1>Favoritos</h1>
      <p>No hay favoritos.</p>
      </div>}

    {solicitudes && <RequestTable></RequestTable>}

    </div>
  );
}

