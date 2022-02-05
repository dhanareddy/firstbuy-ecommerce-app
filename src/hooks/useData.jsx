import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userData = (path) => {
  let [loggedInUser, setLoggedInUser] = useState(null);
  let navigate = useNavigate;
  //   export let LoginData = { loggedInUser, setLoggedInUser, navigate };
  const navigation = path => {
    navigate(path);
    };
    
  const logout = () => {
    setLoggedInUser(null);
  };
  return [navigation,logout,];
};

export default userData;
