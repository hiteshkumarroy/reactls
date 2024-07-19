import "../App.css"

export default function Entertodolist(){
  return <div>
<div class="container ">
 
  <div class="row">
    <div class="col-6 ">
     <input type="text" placeholder="enter Todo here" />
    </div>
    <div class="col-4">
     <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success ">add</button>
    </div>
  </div>
</div>

  </div>
}