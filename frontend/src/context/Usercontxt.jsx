import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // logged in user
  const loadUserFromStorage = () => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(saved);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser  , loadUserFromStorage}}>
      {children}
    </UserContext.Provider>
  );
}
