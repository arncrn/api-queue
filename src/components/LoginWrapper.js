import React, { useState, useEffect } from "react";
import Router from "./Router.js";

export default function LoginWrapper() {
  const [loggedIn, setLogin] = useState(window.localStorage.loggedIn || 'false');
  const [user, setUser] = useState("1");

  function login() {
    window.localStorage.setItem("loggedIn", true);
    setLogin('true');
  }

  function logout() {
    fetch("http://localhost:3001/logout", { method: "POST", credentials: "include" })
      .then(() => {
        window.localStorage.clear();
        setLogin('false');
      })
  }

  useEffect(() => {
    fetch("http://localhost:3001/loginstatus", { credentials: "include" })
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        window.localStorage.setItem("loggedIn", !!response);
        setLogin(String(!!response));
      });
  }, [loggedIn]);

  return (
    <Router
      loggedIn={loggedIn}
      login={login}
      logout={logout}
      // might not need user
      user={user}
    />
  );
}
