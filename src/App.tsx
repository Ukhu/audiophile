import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";

import AudiophileTheme from "./theme/AudiophileTheme";

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
    <Router>
      <ThemeProvider theme={AudiophileTheme}>
        <Switch>
          <Route exact path="/category/:id">
            <Category />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
