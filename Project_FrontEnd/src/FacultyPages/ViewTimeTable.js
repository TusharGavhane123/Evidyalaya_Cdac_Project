import React from 'react'
//import Faculty from '../StudentPages/ViewFaculty'
import FacultyNavBar from './FacultyNavBar'
import { useEffect ,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function ViewTimeTable() {
  
  useEffect(() => {  
    console.log(sessionStorage.getItem("userName"))
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

  const [data, setData] = useState({timetables: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
  const navigate = useNavigate();
    useEffect(() => {
      const fetchtimetables= async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
          try {
            setData((data)=>({timetables:data.timetables,isFetching:true}));
            const response =await axios.get(`http://localhost:8080/faculty/viewtimetable/${sessionStorage.getItem("userId")}`,config)
            setData({timetables:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({timetables:data.timetables,isFetching:false}));
          }
      };
      fetchtimetables();
  }, []);
  const removeTimeTable =(id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };

    axios.delete(`http://localhost:8080/faculty/viewtimetable/delete/${id}`,config).then((response) => {

      alert("Timetable record " + id + " deleted!");
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
  return(
    <div> <FacultyNavBar/>
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
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-20}}>
    <div className="col-8 p-5 shadow bg-white rounded">
        <center><span className='fs-2 fw-bolder'><h2>View TimeTable Details</h2></span></center>
        <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter module name' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
        <table className="table table-striped table-secondary table-hover">
              <thead className='table-dark'>
                  <tr>
                      <th>Sr No.</th>
                      <th>Date</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Module Name</th>
                      <th>Platform</th>
                      <th>Link</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              {
             data.timetables.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
             .map(({id,date,startTime,endTime,moduleName,platform,link})=>
             <tr>
              <td>
                {id}
              </td>
                <td>
                {date}
                </td>
              <td>
                {startTime}
              </td>
              <td>
                {endTime}
              </td>
              <td>
                {moduleName}
              </td>
              <td>
                {platform}
              </td>
              <td>
              <td><a href={link}>Click Here</a></td>
              </td>
              <td>
              <button className="button border-white" onClick={()=>navigate(`/faculty/edittimetable/${id}`)}><i className="bi bi-pencil-square"></i></button>
              {/* <button className="button muted-button" onClick={() => removeFaculty({id})}>Delete</button> */}
              <button className="button border-white" onClick={() => removeTimeTable(id)}><i className="bi bi-trash3-fill"></i></button>
            </td>
             </tr>
             )}
            
              </tbody>
          </table>  
          </div>
          </div>
         
      </div>
      </form>
      </div>

  )
}

export default ViewTimeTable