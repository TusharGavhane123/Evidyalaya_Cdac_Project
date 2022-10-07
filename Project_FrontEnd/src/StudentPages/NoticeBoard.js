import StudentNavBar from "./StudentNavBar"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NoticeBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(sessionStorage.getItem("userName"))
    if (sessionStorage.getItem("userName") === null) {
      navigate("/");
    }
    if (sessionStorage.getItem("userRole") === "ROLE_ADMIN") {
      navigate("/admin")
    }
    if (sessionStorage.getItem("userRole") === "ROLE_FACULTY") {
      navigate("/faculty")
    }
  });
  const [data, setData] = useState({ noticeboards: [], isFetching: false });
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
  }
  useEffect(() => {
    const fetchnoticeboards = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      try {
        setData((data) => ({ noticeboards: data.noticeboards, isFetching: true }));
        const response = await axios.get('http://localhost:8080/student/noticeboard', config)
        setData({ noticeboards: response.data, isFetching: false });
        console.log(response);
        return response;
      } catch (e) {
        console.log(e);
        setData((data) => ({ noticeboards: data.noticeboards, isFetching: false }));
      }
    };
    fetchnoticeboards();
  }, []);
  return (
    <div>
      <StudentNavBar />
      <div className='cotainer-fluid' style={{ overflow: "auto" }}>
        <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 60 }}>

          <div className="col-8 p-5 shadow rounded" style={{ backgroundColor: 'white' }}>
            <center><span className="fs-2 fw-bolder"><h2>View Noticeboard</h2></span></center>
            <div className='ui search'>
              <div className='ui icon input' style={{ marginLeft: "33rem" }} >
                <input type='text' placeholder='Enter faculty or module name' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value={searchText} style={{ height: "3rem" }}></input>
              </div>
              <br></br>
            </div>
            {
              data.noticeboards.filter((val) => {
                if (searchText == "") {
                  return val
                } else if (val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())) {
                  return val
                }
              })
                .map(({ description, date, facultyName, moduleName }) =>
                  <table className="table border table-striped table-secondary table-hover" style={{ cellspacing: '5' }}>
                    <tr>
                      <td>
                        <span className="fw-bolder">Description : </span> {description}  &nbsp; &nbsp; &nbsp; &nbsp; <i class="bi bi-bookmark-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bolder"> Publish Date :</span> {date}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bolder">Faculty Name :</span> {facultyName}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bolder"> Module Name : </span>{moduleName}
                      </td>
                    </tr>
                  </table>
                )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default NoticeBoard;
