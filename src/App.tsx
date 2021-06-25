import React from "react";
import { ThemeProvider } from "styled-components";

import AudiophileTheme from "./theme/AudiophileTheme";

import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <ProductDetail />
    </ThemeProvider>
  );
}

export default App;
