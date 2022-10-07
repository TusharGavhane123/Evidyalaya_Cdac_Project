import React from 'react'
import AdminNavBar from './AdminNavBar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function AdminViewFaculty() {
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
  const [data, setData] = useState({ faculties: [], isFetching: false });
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
  }

  const navigate = useNavigate();
  useEffect(() => {
    const fetchfaculties = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      try {
        setData((data) => ({ faculties: data.faculties, isFetching: true }));
        const response = await axios.get('http://localhost:8080/admin/viewfaculty', config)
        setData({ faculties: response.data, isFetching: false });
        console.log(response);
        return response;
      } catch (e) {
        console.log(e);
        setData((data) => ({ faculties: data.faculties, isFetching: false }));
      }
    };
    fetchfaculties();
  }, []);

  const removeFaculty = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.delete(`http://localhost:8080/admin/viewfaculty/delete/${id}`, config).then((response) => {

      alert("Faculty record " + id + " deleted!");
      toast.success('Faculty Record Deleted With Id ' + id + ' Succesfully ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }).catch(error => {
      toast.error(' Something Went Wrong !!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      alert("Error!!!");
    })
    navigate('/admin/viewfaculty')
  }
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
      <form>
      <div className='cotainer-fluid' style={{ overflow: "auto" }}>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: -50 }}>
          <div className=" col-8 p-5 shadow mb-5 bg-white rounded">
            <center><span style={{ fontFamily: "unset" }}><h2>View Faculty Details </h2></span></center>
            <div className='ui search'>
              <div className='ui icon input' style={{ marginLeft: "33rem" }} >
                <input type='text' placeholder='Enter name or email' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value={searchText} style={{ height: "3rem" }}></input>

              </div>
              <br></br>
            </div>
            <table className="table table-striped table-secondary table-hover">
              <thead className='table-dark '>
                <tr>
                  <th>Sr No.</th>
                  <th>Faculty Name</th>
                  <th>Date of Birth</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  data.faculties.filter((val) => {
                    if (searchText == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchText.toLowerCase()) || val.email.toLowerCase().includes(searchText.toLowerCase())) {
                      return val
                    }
                  })
                    .map(({ id, name, dob, mobNo, email, address }) =>
                      <tr>
                        <td>
                          {id}
                        </td>
                        <td>
                          {name}
                        </td>
                        <td>
                          {dob}
                        </td>
                        <td>
                          {mobNo}
                        </td>
                        <td>
                          {email}
                        </td>
                        <td>
                          {address}
                        </td>
                        <td>
                          <button className="button border-white" onClick={() => navigate(`/admin/editfaculty/${id}`)}><i className="bi bi-pencil-square"></i></button>
                          &nbsp;
                          <button className="button border-white" onClick={() => removeFaculty(id)} ><i className="bi bi-trash3-fill"></i></button>
                        </td>
                      </tr>
                    )}
              </tbody>
            </table> </div>
        </div>
        
      </div></form></div>
      
  )
}

export default AdminViewFaculty;