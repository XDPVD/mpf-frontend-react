import BookIcon from "@material-ui/icons/Book";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";

import * as config from "@settings/config";
import {
  LateralBarButton as Option,
  LateralBarContainer as Container,
  LateralBarOptionsContainer as OptionsContainer,
  ProfileImage,
  Separator,
} from "@styles/Styles";
import useRedirectUrl from "@utils/useRedirectUrl";
import { useCookies } from "react-cookie";
import useUserInfo from "@utils/useUserInfo";
import { useHistory } from "react-router-dom";
import { useStyles } from "@components/_layout/_styles";
import { Button, IconButton } from "@material-ui/core";
function LateralBar() {
  const classes = useStyles();

  const [url, redirectTo] = useRedirectUrl();
  const [, , removeCookie] = useCookies(["name", "userToken"]);

  const history = useHistory();

  const [cookiesUser] = useUserInfo();
  // Array of Buttons { IconComponent, url }
  const topButtons = [
    {
      component: <BookIcon />,
      url: config.urls.cursos,
    },
    {
      component: <GroupIcon />,
      url: config.urls.grupos,
    },
  ];

  const settingButton = {
    component: <SettingsIcon />,
    url: config.urls.config,
  };

  const closeSession = () => {
    removeCookie("name");
    removeCookie("userToken");
    history.push("/login");
  };

  return (
    <div className={classes.lateralBar}>
      <img className={classes.profileImage} alt={"user"} src={cookiesUser.name.imageUrl} />

      <div className={classes.separator} />

      {/* Display buttons */}
      <div className={classes.lateralBarOptions}>
        {topButtons.map((e,index) => {
          return (
            <Button className={classes.lateralBarButton}
              key={index}
              disabled={url === e.url}
              onClick={() => redirectTo(e.url)}
            >
              {e.component}
            </Button>
          );
        })}
      </div>

      <div className={classes.lateralBarOptions}>
        <Button className={classes.lateralBarButton}
          disabled={url === settingButton.url}
          onClick={() => redirectTo(settingButton.url)}
        >
          {settingButton.component}
        </Button>

        <Button style={{ color: "red" }} onClick={closeSession}>
          <ExitToAppIcon />
        </Button>
      </div>
    </div>
  );
}

export default LateralBar;
