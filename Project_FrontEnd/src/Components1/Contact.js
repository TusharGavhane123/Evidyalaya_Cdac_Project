import React from 'react';
import NavBar from "./NavBar"
import {NavLink} from 'react-router-dom';

function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='cotainer-fluid'>
                    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:10 , marginLeft:'20px'}}>
                    
                    <div className="col-9 p-5 shadow bg-white rounded" >
                    <center><span className='fw-light fs-1'>Contact Us</span></center>
                    <table  style={{marginLeft:40 , marginTop:20}}>
                        <tr>
                            <td className='p-1 px-5 ' >
                            
                                <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>

                                        <div className="card-body">
                                            <h5 class="card-title">Mayur Badhe</h5>
                                            <p class="card-text">Gmail:  badhemayur01@gmail.com</p>
                                            <a href="https://www.linkedin.com/in/mayur-badhe-a78b311ba" class="card-link"> <i class="bi bi-linkedin"></i></a>   
                                    </div>
                                </div>
                         </td>
                         <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Yogita Ghule</h5>
                                
                                <p class="card-text">Gmail:<b/> <br></br>yogitaghule11star@gmail.com</p>
                                <a href="https://www.linkedin.com/in/yogita-ghule-4a26a315a" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
                <td className='p-1 px-5 ' >
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Kumar Prashant</h5>
                                <p class="card-text">Gmail: kumarprashant2k14@gmail.com</p>
                                <a href="https://www.linkedin.com/in/kumar-prashant-39a549232" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
          </tr>
     </table>
     <table  style={{marginLeft:40 , marginTop:20}}>
                    <tr>
                        <td className='p-3 px-5'>
                            <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                                    <div className="card-body">
                                        <h5 class="card-title">Tushar Gavhane</h5>
                                        
                                        <p class="card-text">Gmail:<b/><br></br>  gavhanetushar8@gmail.com          </p>
                                        <a href="https://www.linkedin.com/in/tushar-gavhane-a64424206" class="card-link"><i class="bi bi-linkedin"></i></a>
                                    
                                </div>
                            </div>
                    </td>

                    <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Gaurav Sengar</h5>
                                <p class="card-text">Gmail: <br></br>
                                gauravrajsengar@outlook.com</p>
                                <a href="https://www.linkedin.com/in/gaurav-s-b25a72236" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
     </div>
    </div>
 </div>
</div>
        );
}
export default Contact;