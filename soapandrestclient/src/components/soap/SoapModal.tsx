import { Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { useModalStyles } from "../../hooks/useStyles";
import { getXmlAllSoaps } from "../../services/soap/soapService";
import { soapReducer } from "../actions/soapActions";
import SoapContent from "./SoapContent";

interface Props {
  modalState: boolean;
  handleClose: (value: string) => void;
}

const SoapModal: React.FC<Props> = ({ handleClose, modalState }) => {
  const classes = useModalStyles();

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
