import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme
} from "@material-ui/core";
import React from "react";
import { ChangeAnimalActions } from "../actions/animalActions";
import { IAnimal } from "../services/Rest";

interface Props {
  animal: IAnimal;
  handleServerAction: () => void;
  title: string;
  dispatchAnimal: React.Dispatch<ChangeAnimalActions>;
  handleCancel: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: 8,
      padding: 8
    },
    button: {
      margin: 8,
      padding: 8
    }
  })
);

const RestForm: React.FC<Props> = ({
  animal,
  handleServerAction,
  handleCancel,
  dispatchAnimal,
  title
}) => {
  const classes = useStyles();
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
