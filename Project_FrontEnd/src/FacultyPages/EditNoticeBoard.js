import React from 'react'
import FacultyNavBar from './FacultyNavBar';
import {useParams, useNavigate} from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditNoticeBoard() {
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
const noticeId =param.id;
  const updateurl=`http://localhost:8080/faculty/editnoticeboard/${param.id}`;
  const editURL = `http://localhost:8080/faculty/editnoticeboard/${param.id}`;

  const [moduleName,setModuleName]=useState('')
  const [date,setDate]=useState('')
  const [description,setDescription]=useState('')
  const current = new Date();
  const vdate = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
            const handleModuleName = (e) => {
              setModuleName(e.target.value)
          }
          const handleDate = (e) => {
              setDate(e.target.value)
          }
          const handleDescription = (e) => {
              setDescription(e.target.value)
          }
        
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.get(editURL,config).then((response) => {
      console.log(response.data);
      const noticeboardData = response.data;
      console.log(noticeboardData.data.moduleName);
        setModuleName(noticeboardData.data.moduleName)
        console.log(moduleName);
        setDate(noticeboardData.data.date)
        setDescription(noticeboardData.data.description)
    }).catch(error => {
      alert("Error Ocurred getting NoticeBoard detail:"+ error);
    });
  }, []);

   function submit(e){
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
        e.preventDefault();
         axios.put(updateurl,{
            moduleName:moduleName,
            date:date,
            description:description,
         },config).then((response) => {
          //         alert(" record updated  Succesfully");
                   toast.success('Noticeboard Updated Succesfully !!', {
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
            navigate("/faculty/viewnoticeboard")
    }
  return (<diV>
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
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-4 p-5 shadow bg-white rounded">
            <span className='fs-3 mb-3 fw-bolder'><center><h3>Edit Noticeboard</h3></center></span>
           <br/>
            <form onSubmit={submit}>
           <div className='mb-3'>
             <label>Module Name</label>
             <input type ='text' className='form-control' placeholder='Enter Module Name' onChange={handleModuleName} value={moduleName} name="moduleName"></input>
           </div>
           <div className='mb-3'>
             <label>Date</label>
             <input type ='date' className='form-control' placeholder='Enter date' onChange={handleDate} value={date} name="date" min={vdate}></input>
           </div>
           <div className='mb-3'>
             <label>Description</label><br></br>
             <textarea className='col-100  form-control' onChange={handleDescription} value={description} name="description"> </textarea>
           </div>
           <br></br>
           <div className='mb-3'>
           <button className='btn btn-primary form-control'> Submit</button>
           </div>
           </form>
       </div>
       </div>
       </div>
  </diV>
 );
}

export default EditNoticeBoard