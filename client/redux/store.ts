import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { ContactState } from "./reducers/contactsReducer";

export interface State {
  contacts: ContactState;
}

export const store = createStore(rootReducer);
