import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";

import AudiophileTheme from "./theme/AudiophileTheme";
import { FirestoreProvider } from "./contexts/FirestoreContext";

import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <FirestoreProvider value={{ db: firebase.firestore() }}>
        <Router>
          <Switch>
            <Route exact path="/category/:categoryName">
              <Category />
            </Route>
            <Route exact path="/product/:productSlug">
              <ProductDetail />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </FirestoreProvider>
    </ThemeProvider>
  );
}

export default App;
