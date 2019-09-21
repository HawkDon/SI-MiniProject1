import { ISoap } from "../services/Soap";

export type SoapActions =
  | {
      type: "LOAD_DATA_FROM_SERVER";
      payload: ISoap[];
    }
  | { type: "DELETE_SOAP"; payload: number }
  | { type: "ADD_SOAP"; payload: ISoap }
  | { type: "UPDATE_SOAP"; payload: ISoap };

export const soapReducer = (state: ISoap[], action: SoapActions) => {
  switch (action.type) {
    case "LOAD_DATA_FROM_SERVER":
      return [...action.payload];
    case "DELETE_SOAP":
      return [...state.filter(soap => soap.id !== action.payload)];
    case "ADD_SOAP":
      return [...state, action.payload];
    case "UPDATE_SOAP":
      const index = state.findIndex(soap => soap.id === action.payload.id);
      state[index] = { ...action.payload };
      return state;
    default:
      return state;
  }
};
