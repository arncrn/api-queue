import React, {useState, useEffect} from 'react';
import Router from "./Router.js";

export default function LoginWrapper() {
  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState('1');

  return (
    <Router 
      loggedIn={loggedIn}
      user={user}
    />
  );
}