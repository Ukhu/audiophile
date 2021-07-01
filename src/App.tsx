import React from "react";
import { ThemeProvider } from "styled-components";

import AudiophileTheme from "./theme/AudiophileTheme";

import Landing from "./pages/Landing";
// import Category from "./pages/Category";
// import ProductDetail from "./pages/ProductDetail";
// import Checkout from "./pages/Checkout";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <Landing />
      {/* <Category /> */}
      {/* <ProductDetail /> */}
      {/* <Checkout /> */}
    </ThemeProvider>
  );
}

export default App;
