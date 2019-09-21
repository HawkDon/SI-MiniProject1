import { CardContent, CardHeader, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import RestModal from "./components/RestModal";
import SoapModal from "./components/SoapModal";
import useModal from "./hooks/useModal";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    padding: 8,
    margin: 8
  },
  content: {
    display: "flex",
    justifyContent: "space-between"
  }
});
const App: React.FC = () => {
  const classes = useStyles();
  const [soapModal, handleOpenSoapModal, handleCloseSoapModal] = useModal();
  const [restModal, handleOpenRestModal, handleCloseRestModal] = useModal();
  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          classes={{ content: classes.header }}
          title="SI-MiniProject1"
        />
        <CardContent className={classes.content}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleOpenSoapModal}
          >
            SOAP
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleOpenRestModal}
          >
            REST
          </Button>
        </CardContent>
      </Card>
      <SoapModal modalState={soapModal} handleClose={handleCloseSoapModal} />
      <RestModal modalState={restModal} handleClose={handleCloseRestModal} />
    </Container>
  );
};

export default App;
