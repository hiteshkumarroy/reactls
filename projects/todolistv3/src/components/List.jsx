import "../App.css"
import { Todolistcontext } from "../store/Todo-items-store";
import { useContext } from "react";
export default function List(props){
  const {list,deleteclick}=useContext(Todolistcontext);
 
  return <div>
    {list.map(item=>
  <div key={item.work}>
  <div class="container" >
   
    <div class="row">
      <div class="col-6">
  {item.work}
      </div>
      <div class="col-4">
      <p>{item.date}</p>
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger " onClick={()=>{deleteclick(item)}}>delete</button>
      </div>
    </div>
  </div>
  </div>
  )}
    </div>
}