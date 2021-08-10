import React, { useState } from 'react';
import SignInSingUp from "./page/SignInSingUp";
import { ToastContainer } from "react-toastify";

export default function App() {

  const [user, setUser]  = useState({});

  return <div>
    {
      user ?
      <div>
        <SignInSingUp/>
      </div> :
      <h1>
        No estas logeado
      </h1>
    }

    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
    pauseOnHover
    />
  </div>

}