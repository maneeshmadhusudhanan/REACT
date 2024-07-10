import { useState } from "react";

const Demo = ({test=0, name}) =>{

    const[state,setstate] = useState(0); 

const[likes,setLikes] = useState(0);

const incrementLikes = () =>{
    setLikes(likes+1)
}

const loggedin = true;
const colors = ['red','blue','orange','purple']

const x=3000;
  const y=2000;
  const styleh2={color:"green"}
return(
    <>
    <ul>
    {colors.map((colour)=>(<li>{colour}</li>))}
    </ul>
    
    <h2 style={styleh2}>sum of {x} and {y} is {x+y}</h2>
    
    
    <h1>Number of likes:{likes}</h1>
    <h1>Name:{name}</h1>
    <h1>{likes}</h1>
    <button style={{fontSize: '60px'}} onClick={incrementLikes}>CLICK HERE</button>


    </>
)}

export default Demo;