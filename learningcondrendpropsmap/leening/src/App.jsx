import Items from '../components/Ctems';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from '../components/Heading';
function App() {
let arr=["mango","curd","lassi","roti"];
  return (
    <>
    <Heading ></Heading>
      <Items Arr={arr}/>

    </>
  )
}

export default App
