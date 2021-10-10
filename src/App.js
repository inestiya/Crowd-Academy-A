import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "semantic-ui-css/semantic.min.css";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./component/PrivateRoute";
import "./App.css";
import MenuArtikel from "./pages/MenuArtikel";
import Kelas from "./page/Kelas";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";

function App() {
const [isLogin,setLogin] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login">
          <Login setLogin={() => setLogin(true)} />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        {/* <PageLayout> */}
        <PrivateRoute path="/homepage" isLogin={isLogin}>
          <HomePage />
        </PrivateRoute>
        <Route path="/artikel">
            <MenuArtikel />
          </Route>
          <Route path="/kelas">
            <Kelas />
          </Route>
          {/* </PageLayout> */}
          <Route path="/">
          <Redirect to="/login" />
        </Route>
        {/* <Route path="/profile">
          <Profile />
        </Route> */}
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;