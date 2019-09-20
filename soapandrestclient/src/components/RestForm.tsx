import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme
} from "@material-ui/core";
import React from "react";
import { IAnimal } from "../services/Rest";
import { initialAnimalState } from "./RestContent";

interface Props {
  animal: IAnimal;
  handleChangeAnimal: (e: any) => void;
  handleServerAction: () => void;
  setAnimal: React.Dispatch<React.SetStateAction<IAnimal>>;
  title: string;
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
  handleChangeAnimal,
  handleServerAction,
  setAnimal,
  title
}) => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        onChange={handleChangeAnimal}
        value={animal.name}
        label="Name"
      />
      <TextField
        id="description"
        onChange={handleChangeAnimal}
        value={animal.description}
        label="Description"
      />
      <TextField
        id="dailySleep"
        onChange={handleChangeAnimal}
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
          onClick={() => setAnimal(initialAnimalState)}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default RestForm;
