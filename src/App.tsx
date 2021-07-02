import React from "react";
import { ThemeProvider } from "styled-components";

import AudiophileTheme from "./theme/AudiophileTheme";

import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={AudiophileTheme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
