import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Profile } from "./Profile";

const styles = ({ palette }) =>
  createStyles({
    root: {
      color: palette.common.white
    }
  });

const TopBar = ({ classes, logged }) => {
  return (
    <AppBar position={"relative"}>
      <Toolbar>
        <Grid item={true} xs={"auto"}>
          <IconButton>
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src={`${process.env.PUBLIC_URL}/favicon-196x196.png`}
            />
          </IconButton>
        </Grid>

        <Grid item={true} xs={true}>
          <Typography classes={classes}>Modus Create</Typography>
        </Grid>

        <Grid item={true} xs={"auto"}>
          {!logged ? <LoginButton /> : <Profile />}

          {logged ? (
            <LogoutButton />
          ) : (
            <Button color={"secondary"} variant={"contained"}>
              SignUp
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapState = state => ({
  logged: state.app.logged
});

export default connect(mapState)(withStyles(styles)(TopBar));
