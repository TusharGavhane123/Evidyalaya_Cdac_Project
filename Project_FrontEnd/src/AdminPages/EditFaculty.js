import React from 'react'
import AdminNavBar from './AdminNavBar';
import {useParams, useNavigate} from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditFaculty() {
  const navigate = useNavigate();
  
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
  const param = useParams();
  const facultyId=param.id;
  const updateurl=`http://localhost:8080/admin/editfaculty/${param.id}`;
  const editURL = `http://localhost:8080/admin/editfaculty/${param.id}`;

  const [name,setName]=useState('')
  const [dob,setDob]=useState('')
  const [mobNo,setMobNo]=useState('')
  const [email, setEmail] = useState('')
  const[address,setAddress]=useState('')

            const handleName = (e) => {
              setName(e.target.value)
          }
          const handleDob = (e) => {
              setDob(e.target.value)
          }
          const handleMobNo = (e) => {
              setMobNo(e.target.value)
          }
          const handleEmail = (e) => {
              setEmail(e.target.value)
          }
          const handleAddress = (e) => {
              setAddress(e.target.value)
          }
const current = new Date();
  const vdate = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.get(editURL,config).then((response) => {
      console.log(response.data);
      const facultyData = response.data;
      console.log(facultyData.data.name);
        setName(facultyData.data.name)
        console.log(name);
        setDob(facultyData.data.dob)
        setMobNo(facultyData.data.mobNo)
        setAddress(facultyData.data.address)
        setEmail(facultyData.data.email)
        console.log(facultyData.status);
    }).catch(error => {
      alert("Error Ocurred getting employee detail:"+ error);
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
            name:name,
            dob:dob,
            mobNo:mobNo,
             email:email,
             address:address   
         },config).then((response) => {

 //         alert("Faculty record " + facultyId + " Updated!");
          toast.success('Faculty Record Updated With Id ' + facultyId + ' Succesfully ', {
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
            navigate('/admin/viewfaculty')
            navigate('/admin/viewfaculty')
    }
    
  return (

     <div>
          <AdminNavBar></AdminNavBar>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-4 p-5 shadow bg-white rounded">
            <span className='fs-3 mb-3 fw-bolder'><center><h1>Edit Faculty</h1></center></span>

            <form onSubmit={(e)=>submit(e)}>
          <div className='mb-3'>
           <label for ="name">Faculty Name</label><br></br>
            <input type='text' placeholder='Enter Faculty Name'className='form-control' onChange={handleName}  value={name} name="name"></input>
           </div>
           <div className='mb-3'>
             <label for ="dob" >Date Of Birth</label>
             <input type ='date' className='form-control' placeholder='Enter date'onChange={handleDob} value={dob} name="dob" max={vdate}></input>
           </div>
          
           <div className='mb-3'>
              <label for ="mobNo">Mobile: </label>
              <input type='text' className='col-4' onChange={handleMobNo} value={mobNo} name="mobNo" maxLength={10} pattern="\d{10}"></input>
                &nbsp;
              <label for ="email">Email:</label> 
              <input type='email' className='col-5' onChange={handleEmail}  value={email} name="email" ></input ><br></br>
              
           </div>
           <div className='mb-3'>
             <label for ="address">Address</label><br></br>
             <textarea className='col-100  form-control'onChange={handleAddress} value={address} name="address"> </textarea>
           </div>
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

export default EditFaculty