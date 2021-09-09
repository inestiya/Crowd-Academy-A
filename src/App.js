import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "semantic-ui-css/semantic.min.css";
import HomePage from "./HomePage";
import PrivateRoute from "./PrivateRoute";
import Auth from "./Auth";
import Login from "./Login";
import "./App.css";

function App() {
const [isLogin,onLogin] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
          {/* <Login onLogin={() => onLogin(true)} /> */}
        </Route>
        <PrivateRoute path="/homePage" isLogin={isLogin}>
          <HomePage />
        </PrivateRoute>
        {/* <Route path="/profile">
          <Profile />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;