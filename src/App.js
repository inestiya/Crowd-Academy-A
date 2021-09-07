import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import HomePage from "./HomePage";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [page, setPage] = useState("login");
  if (page === "login") {
    return (
      <Login
        onRegisterFormClick={() => setPage("register")}
        onLogin={() => setPage("homePage")}
      />
    );
  } else if (page === "register") {
    return <RegisterForm onLoginClick={() => setPage("login")} />;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login">
          <Login setLogin={() => setLogin(true)} />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route> */}
          <PrivateRoute path="/homePage">
            <HomePage />
          </PrivateRoute>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
