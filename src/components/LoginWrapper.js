import React, { useState, useEffect } from "react";
import Router from "./Router.js";

export default function LoginWrapper() {
  const [loggedIn, setLogin] = useState(window.localStorage.loggedIn || 'false');
  const [user, setUser] = useState("1");

  function login(userTimezone) {
    window.localStorage.setItem("loggedIn", 'true');
    window.localStorage.setItem("timeZone", userTimezone);
    setLogin('true');
  }

  function logout() {
    fetch("/logout", { method: "POST"})
      .then(() => {
        window.localStorage.clear();
        setLogin('false');
      })
  }

  useEffect(() => {
    fetch("/loginstatus")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        window.localStorage.setItem("loggedIn", String(!!response.signedIn));
        window.localStorage.setItem("timeZone", response.timezone);
        setLogin(String(!!response.signedIn));
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
