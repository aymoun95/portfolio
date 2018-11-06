import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  custom: {
    background: "linear-gradient(45deg, #757575 30%, rgb(239, 243, 245) 90%)"
  },
  toolbar: {
    width: "100%"
  }
});
const inlineStyles = {
  links: {
    position: "absolute",
    right: 0,
    marginLeft: -12,
    marginRight: 20,
    textDecoration: "none",
    color: "rgb(12, 52, 75)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
};
const Navbar = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.custom}>
        <Toolbar className={classes.toolbar}>
          <h1
            style={{
              alignText: "center",
              marginTop: 5,
              color: "rgb(12, 52, 75)",
              fontWeight: "bold"
            }}
          >
            Aymen Ben Zlaouia
          </h1>
          <a href="#" style={{ ...inlineStyles.links, ...{ right: "30%" } }}>
            <Icon>home</Icon>
            <Typography variant="h6" color="inherit" style={{ marginLeft: 5 }}>
              Home
            </Typography>
          </a>
          <a
            href="#projects"
            style={{ ...inlineStyles.links, ...{ right: "20%" } }}
          >
            <Icon>face</Icon>
            <Typography variant="h6" color="inherit" style={{ marginLeft: 5 }}>
              About
            </Typography>
          </a>
          <a
            href="#contact"
            style={{ ...inlineStyles.links, ...{ right: "10%" } }}
          >
            <Icon>phone</Icon>
            <Typography variant="h6" color="inherit" style={{ marginLeft: 5 }}>
              Contact
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default withStyles(styles)(Navbar);
