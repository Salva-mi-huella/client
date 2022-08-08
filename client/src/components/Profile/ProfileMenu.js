import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import style from './ProfileMenu.module.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { removeUserSession } from "../../utils";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout, user } = useAuth0();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout({returnTo: `${window.location.origin}/home`});
    localStorage.clear();
    removeUserSession();
  }


  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Cuenta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45, marginRight: 2}}><img className={style.user} src={user?.picture} ></img></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: 'white',
            color: 'rgb(99, 59, 218)',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 20,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 35,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className={style.menu}>
          <Link className={style.link} to='/perfil'>
              <MenuItem sx={{ color: 'rgb(99, 59, 218)', fontWeight: 'bold' }}>
              <AccountCircle sx={{ marginRight: '10px', color: 'rgb(99, 59, 218)'}}/> Mi Perfil
              </MenuItem>
          </Link>
          <Divider />
          <MenuItem>
            <ListItemIcon onClick={handleLogout} sx={{ color:'rgb(99, 59, 218)', fontWeight: 'bold' }}>
              <Logout sx={{ marginRight: '10px',color: 'rgb(99, 59, 218)'  }} fontSize="small" />
                Cerrar sesión
            </ListItemIcon>
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}
