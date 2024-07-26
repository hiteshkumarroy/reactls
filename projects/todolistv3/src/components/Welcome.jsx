import  "../App.css"
import { useContext } from "react"
import { Todolistcontext } from "../store/Todo-items-store"
export default function Welcome(){
const {list}=useContext(Todolistcontext);
  return (
    <>
  {list.length===0 &&  <div className="welcome">welcome to todo app😊</div> }</>
  )
}