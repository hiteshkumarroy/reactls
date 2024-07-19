

import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./app.module.css";
import Buttons from "./components/Buttons";
import Dis from "./components/Dis";
function App() {

let arr=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return (
    <center>
    <div className={styles.container}>
     <Dis/>
    <Buttons btn={arr}/>
      </div>
    
    </center>
  )
}

export default App
