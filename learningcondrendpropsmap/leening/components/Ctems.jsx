
import List from "./List";
import { useState } from "react";

export default function Items(props){
  let x=false;
  let y=<p>no food hungryyyy???</p>;

let {Arr}=props;

let [boughtItems,setBoughtItems]=useState(["njn"]);

let handleBuysButton=(item)=>{
  let newBoughtItems=[...boughtItems,item];
  setBoughtItems(newBoughtItems);
   
}
  return(
   <>
   
    <div class="list-group">
    {Arr.length===0&&y}

    {Arr.map(
   (item) => ( 
    <List key={item}
bought={boughtItems.includes(item)}
     fooditem={item}
     kk={()=>handleBuysButton(item)}
     />
   )

   )}
</div>
</>
  )
}