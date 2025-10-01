import { useState } from "react";

export default function Todo(){
  
  const[tasks,settasks]=useState([]);
  const[text,settext]=useState('');

  function add(){
    if (text.trim()==='') return;
    settasks(
      [...tasks , {id:Date.now() ,name:text.trim() ,done:false}]
    )
    settext('');
  }
  function delet(dt_id){
    settasks(
      tasks.filter(
        (task)=>(
          task.id !== dt_id
          // if(task.id === delete_id) return {false};
          // return true
        )
      )
    )
  }
  function toggle(tg_id){
    settasks(
      tasks.map(
        (task)=>(
          tg_id === task.id ? {...task, done:!task.done} : task
        )
      )
    )
  }
  return (
    <div>
      <input
      type="text" 
      placeholder="write a new task here..."
      onChange={(event)=>settext(event.target.value)} // text جوة event حط
      value={text}// value جوة text حط
      />
      <button onClick={add}>add</button>
      <ul>
        {
        tasks.map(
          (task)=>(
            <li key={task.id}>
              <label>
                <input 
                type="checkbox" 
                checked={task.done}
                onChange={()=>toggle(task.id)}
                />
                {task.name}  
              </label>
              <button onClick={()=>delet(task.id)}>delete</button>
            </li>
          )
        )
        }
      </ul>
    </div>
  )
}