  import { createContext } from "react";
 export const Todolistcontext=createContext({});
import {useReducer} from "react";
 const reducer =(curritems,action)=>{
  let newitems=curritems;
  if(action.type==="NEW_ITEM"){
    let arrval={
          "work":action.payload.work,
          "date":action.payload.date
        }
       if(action.payload.work==="" || action.payload.date===""){
        alert("please fill the todo work");
       }
        else
        newitems=[...curritems,arrval];

  }
  else if(action.type==="DELETE_ITEM"){
   newitems=curritems.filter((item)=>{
     item.work!==action.payload.work;
   })

  }

  return newitems;

};
 export const Todolistcontextprovider=({children})=>{

  const [list,dispatcher]=useReducer(reducer,[])




  let handleOnClick=(work,date)=>{
  
    const action={
      type:"NEW_ITEM",
      payload:{work,date},
    }
    dispatcher(action);
  
    
    // console.log(a);
  //   console.log(b);
  //   let arrval={
  //     "work":a,
  //     "date":b
  //   }
  //  if(a==="" || b===""){
  //   alert("please fill the todo work");
  //  }
  //   else setList((currentvalue)=>[
  //     ...currentvalue,
  //     arrval
  //   ]);
  
  }
  
  let deleteclick=(work)=>{
    const action={
      type:"DELETE_ITEM",
      payload:{work}
    }
    dispatcher(action);
     
  // console.log({itemname});
  
  // let arr=list.filter((item)=>( item.work !== itemname.work))
  // setList(arr);
  }


  return(
    <Todolistcontext.Provider value={{list,handleOnClick,deleteclick}}>
      {children}
    </Todolistcontext.Provider>
  )
 }