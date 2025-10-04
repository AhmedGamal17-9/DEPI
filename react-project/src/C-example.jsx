import { useEffect,useState } from "react"

export default function C({v1, v2, v3}){

  const[var1,setvar1]=useState(v1);
  const[var2,setvar2]=useState(v2);
  const[var3,setvar3]=useState(v3);

  useEffect(
    ()=>{
      document.title=`sum is ${var1+var2+var3}`  
    },[var1,var2,var3]
  )
  return(
    <div>
      <h1>sum is {var1+var2+var3}</h1>
      <h1>var1 is {var1},var2 is {var2}, var3 is{var3}</h1>
      <button onClick={()=>setvar1((var1)=>(var1+1))}> (var1)+1 </button>
      <button onClick={()=>setvar2((var2)=>(var2+1))}> (var2)+1 </button>
      <button onClick={()=>setvar3((var3)=>(var3+1))}> (var3)+1 </button>
    </div>
  )
}