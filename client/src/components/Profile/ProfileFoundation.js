import React from 'react';
import './ProfileFounda.css';
import Topbar from './Topbar';
import Sidebar from './SidebarFoudation';
import DataFoundation from './DataFoundation';
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfileFoundation() {
    let { user } = useAuth0();

     return(
        <div>
        <div className='container'>
             <Topbar user={user}/>
            <Sidebar/>
        </div>
        </div>
     )
}