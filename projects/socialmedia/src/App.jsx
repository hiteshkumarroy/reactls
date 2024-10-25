import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import { useState, useEffect } from 'react'
import Createpost from './components/Createpost'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [post, setPost] = useState([]);

  const addposthandler = (posttitle, postbody, postUserId, postTags, postReactions) => {
    const newpost = {
      title: posttitle,
      body: postbody,
      userId: postUserId,
      tags: postTags,
      reactions: postReactions
    };
    const newlist = [...post, newpost];
    setPost(newlist);
  }

  const deleteposthandler = (posttitle) => {
    const newpost = post.filter((item) => item.title !== posttitle);
    setPost(newpost);
  }

  const [postform, setpostform] = useState(false);
  const createpostform = () => {
    setpostform(true);
    setVisible(false);
  }

  const [visible, setVisible] = useState(true);
  const showpost = () => {
    setpostform(false);
    setVisible(true);
  }

  // Fetch posts from the server and update the state
  const getPostsFromServer = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        // Assuming `data.posts` is an array of post objects
        setPost(data.posts);
      })
      .catch(error => console.error("Error fetching posts:", error));
  };

  // Use useEffect to load posts on initial render
  // useEffect(() => {
  //   getPostsFromServer();
  // }, []);

  return (
    <>
      <div className='cont'>
        <Sidebar className="sidebar" createpostform={createpostform} showpost={showpost} />
        <div className='feed'>
          <Navbar className="navbar" />
          <div className='cards'>
            {postform && <Createpost addposthandler={addposthandler} />}
            {visible && <Card getPostsFromServer={getPostsFromServer} post={post} deleteposthandler={deleteposthandler} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
