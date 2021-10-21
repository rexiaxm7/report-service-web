import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router/Router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
