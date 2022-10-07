import FacultyNavBar from './FacultyNavBar';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTimeTable() {
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
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
    },
  };
  const current = new Date();
  const vdate = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
 

  const id=sessionStorage.getItem("userId");
  const url=`http://localhost:8080/faculty/addtimetable/${id}`
  const navigate = useNavigate();
  const[data,setData]=useState({
      facultyName:"",
      date:"",
      startTime:"",
      endTime:"",
      moduleName:"",
      platform:"",
      link:""
  })

  function handle(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
}

  function submit(e){
      e.preventDefault();
      axios.post(url,{
          facultyName:sessionStorage.getItem("userName"),
          date: data.date,
          startTime:data.startTime,
          endTime:data.endTime,
          moduleName:data.moduleName,
          platform:data.platform,
          link:data.link
      },config).then(response => { 
        // alert("Timetable Added Succesfully!!!",response.data);
         toast.success('Timetable Added Succesfully!!!', {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           });
         console.log("",response.data)
       }
            ).catch(error =>{
             toast.error(' Something Went Wrong !!!', {
               position: "top-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               });
            // alert("Error!!!");
            })
            navigate("/faculty")
  }
  return (

     <div>
        <FacultyNavBar/>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" ,marginTop:20}}>
       <div className="col-4 p-5 shadow bg-white rounded">
            <span className='fs-3 mb-3 fw-bolder'><center><h2>Add Timetable</h2></center></span>
            <br></br>
            <form onSubmit={submit}>
           <div className='mb-3'>
             <label>Date</label>
             <input type ='date' className='form-control' placeholder='Enter date' onChange={(e)=>handle(e)} id='date' value={data.value} min={vdate}></input>
           </div>
           <div className='mb-3'>
              <label>Start Time: </label>
              <input type='time' className='col-3' onChange={(e)=>handle(e)} id='startTime' value={data.value}></input>
                &nbsp;   &nbsp;   &nbsp;
              <label>End Time:</label> 
              <input type='time' className='col-3' onChange={(e)=>handle(e)} id='endTime' value={data.value}></input><br></br>
              
           </div>

           <div className='mb-3'>
               <lable>Module Name</lable>
              <input type='text' className='form-control' onChange={(e)=>handle(e)} id='moduleName' value={data.value}></input>
           </div>

           <div className='mb-3'>
               <lable>Platform</lable>
              <input type='text'  className='form-control' onChange={(e)=>handle(e)} id='platform' value={data.value}></input>
           </div>

           <div className='mb-3'>
               <lable>Link</lable>
              <input type='text'  className='form-control' onChange={(e)=>handle(e)} id='link' value={data.value}></input>
           </div>
           <br></br>
           <div className='mb-3'>
           <button className='btn btn-primary form-control'> Submit</button>
           </div>
           </form>
       </div>
       </div>
       </div>
        </div>
  
  );
}

export default AddTimeTable