import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Topbar from "./Topbar";
import PermanentDrawerLeft from './Centerbar';
import ProfileFoundation from '../ProfileFoundation/ProfileFoundation';
import jwt from "jsonwebtoken";




export default function Profile() {

       
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const [decode, setDecode] = useState(null);


    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "dev-aekjy-pn.us.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `http://localhost:4000`,
              scope: "read:message",
            });
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
            var decoded = jwt.decode(accessToken)
            setDecode(decoded)
            console.log(accessToken)
            console.log(decoded)
            
            const metadataResponse = await fetch(userDetailsByIdUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            
            const { user_metadata } = await metadataResponse.json();
            
            setUserMetadata(user_metadata);
        } catch (e) {
        }
    };
      
        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);
   
    console.log(decode)

    return (
        decode &&
         (decode.permissions[0] === "read:foundationProfile" ? 
         <ProfileFoundation /> :
         <h1>ACÁ VA EL PERFIL DE USUARIO</h1>
         )
        // <React.Fragment>
        //     <PermanentDrawerLeft/>
        // </React.Fragment>
        
    )
}