import React from 'react';
import NavBar from "./NavBar"
function About() {

  return (
    <div>
      <NavBar></NavBar>
      <div className='text-white'>
        <center>

          <br></br>
          <br></br>

          <div className="card w-75" style={{ marginTop: "-20px" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text text-black fs-4">&nbsp; &nbsp;This full stack web application is developed for the submission of project in the<b> Post-Graduate Diploma in Advanced Computing(PG-DAC).</b><br></br>
                The application aims to remove the dependency of the distributed resources and provide the resources to students and faculty at a single place.</p>

            </div>
          </div>

          <div className="card w-75" style={{ marginTop: "5px" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text text-black fs-4 fw-bolder"><p><span style={{ fontFamily: "unset" }} >&nbsp;&nbsp; <span className='fs-3'>Technology Used</span></span></p>
               

                &nbsp; &nbsp; &nbsp;&nbsp;<span >Backend</span> - <span className='fw-semibold'>Spring Boot </span><br></br>

                &nbsp;<span>Frontend</span> <span className='fw-semibold'>-  React JS </span><br></br>

                <span >Database</span> <span className='fw-semibold'> -  MySQL</span></p>
            </div>
          </div>
          <div className="card w-75" style={{ marginTop: "5px" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text text-black fs-4"><p>We would like to thank <span className='text-black fw-bolder' style={{fontFamily:"unset"}}>Ms.Sarita Narwal</span> for her consistent guidance and support throughout the project.</p></p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
export default About;