import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [employed, setEmployed] = useState(true)

    const increase = (e) =>{
        setCount( count + 1  )
    }
    const decrease = (e) =>{
        setCount( count - 1  )
    }

    const employmentStatus = (e) => {
        setEmployed(!employed)
        e.target.style.backgroundColor = "pink"
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}> Decrease</button>

        <h3>Employed Status: {employed ? "Yes" : "No"}</h3>
        <button onClick={(e) => employmentStatus(e)}>Toggle Status</button>
    </div>
  )
}

export default Counter