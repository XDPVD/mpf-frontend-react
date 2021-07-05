import BookIcon from "@material-ui/icons/Book";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useEffect } from "react";

import photo from "@assets/profile.jpg";
import * as config from "@settings/config";
import {
  LateralBarButton as Option,
  LateralBarContainer as Container,
  LateralBarOptionsContainer as OptionsContainer,
  ProfileImage,
  Separator,
} from "@styles/Styles";
import useRedirectUrl from "@utils/useRedirectUrl";
import { useCookies } from 'react-cookie';
import useUserInfo from "@utils/useUserInfo";
import { useHistory } from "react-router-dom";
function LateralBar() {
  const [url, redirectTo] = useRedirectUrl();
  const [cookies, setCookie, removeCookie] = useCookies(['name','userToken']);
  
  const history = useHistory()

  const [cookiesUser,isCreator] = useUserInfo();
  // Array of Buttons { IconComponent, url }
  const topButtons = [
    {
      component: <BookIcon />,
      url: config.urls.cursos,
    },
    {
      component: <EventIcon />,
      url: config.urls.calendario,
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

  const closeSession=()=>{
    removeCookie("name");
    removeCookie("userToken");
    history.push('/login');
  }
  
  return (
    <Container>
      <ProfileImage src={cookiesUser.name.imageUrl} />

      <Separator />

      {/* Display buttons */}
      <OptionsContainer>
        {topButtons.map((e) => {
          return (
            <>
              <Option
                disabled={url === e.url}
                onClick={() => redirectTo(e.url)}
              >
                {e.component}
              </Option>
            </>
          );
        })}
      </OptionsContainer>

      <OptionsContainer>
        <Option
          disabled={url === settingButton.url}
          onClick={() => redirectTo(settingButton.url)}
        >
          {settingButton.component}
        </Option>

        <Option
          style={{ color: "red" }}
          onClick={closeSession}
        >
          <ExitToAppIcon />
        </Option>
      </OptionsContainer>
    </Container>
  );
}

export default LateralBar;
