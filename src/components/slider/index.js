import React,{useState} from "react";




function Slider(props){

 
const [i,setI]=useState(0);


return(
 <div>
      <button disabled={i==0} onClick={()=>setI(i-1)}>Previous</button>
      <button  disabled={i==0} onClick={()=>setI(0)}>Restart</button>
    <button disabled={i==2} onClick={()=>setI(i+1)}>Next</button>
    <h1>{props.slides[i].title}</h1>
    <h2>{props.slides[i].text}</h2>
  </div>
);




}
export default Slider;
