import React from "react";
import { Router } from "./routes";
import { AppProvider } from "./hooks";
import { GloblaStyle } from "./global/GlobalStyle";

export function App() {
  return (
    <AppProvider>
      <Router />
      <GloblaStyle />
    </AppProvider>
  );
}
