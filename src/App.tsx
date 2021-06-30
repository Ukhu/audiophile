import React from "react";
import { ThemeProvider } from "styled-components";

import AudiophileTheme from "./theme/AudiophileTheme";

import Checkout from "./pages/Checkout";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <Checkout />
    </ThemeProvider>
  );
}

export default App;
