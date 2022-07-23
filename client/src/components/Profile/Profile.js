import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Topbar from "./Topbar";
import Sidebar from './Sidebar'


export default function Profile() {

   const { user } = useAuth0();

    return (
        <React.Fragment>
            <Topbar user={user}/>
            <Sidebar/>
        </React.Fragment>
    )
}