import {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const updateName = () => {
        setName('Amos Nganbe')
    }

    const increamentAge = () => {
        setAge(age + 1)
    }
  return (
   <>
    <div>
        <p>My name is {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>My age is {age}</p>
        <button onClick={increamentAge}>Increament Age</button>
    </div>
   </>
  )
}

export default MyComponent