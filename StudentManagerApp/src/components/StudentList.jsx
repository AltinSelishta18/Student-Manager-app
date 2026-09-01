import { StudentContext } from "../context/StudentContext"
import { useContext } from "react"
import StudentCard from "./StudentCard";
function StudentList() {
    const {students} = useContext(StudentContext);

    return(
        <>
            {students.map(student => (
              <StudentCard student={student} key={student.id}/>
            ))}
        </>
    )
}

export default StudentList