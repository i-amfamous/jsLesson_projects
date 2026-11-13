import './Students.css'
import PropType from 'prop-types'
const Student = (
    { 
        name = "Unknown",
         age = 0,
          isStudent = true 
        }
    ) => {

  return (
<>
    <div className="student">
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
</>
  )
}

Student.propTypes = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.bool
}

export default Student