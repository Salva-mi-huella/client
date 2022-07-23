import React from "react";
import styles from "./Profile.module.css";


export default function Topbar({user}) {
  return (
    <div className={styles.topbar}>
    <div className={styles.topbarWrapper}>
      <div className={styles.topLeft}>
        <span className={styles.logo}>{user.name}</span>
      </div>
    </div>
  </div>
  );
}
