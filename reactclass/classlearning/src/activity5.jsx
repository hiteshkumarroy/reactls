import React,{useRef} from 'react';
function Counter(){
  const countRef=useRef(0);
  const increment=()=>{
    countRef.current++;
    console.log(`Count:${countRef.current}`);

  }

return (
  <div>
    <button onClick={increment}>increment</button>
  </div>
);
}
export default Counter;