import React from 'react';

import { 
    HeaderContainer as Container, 
    Logo, 
    HeaderUserContainer as UserContainer, 
    ProfileImage } from '../styles/Styles';

import logo from "../assets/logo.svg";
import icon from "../assets/profile.jpg";

function Header() {
    return (
        <Container>
            <Logo src={logo} />
            {/* Email and UserIcon */}
            <UserContainer>
                correo@unmsm.edu.pe <ProfileImage src={icon} />
            </UserContainer>
        </Container>
    )
}

export default Header