import { useState ,useEffect} from "react";

const User=(props)=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log('Namaste')
        },1000)
        console.log('useEffect called')
        return ()=>{
            console.log('useEffect return')
            clearInterval(timer);
        }
    },[]);
    console.log('render')
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                setCount(count=>count+1)
            }}>Button Increase</button>
            <button onClick={()=>{
                setCount(prevCount =>{
                    return prevCount > 0 ? prevCount - 1 : prevCount
                })
            }}>Button Decrease</button>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: potnuru.jhonson@gmail.com</h4>
        </div>
    )
}

export default User;

// destructing of props
// const User=({name})=>{
//     return (
//         <div className="user-card">
//             <h2>Name: {name}</h2>
//             <h3>Location: Chapara</h3>
//             <h4>Contact: potnuru.jhonson@gmail.com</h4>
//         </div>
//     )
// }
