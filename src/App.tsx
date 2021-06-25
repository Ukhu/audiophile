import React from "react";
import { ThemeProvider } from "styled-components";

import AudiophileTheme from "./theme/AudiophileTheme";

import Category from "./pages/Category";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <Category />
    </ThemeProvider>
  );
}

export default App;
