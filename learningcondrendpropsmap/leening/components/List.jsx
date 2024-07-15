export default function List(props){
  return(
    <>
    
    <a href="#" key={props.fooditem} class="list-group-item list-group-item-action">{props.fooditem}</a>

    </>
  )
}