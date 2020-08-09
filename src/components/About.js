import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/sphamandla.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
               {
                 resumeData.aboutme
               }
               </h3>
               </p>
               

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						Name: <span>{resumeData.name}</span>
                     <br></br>
       						   Surname: <span>
                     {resumeData.surname}
                    </span>
                    <br></br>
       						   Date of birth: <span>
                     {resumeData.dateofbirth}
                    </span>
                    <br></br>
       						   ID number: <span>
                     {resumeData.idnumber}
                    </span>
                    <br></br>
       						   Phone number: <span>
                     {resumeData.phonenumber}
                    </span>
                    <br></br>
                    Email: <span>
                     {resumeData.email}
                    </span>
                    <br></br>
                    Address: <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    Country: <span>{resumeData.country}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}