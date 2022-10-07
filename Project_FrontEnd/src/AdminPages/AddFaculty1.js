import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function AddFaculty1() {
  useEffect(() => {  
    if(sessionStorage.getItem("userName")===null){
       navigate("/");
    }
    if(sessionStorage.getItem("userRole")==="ROLE_FACULTY"){
      navigate("/faculty")
    }
    if(sessionStorage.getItem("userRole")==="ROLE_STUDENT"){
      navigate("/student")
    }
});
const current = new Date();
  const vdate = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;
 
 
    const url="http://localhost:8080/admin/addfaculty"
    const navigate = useNavigate();
    const[data,setData]=useState({
        name:"",
        dob:"",
        mobNo:"",
        email:"",
        address:"",
        password:""
    })
    function submit(e){
        e.preventDefault();
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
        axios.post(url,{
            name:data.name,
            dob: data.dob,
            mobNo: data.mobNo,
            email: data.email,
            address: data.address,
            password: data.password
        },config).then(response => { 
         // alert("Faculty Added Succesfully!!!",response.data);
          toast.success('Faculty Added Succesfully!!!', {
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
              //alert("Error!!!");
             })
            
            navigate('/admin')
           
    }
   

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }
  return (

    <div>
        <AdminNavBar/>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:10}}>
       <div className="col-4 p-4 shadow bg-white rounded">
            <span className='fs-3 mb-3 fw-bolder' style={{fontFamily:"unset"}}><center><h2>Add Faculty</h2></center></span>
    <form onSubmit={(e)=>submit(e)}>
          <div className='mb-3'>
           <lable>Faculty Name</lable><br></br>
          
            <input type='text' placeholder='Enter Faculty Name'className='form-control' onChange={(e)=>handle(e)} id='name' value={data.value}></input>
           </div>
           <div className='mb-3'>
             <label>Date Of Birth</label>
             <input type ='date' className='form-control' placeholder='Enter date'onChange={(e)=>handle(e)} id='dob' value={data.value} max={vdate}></input>
         
           </div>
          
           <div className='mb-3'>
              <label>Mobile: </label>
              <input type="text" name="mob_no" className='col-4' onChange={(e)=>handle(e)} id='mobNo' value={data.value} pattern="\d{10}" maxLength={10}></input>
                &nbsp;
              <label>Email:</label> 
              <input type='email' className='col-5' onChange={(e)=>handle(e)} id='email' value={data.value}></input ><br></br>
              
           </div>
           <div className='mb-3'>
             <label>Address</label><br></br>
             <textarea className='col-100  form-control'onChange={(e)=>handle(e)} id='address' value={data.value}> </textarea>
           </div>

           <div className='mb-3'>
               <label>Password</label>
              <input type='password' className='form-control' onChange={(e)=>handle(e)} id='password' value={data.value}></input>
              
           </div>
           <br></br>
           <div className='mb-3'>
           <button className='btn btn-primary form-control'>Submit</button>
           </div>   
           </form>
       </div>
       </div>
       </div>
        </div>
  )
}

export default AddFaculty1