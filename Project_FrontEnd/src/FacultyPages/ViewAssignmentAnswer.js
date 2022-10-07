import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ViewAssignmentAnswer() {

  useEffect(() => {
    if (sessionStorage.getItem("userName") === null) {
      navigate("/");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_ADMIN") {
      navigate("/admin")
    }
    if (sessionStorage.getItem("userRole") === "ROLE_STUDENT") {
      navigate("/student")
    }
  });
  const [data, setData] = useState({ answers: [], isFetching: false });
  const [searchText, setSearchText] = useState('')
  const [remark, setRemark] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
  }


  function handleDownload(file) {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
      responseType: 'blob'
    };
    axios.get(
      `http://localhost:8080/faculty/downloadFile/${file}`,
      config)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = link
        link.setAttribute('download', 'assignment.pdf')
        document.body.appendChild(link)
        link.click()
      }
      )
  }
  useEffect(() => {
    const fetchanswers = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      try {
        setData((data) => ({ answers: data.answers, isFetching: true }));
        console.log(sessionStorage.getItem("userId"));
        const url = `http://localhost:8080/faculty/viewassignmentanswer/${sessionStorage.getItem("userId")}`
        const response = await axios.get(url, config);
        setData({ answers: response.data, isFetching: false });
        console.log(response);
        return response;
      } catch (e) {
        console.log(e);
        setData((data) => ({ answers: data.answers, isFetching: false }));
      }
    };
    fetchanswers();
  }, []);


 const getGrade = function (e) {
     setGrade(e.target.value);
     console.log(grade);
   }
const reset=function(){
  document.getElementById("remark").value='';
}

  const getRemark = function (e) {
    setRemark(e.target.value);
    console.log(remark);
  }

  const handleGrade = function (id) {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    const gradeUrl = `http://localhost:8080/faculty/viewassignmentanswer/grade/${id}`
    axios.patch(gradeUrl, {
      grade: grade
    }, config).then(
      res =>{
       // alert("Grade Added Successfully!!")
      console.log(res.data)
    }
    )
    navigate('/faculty/viewassignmentanswer')
    toast.success('Grade Given Succesfully!!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleRemark = function (id) {
    reset();
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    const remarkUrl = `http://localhost:8080/faculty/viewassignmentanswer/remark/${id}`
    axios.patch(remarkUrl, {
      remark: remark
    }, config,).then(res =>{
     // alert("Remark Added Successfully!!")
      console.log(res.data)
    }
    )
    navigate('/faculty/viewassignmentanswer')
    toast.success('Remark Given Succesfully!!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  }

  return (
    <div>
      <FacultyNavBar />
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
      <div className='cotainer-fluid' style={{overflow:"auto"}}>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop:20}}>
          <div className="col-8 p-5 shadow bg-white rounded">
            <center><span className='fw-bolder fs-2'><h2>View Assignment Answers</h2></span></center>
            <div className='ui search'>
              <div className='ui icon input' style={{ marginLeft: "33rem" }} >
                <input type='text' placeholder='Enter module or student name' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value={searchText} style={{ height: "3rem" }}></input>
              </div>
              <br></br>
            </div>
            <table className="table table-striped table-secondary table-hover">
              <thead className='table-dark'>
                <tr>
                  <th>Sr No.</th>
                  <th>Module Name</th>
                  <th>Student Name</th>
                  <th>Download</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.answers.filter((val) => {
                    if (searchText == "") {
                      return val
                    } else if (val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.studentName.toLowerCase().includes(searchText.toLowerCase())) {
                      return val
                    }
                  })
                    .map(({ id, moduleName, studentName, fileName }) =>
                      <tr>
                        <td>{id}</td>
                        <td>{moduleName}</td>
                        <td>{studentName}</td>
                        <td><button className="btn btn-primary" onClick={() => handleDownload(fileName)}>Download</button></td>
                        <td>
                          <td>
                            <select name="grade" id="grade" onChange={(e)=>getGrade(e)}>
                              <option value="A+">A+</option>
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C+">C+</option>
                              <option value="C">C</option>
                              <option value="D+">D+</option>
                              <option value="D">D</option>
                              <option value="F">F</option>
                            </select>
                            <button onClick={()=>handleGrade(id)}>Grade</button>
                          </td>
                          <td>
                            <input type='text' id="remark"  name="remark" placeholder='enter remark' onChange={(e) => getRemark(e)} />
                            <button className="button muted-button" onClick={() => handleRemark(id)}>Remark</button>
                          </td>
                        </td>
                      </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div></div>
  )
}
export default ViewAssignmentAnswer;