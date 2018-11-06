import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./footer.css";
const styles = theme => ({
  footer: {
    backgroundColor: "rgb(12, 52, 75)",
    padding: theme.spacing.unit * 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white"
  }
});
const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="h2" align="center" gutterBottom color="inherit">
        Let's work together...
      </Typography>
      <div id="contact">
        <a
          href="https://www.linkedin.com/in/ben-zlaouia-aymen"
          target="_blank"
          className="contact-details"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          id="profile-link"
          href="https://gitlab.com/aymoun95"
          target="_blank"
          className="contact-details"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
        <a
          href="https://www.freecodecamp.org/aymoun95"
          target="_blank"
          className="contact-details"
          rel="noopener noreferrer"
        >
          FreeCodeCamp
        </a>
        <a
          href="mailto:aymenbenzlaouia95@gmail.com"
          className="contact-details"
        >
          Send a mail
        </a>
        <a href="tel:+20965414" className="contact-details">
          Call me
        </a>
      </div>
      <div>
        <p>&copy; Created by the best developer=>Aymen Ben Zlaouia</p>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
