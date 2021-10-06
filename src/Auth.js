import React, { useState } from "react";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login"
import { Redirect } from "react-router";
import HomePage from "./pages/HomePage";


function Auth() {
const [page, setPage] = useState("login");
if (page === "login") {
    return <Login onRegisterFormClick={() => setPage("register")}
    onLogin={() => setPage("homepage")} />;
} else if(page === "register") {
    return <RegisterForm onLoginClick={() => setPage("login")} />;
} else {
    return <Redirect to="/homepage" />
}
}

export default Auth;