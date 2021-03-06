import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./main.css";
const image = require(`../assets/image.jpg`);

const styles = theme => ({
  heroUnit: {
    marginTop: 60,
    height: "93.1vh",
    width: "100%",
    backgroundSize: "cover",
    transform: "skewY(-17deg)",
    transformOrigin: " top left",
    background: "rgb(239, 243, 245)"
  }
});
class Main extends React.Component {
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
        <div className={classes.heroUnit} />
        <div id="realContent">
          <div id="text">
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
            >
              Hello.
            </Typography>
            {this.state.windowSize > 718 && (
              <Typography variant="h6" color="inherit" paragraph>
                I'm Aymen and i'm currently studying at Faculty of Science of
                Tunis (FST). I consider myself as junior software engineer who
                loves javascript and react essentially.I've developed lots of
                projects using also other technologies such as java and
                php(check them below).If you like what i do ,please contact me
                as i'm looking for graduation project.
              </Typography>
            )}
          </div>
          {this.state.windowSize > 800 && (
            <div>
              <img src={image} alt="Best Developer" id="responsiveImg" />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
