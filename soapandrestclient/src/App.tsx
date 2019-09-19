import Button from "@material-ui/core/Button";
import React from "react";
import RestModal from "./components/RestModal";
import SoapModal from "./components/SoapModal";
import useModal from "./hooks/useModal";
import useScreenSize from "./hooks/useScreenSize";
import { fetchAllAnimals } from "./services/Rest";

const App: React.FC = () => {
  const windowWidth = useScreenSize(window.innerWidth, "width");
  const windowHeight = useScreenSize(window.innerHeight, "height");

  const [soapModal, handleOpenSoapModal, handleCloseSoapModal] = useModal();
  const [restModal, handleOpenRestModal, handleCloseRestModal] = useModal();
  return (
    <div
      style={{
        width: windowWidth,
        height: windowHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenSoapModal}
        >
          SOAP
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenRestModal}
        >
          REST
        </Button>
      </div>
      <SoapModal
        title="SOAP Store"
        modalState={soapModal}
        handleClose={handleCloseSoapModal}
      />
      <RestModal
        title="REST Store"
        modalState={restModal}
        handleClose={handleCloseRestModal}
      />
    </div>
  );
};

export default App;
