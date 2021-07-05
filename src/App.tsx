import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AudiophileTheme from "./theme/AudiophileTheme";

import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
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
    </ThemeProvider>
  );
}

export default App;
