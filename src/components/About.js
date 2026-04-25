import {Component} from 'react'
import User from './User';
import UserClass from './UserClass';




class About extends Component{
  constructor(props){
    super(props);
    console.log('Parent Constructor is called')
  }  
  componentDidMount(){
    console.log('Parent componentDidMount is called')
  }
  render(){
    console.log('Parent Render is called')
    return(
      <div>
      <h2>About Us</h2>
      <h3>This is a Foody App</h3>
      <UserClass name={'Jhonson (first class)'} location={'Chapara(first)'}/>
      <UserClass name={'Aarvi (second class)'} location={'Narasanapeta(second)'}/>
    </div>
    )
  }
}
export default About

// const About = () => {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <h3>This is a Foody App</h3>
//       <User name={'Jhonson (function)'} location={'Chapara(function)'}/>
//       <UserClass name={'Jhonson (class)'} location= {'Chapara (Class)'} />
//     </div>
//   )
// }
