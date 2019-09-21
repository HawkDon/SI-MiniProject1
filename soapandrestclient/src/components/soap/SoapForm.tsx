import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormStyles } from "../../hooks/useStyles";
import { ISoap } from "../../services/soap/soapService";
import { ChangeSoapActions } from "../actions/soapActions";

interface Props {
  soap: ISoap;
  handleServerAction: () => void;
  title: string;
  dispatchSoap: React.Dispatch<ChangeSoapActions>;
  handleCancel: () => void;
}

const SoapForm: React.FC<Props> = ({
  soap,
  handleServerAction,
  handleCancel,
  dispatchSoap,
  title
}) => {
  const classes = useFormStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        onChange={e =>
          dispatchSoap({ type: "CHANGE_NAME", payload: e.target.value })
        }
        value={soap.name}
        label="Name"
      />
      <TextField
        id="description"
        onChange={e =>
          dispatchSoap({
            type: "CHANGE_DESCRIPTION",
            payload: e.target.value
          })
        }
        value={soap.description}
        label="Description"
      />
      <TextField
        id="price"
        onChange={e =>
          dispatchSoap({
            type: "CHANGE_PRICE",
            payload: e.target.value as any
          })
        }
        value={soap.price}
        label="Price"
      />
      <div className={classes.buttonContainer}>
        <Button
          onClick={handleServerAction}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          {title}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SoapForm;
