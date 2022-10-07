import StudentNavBar from "./StudentNavBar"
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Faculty() {
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
  const [data, setData] = useState({faculties: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
    useEffect(() => {
      const fetchfaculties= async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        };
          try {
            setData((data)=>({faculties:data.faculties,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/faculty',config)
            setData({faculties:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({faculties:data.faculties,isFetching:false}));
          }
      };
      fetchfaculties();
  }, []);
    return (
          <div>
            <StudentNavBar/>
            <div className='cotainer-fluid' style={{overflow:"auto"}}>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-70}}>
       <div className="col-8 p-5 shadow bg-white rounded">
          
           <center><span className="fs-2 fw-bolder"><h2>Faculty Details</h2></span></center>
           <div className='ui search'>
            <div className='ui icon input' style={{marginLeft:"33rem"}} >
              <input type='text' placeholder='Enter name or email' className='prompt col-9 rounded border-dark form-control col-10' name="searchText" onChange={handleSearchText} value= {searchText} style={{height:"3rem"}}></input>
            </div>
            <br></br>
            </div>
           <table class="table table-striped table-secondary table-hover">
                 <thead className="table-dark">
                    <tr>
                  <th>Sr.No</th>
                 <th> Name</th>
                
                 <th>Mob No</th>
                 <th>Email</th>
               
                 </tr>
                     </thead>
                 <tbody>
        
                 {
             data.faculties.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.name.toLowerCase().includes(searchText.toLowerCase()) ||val.email.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
             .map(({id,name,mobNo,email})=>
             <tr>
              <td>
                {id}
              </td>
              <td>
                {name}
              </td>
              <td>
                {mobNo}
              </td>
              <td>
                {email}
              </td>
             </tr>
             )}
                 </tbody>

              </table>
           
            </div>


            </div>

        </div>
          </div>
    );
  }
  
  export default Faculty;
  