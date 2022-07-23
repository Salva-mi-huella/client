import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  ChatBubbleOutline,
} from "@mui/icons-material";

import PetsIcon from '@mui/icons-material/Pets';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Pagina principal
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu de usuario</h3>
          <ul className="sidebarList">
            <Link className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Mis datos
              </li>
            </Link>
            <Link className="link">
              <li className="sidebarListItem">
                <PetsIcon className="sidebarIcon" />
                Favoritos
              </li>
            </Link>
            <Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Huellitas
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificaciones</h3>
          <ul className="sidebarList">
            <Link>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Mis solicitudes adopcion
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
