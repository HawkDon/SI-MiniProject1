import { ISoap } from "../../services/soap/soapService";

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

export const initialSoapState: ISoap = {
  id: -1,
  name: "",
  description: "",
  price: "" as any
};

export type ChangeSoapActions =
  | { type: "RESET" }
  | { type: "CHANGE_NAME"; payload: string }
  | { type: "CHANGE_DESCRIPTION"; payload: string }
  | { type: "CHANGE_PRICE"; payload: number }
  | { type: "CHANGE_SOAP"; payload: ISoap };

export const changeSoapReducer = (
  state: ISoap,
  action: ChangeSoapActions
): ISoap => {
  switch (action.type) {
    case "RESET":
      return initialSoapState;
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "CHANGE_PRICE":
      return { ...state, price: action.payload };
    case "CHANGE_SOAP":
      return action.payload;
    default:
      return state;
  }
};
