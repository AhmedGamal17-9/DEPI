import { useEffect, useState } from "react";

export default function T({ user_id }) {
  const [user, setUser] = useState(null); // will contain the user data after fetching.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);      // will contain the Error message if it happens

  useEffect(() => {
    if (!user_id) return; // in the first render : If there is no user_id, useEffect will not work

    const controller = new AbortController();
    const signal = controller.signal;

    // We will use it to avoid setState only after unmount.
    // if unmount ,don't setState.
    // in sometimes we want fetch still be working even after unmount
    let mounted = true; 

    setLoading(true);
    setError(null);

/*
I want to use await → so the function must be async.
⬇️
useEffect doesn't allow the async function directly.
⬇️
Solution: Inside useEffect, I created an IIFE async function that runs automatically immediately and allows me to write await.    
*/
    (async function(){
      try {
        const responde = await fetch( `https://jsonplaceholder.typicode.com/users/${user_id}`,{ signal } );

        if (!responde.ok) 
          {throw new Error(`HTTP ${responde.status}`)};

        const data = await responde.json();

        if (mounted) setUser(data);
      } 
      catch (err) {
        if (err.name === "AbortError") {
          // ignore
        } 
        else {
          if (mounted) setError(err.message || "unknown error");
          console.log(error.message)
        }
      } 
      finally {
        if (mounted) setLoading(false);
      }
    })();

    // cleanup: runs after unmount or change user_id
    return () => {

      // if unmount, mounted will be false
      // if change user_id, mounted will update to true in line 17
      mounted = false; 

      controller.abort();
    };
  }, [user_id]); // after the first render : useEffect will not work until user_id change

  // 
  return (
    <div>
      <ul>
        <li>{user ? JSON.stringify(user) : "loading..."}</li>
      </ul>
    </div>
  );
}
