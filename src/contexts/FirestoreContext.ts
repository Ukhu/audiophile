import React from "react";
import { IFirestoreContextProps } from "../types/firestore";

const FirestoreContext = React.createContext<IFirestoreContextProps>({
  db: null,
});

export const FirestoreProvider = FirestoreContext.Provider;

export default FirestoreContext;
