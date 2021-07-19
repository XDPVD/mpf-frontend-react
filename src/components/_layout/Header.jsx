import React from "react";

import logo from "@assets/logo.svg";

import useUserInfo from "@utils/useUserInfo";

import { useStyles } from "@components/_layout/_styles";

function Header() {
  const [cookiesUser] = useUserInfo();

  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img className={classes.headerLogo} alt="" src={logo} />
      {/* Email and UserIcon */}
      {cookiesUser.name ? (
        <div className={classes.headerUser}>
          {cookiesUser.name.givenName}{" "}
          <img className={classes.profileImage} alt="" src={cookiesUser.name.imageUrl} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
