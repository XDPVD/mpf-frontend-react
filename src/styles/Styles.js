import styled from "styled-components";

import IconButton from "@material-ui/core/Button";
import { List } from "@material-ui/core";

export const AppContainer = styled.div`
  height: 80%;
  display: flex;
  flex-flow: column;
  padding: 0px 0px 0px 85px;
`;

export const Logo = styled.img`
  margin-left: 30px;
`;

export const LateralBarContainer = styled.div`
  height: 90vh;
  width: 60px;

  background-color: white;
  box-sizing: border-box;
  border: 2px solid #969696;
  border-radius: 50px 50px 0px 0px;
  border-bottom-width: 0px;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  display: block;

  background-color: lightcoral;
  margin: 20px 0px;
  border-radius: 50px;
`;

export const Separator = styled.div`
  height: 5px;
  width: 85%;
  margin-bottom: 10px;
  background-color: gray;
`;

export const LateralBarOptionsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: auto;

  display: flex;
  flex-flow: column;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LateralBarButton = styled(IconButton)`
  &&& {
    display: block;
    padding: 10px;
    width: 10px;
    margin-bottom: 1px;
    transform: scale(0.8);
  }

  & svg {
    transform: scale(1.5);
  }

  &.Mui-disabled {
    background: rgba(0, 0, 0, 20%);
    color: black;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeaderLogo = styled.img`
  margin-left: 30px;
`;

export const HeaderUserContainer = styled.div`
  background: #f5f2ec;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 350px;

  border-radius: 0 0 0 45px;

  margin-left: auto;

  font-weight: bold;
  word-spacing: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FileTrayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  text-align: left;

  background-color: whitesmoke;
  border: 3px solid black;

  height: 300px;
`;

export const DropZone = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: rgba(225, 225, 225);
  border: 1px black;

  padding: 8px;
  width: 100%;
  box-sizing: border-box;

  & * {
    margin: 0px 10px;
  }
`;

export const FilesList = styled(List)`
  margin: 0px;
  width: 100%;
  flex: 6;
`;

export const Loading = styled.div`
  position: absolute;
  background-color: rgba(221, 221, 221, 0.46);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 100%;
`;
