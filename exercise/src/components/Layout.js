import React from "react";
import Grid from "@material-ui/core/Grid";
import TopBar from "./TopBar";

export const Layout = ({ children }) => (
  <Grid container={true}>
    <React.Fragment>
      <TopBar />
      {children}
    </React.Fragment>
  </Grid>
);
