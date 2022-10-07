import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Noticeboard.css';

function ViewNoticeBoard () {
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

  const [data, setData] = useState({noticeboards: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
  const navigate = useNavigate();
  useEffect(() => {
    const fetchnoticeboards= async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
        try {
          setData((data)=>({noticeboards:data.noticeboards,isFetching:true}));
          const response =await axios.get(`http://localhost:8080/faculty/viewnoticeboard/${sessionStorage.getItem("userId")}`,config)
          setData({noticeboards:response.data,isFetching:false});
          console.log(response);
          return response;
        } catch (e) {
            console.log(e);
            setData((data)=>({noticeboards:data.noticeboards,isFetching:false}));
        }
    };
    fetchnoticeboards();
}, []);

const removeNoticeBoard =(id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
    },
  };
  axios.delete(`http://localhost:8080/faculty/viewnoticeboard/delete/${id}`,config).then((response) => {

    alert("Noticeboard record with Id " + id + " deleted!");
    
    toast.success('Timetable Record Deleted With Id ' + id + ' Succesfully ', {
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
}
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
<form>
        <div className='cotainer-fluid' style={{overflow:"auto"}}>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-15}}>
    <div className="col-8 p-5 shadow bg-white rounded">
        <center><span className='fs-2 fw-bolder'><h2>Notice Board</h2></span></center>
        <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter module name' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
            <div >
        <table className="table table-striped table-secondary table-hover">
                 <thead className='table-dark'>
                 <tr>
                      <th>Id</th>
                      <th>Module Name</th>
                      <th>Date</th>
                      <th> Description</th>                      
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody style={{overflow:"auto"}}>
              {
             data.noticeboards.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
                .map(({id,moduleName,date,description})=>
                <tr>
                  <td>
                    {id}
                  </td>
                  
                  <td>
                    {moduleName}
                  </td>
                  <td>
                    {date}
                  </td>
                  <td>
                    {description}
                  </td>  
                  <td>
              <button className="button border-white" onClick={()=>navigate(`/faculty/editnoticeboard/${id}`)}><i className="bi bi-pencil-square"></i></button>
              <button className="button border-white" onClick={() => removeNoticeBoard(id)}><i className="bi bi-trash3-fill"></i></button>
            </td>
                </tr>)}
              </tbody>    
          </table> 
          </div> 
        </div>
        </div>
        </div> 
        </form>  
    </div>
  )
}

export default ViewNoticeBoard