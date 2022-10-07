import './Faculty.css';
import React, { useEffect } from 'react'
import FacultyNavBar from './FacultyNavBar'
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Faculty() {
  const navigate =useNavigate();
  useEffect(() => {  
      if(sessionStorage.getItem("userName")===null){
         navigate("/");
      }
      if(sessionStorage.getItem("userRole")==="ROLE_ADMIN"){
        navigate("/admin")
      }
      if(sessionStorage.getItem("userRole")==="ROLE_STUDENT"){
        navigate("/student")
      }
  });

  return (
    <div>
      <FacultyNavBar/>   
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
      <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-50}}>
    
    <div className="col-10 p-5 shadow bg-white rounded" >
    <center><span className='fw-bolder fs-1'><h3> <i class="bi bi-person-square"></i> &nbsp;Faculty Dashboard</h3></span></center>
    <br></br>
      <table  style={{marginLeft:40 , marginTop:20}}>
          <tr>
            <td className='px-3 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">TimeTable</div> */}
  <div className="card-body">
  <NavLink to="/faculty/addtimetable/"  style={{ textDecoration: 'none' }}> <h5 className="card-title p-4 text-white">Add TimeTable</h5></NavLink>
    {/* <h5 className="card-title p-5">TimeTable</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td className='px-3' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">NoticeBoard</div> */}
  <div className="card-body">
  <NavLink to="/faculty/viewtimetable"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">View &nbsp; TimeTable</h5> </NavLink>
    {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>
            <td className='px-3 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">NoticeBoard</div> */}
  <div className="card-body">
  <NavLink to="/faculty/addnoticeboard"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">Add &nbsp;NoticeBoard</h5> </NavLink>
    {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>
            <td className=' px-3 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">NoticeBoard</div> */}
  <div className="card-body">
  <NavLink to="/faculty/viewnoticeboard"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">View &nbsp; NoticeBoard</h5> </NavLink>
    {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>
          </tr>
          <tr>
          <td className='px-3'>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Faculty</div> */}
  <div className="card-body">
  <NavLink to="/faculty/viewstudent"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">View &nbsp;Student</h5> </NavLink>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td className=' px-3 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Assignment</div> */}
  <div className="card-body">
  <NavLink to="/faculty/addassignment" style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">Upload Assignment</h5> </NavLink>
    {/* <h5 className="card-title p-5">Assignment</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td className=' px-3 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Assignment</div> */}
  <div className="card-body">
  <NavLink to="/faculty/viewassignment" style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">View Assignment</h5> </NavLink>
    {/* <h5 className="card-title p-5">Assignment</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td className=' px-3 '>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Assignment</div> */}
  <div className="card-body">
  <NavLink to="/faculty/viewassignmentanswer"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white"> View Assignment Answer</h5> </NavLink>
    {/* <h5 className="card-title p-5">Assignment</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>
          </tr>
      </table>
    </div>
    </div>
    </div>

    </div>
  )
}


export default Faculty;