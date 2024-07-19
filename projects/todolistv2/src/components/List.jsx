import "../App.css"
export default function List(props){
  let {work}=props;
  return <div>
    {work.map(item=>
  <div class="container">
   
    <div class="row">
      <div class="col-6">
  {item.work}
      </div>
      <div class="col-4">
      <p>{item.date}</p>
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger ">delete</button>
      </div>
    </div>
  </div>
  )}
    </div>
}