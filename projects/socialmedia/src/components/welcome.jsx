export default function Welcome({getPostsFromServer}){
return(<>
<center>
 <div>No posts available</div>
 <br />
<button onClick={()=>{
  getPostsFromServer();
}}>get posts from server</button>
</center>
</>)
}