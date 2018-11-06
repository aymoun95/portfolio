import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Collapsed from "./Collpased";
import "./project.css";
const styles = {
  media: {
    height: 160
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "transparent"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  }
};

class Project extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, element } = this.props;

    return (
      <Card className={classes.card} raised id="card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={element.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {element.name}
            </Typography>
            <Typography component="p">
              {element.description}
              ...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={styles.actions}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleOpen}
          >
            Read more ...
          </Button>
        </CardActions>
        <Collapsed
          id={element.id}
          open={this.state.open}
          handleClose={this.handleClose}
          img={element.imageUrl}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(Project);
