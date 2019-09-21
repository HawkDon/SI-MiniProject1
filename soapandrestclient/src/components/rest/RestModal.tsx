import { Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { useModalStyles } from "../../hooks/useStyles";
import { getAllAnimals } from "../../services/rest/restService";
import { animalReducer } from "../actions/animalActions";
import RestContent from "./RestContent";

interface Props {
  modalState: boolean;
  handleClose: () => void;
}

const RestModal: React.FC<Props> = ({ handleClose, modalState }) => {
  const classes = useModalStyles();
  const [animals, dispatch] = React.useReducer(animalReducer, []);

  React.useEffect(() => {
    getAllAnimals().then(response =>
      dispatch({ type: "LOAD_DATA_FROM_SERVER", payload: response })
    );
  }, [dispatch]);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalState}
      onClose={handleClose}
    >
      <Container maxWidth="md">
        <div className={classes.paper}>
          <h2 className={classes.title} id="simple-modal-title">
            About Animals
          </h2>
          <RestContent dispatch={dispatch} animals={animals} />
        </div>
      </Container>
    </Modal>
  );
};

export default RestModal;
