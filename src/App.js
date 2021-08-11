import React, { useState, useEffect } from 'react';
import SignInSingUp from "./page/SignInSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/context";
import {isUserLogedApi} from "./api/auth";

export default function App() {

  // con las llaves {} da entender que se a iniciado el objet de User
  const [user, setUser]  = useState(null);

  useEffect(() =>{
    setUser(isUserLogedApi())
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {
        !user ?
        <div>
          <SignInSingUp/>
        </div> :
        <h1>
          estas logeado
        </h1>
      }

      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      />
    </AuthContext.Provider>
  );
}