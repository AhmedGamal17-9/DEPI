import { useState } from "react";

export default function Todo(){

  var initialtasks =[
    {id:1 ,name:'1' ,done_state:false}
  ]
  const [state_tasks,settask]=useState(initialtasks);
  const[text,settext]=useState('');

  function addtask(){
    if (text.trim() === '') return;    
    settask([...state_tasks, {id :Date.now() ,name : text.trim() ,done_state :false }]);
    settext('')
  }
  function deletetask(delete_id){
    settask(
      state_tasks.filter(
        (task) => (
          task.id !== delete_id 
          // if(task.id === delete_id) return {false};
          // return true
        )
      )
    )
  }
  function toggletask(done_id){
    settask(
      state_tasks.map(
        (task)=>(
          task.id === done_id ? {...task , done_state : !task.done_state} : task
        )
      )
    )
  }
  return(
    <div>
      <input 
      onChange={ 
        (event)=> settext(event.target.value)}      
      value={text}
      type="text"
      placeholder="write a task..."
      />
      <button onClick={addtask}>add task</button>
      <ul>
        {
        state_tasks.map(
          (task)=>(
           <li key={task.id}>
              <label>
                <input 
                type="checkbox" 
                onChange={() => toggletask(task.id)}                
                checked={task.done_state}
                />
                {task.name} &nbsp;
                <button onClick={()=>deletetask(task.id)}>delete</button>
             </label>
           </li>
          )
        )
        }
      </ul>
    </div>
  )
}