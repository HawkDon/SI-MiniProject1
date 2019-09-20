import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";

interface Props {
  modalState: boolean;
  handleClose: (value: string) => void;
  title: string;
}

const dummyData = [
  {
    id: 1,
    name: "white soap",
    description: "This is a white soap",
    price: 14
  },
  { id: 2, name: "black soap", description: "This is a black soap", price: 17 },
  {
    id: 3,
    name: "yellow soap",
    description: "This is a yellow soap",
    price: 20
  }
];

const SoapModal: React.FC<Props> = ({ handleClose, modalState, title }) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalState}
      onClose={handleClose}
    >
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid
          style={{ backgroundColor: "white", width: "1000px" }}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6} sm={6}>
            <h2>{title}</h2>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SoapModal;
