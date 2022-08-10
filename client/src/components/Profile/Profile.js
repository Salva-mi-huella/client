import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../../redux/actions/index';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileFoundation from '../ProfileFoundation/ProfileFoundation';
import ProfileUser from '../ProfileUser/ProfileUser';
import ProfileAdmin from '../ProfileAdmin/ProfileAdmin';
import jwt from "jsonwebtoken";

export default function Profile() {

    // const dispatch = useDispatch();
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const [decode, setDecode] = useState(null);


    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-80brrzzs.us.auth0.com";

            try {
                // const { given_name, family_name, email, nickname, picture } = user;
                // if (isAuthenticated) {
                //     if (user.hasOwnProperty("family_name")) {
                //         dispatch(postUser({ name: given_name, lastname: family_name, email, picture, nickname }));
                //     }
                //     else {
                //         dispatch(postUser({
                //             name: nickname,
                //             email,
                //             nickname,
                //             picture
                //         }));
                //     }
                // }

                const accessToken = await getAccessTokenSilently({
                    audience: `http://salva-mi-huella.com`,
                    scope: "read:message",
                });

                // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
                var decoded = jwt.decode(accessToken)
                setDecode(decoded)
                // console.log(decoded);

                // const metadataResponse = await fetch(userDetailsByIdUrl, {
                //     headers: {
                //         Authorization: `Bearer ${accessToken}`,
                //     },
                // });

                // const { user_metadata } = await metadataResponse.json();

                // setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);


    if (decode && decode.permissions[0] === "read:foundationProfile") return <ProfileFoundation />

    else if (decode && decode.permissions[0] === "read:adminProfile") return <ProfileAdmin />

    else return <ProfileUser />

}
