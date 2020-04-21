import React, {useState} from 'react';
// import Hooks from './Hooks';

const Counter = (props) => {
   const [count, setCount] = useState(0)
   return (
   <div>
      COUNTER
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)} >Click me baby one more time!</button>
   </div>
   )
}

export default Counter