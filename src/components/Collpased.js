import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ModalInner from "./ModalInner";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_IMAGES = gql`
  query Dog($id: ID!) {
    Card(id: $id) {
      name
      text
      description
      imageses {
        image
        id
      }
      technolgieses {
        language
        id
      }
    }
  }
`;

const styles = theme => ({
  paper: {
    position: "absolute",
    left: "5%",
    top: "10%",
    width: "90%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    margin: `auto ${theme.spacing.unit * 4}`,
    marginRight: theme.spacing.unit * 2
  }
});
class Collapsed extends React.Component {
  images = id => (
    <Query query={GET_IMAGES} variables={{ id }}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return null;
        if (error) return `Error!: ${error}`;

        return <ModalInner data={data} />;
      }}
    </Query>
  );
  render() {
    const { classes } = this.props;
    return (
      // <Modal
      //   aria-labelledby="simple-modal-title"
      //   aria-describedby="simple-modal-description"
      //   open={props.open}
      //   onClose={props.handleClose}
      // >
      //   <div className={classes.paper}>
      //     <ModalInner />
      //   </div>
      // </Modal>

      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogContent>{this.images(this.props.id)}</DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Collapsed);
