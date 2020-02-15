import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "../UI/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleList() {
  const classes = useStyles();
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="client__avatar-container--left-top">
        <Avatar />
        <p>client name</p>
      </div>
      <div className={classes.root}>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItemLink href="dashboard">
            <ListItemText primary="Dashboard" />
          </ListItemLink>
          <ListItemLink href="profile">
            <ListItemText primary="Profile" />
          </ListItemLink>
          <ListItemLink href="take-order">
            <ListItemText primary="Take Orders" />
          </ListItemLink>
          <ListItemLink href="order-history">
            <ListItemText primary="OrderHistory" />
          </ListItemLink>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Setting" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem className={classes.nested}>
                <ListItemLink href="account">Account</ListItemLink>
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemLink href="password">Password</ListItemLink>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}
