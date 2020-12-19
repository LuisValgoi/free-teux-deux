import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../../routes";
import AppTemplate from "../../templates/App";
import { AuthProvider } from "../../contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppTemplate>
          <Routes />
        </AppTemplate>
      </BrowserRouter>
    </AuthProvider>
  );
}
