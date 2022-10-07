import React from 'react'
import FacultyNavBar from './FacultyNavBar';
import {useParams, useNavigate} from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditTimeTable() {
  const navigate = useNavigate();
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

  const param = useParams();
const timeId=param.id;
  const updateurl=`http://localhost:8080/faculty/edittimetable/${param.id}`;
  const editURL = `http://localhost:8080/faculty/edittimetable/${param.id}`;

  const [date,setDate]=useState('')
  const [startTime,setStartTime]=useState('')
  const [endTime,setEndTime]=useState('')
  const [moduleName,setModuleName]=useState('')
  const [platform,setPlatform]=useState('')
  const[link,setLink]=useState('')
  const current = new Date();
  const vdate = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
            const handleModuleName = (e) => {
              setModuleName(e.target.value)
          }
          const handleDate = (e) => {
              setDate(e.target.value)
          }
          const handleStartTime= (e) => {
              setStartTime(e.target.value)
          }
          const handleEndTime = (e) => {
            setEndTime(e.target.value)
        }
        const handlePlatform = (e) => {
            setPlatform(e.target.value)
        }
        const handleLink = (e) => {
            setLink(e.target.value)
        }
        
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.get(editURL,config).then((response) => {
      console.log(response.data);
      const timeTableData = response.data;
        setDate(timeTableData.data.date)
        setStartTime(timeTableData.data.startTime)
        setEndTime(timeTableData.data.endTime)
        setModuleName(timeTableData.data.moduleName)
        setPlatform(timeTableData.data.platform)
        setLink(timeTableData.data.link)
    }).catch(error => {
      alert("Error Ocurred getting Timetable detail:"+ error);
    });
  }, []);

   function submit(e){
        e.preventDefault();
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
         axios.put(updateurl,{
            date:date,
            startTime:startTime,
            endTime:endTime,
            moduleName:moduleName,
            platform:platform,
            link:link
         },config).then((response) => {
                 alert(" record updated  Succesfully");
                   toast.success('Timetable Updated Succesfully !!', {
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
           //            alert("Error!!!");
                     })
            navigate("/faculty/viewtimetable")
    }
  return (

  <div>
     <FacultyNavBar/>
     <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
    <div className="col-4 p-5 shadow bg-white rounded">
         <span className='fs-3 mb-3 fw-bolder'><center><h3>Edit Timetable</h3></center></span>
         <form onSubmit={submit}>
        <div className='mb-3'>
          <label>Date</label>
          <input type ='date' className='form-control' placeholder='Enter date' onChange={handleDate} value={date} name="date" min={vdate}></input>
        </div>
        <div className='mb-3'>
           <label>Start Time: </label>
           <input type='time' className='col-3' onChange={handleStartTime} value={startTime} name="startTime"></input>
             &nbsp;   &nbsp;   &nbsp;
           <label>End Time:</label> 
           <input type='time' className='col-3' onChange={handleEndTime} value={endTime} name="endTime"></input><br></br>
           
        </div>

        <div className='mb-3'>
            <lable>Module Name</lable>
           <input type='text' className='form-control' onChange={handleModuleName} value={moduleName} name="moduleName"></input>
        </div>

        <div className='mb-3'>
            <lable>Platform</lable>
           <input type='text'  className='form-control' onChange={handlePlatform} value={platform} name="platform"></input>
        </div>

        <div className='mb-3'>
            <lable>Link</lable>
           <input type='text'  className='form-control' onChange={handleLink} value={link} name="link"></input>
        </div>
        <br></br>
        <div className='mb-3'>
        <button className='btn btn-primary form-control'>Update</button>
        </div>
        </form>
    </div>
    </div>
    </div>
     </div>

);
}

export default EditTimeTable