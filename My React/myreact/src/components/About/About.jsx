import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1>About Section</h1>
      <h1>Student Name : {props.fname}</h1>
      <h1> array : {props.studentroll}</h1>
    </div>
  );
}

export default About;
