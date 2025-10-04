//import './assets/css/.css'

import { useEffect, useState } from 'react';

export default function Use(){

const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p>Timer: {count} seconds</p>
    </div>
  );
}
