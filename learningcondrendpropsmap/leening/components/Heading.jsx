export default function Heading({handleOnKeyDown}){
  return(
    <div class="list-group">
     <input type="text" placeholder='type healthy food here and add' onKeyDown={handleOnKeyDown}/>
  </div>
  )
}