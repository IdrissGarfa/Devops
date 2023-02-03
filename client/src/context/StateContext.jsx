import React, { createContext, useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const context = createContext();

export const StateContext = ({ children }) => {

  const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem("currentUser")) || null);

  return (
    <context.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);