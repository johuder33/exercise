import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "./Button";
import { login } from "../reducers/auth/actions";
import { USERS } from "../constants";

const LoginButton = ({ onLoad }) => (
  <Button color={"default"} onLoad={onLoad}>
    {"Login"}
  </Button>
);

const mapDispatchToProps = (dispatch, { history }) => ({
  onLoad: () => {
    dispatch(login());
    history.push(USERS);
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginButton)
);
