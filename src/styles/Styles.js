import styled from "styled-components";

import IconButton from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles( (theme) => ({
  root: {
    height: "80%",
    display: "flex",
    flexFlow: "column",
    padding: "0px 0px 0px 85px",
  },
  logo: {
    marginLeft: "30px",
  },
}));

