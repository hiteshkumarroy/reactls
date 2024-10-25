import React from 'react';
import "../App.css";
import Welcome from './welcome';



export default function Card({ post, deleteposthandler ,getPostsFromServer}) {
  return (
    <>
 {  post.length===0 &&
   < Welcome getPostsFromServer={getPostsFromServer}/>

    }
      {post.map((item, index) => (
        <div className="post" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              <p className="card-text">User ID: {item.userId}</p>
              
          
              <div className="tags-container">
                {Array.isArray(item.tags) ? (
                  item.tags.map((tag, i) => (
                    <span key={i} className="tag-badge">{tag}'</span>
                  ))
                ) : (
                  item.tags.split(' ').map((tag, i) => (
                    <span key={i} className="tag-badge">{tag}  '' </span>
                   
                  ))
                )}
              </div>

              {/* <p className="card-text">Reactions: {item.reactions}</p> */}
              <div className="button-container">
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteposthandler(item.title)}
                >
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
