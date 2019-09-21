import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormStyles } from "../../hooks/useStyles";
import { IAnimal } from "../../services/rest/restService";
import { ChangeAnimalActions } from "../actions/animalActions";

interface Props {
  animal: IAnimal;
  handleServerAction: () => void;
  title: string;
  dispatchAnimal: React.Dispatch<ChangeAnimalActions>;
  handleCancel: () => void;
}

const RestForm: React.FC<Props> = ({
  animal,
  handleServerAction,
  handleCancel,
  dispatchAnimal,
  title
}) => {
  const classes = useFormStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        onChange={e =>
          dispatchAnimal({ type: "CHANGE_NAME", payload: e.target.value })
        }
        value={animal.name}
        label="Name"
      />
      <TextField
        id="description"
        onChange={e =>
          dispatchAnimal({
            type: "CHANGE_DESCRIPTION",
            payload: e.target.value
          })
        }
        value={animal.description}
        label="Description"
      />
      <TextField
        id="dailySleep"
        onChange={e =>
          dispatchAnimal({
            type: "CHANGE_DAILY_SLEEP",
            payload: e.target.value as any
          })
        }
        value={animal.dailySleep}
        label="Daily Sleep"
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

export default RestForm;
