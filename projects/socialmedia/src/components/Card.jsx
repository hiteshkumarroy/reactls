import React from 'react';
import "../App.css";

export default function Card({ post,deleteposthandler }) {
  return (
    <>
      {post.map((item, index) => (
        <div className=" post" key={index}>
          <div >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <a href="#" className="btn btn-danger" onClick={()=>{deleteposthandler(item.title)}}>delete post</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
