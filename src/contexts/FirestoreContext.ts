import React from "react";
import firebase from "firebase";

interface IFirestoreContextProps {
  db: firebase.firestore.Firestore | null;
}

const FirestoreContext = React.createContext<IFirestoreContextProps>({
  db: null,
});

export const FirestoreProvider = FirestoreContext.Provider;

export default FirestoreContext;
