import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project";

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});
class Projects extends Component {
  displayCards = () => {
    return (
      <Query
        query={gql`
          {
            allCards {
              id
              description
              imageUrl
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error)
            return (
              <p>Sorry error fetching projects ,try reloading the page :(</p>
            );

          return data.allCards.map(item => {
            return (
              <Grid item key={item.id} sm={6} md={4} lg={4}>
                <Project element={item} />
              </Grid>
            );
          });
        }}
      </Query>
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classNames(classes.layout, classes.cardGrid)}
        id="projects"
      >
        <Grid container spacing={40}>
          {this.displayCards()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
