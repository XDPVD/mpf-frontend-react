import React, { useState } from 'react'

import styled from "styled-components";

import BookIcon from '@material-ui/icons/Book';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import IconButton from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';

import photo from './profile.jpg';

import { useHistory } from 'react-router-dom';

function LateralBar() {

    // To use push (redirect) and current url
    const history = useHistory();

    // url as State attribute
    const [url,setUrl] = useState(history.location.pathname); // initial state: current url

    // Redirect to (/path)
    const redirectTo = (url) => {
        history.push(url);
        setUrl(url);
    }

    const dangerStyle = {
        color: 'red'
    }

    // Array of Buttons { IconComponent, url }
    const topButtons = [
        {
            component: (<BookIcon />) ,
            url: "/cursos",
        },
        {
            component: (<EventIcon />) ,
            url: "/calendario",
        },
        {
            component: (<GroupIcon />) ,
            url: "/grupos",
        }
    ];

    const settingButton = {
        component: (<SettingsIcon />),
        url: "/configuracion"
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
                <Option disabled={url === settingButton.url} onClick={() => redirectTo(settingButton.url)}>
                    {settingButton.component}
                </Option>
                <Option style={dangerStyle} onClick={() => console.log("Cerrar sesion")}>
                    <ExitToAppIcon />
                </Option>
            </OptionsContainer>
        </Container>
    )
}

export default LateralBar


const Container = styled.div`
    height: 900px;
    width: 60px;

    background-color: white;
    box-sizing: border-box;
    border: 2px solid #969696;
    border-radius: 50px 50px 0px 0px;
    border-bottom-width: 0px;

    position: absolute;
    left: 0;
    bottom:0;
    
    display: flex;
    flex-flow: column;
    align-items: center;


`;

const ProfileImage = styled.img`
    height: 40px;
    width: 40px;
    display: block;

    background-color: lightcoral;
    margin: 20px 0px;
    border-radius: 50px;
`;

const Separator = styled.div`
    height: 5px;
    width: 75%;
    margin-bottom: 10px;
    background-color: gray;
`;

const OptionsContainer = styled.div`
    margin-top: 10px;
    margin-bottom: auto;

    display: flex;
    flex-flow: column;
    align-items: center;
    
    &:last-child{
        margin-bottom: 0;
    }


`;

const Option = styled(IconButton)`
    &&&{
        display: block;
        padding: 10px;
        width: 10px;
        margin-bottom: 1px;
        transform: scale(0.8);
    }

    & svg{
        transform: scale(1.5);
    }

    &.Mui-disabled{
        background: rgba(0,0,0,20%);
        color: black;
    }
`;