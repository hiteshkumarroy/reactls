import { useRef } from "react";
import "../App.css";
import { useContext } from "react";
import { Todolistcontext } from "../store/Todo-items-store";

export default function Entertodolist() {
  const { handleOnClick } = useContext(Todolistcontext);
 const a= useRef();
 const b= useRef();

  

  const handleClick = () => {
    handleOnClick(a.current.value, b.current.value);
    a.current.value="";
    b.current.value="";
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="enter Todo here"
            ref={a}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={b}/>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
