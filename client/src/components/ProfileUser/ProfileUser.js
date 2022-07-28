import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PersistentDrawerLeft from "./Drawer";
import styles from "./ProfileUser.module.css";

export default function ProfileUser() {
    const {user, isLoading} = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <PersistentDrawerLeft />
        </div>
    )
}