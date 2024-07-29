
import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import Createpost from './components/Createpost'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {




  return (
    <>
    <div className='cont'>

    <Sidebar className="sidebar"></Sidebar>
    <div className='feed'>
<Navbar className="navbar"></Navbar>
<div className='cards'>
  <Createpost></Createpost>
  <Card></Card>
</div>
<Footer></Footer>
</div>
</div>

    </>
  )
}

export default App
