import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PersistentDrawerLeft from "./Drawer";
import Loading from "../Loading/Loading";

import styles from "./ProfileUser.module.css";

export default function ProfileUser() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Loading />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <PersistentDrawerLeft />
        </div>
    )
}