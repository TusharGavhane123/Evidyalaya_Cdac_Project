import React, { useEffect, useState } from 'react'
import FacultyNavBar from './FacultyNavBar'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditAssignment() {
    const param = useParams();
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

   const [moduleName,setModuleName] = useState('')
   const [description, setDescription] = useState('')
   const [selectedFile, setSelectedFile] = useState();
   const navigate=useNavigate();

const handleFile =function(e){
  let file=e.target.files[0];
  console.log(file);
  setSelectedFile(e.target.files[0]);
  console.log(selectedFile);
}

const updateurl=`http://localhost:8080/faculty/editassignment/${param.id}`;
  const editURL = `http://localhost:8080/faculty/editassignment/${param.id}`;

useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    };
    axios.get(editURL,config).then((response) => {
      console.log(response.data);
      const assignmentData = response.data;
      console.log(assignmentData.data.moduleName);
        setModuleName(assignmentData.data.moduleName)
        console.log(moduleName);
        setDescription(assignmentData.data.description)
    }).catch(error => {
      alert("Error Ocurred getting NoticeBoard detail:"+ error);
    });
  }, []);


const  handleModuleName = (e) => {
              setModuleName(e.target.value)
          }
          const handleDescription = (e) => {
              setDescription(e.target.value)
          }
          
function submit(e){
            const config = {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
              },
            };
                e.preventDefault();
                 axios.put(updateurl,{
                    moduleName:moduleName,
                    file:selectedFile,
                    description:description,
                 },config).then((response) => {
                  //         alert(" Assignment updated  Succesfully");
                           toast.success('Assignment Updated Succesfully !!', {
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
                    navigate("/faculty/viewassignment")

            }
  return (
    <div>
        <FacultyNavBar/>
        <div className="container-fluid">
              <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-35}}>
                      <div className="col-4 p-4 shadow bg-white rounded">
                         <form onSubmit={submit}>
                            <span className="head fs-3 fw-bolder"><center><h3>Edit Assignment</h3></center></span>
                            <br></br>
                                <div className="ui form">
                                 <div className="field">
                                     <label>Module Name</label>
                                        <div className="mb-3">
                                           <input type="text" name="moduleName" className="form-control" placeholder="Enter Subject"
          onChange={handleModuleName} value={moduleName}  />
                                        </div>
                                        <br></br>
                                 </div>
                                 <div className='mb-3'>
                                 <label>Description</label><br></br>
                                 <textarea className='col-100  form-control' onChange={handleDescription} value={description} name="description"></textarea>
                              </div>
                        <br></br>
                                    <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                           <button className="btn btn-primary form-control">Submit</button>
                                    </div>
                            </div>
                        </form>  	
                      </div>
                     
              </div>
       </div>

        </div>
  )
}

export default EditAssignment