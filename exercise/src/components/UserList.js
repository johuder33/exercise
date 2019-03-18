import React, { useEffect } from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ContactMail from "@material-ui/icons/ContactMail";
import ArrowForward from "@material-ui/icons/ArrowForward";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Layout } from "./Layout";
import { getUsers as loadUsers } from "../services/users";
import { getUsers, isLoading } from "../reducers/users/selector";
import { setLoading, addUsers } from "../reducers/users/actions";
import { createStyles } from "../../node_modules/@material-ui/core";
import { USER_ID } from "../constants";

const styles = () =>
  createStyles({
    root: {
      "&:hover": {
        cursor: "pointer"
      }
    }
  });

const UserList = ({
  history,
  classes,
  users,
  loading,
  setUsers,
  setLoading
}) => {
  useEffect(() => {
    setLoading(true);
    loadUsers()
      .then(({ results }) => {
        setUsers(results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout>
      {loading && (
        <CircularProgress />
      )}

      {!loading && (
        <List style={{ width: "100%" }}>
        {users.map(user => (
          <ListItem
            key={user.login.uuid}
            divider={true}
            classes={classes}
            onClick={() =>
              history.push(USER_ID.replace(":id", user.login.uuid))
            }
          >
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText
              primary={`${user.name.first} ${user.name.last}`}
              secondary={
                <React.Fragment>
                  <Typography>{`Email: ${user.email}`}</Typography>

                  <Typography>{`Phone: ${user.phone}`}</Typography>
                </React.Fragment>
              }
              secondaryTypographyProps={{ component: "span" }}
            />
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      )}
    </Layout>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  setLoading: loading => dispatch(setLoading(loading)),
  setUsers: users => dispatch(addUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserList));
