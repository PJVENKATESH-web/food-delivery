import React from 'react'
import User from './User';
import UserClass from './UserClass';


const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <h3>This is a Foody App</h3>
      <User name={'Jhonson (function)'} location={'Chapara(function)'}/>
      <UserClass name={'Jhonson (class)'} location= {'Chapara (Class)'} />
    </div>
  )
}

export default About