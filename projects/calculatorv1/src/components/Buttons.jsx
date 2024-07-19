import styles from "../app.module.css";
export default function Buttons({btn}){

return(
  <>
   <div className={styles.btn}>
    
  {btn.map(item=>
  <button key={item}>{item}</button>)}

</div>
</>
)
}