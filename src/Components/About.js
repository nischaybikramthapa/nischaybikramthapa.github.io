import React, { Component } from 'react';
import resume from '../assets/resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nischay Thapa Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>

            I'm a responsible Data Scientist with expertise in data engineering, statistics and machine learning passionately curious about solving real-world problems and developing end to end data science solutions for businesses. <br/> <br/>

Speaking of me, I liked crunching numbers from an early age. Now, I am more engaged in understanding business problems, and solving them by developing end to end machine learning and data products. My interests are specifically in Serverless frameworks, Accelerated Data Lake, Natural Language Processing, Computer Vision and Explainable AI. </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br />
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
