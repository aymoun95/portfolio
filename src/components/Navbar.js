import React, { Component } from "react";
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
class Navbar extends Component {
  state = {
    windowSize: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = e => {
    const windowSize = window.innerWidth;
    this.setState(prevState => {
      return {
        windowSize
      };
    });
  };
  render() {
    const { classes } = this.props;
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
              id="name"
            >
              Aymen Ben Zlaouia
            </h1>
            {this.state.windowSize > 690 && (
              <a
                href="#name"
                style={{ ...inlineStyles.links, ...{ right: "30%" } }}
              >
                {this.state.windowSize > 716 && <Icon>home</Icon>}

                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginLeft: 5 }}
                >
                  Home
                </Typography>
              </a>
            )}
            {this.state.windowSize > 690 && (
              <a
                href="#projects"
                style={{ ...inlineStyles.links, ...{ right: "20%" } }}
              >
                {this.state.windowSize > 780 && <Icon>face</Icon>}

                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginLeft: 5 }}
                >
                  About
                </Typography>
              </a>
            )}
            {this.state.windowSize > 690 && (
              <a
                href="#contact"
                style={{ ...inlineStyles.links, ...{ right: "10%" } }}
              >
                {this.state.windowSize > 960 && <Icon>phone</Icon>}
                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginLeft: 5 }}
                >
                  Contact
                </Typography>
              </a>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Navbar);
