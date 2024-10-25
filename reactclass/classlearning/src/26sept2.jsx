import {useEffect,useRef} from "react";
export default function Refheight(){
  const divElement=useRef();
  useEffect(()=>{
    console.log("the height of the div is: ",divElement.current.offsetHeight);
  },[]);
  return (
    <div ref={divElement}>
      <h1>learn about useRef</h1>
    </div>
  )
}