import React from "react";
import styles from "./Profile.module.css";
import { NotificationsNone } from "@mui/icons-material";

export default function Topbar({user}) {
  return (
    <div className={styles.topbar}>
    <div className={styles.topbarWrapper}>
      <div className={styles.topLeft}>
        <span className={styles.logo}>{user.name}</span>
      </div>
      <div className={styles.topRight}>
        <div className={styles.topbarIconContainer}>
          <NotificationsNone />
          <span className={styles.topIconBadge}>2</span>
        </div>
        <img src={user.picture} alt="" className={styles.topAvatar} />
      </div>
    </div>
  </div>
  );
}
