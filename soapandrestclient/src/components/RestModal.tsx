import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { fetchAllAnimals, IAnimal } from "../services/Rest";
import Content from "./Content";

interface Props {
  modalState: boolean;
  handleClose: () => void;
  title: string;
}

const RestModal: React.FC<Props> = ({ handleClose, modalState, title }) => {
  const [animals, setAnimals] = React.useState<IAnimal[]>([]);

  React.useEffect(() => {
    fetchAllAnimals().then(res => setAnimals(res));
  }, []);

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
          {animals.length !== 0 && <Content items={animals} />}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default RestModal;
