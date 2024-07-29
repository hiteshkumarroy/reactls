import { useRef } from "react"
import "../App.css"
export default function Createpost({addposthandler}){

  const posttitle=useRef();
  const postbody=useRef();
  return (
    <>
    
    <form className="createpost"  onSubmit={()=>addposthandler(posttitle.current.value,postbody.current.value)}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">title</label>
    <input type="text" class="form-control" ref={posttitle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">write title relatable to your post</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">write about your post</label>
    <input type="text" ref={postbody} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></>
  )
}