import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
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
            <Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Animales adoptados
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu de fundacion</h3>
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
                Mascotas
              </li>
            </Link>
            <Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Donaciones
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Solicitud de adocion
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
