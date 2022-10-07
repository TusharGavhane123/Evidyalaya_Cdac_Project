import React from 'react';
import { useEffect ,useState} from 'react';
import StudentNavBar from "./StudentNavBar"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TimeTable() {
  const navigate =useNavigate();
  useEffect(() => {  
    console.log(sessionStorage.getItem("userName"))
      if(sessionStorage.getItem("userName")===null){
         navigate("/");
      }
      if(sessionStorage.getItem("userRole")==="ROLE_ADMIN"){
        navigate("/admin")
      }
      if(sessionStorage.getItem("userRole")==="ROLE_FACULTY"){
        navigate("/faculty")
      }
  });
  const [data, setData] = useState({timetables: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
    useEffect(() => {
      const fetchtimetables= async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
          try {
            setData((data)=>({timetables:data.timetables,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/timetable',config)
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

    return (
          <div>
            <StudentNavBar/>
           
            <div className='cotainer-fluid' style={{overflow:"auto"}}>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-60}}>
       <div className="col-8 p-5 shadow bg-white rounded">
           <center><span className='fs-2 fw-bolder' ><h2>Timetable Details</h2></span></center>
           <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter faculty or module name' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
           <table className="table table-striped table-secondary table-hover">
                 <thead className='table-dark'>
                  <tr>
                  <th>Sr.No</th>
                 <th>Faculty Name</th>
                 <th>Date</th>
                 <th>Start Time</th>
                 <th>End Time</th>
                 <th>Module Name</th>
                 <th>Platform</th>
                 <th>Link</th>
                 </tr>
                     </thead>
                 <tbody>

                 {
             data.timetables.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
               
               .map(({id,facultyName,date,startTime,endTime,moduleName,platform,link})=>
             <tr>
              <td>{id}</td>
              <td>{facultyName}</td>
             <td>{date}</td>
             <td>{startTime}</td>
             <td>{endTime}</td>
             <td>{moduleName}</td>
             <td>{platform}</td>
            <td><a href={link}>Click Here</a></td>
             </tr>  )}
              
                 </tbody>
              </table>
            </div>


            </div>

        </div>
          </div>
    );
  }
  
  export default TimeTable;
  