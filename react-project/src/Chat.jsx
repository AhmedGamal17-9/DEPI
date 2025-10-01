import { useState } from 'react'

export default function Chat(){
  
  const intial_msg =[
    { id:1, text:'hallo', status:'sent' },
    { id:2, text:'i am ahmed', status:'sent' },    
  ]

  const[input,setinput]=useState('');
  const[msg,setMsg]=useState(()=>(intial_msg));
  const[sending,setSending]=useState(false);

  async function sendmassage(text){
    if (text.trim() === ''){ return }

    const t_msg = {id :'t_' + Date.now(), text: text.trim() , status:'sending' }

    setMsg([...msg,t_msg]);

    setinput('');
    setSending(true);
    
    try{
      // sent msg to Fake_server
      // put the server respond in server_msg(real_msg)
      const server_msg = await FakeApiSend(text);

      // If the server responds, and sends the msg
      // replace the old message by the server message in msg
      setMsg(
        (msgs)=>(
          msgs.map(
            (msg)=>(msg.id===t_msg.id ? server_msg :msg)
          )
        )
      );
    }
    catch(err){
      // If the server does not respond, and sends error massage
      console.log(err.message);

      // Update message status from sending to failed
      setMsg(
        (msg)=>( 
          msg.map(
          (msg)=>( msg.id===t_msg.id ? {...msg, status:'failed'} :msg)
          )
        )
      );
    }
    finally{
      setSending(false);
    }
  }
  return(
    <div>
      <ul>{
          msg.map(
            (msgob)=>(
              <li key={msgob.id}>
                {msgob.text} <small>{msgob.status}</small>
              </li>
            )
          )            
      }</ul>
      <input 
      type="text" 
      onChange={(e)=>setinput(e.target.value)}
      value={input} 
      />
      <button 
      onClick={()=>sendmassage(input)} 
      disabled={sending}>
        send
      </button>
    </div>
  )
}
function FakeApiSend(text){
  return new Promise(
    (resolve,reject)=>{
      setTimeout(
        ()=>{
          if(Math.random()>0.50) { // As if there is a server responding

            
            resolve( {id:Date.now() ,text , status:'sent'} ) // if server responding, return server_msg
            }
          else { 
            reject(
              new Error('Failed to send') // if the server does not respond, return error
            ) 
          }
        }, 1000);
    }
  );
}