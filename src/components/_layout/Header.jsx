import React from "react";

import logo from "@assets/logo.svg";

import { useStyles } from "@components/_layout/_styles";
import { useUser } from "src/base/context/userContext";

function Header() {
  const user = useUser()[0];

  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img className={classes.headerLogo} alt="" src={logo} />
      {/* Email and UserIcon */}
      {user && (
        <div className={classes.headerUser}>
          {user.givenName}{" "}
          <img className={classes.profileImage} alt="" src={user.imageUrl} />
        </div>
      )}
    </div>
  );
}

export default Header;
