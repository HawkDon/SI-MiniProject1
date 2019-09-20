import { IAnimal } from "../services/Rest";

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
