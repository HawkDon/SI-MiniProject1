import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { soapReducer } from "../actions/soapActions";
import { getXmlAllSoaps } from "../services/Soap";
import SoapContent from "./SoapContent";

interface Props {
  modalState: boolean;
  handleClose: (value: string) => void;
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

const SoapModal: React.FC<Props> = ({ handleClose, modalState }) => {
  const classes = useStyles();
  const [soaps, dispatch] = React.useReducer(soapReducer, []);
  React.useEffect(() => {
    getXmlAllSoaps().then(res =>
      dispatch({ type: "LOAD_DATA_FROM_SERVER", payload: res })
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
            About Soaps
          </h2>
          <SoapContent dispatch={dispatch} soaps={soaps} />
        </div>
      </Container>
    </Modal>
  );
};

export default SoapModal;
