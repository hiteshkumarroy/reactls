import Entertodolist from "./components/Entertodolist";
import List from "./components/List";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

const [list,setList]=useState([


]
)




let handleOnClick=(a,b)=>{
  console.log(a);
  console.log(b);
  let arrval={
    "work":a,
    "date":b
  }
 if(a==="" || b===""){
  alert("please fill the todo work");
 }
  else setList((currentvalue)=>[
    ...currentvalue,
    arrval
  ]);

}

let deleteclick=(itemname)=>{
console.log({itemname});

let arr=list.filter((item)=>( item.work !== itemname.work))
setList(arr);
}

  return (
    <>
    <center>
    <Title/>
<Entertodolist handleOnClick={handleOnClick}/>
{list.length===0 && <Welcome/>}
<List work={list} deleteclick={deleteclick}/>
</center>
     </>
  )
}

export default App;
