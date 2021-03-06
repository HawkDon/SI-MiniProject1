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
  addNewAnimal,
  deleteAnimal,
  IAnimal,
  updateAnimal
} from "../../services/rest/restService";
import {
  AnimalActions,
  changeAnimalReducer,
  initialAnimalState
} from "../actions/animalActions";
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

const RestContent: React.FC<Props> = ({ animals, dispatch }) => {
  const classes = useContentStyles();
  const [animal, dispatchAnimal] = React.useReducer(
    changeAnimalReducer,
    initialAnimalState
  );
  const [isNewAnimal, setIsNewAnimal] = React.useState(false);

  const handleDeleteAnimal = (id: number) => {
    deleteAnimal(id).then(() =>
      dispatch({ type: "DELETE_ANIMAL", payload: id })
    );
  };

  const handleUpdateAnimal = () => {
    updateAnimal(animal)
      .then(() => dispatch({ type: "UPDATE_ANIMAL", payload: animal }))
      .then(() => dispatchAnimal({ type: "RESET" }))
      .then(() => setIsNewAnimal(false));
  };

  const handleAddAnimal = () => {
    addNewAnimal(animal)
      .then(res => dispatch({ type: "ADD_ANIMAL", payload: res }))
      .then(() => dispatchAnimal({ type: "RESET" }))
      .then(() => setIsNewAnimal(false));
  };

  const handleNewAnimalTransition = () => {
    dispatchAnimal({
      type: "CHANGE_ANIMAL",
      payload: { ...initialAnimalState, id: 0 }
    });
    setIsNewAnimal(true);
  };

  const handleUpdateAnimalTransition = (animal: IAnimal) => {
    dispatchAnimal({ type: "CHANGE_ANIMAL", payload: animal });
    setIsNewAnimal(false);
  };

  const handleCancel = () => {
    dispatchAnimal({ type: "RESET" });
    setIsNewAnimal(false);
  };

  return animal.id === -1 ? (
    <React.Fragment>
      <List>
        {animals.map(ani => (
          <ListItem key={ani.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={ani.name} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleUpdateAnimalTransition(ani)}>
                <UpdateIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteAnimal(ani.id)}>
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
      handleServerAction={handleAddAnimal}
      animal={animal}
      dispatchAnimal={dispatchAnimal}
      handleCancel={handleCancel}
      title="Add"
    />
  ) : (
    <RestForm
      handleServerAction={handleUpdateAnimal}
      animal={animal}
      dispatchAnimal={dispatchAnimal}
      handleCancel={handleCancel}
      title="Update"
    />
  );
};

export default RestContent;
