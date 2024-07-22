import styles from "../app.module.css";
export default function Dis({calVal}){
  return(<>

    <div><input className={`${styles.dis} ${styles.input}`} type="text" value={calVal}
    readOnly 
   /></div>
 
    </>)
}