

import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./app.module.css";
import Buttons from "./components/Buttons";
import { useState } from "react";
import Dis from "./components/Dis";
function App() {

let arr=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
let [calVal,setCalVal]=useState("");
let handleOnClick=(item)=>{

  setCalVal(calVal+item);
  if(item==="C"){
    setCalVal("");
  }
  if(item==="="){
    setCalVal(eval(calVal));
  }
{console.log(calVal);
}
}
  return (
    <center>
    <div className={styles.container}>
     <Dis calVal={calVal}/>
    <Buttons btn={arr}
    handleOnClick={handleOnClick}/>
      </div>
    
    </center>
  )
}

export default App
