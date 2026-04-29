import {Component} from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends Component{
  constructor(props){
    super(props);
    // console.log('Parent Constructor');
  }  
  // componentDidMount(){
  //   console.log('Parent DidMount')
  // }
  render(){
    // console.log('Parent render');
    return(
      <div className='p-4 m-2'>
      <h2 className='text-3xl font-bold text-center'>About Us</h2>
      <h3 className=' text-xl text-red-600 text-center'>This is a Foody App</h3>
      {/* <User name='function' location='default' /> */}
      <UserClass name={'Jhonson (first class)'} location={'Chapara(first)'}/>
      
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
