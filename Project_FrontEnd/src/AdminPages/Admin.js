import React, { useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("userName") === null) {
      navigate("/");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_FACULTY") {
      navigate("/faculty")
    }
    if (sessionStorage.getItem("userRole") === "ROLE_STUDENT") {
      navigate("/student")
    }
  });

  return (
    <div>
      <AdminNavBar></AdminNavBar>
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
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: -50 }}>

          <div className="col-6 p-5 shadow bg-white rounded" >
            <span className='fs-3 mb-3 fw-bolder' style={{ fontFamily: "unset" }}><center><h3> <i class="bi bi-person-square"></i> &nbsp;Admin Dashboard</h3></center></span>
            <table style={{ marginLeft: 15, marginTop: 20 }}>
              <tr>
                <td className='p-1 px-5 ' >
                  <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    {/* <div className="card-header">TimeTable</div> */}
                    <div className="card-body">

                      <NavLink to="/admin/addfaculty" style={{ textDecoration: 'none' }}> <h5 className="card-title p-4 text-white"> <i class="bi bi-person-plus-fill"></i> &nbsp; Add Faculty</h5></NavLink>
                      {/* <h5 className="card-title p-5">TimeTable</h5> */}
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                  </div>
                </td>

                <td>
                  <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    {/* <div className="card-header">NoticeBoard</div> */}
                    <div className="card-body">
                      <NavLink to="/admin/viewfaculty" style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white"> <i class="bi bi-eye-fill"></i> &nbsp; View Faculty</h5> </NavLink>
                      {/* <h5 className="card-title p-5">NoticeBoard</h5> */}
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                  </div>
                </td>

              </tr>

              <tr>
                <td className='p-3 px-5'>
                  <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    {/* <div className="card-header">Faculty</div> */}
                    <div className="card-body">
                      <NavLink to="/admin/addstudent" style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white"><i class="bi bi-person-plus-fill"></i> &nbsp;Add Student</h5> </NavLink>
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                  </div>
                </td>

                <td>
                  <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    {/* <div className="card-header">Assignment</div> */}
                    <div className="card-body">
                      <NavLink to="/admin/viewstudent" style={{ textDecoration: 'none' }}><h5 className="card-title p-4 text-white"> <i class="bi bi-eye-fill"></i> &nbsp; View Student</h5> </NavLink>
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

export default Admin