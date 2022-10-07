import '../Components1/Style.css'
import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//useLocation
function  StudentNavBar() {
  const navigate = useNavigate()
 // const {state}=useLocation()
  //console.log(state.user)
  const handleLogout  = function(){
    sessionStorage.clear();
    alert("Signed Out Successfully !!!");
    navigate('/signin');
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
    <div className='navbar bg-dark px-5' >
    <div className='flex-grow'><img className='img' src="/image/images_low.png"></img> </div>
    <a href="#"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold' style={{fontFamily:'cursive'}} >E-Vidyalaya</span></a>
   <NavLink to="/student" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Dashboard</span></NavLink>
   <NavLink to="/student/timetable"  style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Timetable </span></NavLink>
   <NavLink to="/student/noticeboard"  style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Noticeboard </span></NavLink>
   <NavLink to="/student/faculty"  style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Faculty </span></NavLink>
   <NavLink to="/student/assignment"  style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Assignment</span></NavLink>
   <div className='badge '><span><h3 className='text-white'><i class="bi bi-person-circle"></i> {sessionStorage.getItem("userName")}</h3></span></div>
   <button className='btn btn-primary' onClick={handleLogout}><span className='fs-6'><i class="bi bi-box-arrow-right"></i>Logout</span></button>
    </div>
//   {/* <span><h3 className='text-white'>{state.user.data.name}</h3></span> */}
//   <div className='badge badge-success'><span><h3 className='text-white'>&#x2709; {sessionStorage.getItem("userName")}</h3></span></div>
//  {/* <span><h3 className='text-white'>&#x2709; {sessionStorage.getItem("userName")}</h3></span> */}
//    <button className='btn btn-primary' onClick={handleLogout}><span className='fs-6'>Logout</span></button>
  //  </div>
  )
}

export default  StudentNavBar ;

