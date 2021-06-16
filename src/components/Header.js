import React from 'react';

import styled from "styled-components";

import logo from "./logo.svg";
import icon from "./profile.jpg";

function Header() {
    return (
        <Container>
            <Logo src={logo} />
            {/* Email and UserIcon */}
            <UserContainer>
                diego.vilca@unmsm.edu.pe <ProfileImage src={icon} />
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    height: 65px;
    width: 100%;
    align-items: center;
`;

const Logo = styled.img`
    margin-left: 30px;
`;

const UserContainer = styled.div`
    background: #F5F2EC;
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    width: 350px;

    border-radius: 0 0 0 45px;

    margin-left: auto;


    font-weight: bold;
    word-spacing: 15px;
`;

const ProfileImage = styled.img`
    height: 40px;
    width: 40px;

    background-color: lightcoral;
    margin: 20px 0px;
    border-radius: 50px;
    vertical-align: middle;

    margin-left: 30px;
`;