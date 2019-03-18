import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { Layout } from "./Layout";
import { getUser } from "../reducers/users/selector";
import { USERS } from "../constants";

const UserDetail = ({ user, history }) => {
  if (!user) {
    return <Redirect to={USERS} />;
  }

  return (
    <Layout>
      <Grid container={true} justify={"center"}>
        <Grid item={true}>
          <Card>
            <CardContent>
              <Avatar src={user.picture.medium} />
              <Typography>{`First Name: ${user.name.first}`}</Typography>
              <Divider />
              <Typography>{`Last Name: ${user.name.last}`}</Typography>
              <Divider />
              <Typography>{`Email: ${user.email}`}</Typography>
              <Divider />
              <Typography>{`Phone: ${user.phone}`}</Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={history.goBack}
                color={"primary"}
                variant={"contained"}
              >
                Go Back
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  user: getUser(id)(state)
});

export default connect(mapStateToProps)(UserDetail);
