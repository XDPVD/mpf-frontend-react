import BookIcon from '@material-ui/icons/Book';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

import photo from '../assets/profile.jpg';
import *
as config from '../config/config';
import {
    LateralBarButton as Option,
    LateralBarContainer as Container,
    LateralBarOptionsContainer as OptionsContainer,
    ProfileImage,
    Separator
} from "../styles/Styles";
import useRedirectUrl from './useRedirectUrl';

function LateralBar() {

    const [
        url,
        redirectTo
    ] =
    useRedirectUrl
        ();

    // Array of Buttons { IconComponent, url }
    const
        topButtons = [{
                component: (
                    <BookIcon />
                    ),
                url: config
                    .urls
                    .cursos,
            },
            {
                component: (
                    <EventIcon />
                    ),
                url: config
                    .urls
                    .calendario,
            },
            {
                component: (
                    <GroupIcon />
                    ),
                url: config
                    .urls
                    .grupos,
            }
        ];

    const
        settingButton = {
            component: (
                <SettingsIcon />
                ),
            url: config
                .urls
                .config
        }

    return (
        <Container>

            <ProfileImage src={photo} />

            <Separator />

            {/* Display buttons */}
            <OptionsContainer>
                {
                    topButtons.map(
                        (e) => {
                            return (<> 
                                <Option disabled={url === e.url} onClick={() => redirectTo(e.url)}>
                                    {e.component}
                                </Option>
                            </>)
                        }
                    )
                }
            </OptionsContainer>

            <OptionsContainer>

                <Option 
                    disabled={url === settingButton.url} 
                    onClick={() => redirectTo(settingButton.url)}
                >
                    {settingButton.component}
                </Option>

                <Option style={ {color: 'red'} } onClick={() => console.log("Cerrar sesion")}>
                    <ExitToAppIcon />
                </Option>

            </OptionsContainer>

        </Container>
    )
}

export default LateralBar