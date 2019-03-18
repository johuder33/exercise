import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "./Button";
import { logout } from "../reducers/auth/actions";
import { MAIN } from "../constants";

const LogoutButton = ({ onLoad }) => (
  <Button color={"secondary"} onLoad={onLoad}>
    {"Logout"}
  </Button>
);

const mapDispatchToProps = (dispatch, { history }) => ({
  onLoad: () => {
    dispatch(logout());
    history.push(MAIN);
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LogoutButton)
);
