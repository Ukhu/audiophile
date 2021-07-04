import firebase from "firebase";

export interface IFirestoreContextProps {
  db: firebase.firestore.Firestore | null;
}
