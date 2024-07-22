import style from "./List.module.css";

export default function List({bought,fooditem,kk}){
  return(
    <>
    
    <a href="#" key={fooditem} class={`list-group-item list-group-item-action ${bought && "active"}`}>{fooditem}
      <button onClick={kk} className={style.btnlist}>add</button>
    </a>

    </>
  )
}