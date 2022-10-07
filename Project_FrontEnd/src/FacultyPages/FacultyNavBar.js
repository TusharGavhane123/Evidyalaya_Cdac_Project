import '../Components1/Style.css'
import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//useLocation
function  FacultyNavBar() {
  const navigate = useNavigate()

  const handleLogout  = function(){
    sessionStorage.clear();
    alert("Signed Out Successfully !!!")
    navigate('/signin');
    toast.info('Signed Out Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }
  return (
    <div className='navbar  px-5 bg-dark' >
    <div className='flex-grow'><img className='img' src="/image/images_low.png"></img> </div>
   <a href="#"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold' style={{fontFamily:'cursive'}} >E-Vidyalaya</span></a>
   <NavLink to="/faculty" style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'>Dashboard</span></NavLink>
 <div className='badge '><span><h3 className='fs-3 text-white fw-semibold'><i className="bi bi-person-circle"></i> {sessionStorage.getItem("userName")}</h3></span></div>
   <button className='btn btn-primary ' onClick={handleLogout}><span className='fs-6'><i class="bi bi-box-arrow-right"></i>Logout</span></button>
    </div>
  )
}

export default  FacultyNavBar ;