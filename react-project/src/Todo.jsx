import { useState } from "react";


function Todo(){
  var initialtasks =[
    {id:1 ,name:'f' ,done_state:false}
   ,{id:2 ,name:'s' ,done_state:false}
   ,{id:3 ,name:'t' ,done_state:false}
  ]
  const [tasks_state,set_tasks] = useState(initialtasks);
  const [text,set_text] = useState('');

  function addtask(){}

  function removetask(removed_task_id){
    set_tasks(
        tasks_state.filter(
          exist_tasks =>(exist_tasks.id !== removed_task_id)
      )
    )
  }

  function toggleState(changed_task_id){
  set_tasks(
    tasks_state.map(
      exist_tasks => (
        exist_tasks.id === changed_task_id 
        ? { ...exist_tasks, done_state: !exist_tasks.done_state }
        :exist_tasks)
    )
  )

  }

   return(
    <div>
      <input type="text" />
      <button >add task</button>
      <ul>
        {initialtasks.map(
          (task) => (
            <li>
              <label >
                <input
                 type="checkbox" />
                {task.name} &nbsp;
                <button>remove</button>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
export default Todo