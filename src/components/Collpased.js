import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import ModalInner from "./ModalInner";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        scroll="paper"
        paperScrollPaper
        aria-labelledby="scroll-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogContent>{this.images(this.props.id)}</DialogContent>
      </Dialog>
    );
  }
}

export default Collapsed;
