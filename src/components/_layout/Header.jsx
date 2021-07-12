import React from "react";

import {
  HeaderContainer as Container,
  Logo,
  HeaderUserContainer as UserContainer,
  ProfileImage,
} from "@styles/Styles";

import logo from "@assets/logo.svg";

import useUserInfo from "@utils/useUserInfo";

function Header() {
  const [cookiesUser] = useUserInfo();
  return (
    <Container>
      <Logo src={logo} />
      {/* Email and UserIcon */}
      {cookiesUser.name ? (
        <UserContainer>
          {cookiesUser.name.givenName}{" "}
          <ProfileImage src={cookiesUser.name.imageUrl} />
        </UserContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Header;
