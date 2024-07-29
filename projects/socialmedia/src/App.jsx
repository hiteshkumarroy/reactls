
import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import { useState } from 'react'
import Createpost from './components/Createpost'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  const [post,setPost]=useState([
    {
  title:"doggytitle",
  body:"hii this isdoggypost",
  }
  ])
 

const addposthandler=(posttitle,postbody)=>{
const newpost={
  title:posttitle,
  body:postbody
}
const newlist=[...post,newpost];
setPost(newlist);

}

const deleteposthandler=(posttitle)=>{

  const newpost=post.filter((item)=>{
    return item.title !== posttitle;
  })

  console.log(newpost);

  setPost(newpost);
  
  }

let [postform,setpostform]=useState(false);
const createpostform=()=>{
setpostform(true);
setVisible(false);

}

let [visible,setVisible]=useState(true);
const showpost=()=>{
  setpostform(false);
setVisible(true);
}


  return (
    <>
    
    <div className='cont'>

    <Sidebar className="sidebar" createpostform={createpostform} showpost={showpost}></Sidebar>
    <div className='feed'>
<Navbar className="navbar"></Navbar>

<div className='cards'>
{ postform && <Createpost addposthandler={addposthandler}></Createpost>}
 {  visible && <Card post={post} deleteposthandler={deleteposthandler}></Card>}
</div>

</div>
</div>
<Footer></Footer>

    </>
  )
}

export default App
