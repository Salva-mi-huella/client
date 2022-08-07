import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './ProfileUser.module.css';
import paw from '../../assets/paw-print.png';
import HomeIcon from '@mui/icons-material/Home';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LogoutIcon from '@mui/icons-material/Logout';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import RequestTable from './Table/RequestTable';
import DonationTable from './Table/DonationTable';
import EditDataForm from './EditDataForm';
import ProductsTable from './Table/ProductsTable';
import { getUserSession } from '../../utils/index.js';
import { getAllPets, getUserByEmail } from '../../redux/actions';
import Card from '../Adopt/Card'





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

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 800,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [favs, setFavs] = React.useState(false);
  const [myData, setMyData] = React.useState(true);
  const [request, setRequests] = React.useState(false);
  const [products, setProducts] = React.useState(false);
  const [donations, setDonations] = React.useState(false);
  const { user, logout } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getUserByEmail(user.email))
  }, [dispatch])

 const userDetail = useSelector(state => state.user);
 const foundations = useSelector(state => state.foundations);
 const pets = useSelector(state => state.allPets);
 const favsPets = pets?.filter(p => p.id === userDetail.favs?.find(f => f === p.id));

  //  const points = function() {
  //   let points = 0;
  //   userDetail.donations?.forEach(donation => {
  //     points += donation.points;
  //   }) 
  //   return points 
  // }()

  // console.log(points)

  const handleLogout =() =>{
    localStorage.clear();
    logout({returnTo: `${window.location.origin}/home`}); 
  }
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
    setRequests(false);
    setProducts(false);
  }
  const viewDonations = () => {
    setMyData(false);
    setDonations(true);
    setFavs(false);
    setRequests(false);
    setProducts(false);
  }

  const viewFavs = () => {
    setMyData(false);
    setDonations(false);
    setFavs(true);
    setRequests(false);
    setProducts(false);
  }
  const viewAdoptSolicitudes = () => {
    setMyData(false);
    setDonations(false);
    setFavs(false);
    setRequests(true);
    setProducts(false);
  }

  const viewProducts = () => {
    setMyData(false);
    setDonations(false);
    setFavs(false);
    setRequests(false);
    setProducts(true);
  }

  return (
    <div><Box sx={{ display: 'flex', color: 'black' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'purple' }}>
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
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{ color: 'azure', display: 'flex', flexDirection: 'column ', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '20px' }}>

          <ListItemButton onClick={goHome} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><HomeIcon sx={{ color: 'white' }} /></ListItemIcon>Home</ListItemButton>
          <ListItemButton onClick={viewData} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><SettingsAccessibilityIcon sx={{ color: 'white' }} /></ListItemIcon>Mis datos</ListItemButton>
          <ListItemButton onClick={viewDonations} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><VolunteerActivismIcon sx={{ color: 'white' }} /></ListItemIcon>Mis donaciones</ListItemButton>
          <ListItemButton onClick={viewFavs} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><FavoriteIcon sx={{ color: 'white' }} /></ListItemIcon>Favoritos</ListItemButton>
          <ListItemButton onClick={viewAdoptSolicitudes} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><ContentPasteIcon sx={{ color: 'white' }} /></ListItemIcon>Solicitudes de adopción</ListItemButton>
          <ListItemButton onClick={viewProducts} sx={{ color: 'white', marginBottom: '20px' }}><ListItemIcon><Inventory2Icon sx={{ color: 'white' }} /></ListItemIcon>Mis productos</ListItemButton>
          <ListItemButton sx={{ color: 'rgb(255, 230, 0)', marginBottom: '20px', fontWeight: 'bold', fontSize: '20px', fontFamily: 'Gill Sans' }}><ListItemIcon><img className={styles.paw} src={paw} alt='paw'></img></ListItemIcon>{userDetail.points}</ListItemButton>
          <ListItemButton onClick={handleLogout} sx={{ color: 'white', marginTop: '16vh' }}><ListItemIcon><LogoutIcon sx={{ color: 'white' }} /></ListItemIcon>Cerrar Sesión</ListItemButton>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
      {myData && <EditDataForm />}

      {donations && <DonationTable userDetail={userDetail} foundations={foundations}></DonationTable>}

      {favs && <div className={styles.favs}>
      <h1 className={styles.favsTitle}>Favoritos</h1>
      <div className={styles.favs}>
        {favsPets.length > 0 ? favsPets.map(f => 
        <Card id={f.id} name={f.name} img={f.images} age={f.age}/>
        ) : <h1>No hay favoritos</h1>}
      </div>

      </div>}


    {products && <ProductsTable userDetail={userDetail}></ProductsTable>}



      {request && <RequestTable userDetail={userDetail} userId={userDetail.id} foundations={foundations}></RequestTable>}

    </div>
  );
}

