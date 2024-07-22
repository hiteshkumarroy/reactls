import styles from "../app.module.css";
export default function Buttons({btn,handleOnClick}){

return(
  <>
   <div className={styles.btn}>
    
  {btn.map(item=>
  <button key={item}
  
  onClick={()=>handleOnClick(item)}
  
  >{item}</button>)}

</div>
</>
)
}