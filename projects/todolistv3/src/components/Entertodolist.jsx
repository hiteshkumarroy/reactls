import { useState } from "react";
import "../App.css";

export default function Entertodolist({ handleOnClick }) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const handleChangeA = (event) => {
    setA(event.target.value);
  };

  const handleChangeB = (event) => {
    setB(event.target.value);
  };

  const handleClick = () => {
    handleOnClick(a, b);
    setA("");
    setB("");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="enter Todo here"
              value={a}
              onChange={handleChangeA}
            />
          </div>
          <div className="col-4">
            <input type="date" value={b} onChange={handleChangeB} />
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
