import { CardContent, CardHeader, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import RestModal from "./components/rest/RestModal";
import SoapModal from "./components/soap/SoapModal";
import useModal from "./hooks/useModal";
import { useAppStyles } from "./hooks/useStyles";

const App: React.FC = () => {
  const classes = useAppStyles();
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
