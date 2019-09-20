import {
  Avatar,
  Button,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme
} from "@material-ui/core";
import UploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import UpdateIcon from "@material-ui/icons/Update";
import React from "react";
import { AnimalActions } from "../actions/animalActions";
import {
  addNewAnimal,
  deleteAnimal,
  IAnimal,
  updateAnimal
} from "../services/Rest";
import RestForm from "./RestForm";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  animals: IAnimal[];
  dispatch: React.Dispatch<AnimalActions>;
}

export const initialAnimalState: IAnimal = {
  id: -1,
  name: "",
  description: "",
  dailySleep: "" as any
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: 8,
      padding: 8
    },
    button: {
      margin: theme.spacing(1)
    },
    icon: {
      marginLeft: theme.spacing(1)
    }
  })
);

const RestContent: React.FC<Props> = ({ animals, dispatch }) => {
  const classes = useStyles();
  const [animal, setAnimal] = React.useState<IAnimal>(initialAnimalState);
  const [isNewAnimal, setIsNewAnimal] = React.useState(false);

  const handleDeleteAnimal = (id: number) => {
    deleteAnimal(id).then(() =>
      dispatch({ type: "DELETE_ANIMAL", payload: id })
    );
  };

  const handleUpdateAnimal = () => {
    updateAnimal(animal)
      .then(() => dispatch({ type: "UPDATE_ANIMAL", payload: animal }))
      .then(() => setAnimal(initialAnimalState));
  };

  const handleAddAnimal = () => {
    addNewAnimal(animal)
      .then(() => dispatch({ type: "ADD_ANIMAL", payload: animal }))
      .then(() => setAnimal(initialAnimalState));
  };

  const handleChangeAnimal = e => {
    const target = e.target;
    setAnimal(prev => {
      prev[target.id] = target.value;
      return { ...prev };
    });
  };

  const handleNewAnimalTransition = () => {
    setIsNewAnimal(true);
    setAnimal({ ...initialAnimalState, id: 0 });
  };

  return animal.id === -1 ? (
    <React.Fragment>
      <List>
        {animals.map(animal => (
          <ListItem key={animal.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={animal.name} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => setAnimal(animal)}>
                <UpdateIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteAnimal(animal.id)}>
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
          onClick={handleNewAnimalTransition}
          className={classes.button}
        >
          Add
          <UploadIcon className={classes.icon} />
        </Button>
      </div>
    </React.Fragment>
  ) : isNewAnimal ? (
    <RestForm
      setAnimal={setAnimal}
      handleServerAction={handleAddAnimal}
      handleChangeAnimal={handleChangeAnimal}
      animal={animal}
      title="Add"
    />
  ) : (
    <RestForm
      setAnimal={setAnimal}
      handleServerAction={handleUpdateAnimal}
      handleChangeAnimal={handleChangeAnimal}
      animal={animal}
      title="Update"
    />
  );
};

export default RestContent;
