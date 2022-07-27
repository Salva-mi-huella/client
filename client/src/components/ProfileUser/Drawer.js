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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './ProfileUser.module.css';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { set, useForm } from 'react-hook-form';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';


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
    <div><Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Configuracion
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
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List> 
            <ListItemButton onClick={goHome}><ListItemIcon><HomeIcon/></ListItemIcon>Home</ListItemButton>
            <ListItemButton onClick={viewData}><ListItemIcon><SettingsAccessibilityIcon/></ListItemIcon>Mis Datos</ListItemButton>
            <ListItemButton onClick={viewDonations}><ListItemIcon><VolunteerActivismIcon/></ListItemIcon>Mis Donaciones</ListItemButton>
            <ListItemButton onClick={viewFavs}><ListItemIcon><FavoriteIcon/></ListItemIcon>Mis favoritos</ListItemButton>
            <ListItemButton onClick={viewAdoptSolicitudes}><ListItemIcon><ContentPasteIcon/></ListItemIcon>Solicitudes de adopcion</ListItemButton>
            <ListItemButton><ListItemIcon><PetsIcon/></ListItemIcon>: 2300</ListItemButton>
        </List>    
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
    {myData &&
      <div>
               <div>
            <div>
            <div className={styles.dataContainer}>
                <button onClick={enviarDatos} className={styles.button}>Editar datos ✎</button>
                <div>
      
    </div>
                <h1 className={styles.myData}>Mis Datos</h1>
                <div className={styles.data}>
                    <div>
                        <img className={styles.photo} src={user.picture}></img>
                    </div>
                    <div className={styles.Info}>
                        <p className={styles.items}>Nombre: {user.name}</p>
                        <p className={styles.items}>Email: {user.email}</p>
                        <p className={styles.items}>DNI Nro:   {watch("dni")}</p>
                        <p className={styles.items}>Telefono:   {watch("phone")}</p>
                        <p className={styles.items}>Direccion:   {watch("adress")}</p>
                        <p className={styles.items}>Fecha de nacimiento: {watch("date")}</p>
                        <p className={styles.items}>Ciudad: {watch("city")} </p>
                        <p className={styles.items}>Tránsito: {watch("transito")}</p>
                        {datos && 
                        <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
                          {/* <div>
                            <label>Nombre:</label>
                            <input type="text" name="name" defaultValue={user.name}{...register("nombre")} disabled/>
                          </div> */}
                          <div>
                            {/* <label>Email:</label> */}
                            <input className={styles.inputDni} type="text" maxLength={8} name="dni" {...register("dni", { required: true,maxLength: 8 , pattern: /^-?[0-9]*$/})} />
                            {errors.dni?.type === "required" && <p className={styles.error}>El DNI es obligatorio</p>}
                            {errors.dni?.type === "maxLength" && <p className={styles.error}>El DNI debe tener 8 caracteres maximo</p>}
                            {errors.dni?.type === "pattern" && <p className={styles.error}>El DNI debe tener solo numeros</p>}
                          </div>
                          <div>
                            {/* <label>Telefono:</label> */}
                            <input className={styles.input} type="text" name="telefono" maxLength={20} {...register("phone", { required: true, maxLength: 20, pattern: /^-?[0-9]*$/ })}/>
                            {errors.phone?.type === "required" && <p className={styles.error}>El telefono es obligatorio</p>}
                            {errors.phone?.type === "maxLength" && <p className={styles.error}>El telefono debe tener 20 caracteres maximo</p>}
                            {errors.phone?.type === "pattern" && <p className={styles.error}>El telefono debe tener solo numeros</p>}

                          </div>
                          <div>
                            {/* <label>Dirección:</label> */}
                            <input className={styles.input} type="text" maxLength={30} name="direccion" {...register("adress", { required: true, maxLength: 30 })}/>
                            {errors.adress?.type === "required" && <p className={styles.error}>La dirección es obligatoria</p>}
                            {errors.adress?.type === "maxLength" && <p className={styles.error}>La dirección debe tener 30 caracteres maximo</p>}
                          </div>
                          <div>
                            {/* <label>Fecha de nacimiento:</label> */}
                            <input className={styles.inputNacimiento} type="date" name="nacimiento" {...register("date", { required: true })}/>
                            {errors.date?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>}
                          </div>
                          <div>
                            <input className={styles.inputCiudad} type="text" maxLength={20} name="ciudad" {...register("city", { required: true, maxLength:20 })}/>
                            {errors.city?.type === "required" && <p className={styles.error}>La ciudad es obligatoria</p>}
                          </div>
                          <div>
                            <select className={styles.inputSelect} {...register("transito", {required: true})}>
                              <option value="Si">Si</option>
                              <option value="No">No</option>
                            </select>
                            {errors.date?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>}
                          </div>
                          <input className={styles.button} type="submit" value="Guardar datos" />
                        </form>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div> 
      </div>}
      {donations && 
      <div>
      <h1>Mis donaciones</h1>
      </div>}
      {favs &&
      <div>
      <h1>Mis huellas fav</h1>
      </div>}
      {solicitudes &&
      <div>
      <h1>Solicitudes de adopcion</h1>
      </div>}
    </div>
  );
}

