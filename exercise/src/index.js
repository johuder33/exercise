import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import PrivateRoute from "./components/PrivateRoute";
import { USERS, USER_ID, HOME, MAIN } from "./constants";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path={MAIN} component={Landing} />
        <Route path={HOME} component={Home} />
        <PrivateRoute path={USER_ID} component={UserDetail} />
        <PrivateRoute path={USERS} component={UserList} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
