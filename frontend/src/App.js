import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";

import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path="/benches/:id">
            <BenchShowPage />
          </Route>

          <Route path="/benches">
            <BenchIndexPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;