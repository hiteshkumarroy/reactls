import Items from '../components/Ctems';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from '../components/Heading';
import { useState } from 'react';



function App() {

  let [arr,setArr] = useState(["njn","bhb"]);



  function handleOnKeyDown(event){
    if(event.key==="Enter"){
      setArr([...arr,event.target.value]);
      event.target.value="";
    
    }
    console.log(event);
    }
    


  return (
    <>
  
    <Heading handleOnKeyDown={handleOnKeyDown}></Heading>
      <Items Arr={arr}/>

    </>
  )
}

export default App
