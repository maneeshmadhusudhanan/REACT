import { useState } from "react";
const Button = () => {

const[likes,setLikes] = useState(false);



const liked = () =>{

    setLikes(!likes);
}

return(
    <>
    {/* <ul>
    {colors.map((colour)=>(<li>{colour}</li>))}
    </ul>
    
    <h2 style={styleh2}>sum of {x} and {y} is {x+y}</h2>
    
    
    <h1>like:{like}</h1>
     */}

    <h1>{likes?'LIKE':'DISLIKE'}</h1>
    <button style={{fontSize: '60px',backgroundColor: 'red', border: 'white'}} onClick={liked}>CLICK HERE</button>


    </>
)}

export default Button;