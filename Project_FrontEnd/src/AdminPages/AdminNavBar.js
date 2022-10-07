import React from 'react';
import {NavLink , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminNavBar() {
    
    const navigate = useNavigate()
  const handleLogout  = function(){
    sessionStorage.clear();
    navigate('/signin');
    alert("Signed Out Successfully !!")
    toast.info('Signed Out Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <div>

<div className='navbar bg-dark px-5' >
    <div className='flex-grow'><img className='img' src="/image/images_low.png"></img> </div>
    <a href="#"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold' style={{fontFamily:'cursive'}} >E-Vidyalaya</span></a>
   
   <NavLink to="/admin"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'><i className="bi bi-house-door"></i>&nbsp;Home</span></NavLink>

  {/* <span><h3 className='text-white'>{state.user.data.name}</h3></span> */}
  {/* <div className='badge badge-success'><span><h3 className='text-white'>&#x2709; {sessionStorage.getItem("userName")}</h3></span></div> */}
 {/* <span><h3 className='text-white'>&#x2709; {sessionStorage.getItem("userName")}</h3></span> */}
   
   {/* <button className='btn btn-primary' onClick={handleLogout}><span className='fs-6'>Logout</span></button> */}

   <div className='badge '><span><h3 className='text-white fw-semibold'><i class="bi bi-person-circle"></i>  {sessionStorage.getItem("userName")}</h3></span></div>
   <button className='btn btn-primary' onClick={handleLogout}><span className='fs-6 fw-semibold'><i className="bi bi-box-arrow-right"></i>Logout</span></button>
   


    </div>



    </div>
  )
}

export default AdminNavBar;