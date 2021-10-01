import React, { useState } from "react";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login"
import HomePage from "./pages/HomePage";


function Auth() {
const [page, setPage] = useState("login");
if (page === "login") {
    return <Login onRegisterFormClick={() => setPage("register")}
    onLogin={() => setPage("homePage")} />;
} else if(page === "register") {
    return <RegisterForm onLoginClick={() => setPage("login")} />;
} else {
    return <HomePage />;
}
}

export default Auth;