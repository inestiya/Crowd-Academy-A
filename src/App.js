import React, { useState } from "react";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom"
import "semantic-ui-css/semantic.min.css";
import HomePage from "./HomePage";
import PrivateRoute from "./PrivateRoute";
import Auth from "./Auth";
import "./App.css";
import Artikel from "./Artikel";
import Kelas from "./Kelas";

function App() {
const [isLogin,onLogin] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        {/* <PageLayout> */}
        <PrivateRoute path="/homePage" isLogin={isLogin}>
          <HomePage />
        </PrivateRoute>
        <Route path="/artikel">
            <Artikel />
          </Route>
          <Route path="/kelas">
            <Kelas />
          </Route>
          {/* </PageLayout> */}
          <Route path="/">
          <Redirect to="/auth" />
        </Route>
        {/* <Route path="/profile">
          <Profile />
        </Route> */}
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;