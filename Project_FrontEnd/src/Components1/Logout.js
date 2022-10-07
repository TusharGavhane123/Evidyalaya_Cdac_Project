import React from 'react';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Logout() {
  return (
    <div>
         <NavBar></NavBar>  
         <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <h2>Logged Out Succesfully</h2></div>
  )
}

export default Logout