import React, { useState } from "react";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom"
import "semantic-ui-css/semantic.min.css";
import HomePage from "./pages/HomePage";
// import PrivateRoute from "./component/PrivateRoute";
import Auth from "./Auth";
import "./App.css";
import Artikel from "./page/Artikel";
import Kelas from "./page/Kelas";

function App() {
const [isLogin,onLogin] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        {/* <PageLayout> */}
        <Route path="/homepage" isLogin={isLogin}>
          <HomePage />
        </Route>
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