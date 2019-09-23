import React from "react";
import { Link } from "react-router-dom";

//Components

//MUI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: {
    maxWidth: "300px"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item sm={10}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Button color="inherit" component={Link} to="/">
                <img
                  alt="logo"
                  src="/images/header/donutfact2.png"
                  className={classes.logo}
                />
              </Button>
            </Grid>

            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/animations">
              Animations
            </Button>
            <Button color="inherit" component={Link} to="/registration">
              SignUp
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}