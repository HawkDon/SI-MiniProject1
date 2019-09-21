import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import UploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import UpdateIcon from "@material-ui/icons/Update";
import React from "react";
import { useContentStyles } from "../../hooks/useStyles";
import {
  addXmlSoap,
  deleteXmlSoap,
  ISoap,
  updateXmlSoap
} from "../../services/soap/soapService";
import {
  changeSoapReducer,
  initialSoapState,
  SoapActions
} from "../actions/soapActions";
import SoapForm from "./SoapForm";

interface Props {
  soaps: ISoap[];
  dispatch: React.Dispatch<SoapActions>;
}

const SoapContent: React.FC<Props> = ({ soaps, dispatch }) => {
  const classes = useContentStyles();
  const [soap, dispatchSoap] = React.useReducer(
    changeSoapReducer,
    initialSoapState
  );
  const [isNewSoap, setIsNewSoap] = React.useState(false);

  const handleDeleteSoap = (id: number) => {
    deleteXmlSoap(id).then(() =>
      dispatch({ type: "DELETE_SOAP", payload: id })
    );
  };

  const handleUpdateSoap = () => {
    updateXmlSoap(soap)
      .then(() => dispatch({ type: "UPDATE_SOAP", payload: soap }))
      .then(() => dispatchSoap({ type: "RESET" }))
      .then(() => setIsNewSoap(false));
  };

  const handleAddSoap = () => {
    addXmlSoap(soap)
      .then(res => dispatch({ type: "ADD_SOAP", payload: res }))
      .then(() => dispatchSoap({ type: "RESET" }))
      .then(() => setIsNewSoap(false));
  };

  const handleNewSoapTransition = () => {
    dispatchSoap({
      type: "CHANGE_SOAP",
      payload: { ...initialSoapState, id: 0 }
    });
    setIsNewSoap(true);
  };

  const handleUpdateSoapTransition = (soap: ISoap) => {
    dispatchSoap({ type: "CHANGE_SOAP", payload: soap });
    setIsNewSoap(false);
  };

  const handleCancel = () => {
    dispatchSoap({ type: "RESET" });
    setIsNewSoap(false);
  };

  return soap.id === -1 ? (
    <React.Fragment>
      <List>
        {soaps.map(soa => (
          <ListItem key={soa.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={soa.name} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleUpdateSoapTransition(soa)}>
                <UpdateIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteSoap(soa.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNewSoapTransition}
          className={classes.button}
        >
          Add
          <UploadIcon className={classes.icon} />
        </Button>
      </div>
    </React.Fragment>
  ) : isNewSoap ? (
    <SoapForm
      handleServerAction={handleAddSoap}
      soap={soap}
      dispatchSoap={dispatchSoap}
      handleCancel={handleCancel}
      title="Add"
    />
  ) : (
    <SoapForm
      handleServerAction={handleUpdateSoap}
      soap={soap}
      dispatchSoap={dispatchSoap}
      handleCancel={handleCancel}
      title="Update"
    />
  );
};

export default SoapContent;
