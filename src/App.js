import React, { useState, useEffect } from 'react';
import SignInSingUp from "./page/SignInSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/context";
import {isUserLogedApi} from "./api/auth";
import Routing from "./routes/routing";

export default function App() {

  // con las llaves {} da entender que se a iniciado el objet de User
  const [user, setUser]  = useState(null);
  //estado 
  const [loadUser, setLoadUser] = useState(false);

  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false)

  useEffect(() =>{
    setUser(isUserLogedApi());
    setLoadUser(true);
    setRefreshCheckLogin(false)
  }, [refreshCheckLogin]);

  if(!loadUser){
    return null;
  }

  

  return (
    <AuthContext.Provider value={user}>
      {
        !user ?
        <div>
          <SignInSingUp setRefreshCheckLogin={setRefreshCheckLogin}/>
        </div> :
        <h1>
          <Routing setRefreshCheckLogin={setRefreshCheckLogin}/>
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