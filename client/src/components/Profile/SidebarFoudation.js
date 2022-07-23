import "./sidebarFounda.css";
import {
  LineStyle,
  AttachMoney,
} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
          <Link to="/perfil" className="link">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Mis datos
            </li>
            </Link>
            <Link className="link">
            <li className="sidebarListItem">
              <PetsIcon className="sidebarIcon" />
              Mis huellas
            </li>
            </Link>
            <Link className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Donaciones
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">General</h3>
          <ul className="sidebarList">
            <Link className="link">
              <li className="sidebarListItem">
                <NotificationsIcon className="sidebarIcon" />
                Solicitud de adopcion
              </li>
            </Link>
            <Link className="link">
              <li className="sidebarListItem">
                <CreateNewFolderIcon className="sidebarIcon" />
                Postear Huella
              </li>
            </Link>
            <Link className="link">
            <li className="sidebarListItem">
              <DeleteIcon className="sidebarIcon" />
              Eliminar Huella
            </li>
            </Link>
            <Link className="link">
            <li className="sidebarListItem">
              <ArticleIcon className="sidebarIcon" />
              Postear Noticia
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
