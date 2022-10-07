import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewAssignment() {
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

  const [data, setData] = useState({assignments: [], isFetching: false});
    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      };
      const fetchassignments= async () => {
          try {
            setData((data)=>({assignments:data.assignments,isFetching:true}));
            console.log(sessionStorage.getItem("userId"));
           const url=`http://localhost:8080/faculty/viewassignment/${sessionStorage.getItem("userId")}`
            const response =await axios.get(url,config);
            setData({assignments:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({assignments:data.assignments,isFetching:false}));
          }
      };
      fetchassignments();
  }, []);
  const removeAssignment =(id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.delete(`http://localhost:8080/faculty/viewassignment/delete/${id}`,config).then((response) => {

      alert("Assignment record With Id " + id + " deleted!");
      toast.success('Assignment Record Deleted With Id ' + id + ' Succesfully ', {
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
  return(
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
      <div className='container-fluid' style={{overflow:"auto"}}>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:35}}>
       <div className="col-8 p-5 shadow bg-white rounded">
           <center><span className='fw-bolder fs-3'><h2>View Assignment </h2></span></center>
           <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter name or email' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
           <table className="table table-striped table-secondary table-hover">
                 <thead className='table-dark'>
                   <tr>
                <th>Sr No.</th>
                <th>Module Name</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
             data.assignments.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
            .map(({id,moduleName,description})=>
         <tr>
          <td>{id}</td>
          <td>{moduleName}</td>
          <td>{description}</td>
          <td>
              <button className="button border-white" onClick={()=>navigate(`/faculty/editassignment/${id}`)}><i className="bi bi-pencil-square"></i></button>
              <button className="button border-white" onClick={() => removeAssignment(id)}><i className="bi bi-trash3-fill"></i></button>        
            </td>
         </tr>)}
        </tbody>
    </table> </div>
    </div>
 </div></form></div>  
)
}

export default ViewAssignment