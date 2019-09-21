import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { animalReducer } from "../actions/animalActions";
import { getAllAnimals } from "../services/Rest";
import RestContent from "./RestContent";

interface Props {
  modalState: boolean;
  handleClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    title: {
      textAlign: "center"
    }
  })
);

const RestModal: React.FC<Props> = ({ handleClose, modalState }) => {
  const classes = useStyles();
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
