import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { soapReducer } from "../actions/soapActions";
import { getAllSoaps } from "../services/xml/requests";

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
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/ws", true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const regex = new RegExp("<ns2:soap>|</ns2:soap>");
        console.log(this.response.split(regex).slice(1, -1));
      }
    };

    xhr.send(getAllSoaps);
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
          <div>Hello</div>
          {/*<RestContent dispatch={dispatch} animals={animals} />*/}
        </div>
      </Container>
    </Modal>
  );
};

export default SoapModal;
