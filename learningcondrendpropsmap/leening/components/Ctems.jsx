
import List from "./List";
import list from "./List";
export default function Items(props){
  let x=false;
  let y=<p>no food hungryyyy???</p>;

let {Arr}=props;


  return(
   <>
   
    <div class="list-group">
    {Arr.length===0&&y}

    {Arr.map(
   (item) => ( 
    <List key={item} fooditem={item}/>
   )

   )}
</div>
</>
  )
}