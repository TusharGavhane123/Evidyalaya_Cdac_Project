import './Student.css';
import React from 'react';
//import { useLocation } from 'react-router-dom';
import StudentNavBar from './StudentNavBar';
import {NavLink,useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
function Student() {
  const navigate= useNavigate();
    useEffect(() => {   
      console.log(sessionStorage.getItem("userName"))
        if(sessionStorage.getItem("userName")===null){
           navigate("/");
        }
        if(sessionStorage.getItem("userRole")==="ROLE_ADMIN"){
          navigate("/admin")
        }
        if(sessionStorage.getItem("userRole")==="ROLE_FACULTY"){
          navigate("/faculty")
        }
    });
  return (
        <div>
          <StudentNavBar/>
        {/* <h5>{state.user.data.name}</h5> */}
        <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-30}}>
    
    <div className="col-8 p-5 shadow bg-white rounded" >
    <center><span className='fw-bolder fs-2'><h2>  <i class="bi bi-mortarboard"></i> &nbsp;  Student Dashboard</h2></span></center>
    <br></br>
      <table  style={{marginLeft:40 , marginTop:20}}>
          <tr>
            <td className='p-1 px-5 ' >
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">TimeTable</div> */}
  <div className="card-body">

  <NavLink to="/student/timetable"  style={{ textDecoration: 'none' }}> <h5 className="card-title p-4 text-white">TimeTable</h5></NavLink>
    {/* <h5 className="card-title p-5">TimeTable</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">NoticeBoard</div> */}
  <div className="card-body">
  <NavLink to="/student/noticeboard"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">NoticeBoard</h5> </NavLink>
    {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem',marginLeft:'50px' }}>
  {/* <div className="card-header">NoticeBoard</div> */}
  <div className="card-body">
  <NavLink to="/student/result"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">  &nbsp; &nbsp; Result &nbsp; &nbsp;  &nbsp; &nbsp;</h5> </NavLink>
    {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

          </tr>

          <tr>
          <td className='p-3 px-5'>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Faculty</div> */}
  <div className="card-body">
  <NavLink to="/student/faculty"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">Faculty</h5> </NavLink>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
            </td>

            <td>
            <div className="card text-bg-success mb-3" style={{maxWidth: '18rem'}}>
  {/* <div className="card-header">Assignment</div> */}
  <div className="card-body">
  <NavLink to="/student/assignment"  style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white">Assignment</h5> </NavLink>
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
  );
}

export default Student;