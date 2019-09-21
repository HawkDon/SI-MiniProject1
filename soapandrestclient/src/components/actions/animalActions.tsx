import { IAnimal } from "../../services/rest/restService";

export type AnimalActions =
  | {
      type: "LOAD_DATA_FROM_SERVER";
      payload: IAnimal[];
    }
  | { type: "DELETE_ANIMAL"; payload: number }
  | { type: "ADD_ANIMAL"; payload: IAnimal }
  | { type: "UPDATE_ANIMAL"; payload: IAnimal };

export const animalReducer = (state: IAnimal[], action: AnimalActions) => {
  switch (action.type) {
    case "LOAD_DATA_FROM_SERVER":
      return [...action.payload];
    case "DELETE_ANIMAL":
      return [...state.filter(animal => animal.id !== action.payload)];
    case "ADD_ANIMAL":
      return [...state, action.payload];
    case "UPDATE_ANIMAL":
      const index = state.findIndex(animal => animal.id === action.payload.id);
      state[index] = { ...action.payload };
      return state;
    default:
      return state;
  }
};

export const initialAnimalState: IAnimal = {
  id: -1,
  name: "",
  description: "",
  dailySleep: "" as any
};

export type ChangeAnimalActions =
  | { type: "RESET" }
  | { type: "CHANGE_NAME"; payload: string }
  | { type: "CHANGE_DESCRIPTION"; payload: string }
  | { type: "CHANGE_DAILY_SLEEP"; payload: number }
  | { type: "CHANGE_ANIMAL"; payload: IAnimal };

export const changeAnimalReducer = (
  state: IAnimal,
  action: ChangeAnimalActions
): IAnimal => {
  switch (action.type) {
    case "RESET":
      return initialAnimalState;
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "CHANGE_DAILY_SLEEP":
      return { ...state, dailySleep: action.payload };
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
};
