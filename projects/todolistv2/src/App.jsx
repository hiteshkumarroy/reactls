import Entertodolist from "./components/Entertodolist";
import List from "./components/List";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {

const list=[{
 "work": <input type="enter work"  placeholder="enter Todo here"/>,
 "date": <input type="date" />
},
 { "work":"college",
  "date":"24/4/2024"},
{ "work":"drink milk",
  "date"
  :"20/4/2024",}

]
 


  return (
    <>
    <center>
    <Title/>
<Entertodolist/>
<List work={list} />
</center>
     </>
  )
}

export default App
