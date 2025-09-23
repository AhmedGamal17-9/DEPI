import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>العداد: {count}</p>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1)}> -1 </button>
      <button onClick={() => setCount(0)}> Reset to zero </button>
    </div>
  );
}
export default Counter;