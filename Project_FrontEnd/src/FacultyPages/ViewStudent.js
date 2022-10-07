import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewStudent() {
  
  const navigate =useNavigate();
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

  const [searchText, setSearchText] = useState('')
  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}

  const [data, setData] = useState({students: [], isFetching: false});
    useEffect(() => {
      const fetchstudents= async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
          try {
            setData((data)=>({students:data.students,isFetching:true}));
            const response =await axios.get('http://localhost:8080/faculty/viewstudent',config)
            setData({students:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({students:data.students,isFetching:false}));
          }
      };
      fetchstudents();
  }, []);

  return (
    <div>
    <FacultyNavBar/>
   
    <div className='cotainer-fluid' style={{overflow:"auto"}}>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-70}}>
    <div className="col-8 p-5 shadow bg-white rounded">
        <center><span className='fs-2 fw-bolder'><h2>View Student Details</h2></span></center>
        <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter name or email' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
        <div className='contain-table'>
            <table className='table table-striped table-secondary table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>Sr No.</th>
                        <th>Full Name</th>
                        <th>DOB</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
             {
             data.students.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.name.toLowerCase().includes(searchText.toLowerCase()) ||val.email.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
             .map(({id,name,dob,mobNo,email,address})=>
             <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{dob}</td>
              <td>{mobNo}</td>
              <td>{email}</td>
              <td>{address}</td>
             </tr>
             )}
                </tbody>
            </table>  
        </div>
       
    </div>
    </div>
    </div>
    </div>
  )
}

export default ViewStudent