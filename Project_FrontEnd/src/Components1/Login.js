import "./Style.css"
import {useState, useEffect} from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
function Login(){
       const initialValues = {email :"" , pass:""};
       const [formValues, setFormvalues] = useState(initialValues);
       const [formErrors, setFormErrors] = useState({});
       const [isSubmit , setIsSubmit] = useState(false);

       const handleChange = (e) =>{
              const{name, value} = e.target;
              setFormvalues({...formValues , [name] : value})
              console.log(formValues);
       };

       const handleSubmit=(e)=>{
              e.preventDefault();
              //
              setFormErrors(validate(formValues));
             setIsSubmit(true);
       };

       // To show correct form details on console if no error in validation
         useEffect(() => {
              console.log(formErrors);
                if(Object.keys(formErrors).length === 0 && isSubmit){
                     console.log(formValues);
                }
         },[formErrors])

       const validate = (values) =>{
           const errors = {};
           const regex =   /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
           if(!values.email){
              errors.email = "Email is Required";
           }else if(!regex)
             errors.email="Invalid Email";

           if(!values.pass){
              errors.pass = "Password is Required";
           }else if(values.pass.length < 4)
             errors.pass = "Password should be more than 4 Characters";
             else if(values.pass.length > 15)
             errors.pass = "Password should NOT more than 15     characters"
           return errors;

       };

       return(
              <div>
                   <NavBar></NavBar>  
              <div className="container-fluid">
                     
              <div className="row justify-content-around align-items-center" style={{height :"98vh"}}>
                      <div className="col-4 p-5 shadow">
                                     
                                    
                                     <form onSubmit={handleSubmit}>
                                     <h3 className="head">Login</h3>
                                     <div className="ui form">
                                        <div className="field">
                                     <lable>Email Address</lable>
                                    <div className="mb-3">
                                           <input type="email" name="email" className="form-control" placeholder="Enter Email" value={formValues.email} onChange={handleChange}/>
                                    </div>
                                    <p className ="errors">{formErrors.email}</p>
                                        </div>
                                        <div className="field">
                                    <lable>Password</lable>
                                    <div className="mb-3">
                                           <input type="password" name="pass" className="form-control" placeholder="Enter Password" onChange={handleChange} value={formValues.pass} />
                                    </div>
                                    </div>
                                    <p className ="errors">{formErrors.pass}</p>
                                    
                                    <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                           <button className="btn btn-primary form-control">Sign in</button>
                                    </div>
                                    </div>
                                    </form>
                            	
                      </div>
                     
              </div>
       </div>
       </div>
       )

}
export default Login;