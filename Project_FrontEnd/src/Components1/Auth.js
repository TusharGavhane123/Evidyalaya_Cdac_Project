import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
function Auth() {
    const navigate= useNavigate();
    useEffect(() => {   
        if(sessionStorage.getItem("userName")===""){
           navigate("/");
        }
    });
  return (
    <div></div>
  )
}

export default Auth