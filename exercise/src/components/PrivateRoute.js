import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { MAIN } from "../constants";

export const PrivateRoute = ({ logged, ...props }) => {
  if (!logged) {
    return <Redirect to={MAIN} />;
  }

  return <Route {...props} />;
};

const mapStateToProps = state => ({ logged: state.app.logged });

export default connect(mapStateToProps)(PrivateRoute);
