import React, { useState } from "react";

import RegisterForm from "./RegisterForm";
import Login from "./Login";
import HomePage from "./HomePage";
import "./App.css";

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
    return <HomePage />;
  }
}
export default App;
