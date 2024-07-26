import Entertodolist from "./components/Entertodolist";
import List from "./components/List";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Welcome from "./components/Welcome";
import { Todolistcontextprovider } from "./store/Todo-items-store";

function App() {
  return (
   
  <Todolistcontextprovider>
    <center>
    <Title/>
<Entertodolist/>
<Welcome/>
<List/>
</center>
</Todolistcontextprovider>
  )
}

export default App;
