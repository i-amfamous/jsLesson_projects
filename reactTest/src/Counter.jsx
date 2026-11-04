import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function increament(){
        setCount(count + 1)
    }

    function decrease(){
        setCount(count - 1)
    }

    function reset(){
        setCount(0)
    }

  return (
   <>
   <div>
     <h1>{count}</h1>
    <button onClick={increament}>Increse</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrease}>Decrease</button>
   </div>
   </>
  )
}

export default Counter